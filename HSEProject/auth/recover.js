window.onload = function() {
    var email = document.getElementById("email")
    var btn = document.getElementById("btn")

    btn.addEventListener("click", function() {
        if (email) alert("Password sended!")
    })
}