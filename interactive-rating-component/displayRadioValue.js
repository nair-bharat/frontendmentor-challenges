function displayRadioValue() {
    var ele = document.getElementsByName('radioRating');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById("result").innerHTML
                = "You selected " + ele[i].value + " out of 5";
    }
}
