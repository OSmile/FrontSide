window.onload = function() {
    var saveBtn = document.getElementById('save');
    if (saveBtn) {
        saveBtn.addEventListener("click", function() {
            var name = document.getElementById('name').value;
            var country = document.getElementById('country').value;
            var city = document.getElementById('city').value;
            console.log(name + " " + country + " " + city)

            alert("Вы успешно сменили информацию")
        })
    }
}