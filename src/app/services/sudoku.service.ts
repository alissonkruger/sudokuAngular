import { Injectable } from '@angular/core';
import { sudoku } from "../../assets/sudoku.js";

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  constructor() { }

  // Gero novo jogo Sudoku

  public newSudokuGame(difficulty){
    var game;
    if(difficulty != 0){
      game = sudoku.generate(difficulty);
    }
    else{
      game = '.................................................................................';
    }
    return {
      'array': this.gameArrayOrder(game.split('')),
      'string': game
    };
  }

  // Testo unidade nas regras Sudoku

  public ruleTests(place, unit, game){
    var ret = false;
    if(this.horizontalRules(place, unit, game)){
      ret = true;
    }
    if(this.verticalRules(place, unit, game)){
      ret = true;
    }
    if(this.frameRules(place, unit, game)){
      ret = true;
    }
    return ret;
  }

  // Soluciona jogo Sudoku

  public gameSolution(game){
    try{
      return this.gameArrayOrder(sudoku.solve(game).split(''));
    }
    catch{
      return false;
    }
  }

  // Converto array padrão para array de implementação nos quadros do Sudoku

  private gameArrayOrder(game){
    var gameOrder = [];

    for (let index = 0; index < game.length; index++) {
      if(game[index] == '.'){
        game[index] = '';
      }
    }

    gameOrder[0] = [];
    gameOrder[0][0] = game[0];
    gameOrder[0][1] = game[1];
    gameOrder[0][2] = game[2];
    gameOrder[0][3] = game[9];
    gameOrder[0][4] = game[10];
    gameOrder[0][5] = game[11];
    gameOrder[0][6] = game[18];
    gameOrder[0][7] = game[19];
    gameOrder[0][8] = game[20];

    gameOrder[1] = [];
    gameOrder[1][0] = game[3];
    gameOrder[1][1] = game[4];
    gameOrder[1][2] = game[5];
    gameOrder[1][3] = game[12];
    gameOrder[1][4] = game[13];
    gameOrder[1][5] = game[14];
    gameOrder[1][6] = game[21];
    gameOrder[1][7] = game[22];
    gameOrder[1][8] = game[23];

    gameOrder[2] = [];
    gameOrder[2][0] = game[6];
    gameOrder[2][1] = game[7];
    gameOrder[2][2] = game[8];
    gameOrder[2][3] = game[15];
    gameOrder[2][4] = game[16];
    gameOrder[2][5] = game[17];
    gameOrder[2][6] = game[24];
    gameOrder[2][7] = game[25];
    gameOrder[2][8] = game[26];

    //---

    gameOrder[3] = [];
    gameOrder[3][0] = game[27];
    gameOrder[3][1] = game[28];
    gameOrder[3][2] = game[29];
    gameOrder[3][3] = game[36];
    gameOrder[3][4] = game[37];
    gameOrder[3][5] = game[38];
    gameOrder[3][6] = game[45];
    gameOrder[3][7] = game[46];
    gameOrder[3][8] = game[47];

    gameOrder[4] = [];
    gameOrder[4][0] = game[30];
    gameOrder[4][1] = game[31];
    gameOrder[4][2] = game[32];
    gameOrder[4][3] = game[39];
    gameOrder[4][4] = game[40];
    gameOrder[4][5] = game[41];
    gameOrder[4][6] = game[48];
    gameOrder[4][7] = game[49];
    gameOrder[4][8] = game[50];

    gameOrder[5] = [];
    gameOrder[5][0] = game[33];
    gameOrder[5][1] = game[34];
    gameOrder[5][2] = game[35];
    gameOrder[5][3] = game[42];
    gameOrder[5][4] = game[43];
    gameOrder[5][5] = game[44];
    gameOrder[5][6] = game[51];
    gameOrder[5][7] = game[52];
    gameOrder[5][8] = game[53];

    //---

    gameOrder[6] = [];
    gameOrder[6][0] = game[54];
    gameOrder[6][1] = game[55];
    gameOrder[6][2] = game[56];
    gameOrder[6][3] = game[63];
    gameOrder[6][4] = game[64];
    gameOrder[6][5] = game[65];
    gameOrder[6][6] = game[72];
    gameOrder[6][7] = game[73];
    gameOrder[6][8] = game[74];

    gameOrder[7] = [];
    gameOrder[7][0] = game[57];
    gameOrder[7][1] = game[58];
    gameOrder[7][2] = game[59];
    gameOrder[7][3] = game[66];
    gameOrder[7][4] = game[67];
    gameOrder[7][5] = game[68];
    gameOrder[7][6] = game[75];
    gameOrder[7][7] = game[76];
    gameOrder[7][8] = game[77];

    gameOrder[8] = [];
    gameOrder[8][0] = game[60];
    gameOrder[8][1] = game[61];
    gameOrder[8][2] = game[62];
    gameOrder[8][3] = game[69];
    gameOrder[8][4] = game[70];
    gameOrder[8][5] = game[71];
    gameOrder[8][6] = game[78];
    gameOrder[8][7] = game[79];
    gameOrder[8][8] = game[80];

    return gameOrder;

  }

  // Teste Horizontal de regras Sudoku

  private horizontalRules(place, unit, game){
    var PlaceInit;
    var PlaceEnd;
    if(place == 0 || place == 1 || place == 2){
      PlaceInit = 0;
      PlaceEnd = 2;
    }
    if(place == 3 || place == 4 || place == 5){
      PlaceInit = 3;
      PlaceEnd = 5;
    }
    if(place == 6 || place == 7 || place == 8){
      PlaceInit = 6;
      PlaceEnd = 8;
    }
    var UnitInit;
    var UnitEnd;
    if(unit == 0 || unit == 1 || unit == 2){
      UnitInit = 0;
      UnitEnd = 2;
    }
    if(unit == 3 || unit == 4 || unit == 5){
      UnitInit = 3;
      UnitEnd = 5;
    }
    if(unit == 6 || unit == 7 || unit == 8){
      UnitInit = 6;
      UnitEnd = 8;
    }
    for (let placeKey = PlaceInit; placeKey <= PlaceEnd; placeKey++) {
      if(place != placeKey){
        for (let unitKey = UnitInit; unitKey <= UnitEnd; unitKey++) {
          if(game[place][unit] == game[placeKey][unitKey]){
            return true;
          }
        }
      }
    }
  }

  // Teste Vertical de regras Sudoku

  private verticalRules(place, unit, game){
    var PlaceLoop;
    if(place == 0 || place == 3 || place == 6){
      PlaceLoop = [0,3,6];
    }
    if(place == 1 || place == 4 || place == 7){
      PlaceLoop = [1,4,7];
    }
    if(place == 2 || place == 5 || place == 8){
      PlaceLoop = [2,5,8];
    }
    var UnitLoop;
    if(unit == 0 || unit == 3 || unit == 6){
      UnitLoop = [0,3,6];
    }
    if(unit == 1 || unit == 4 || unit == 7){
      UnitLoop = [1,4,7];
    }
    if(unit == 2 || unit == 5 || unit == 8){
      UnitLoop = [2,5,8];
    }
    for (let index = 0; index <= 2; index++) {
      var placeKey = PlaceLoop[index];
      if(place != placeKey){
        for (let index2 = 0; index2 <= 2; index2++) {
          var unitKey = UnitLoop[index2];
          if(game[place][unit] == game[placeKey][unitKey]){
            return true;
          }
        }
      }
    }
  }

  // Testa Quadro de regras Sudoku

  private frameRules(place, unit, game){
    for (let unitKey = 0; unitKey < game[place].length; unitKey++) {
      if(unit != unitKey){
        if(game[place][unit] == game[place][unitKey]){
          return true;
        }
      }
    }
  }

}
