function verify()
{
    var x = document.getElementById("x_81ver");
    var y = document.getElementById("w12_xx");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }

    confirm();
}

function confirm()
{
    var login = document.getElementById("login");
    setTimeout(
        function() {
            document.getElementById("overlay").style.display = "block";
            login.play();
        }, 2350);
}