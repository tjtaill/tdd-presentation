import io.vavr.control.Try;

class Result {
    public static void main(String[] args) {
        var foo = Try.of(() -> "Foo");
        var bar = foo.map((a) -> "Bar");
        var err = Try.of(() -> { throw new RuntimeException("failure"); });
        err
            .map((a) -> "Bar")
            .orElseRun(System.out::println);
    }
}