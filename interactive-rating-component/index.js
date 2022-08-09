function switchVisible() {
    if (document.getElementById('rating-state__container__div1')) {

        if (document.getElementById('rating-state__container__div1').style.display == 'none') {
            document.getElementById('rating-state__container__div1').style.display = 'block';
            document.getElementById('rating-state__container__div2').style.display = 'none';
        }
        else {
            var ele = document.getElementsByName('radioRating');
            
                for (i = 0; i < ele.length; i++) {
                    if (ele[i].checked)
                        document.getElementById("result").innerHTML
                            = "You selected " + ele[i].value + " out of 5";
                }
            document.getElementById('rating-state__container__div1').style.display = 'none';
            document.getElementById('rating-state__container__div2').style.display = 'block';
        }
    }
}


