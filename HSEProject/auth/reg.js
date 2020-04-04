window.onload = function() {
    var email = document.getElementById("email")
    var pass = document.getElementById("password")
    var btn = document.getElementById("reg")

    btn.addEventListener("click", function() {
        alert(email)
        alert(pass)
    })
}