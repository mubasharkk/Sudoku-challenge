
class Cell {

    constructor(row, col, boxId, value = null, canAssign = true) {
        this._column = col;
        this._row = row;
        this._boxId = boxId;
        this._value = value;
        this._canAssign = canAssign;
        this._possibilities = [];
    }

    value(val) {
        return this._value = (val === undefined) ? this._value : val;
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

    getFirstPossibleValue() {
        return this._possibilities[0];
    }

    isEmpty() {
        return this.value() === null || this.value() === '';
    }
}

export default Cell;
