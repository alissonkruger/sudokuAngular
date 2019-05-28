import { Component } from '@angular/core';
import { SudokuService } from "./services/sudoku.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public places = [];       // Array para preenchimento e comparação de jogo
  public printPlaces = [];  // Array para impressão inicial de jogo
  public gameString = '';   // Jogo em formato String para solução

  constructor(private sudokuService: SudokuService){
    
  }

  // Novo Jogo

  newGame(difficulty){
    var newSudoku = this.sudokuService.newSudokuGame(difficulty);
    this.gameString = newSudoku['string'];
    for (let i = 0; i < newSudoku['array'].length; i++) {
      this.places[i] = [];
      this.printPlaces[i] = [];
      for (let ii = 0; ii < newSudoku['array'][i].length; ii++) {
        this.places[i][ii] = newSudoku['array'][i][ii];
        this.printPlaces[i][ii] = newSudoku['array'][i][ii];
      }
    }
  }

  // Testo regras na unidade preenchida

  rules(placeKey, unitKey){
    return this.sudokuService.ruleTests(placeKey, unitKey, this.places);
  }

  // Verifica se terminou jogo

  finishHim(){
    var ret = false;
    for (let placeKey = 0; placeKey < this.places.length; placeKey++) {
      for (let unitKey = 0; unitKey < this.places[placeKey].length; unitKey++) {
        if(this.places[placeKey][unitKey] == ""){
          ret = true;
        }
        else{
          if(this.rules(placeKey, unitKey)){
            ret = true;
          }
        }
        if(placeKey+1 == this.places.length){
          if(unitKey+1 == this.places[placeKey].length){
            if(!ret){
              alert('Finish Him!!!')
            }
          }
        }
      }
    }
  }

  // Soluciona Sudoku

  solution(){
    var solved = this.sudokuService.gameSolution(this.gameString);
    if(!solved){
      alert('Precisa preencher no mínimo 17 números!');
    }
    else{
      this.places = solved;
    }
  }

}
