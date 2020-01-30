interface Ok<V> {
    tag: "ok"
    value: V
}

interface Failure<F> {
    tag: "failure"
    failure: F
}

type Result<V,F> = Ok<V> | Failure<F>

function map<A,B,C>(r: Result<A,B>, f: (a: A) => C) : Result<C,B> {
    switch(r.tag) {
        case "ok":
            return { tag: "ok", value: f(r.value) };
        case "failure":
            return { tag: "failure", failure: r.failure };
    }
}

const foo: Result<string, Error> = { tag: "ok", value: "Foo"};
const bar = map(foo, (a) => "Bar");
const failure: Result<string, Error> = { tag: "failure", failure: new Error("Failed!") };
const alsoFailure = map(failure, (a) => "Bar");
if (alsoFailure.tag == "failure") {
    console.log(alsoFailure.failure.message);
}