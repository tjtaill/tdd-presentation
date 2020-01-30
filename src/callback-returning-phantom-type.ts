type CallbackCalled = { _brand: string };

interface Callback {
    (err?: Error | null): CallbackCalled;
}

function cb() : CallbackCalled {
    return <CallbackCalled>{};
}

function foo(callback : Callback) : CallbackCalled {
    // return callback();
}