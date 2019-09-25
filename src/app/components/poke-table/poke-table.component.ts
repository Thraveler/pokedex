import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

import { PokemonService } from "../../services/pokemon.service";
import { Pokemon } from "../../models/pokemon";

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {
  isTableVisible: boolean = true
  pokemonSelected: Pokemon[] = null
  data: Pokemon[] = []
  displayedColumns: string[] = ['select', 'name'];
  selection = new SelectionModel<Pokemon>(true, [])
  dataSource = new MatTableDataSource<Pokemon>(this.data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getPokemon();
  }

  /** Get pokedata */
  getPokemon() {
    this.pokemonService.getPokemons().subscribe(result => {
      this.data = result.results
      this.dataSource.data = this.data
    });
  }

  getPokeDetails() {
    this.selection.selected.forEach((pokemon, i) => {
      this.pokemonService.getPokemonetails(pokemon.name).subscribe(pokeDetails => {
        this.selection.selected[i].details = pokeDetails
        this.pokemonSelected = this.selection.selected
      });
    });
  }

  /** Filer function */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Table functions */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = 10;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        null;
  }

  resetSelected() {
    this.pokemonSelected = null;
    this.selection.clear();
  }

  checkLimit($event, row) {
    if(this.isAllSelected()) {
      $event.checked = false;
      $event.source.checked = false;
    } else {
      $event.checked = true;
      $event.source.checked = true;
      this.selection.toggle(row);
    }
  }

}
