window.onload = function() {
    let login = this.document.getElementById("login").value
    let email = this.document.getElementById("email").value
    let name = this.document.getElementById("name").value
    let pass = this.document.getElementById("password").value
    let btn = this.document.getElementById("reg")

    btn.addEventListener("click", () => {
        this.fetch("http://localhost:5000/user",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: this.JSON.stringify({
                'login': login,
                'eMail': email,
                'name': name,
                'password': pass
            })
        })
            .then(res => res.json())
                .then(
                    (result) => {
                        this.alert("OK. Now you can login.")
                    }
                )
    })
}