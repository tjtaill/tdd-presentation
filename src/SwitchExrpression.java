enum IntOption {
    SOME(5),
    NONE(null);

    private final Integer value;

    IntOption() {
        this.value = null;
    }

    IntOption(Integer value) {
        this.value = value;
    }

    public Integer value() {
        return this.value;
    }
}

class SwitchExpression {

}