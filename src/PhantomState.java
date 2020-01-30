interface Received {}
interface Validated {}
interface Sanitized {}

class Data<K, S> {
    private final K data;
    Data(K data) { this.data = data; }
    K value() { return data; }
}

class PhantomState {
    public static <K> Data<K, Received> received(K data) {
        return new Data<K, Received>(data);
    }

    public static <K> Data<K, Validated> validate(Data<K, Received> data) {
        return new Data<K, Validated>(data.value());
    }

    public static <K> Data<K, Sanitized> sanitized(Data<K, Validated> data) {
        return new Data<K, Sanitized>(data.value());
    }

    public static void main(String[] args) {
        var r = received(5);
        var v = validate(r);
        var s = sanitized(r); // won't compile
    }
}