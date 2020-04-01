window.onload = function() {
    var email = document.getElementById("email")
    var pass = document.getElementById("password")
    var btn = document.getElementById("btn")

    btn.addEventListener("click", () => {
        this.alert("login")
        this.fetch("http://localhost:5000/debug")
            .then(res => res.json())
                .then(
                    (result) => {
                        this.console.log(result)
                        this.alert(window.localStorage.getItem("login"))
                    }
                )
    })
}