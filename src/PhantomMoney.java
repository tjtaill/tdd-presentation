interface Currency {};
interface Usd extends Currency {};
interface Cdn extends Currency {};

class Money<C extends Currency> {
    private final long cents;

    Money(long cents) { this.cents = cents; }
    long value() { return this.cents; }
    Money<C> add(Money<C> other) {
        return new Money<>(this.value() + other.value());
    }
}

class PhantomMoney {
    public static void main(String[] args) {
        var m1 = new Money<Usd>(500);
        var m2 = new Money<Cdn>(200);
        var m3 = new Money<Cdn>(1000);
        var m4 = m3.add(m2); // works java
        // var m5 = m1.add(m2); // won't compile
    }
}