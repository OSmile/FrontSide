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

    var tasks = document.getElementById('tasks');
    var docfrag = document.createElement("div")

    var btn = document.getElementById('btn_more')
    if (btn != 0) {
        btn.addEventListener("click", function() {
            this.parentElement.removeChild(this);

            var div = document.createElement("div");
            div.className = "col-sm-3 field";

            div.innerHTML = `<p>Задача 7</p>
            <a href="#" class="title">Условия</a>
            <p>Обработка флага <br>Анализ результата</p>
            <button class="opener" onclick="window.location.href='../tasks/tasks_syntax_pro/task1.html'">Доступна</button>
            <p>1 уровень, 1 лекция</p>`
            docfrag.appendChild(div);

            var div = document.createElement("div");
            div.className = "col-sm-3 field";

            div.innerHTML = `<p>Задача 8</p>
            <a href="#" class="title">Условия. Продолжение</a>
            <p>Ввод значений с клавиатуры <br>Проверка значений на правильность <br>Использование условий</p>
            <button class="opener" onclick="window.location.href='../tasks/tasks_syntax_pro/task2.html'">Доступна</button>
            <p>1 уровень, 2 лекция</p>`
            docfrag.appendChild(div);

            var div = document.createElement("div");
            div.className = "col-sm-3 field";

            div.innerHTML = `<p>Задача 9</p>
            <a href="#" class="title">Условия. Оператор switch</a>
            <p>Switch <br>Задача на дни недели</p>
            <button class="opener" onclick="window.location.href='../tasks/tasks_syntax_pro/task3.html'">Доступна</button>
            <p>1 уровень, 3 лекция</p>`
            docfrag.appendChild(div);

            var div = document.createElement("div");
            div.className = "col-sm-3 field";

            div.innerHTML = `<p><a href="#">nickname</a> 28 января 2020 года</p>
            <a href="#" class="title">Обучение программированию на Java. Уроки с нуля</a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem obcaecati exercitationem praesentium natus dolorem vitae velit provident amet aliquid a perferendis, veniam eveniet ipsam. At possimus odit ratione. Illo, sapiente.</p>
            <!-- <button class="close">Недоступна</button> -->
            <button class="closer">Недоступна</button>
            <p>0 уровень, 0 лекция</p>`
            docfrag.appendChild(div);


        })
        tasks.appendChild(docfrag)
    }
}