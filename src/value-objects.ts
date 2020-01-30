import * as EmailValidator from 'email-validator';

class EmailAddress {
    readonly value: string;

    constructor(value: string) {
        if (!EmailValidator.validate(value)){
            throw new Error("Invalid email address");
        };
        this.value = value;
    }
}

// here the question should I do defensive programming
// and validate them email address a.k.a fail slowly error
// will be reported further from where it happened.
function sendEmail1(emailAddress: string, email: string) {
}

// Here it is known that the email address is valid, could use
// PhantomTypes too. This is fali fast error is reported closer to
// where it actually happened
function sendEmail2(emailAddress: EmailAddress, email: string) {
}