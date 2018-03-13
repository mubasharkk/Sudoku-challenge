'use strict';

import Board from './src/Entities/Board';

let data = require('./data.json');

//console.log(data);
let Sudoku = new Board(data['4x4']);

Sudoku.findPossibilities();

Sudoku.output();