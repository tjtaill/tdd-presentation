"use strict";
exports.__esModule = true;
var EmailValidator = require("email-validator");
var EmailAddress = /** @class */ (function () {
    function EmailAddress(value) {
        if (!EmailValidator.validate(value)) {
            throw new Error("Invalid email address");
        }
        ;
        this.value = value;
    }
    return EmailAddress;
}());
// here the question should I do defensive programming
// and validate them email address a.k.a fail slowly error
// will be reported further from where it happened.
function sendEmail1(emailAddress, email) {
}
// Here it is known that the email address is valid, could use
// PhantomTypes too. This is fali fast error is reported closer to
// where it actually happened
function sendEmail2(emailAddress, email) {
}
