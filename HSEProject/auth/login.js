window.onload = function() {
    let btn = document.getElementById("btn")

    btn.addEventListener("click", () => {
        let login = document.getElementById("login").value
        let pass = document.getElementById("password").value
        let url = new this.URL("http://localhost:5000/user")
        url.search = new this.URLSearchParams({
            'login': login,
            'password': pass
        })
        this.fetch(url)
            .then(res => res.json())
                .then(
                    (result) => {
                        this.alert(result)
                    }
                )
    })
}