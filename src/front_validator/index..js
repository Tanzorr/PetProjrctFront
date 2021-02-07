const Errors = [];

export let chekPassword = (pass1, pass2) => {
    if (pass1 !== pass2) {
        Errors.push("Password not equal");
        return
    } else if (pass1.lenght < 5) {
        Errors.push("Password have to have more then 5 letters");
        return;
    }
}

export default Errors;