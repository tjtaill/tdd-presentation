interface ResponseEndCalled {}

interface Response {
    default ResponseEndCalled end(){ return new ResponseEndCalled() {}; }
}

interface Handler {
    public ResponseEndCalled handle(Response resp);
}

interface Route {
    default void handler(Handler handler) {};
}

interface Router {
    default Route route(String path) { return new Route(){}; }
}

class PhantomCallbacks {
    public static void main(String[] args) {
        Router router = new Router(){};
        router.route("/").handler((Response response) -> {
            // will not compile without this
            return response.end();
        });
    }
}