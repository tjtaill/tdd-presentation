type Currency<T> = number & { _currencyBrand: T };

function sum<T>( a1 : Currency<T>, a2: Currency<T>) : Currency<T> {
    return (a1 + a2) as Currency<T>
}

type USD = Currency<"USD">;
type CDN = Currency<"CDN">;
type GBP = Currency<"GBP">;

const usd = 10 as USD;
const cdn = 10 as CDN;
const gbp = 10 as GBP;

const n : USD = cdn; // this rightfully doesn't compile

sum(usd, usd); // ok
sum(cdn, usd); // compiles but you don't want it to

function add(a1: USD, a2: USD) : USD {
    return (a1 + a2) as USD;
}

add(usd, usd); // ok
add(cdn, usd); // doesn't type check
