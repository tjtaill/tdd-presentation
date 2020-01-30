import java.util.Optional;

class Optionals {
    public static void main(String[] args) {
        var foo = Optional.of("Foo");
        String nil = null;
        var none = Optional.ofNullable(nil);
        var bar = foo.map((a) -> "Bar");
        var alsoNone = none.map((a) -> "Bar");
        System.out.println(alsoNone.isEmpty());
    }
}