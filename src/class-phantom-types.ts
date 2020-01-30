export interface Unit { _unitBrand: any };
export interface Meters extends Unit { _metersBrand: any };
export interface Feet extends Unit { _feetBrand: any };

export class Quantity<U extends Unit> {
    private _quantityBrand: U;
    value : number;
    constructor(value : number) {
        this.value = value;
        this._quantityBrand = <U>{};
    }

    add(quantity : Quantity<U>) {
        return new Quantity<U>(this.value + quantity.value);
    }
}

let m1 = new Quantity<Meters>(1);
const m2 = new Quantity<Meters>(5);
const f1 = new Quantity<Feet>(42);
const m3 = m1.add(m2);
const m4 = m1.add(f1); // doesn't compile