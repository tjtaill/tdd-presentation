import java.util.function.Function;

enum ResultState {
    OK,
    ERROR
}

class Result<V> {
    final V value;
    final Throwable error;
    final ResultState state;

    Result(V value, Throwable error, ResultState state) {
        this.value = value;
        this.error = error;
        this.state = state;
    }

    static <V> Result<V> of(V value) {
        return new Result<>(value, null, ResultState.OK);
    }

    // new switch expression standard in java 14
    // is exhaustive unlike regular switch
    <W> Result<W> map(Function<V,W> func) {
        return switch(this.state) {
                case OK -> Result.of(func.apply(this.value));
                case ERROR -> new Result<>(null, this.error, ResultState.ERROR);
            };
    }
}

class SwitchExpression {
    public static void main(String[] args) {
        var foo = Result.of("Foo");
        var bar = foo.map((a) -> "Bar");
        var err = new Result<String>(null, new RuntimeException("error"), ResultState.ERROR);
        var alsoErr = err.map((a) -> "Bar");
    }
}