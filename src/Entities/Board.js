import Cell from './Cell';

class Board {

    constructor(data) {
        this._rows = data.length;
        this._cols = data[0].length;
        this._grid = this._createCells(data);
    }

    _createCells(data) {
        let _grid = [];
        for(let row in data){
            for(let col in data[row]) {
                let value = data[row][col];
                _grid.push(
                    new Cell(row, col, this._getBoxId(row, col), value, value == null)
                );
            }
        }
        return _grid;
    }

    _getBoxId(row, col) {
        return row + 'x' + col;
    }

    findPossibilities() {
        let self = this;
        this._grid.forEach(cell => {
            let possibleValues = [1, 2, 3, 4];
            if(cell.isEmpty()) {
                this._grid.forEach(cellCompare => {
                    if (cellCompare.row() === cell.row() || cell.column() == cellCompare.column()) {
                        possibleValues = possibleValues.filter(x => cellCompare.getValue() !== x);
                    }
                });

                if(possibleValues.length > 1) {
                    cell.addPossibility(possibleValues);
                } else {
                    cell.setValue(possibleValues[0]);
                    this.findPossibilities();
                }
            }
        });
    }

    output() {
        console.log(this._grid);
    }
}


export default Board;
