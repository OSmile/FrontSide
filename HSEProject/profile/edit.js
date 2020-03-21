window.onload = function() {
    var list = document.getElementById('list');
    var head = document.getElementById('head');
    var div_menu = document.createElement("div")
    var click = true;

    if (list) {
        list.addEventListener("click", function() {
            var div = document.createElement("div");
            if (click) {

                div.className = 'class="row"';

                div.innerHTML = `<div class="col-sm-10"></div>
            <div class="col-sm-2 ros">
                <ul>
                    <li><a href="../course/map.html">Курс</a></li>
                    <li><a href="../tasks/tasks.html">Задачи</a></li>
                    <li><a href="../questions/all.html">Помощь</a></li>
                    <li><a href="../success/success.html">Истории успеха</a></li>
                    <li><a href="../articles/articles.html">Статьи</a></li>
                </ul>
            </div>`
                div_menu.appendChild(div);
                click = false;
            } else {
                div_menu.removeChild(div_menu.lastChild);
                click = true;
            }
        })
        head.appendChild(div_menu)
    }

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