'use strict';

import Board from './src/Entities/Board';

let data = require('./data.json');

//console.log(data);
let Sudoku = new Board(data['9x9']);

Sudoku.solve();

Sudoku.output();