type Data<K, T> = K & { _dataBrand: T };

type Received<K> = Data<K, "RECIEVED">;
type Validated<K> = Data<K, "VALIDATED">;

function receive<K>(data : K) : Received<K> {
    return data as Received<K>;
}

function validate<K>(data : Received<K>) : Validated<K> {
    return <Validated<K>>{};
}

const num : number = 5;
const r = receive(n);
const v = validate(r);
validate(num); // this rightly doesn't type check