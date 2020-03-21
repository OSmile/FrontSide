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

    var ul = document.getElementById('achive');
    var docfrag = document.createElement("div")

    var btn = document.getElementById('button_achive')
    if (btn != 0) {
        btn.addEventListener("click", function() {
            this.parentElement.removeChild(this);

            var div = document.createElement("div");
            div.className = "col-sm-3 field";
            div.style = "margin-left: 70px;";
            //div.style.position = "relative";
            //div.style.marginTop = "20px";
            div.innerHTML = '<div class="col-sm-3"><img src="../src/bathroom.svg" alt="img" width="30" style="margin-top: -10px"></div><div class="col-sm-9"><p>Достичь 40 уровня</p></div>'
            docfrag.appendChild(div);
            var div = document.createElement("div");
            div.className = "col-sm-3 field";
            div.innerHTML = '<div class="col-sm-3"><img src="../src/bathroom.svg" alt="img" width="30" style="margin-top: -10px"></div><div class="col-sm-9"><p>Достичь 50 уровня</p></div>'
            docfrag.appendChild(div);
            var div = document.createElement("div");
            div.className = "col-sm-3 field";
            div.innerHTML = '<div class="col-sm-3"><img src="../src/bathroom.svg" alt="img" width="30" style="margin-top: -10px"></div><div class="col-sm-9"><p>Достичь 60 уровня</p></div>'
            docfrag.appendChild(div);

            var div = document.createElement("div");
            div.className = "col-sm-3 field";
            div.style = "margin-left: 70px;";
            div.innerHTML = '<div class="col-sm-3"><img src="../src/bathroom.svg" alt="img" width="30" style="margin-top: -10px"></div><div class="col-sm-9"><p>Закончить первую главу</p></div>'
            docfrag.appendChild(div);
            var div = document.createElement("div");
            div.className = "col-sm-3 field";
            div.innerHTML = '<div class="col-sm-3"><img src="../src/bathroom.svg" alt="img" width="30" style="margin-top: -10px"></div><div class="col-sm-9"><p>Закончить вторую главу</p></div>'
            docfrag.appendChild(div);
            var div = document.createElement("div");
            div.className = "col-sm-3 field";
            div.innerHTML = '<div class="col-sm-3"><img src="../src/bathroom.svg" alt="img" width="30" style="margin-top: -10px"></div><div class="col-sm-9"><p>Закончить третью главу</p></div>'
            docfrag.appendChild(div);

        })
        ul.appendChild(docfrag)
    }
}