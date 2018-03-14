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
            if (cell.isEmpty()) {
                this._grid.forEach(comparedCell => {
                    if(this.eliminatePossibility(cell, comparedCell) && cell !== comparedCell) {
                        possibleValues = possibleValues.filter(x => comparedCell.getValue() !== x);
                    }
                });
                cell.addPossibility(possibleValues);
            }
        });
    }

    eliminatePossibility(cell, comparedCell) {
        if(comparedCell.isEmpty()) {
            return false;
        }

        if (cell.row() === comparedCell.row() ||
            cell.column() === comparedCell.column()  || cell.boxId() === comparedCell.boxId()
        ) {
            return true;
        }

        return false;
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
            grid[name].push(cell.getValue());
        });

        console.log(grid);
    }

    solve() {
        this.findPossibilities();

        this._grid.forEach(currentCell => {
            if (currentCell.isEmpty() && currentCell.canAssignValue()) {
                currentCell.setValue();
            }
        })

    }
}


export default Board;
