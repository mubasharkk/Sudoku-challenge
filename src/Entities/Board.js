import Cell from './Cell';

class Board {

    constructor(data) {
        this._rows = data.length;
        this._cols = data[0].length;
        this._grid = this._createCells(data);
    }

    _createCells(data) {
        let _grid = [];
        for (let row in data) {
            for (let col in data[row]) {
                let value = data[row][col];
                _grid.push(
                    new Cell(row, col, this._getBoxId(row, col), value, value == null)
                );
            }
        }
        return _grid;


    }

    _getBoxId(row, col) {
        return Math.floor(row/3) + 'x' + Math.floor(col/3);
    }

    findPossibilities() {
        let self = this;
        this._grid.forEach(cell => {
            let possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            if(cell.isEmpty()) {
                this._grid.forEach(comparedCell => {
                    if (this.isComparable(cell, comparedCell) && !comparedCell.isEmpty()) {
                        possibleValues = possibleValues.filter( x => comparedCell.value() !== x);
                    }
                });
                cell.addPossibility(possibleValues);
            }
        });
    }

    isComparable(cell, comparedCell) {
        return  comparedCell.row() === cell.row() ||
                comparedCell.column() === cell.column() ||
                comparedCell.boxId() === cell.boxId();
    }

    isCompleted() {
        for (let i in this._grid) {
            if (this._grid[i].isEmpty()) {
                return false;
            }
        }
        return true;
    }

    output() {
        let grid = [];
        this._grid.forEach(cell => {
            let name = 'R' + cell.row();
            if (grid[name] === undefined) {
                grid [name] = [];
            }
            grid[name].push(cell.value());
        });

        console.log(grid);
    }

    solve() {
        this.findPossibilities();

        this._grid.forEach(currentCell => {
            if (currentCell.isEmpty()) {
                currentCell.value(currentCell.getFirstPossibleValue());
                this.findPossibilities();
            }
        });
    }
}


export default Board;
