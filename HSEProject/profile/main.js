window.onload = function() {
    var list = document.getElementById('list');
    var head = document.getElementById('head');
    var div_menu = document.createElement("div")
    var click = true;

    if (list) {
        list.addEventListener("click", function() {
            if (click) {
                var div = document.createElement("div");
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
                click = false
            }
        })
        head.appendChild(div_menu)
    }

    var comments = document.getElementById('comments');
    var name = document.getElementById('name');

    var docfrag = document.createElement("div")

    var btn = document.getElementById('btn')
    if (btn != 0) {
        btn.addEventListener("click", function() {
            var inp = document.getElementById('inputText').value;
            if (inp) {
                var div = document.createElement("div");
                div.className = "rowe";
                comments.style.height = 50 + Number(getComputedStyle(comments).height.slice(0, -2)) + 'px'

                div.innerHTML = `<div class="col-sm-1">
                <a href="#"><img src="../src/8c125dbdf1808dd9e322e2d294bd7303.png" width="50" alt="ava"></a>
            </div>
            <div class="col-sm-11">
                <div class="row">
                  <p><a href="#">Евгений</a></p>
                </div>
                <p>` + inp + `</p>
                <div class="row">
                    <div class="col-sm-6">
                        <a href="#">ответить</a>
                    </div>
                    <div class="col-sm-6 rating">
                        <a href="#"><img src="../src/more.svg" width="10" alt="plus"></a>
                           <span>0</span>
                        <a href="#"><img src="../src/less.svg" width="10" alt="minus"></a>
                    </div>
                </div>
            </div>`;
                inp.value = "";
                docfrag.appendChild(div);
            }
        })
        comments.appendChild(docfrag)

    }
}