
class Cell {

    constructor(row, col, boxId, value = null, canAssign = true) {
        this._column = col;
        this._row = row;
        this._boxId = boxId;
        this._value = value;
        this._canAssign = canAssign;
        this._possibilities = [];
    }

    getValue() {
        return this._value;
    }

    setValue(value) {
        this._value = value;
    }

    column() {
        return this._column;
    }

    row() {
        return this._row;
    }

    boxId() {
        return this._boxId;
    }

    canAssignValue() {
        return this._canAssign;
    }

    addPossibility(values) {
        this._possibilities = values;
    }

    getFirstPossibleValue(value) {
        this._possibilities.splice(this._possibilities.indexOf(value), 1);
    }

    isEmpty() {
        return this.getValue() === null || this.getValue() === '';
    }
}

export default Cell;
