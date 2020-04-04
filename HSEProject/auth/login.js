window.onload = function() {
    var email = document.getElementById("email")
    var pass = document.getElementById("password")
    var btn = document.getElementById("btn")

    btn.addEventListener("click", function() {
        if (email && pass) alert("OK!")
    })
}