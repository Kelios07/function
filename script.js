let userName = "Bogdan";

function showMessage() {
    userName = "Богдан";

    let message = 'Приветик,' + userName;
    alert(message);
}

showMessage();

alert(userName);