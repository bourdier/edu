let username = prompt("Username:", "");

if (username == tb) {

    let pass = prompt("Password:", "");

    if (pass == "azerty") {
        alert("Welcome!");
    } else if (pass == null || pass == "") {
        alert("Canceled.")
    } else {
        alert("Wrong password.")
    }
} else if (username == null || username == "" {
    alert("Canceled.")
} else {
    alert("Username not found.")
}