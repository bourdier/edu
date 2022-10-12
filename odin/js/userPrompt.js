let user = prompt("Username:", "");

if (user === "tb") {

    let pass = prompt("Password:", "");

    if (pass === "azerty") {
        alert("Welcome!");
    } else if (pass === null || pass === "") {
        alert("Canceled.");
    } else {
        alert("Wrong password.");
    }
} else if (user === null || user === "") {
    alert("Canceled.");
} else {
    alert("Username not found.");
}