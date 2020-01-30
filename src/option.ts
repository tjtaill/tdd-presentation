type Some<T> = { tag: "some", value: T };
type None = { tag: "none" };
type Option<T> = Some<T> | None;

const opt : Option<string> = { tag: "some", value: "Foo" };

// with strictNullChecks enabled and wraped in function
// with a return type that doesn't include undefined
// you can make a swith case be exhaustively checked
function map<A,B>(opt: Option<A>, f: (a: A) => B) : Option<B> {
    switch(opt.tag) {
        case "some":
            return { tag: "some", value: f(opt.value)};
        case "none":
            return { tag: "none" };
    }
}

function flatMap<A,B>(opt: Option<A>, f: (a: A) => Option<B>) : Option<B> {
    switch(opt.tag) {
        case "some":
            return f(opt.value);
        case "none":
            return { tag: "none" };
    }
}

const optBar: Option<string> = map({ tag: "some", value: "Foo" }, (a: string) => "Bar");