import java.time.ZonedDateTime;

class DateRange {
    final ZonedDateTime start;
    final ZonedDateTime end;

    DateRange(String start, String end) {
        var s = ZonedDateTime.parse(start);
        var e = ZonedDateTime.parse(end);
        if (!e.isAfter(s)) {
            throw new IllegalArgumentException("end must be after start");
        }
        this.start = s;
        this.end = e;
    }
}

class ValueObjects {
    public static void main(String[] args) {
    }
}