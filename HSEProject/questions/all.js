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

    var ul = document.getElementById('que');
    var docfrag = document.createElement("div")

    var btn = document.getElementById('button')
    if (btn != 0) {
        btn.addEventListener("click", function() {
            this.parentElement.removeChild(this);

            var div = document.createElement("div");
            div.className = "col-sm-11 field";

            //div.style.position = "relative";
            //div.style.marginTop = "20px";
            div.innerHTML = `<p><a href="#">nickname</a> 28 января 2020 года</p>
            <a href="#" class="title">Обучение программированию на Java. Уроки с нуля</a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem obcaecati exercitationem praesentium natus dolorem vitae velit provident amet aliquid a perferendis, veniam eveniet ipsam. At possimus odit ratione. Illo, sapiente.</p>
            <p><img src="../src/heart.svg" width="14" alt="like" style="margin-right: 3px;"><span>333</span><img src="../src/comment.svg" width="14" style="margin-right: 3px; margin-left: 4px;" alt="comment"><span>333</span></p>`
            docfrag.appendChild(div);

            var div = document.createElement("div");
            div.className = "col-sm-11 field";
            div.innerHTML = `<p><a href="#">nickname</a> 28 января 2020 года</p>
            <a href="#" class="title">Обучение программированию на Java. Уроки с нуля</a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem obcaecati exercitationem praesentium natus dolorem vitae velit provident amet aliquid a perferendis, veniam eveniet ipsam. At possimus odit ratione. Illo, sapiente.</p>
            <p><img src="../src/heart.svg" width="14" alt="like" style="margin-right: 3px;"><span>333</span><img src="../src/comment.svg" width="14" style="margin-right: 3px; margin-left: 4px;" alt="comment"><span>333</span></p>`
            docfrag.appendChild(div);

            var div = document.createElement("div");
            div.className = "col-sm-11 field";
            div.innerHTML = `<p><a href="#">nickname</a> 28 января 2020 года</p>
            <a href="#" class="title">Обучение программированию на Java. Уроки с нуля</a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem obcaecati exercitationem praesentium natus dolorem vitae velit provident amet aliquid a perferendis, veniam eveniet ipsam. At possimus odit ratione. Illo, sapiente.</p>
            <p><img src="../src/heart.svg" width="14" alt="like" style="margin-right: 3px;"><span>333</span><img src="../src/comment.svg" width="14" style="margin-right: 3px; margin-left: 4px;" alt="comment"><span>333</span></p>`
            docfrag.appendChild(div);

            var div = document.createElement("div");
            div.className = "col-sm-11 field";
            div.innerHTML = `<p><a href="#">nickname</a> 28 января 2020 года</p>
            <a href="#" class="title">Обучение программированию на Java. Уроки с нуля</a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem obcaecati exercitationem praesentium natus dolorem vitae velit provident amet aliquid a perferendis, veniam eveniet ipsam. At possimus odit ratione. Illo, sapiente.</p>
            <p><img src="../src/heart.svg" width="14" alt="like" style="margin-right: 3px;"><span>333</span><img src="../src/comment.svg" width="14" style="margin-right: 3px; margin-left: 4px;" alt="comment"><span>333</span></p>`
            docfrag.appendChild(div);

            var div = document.createElement("div");
            div.className = "col-sm-11 field";
            div.innerHTML = `<p><a href="#">nickname</a> 28 января 2020 года</p>
            <a href="#" class="title">Обучение программированию на Java. Уроки с нуля</a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem obcaecati exercitationem praesentium natus dolorem vitae velit provident amet aliquid a perferendis, veniam eveniet ipsam. At possimus odit ratione. Illo, sapiente.</p>
            <p><img src="../src/heart.svg" width="14" alt="like" style="margin-right: 3px;"><span>333</span><img src="../src/comment.svg" width="14" style="margin-right: 3px; margin-left: 4px;" alt="comment"><span>333</span></p>`
            docfrag.appendChild(div);

            var div = document.createElement("div");
            div.className = "col-sm-11 field";
            div.innerHTML = `<p><a href="#">nickname</a> 28 января 2020 года</p>
            <a href="#" class="title">Обучение программированию на Java. Уроки с нуля</a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem obcaecati exercitationem praesentium natus dolorem vitae velit provident amet aliquid a perferendis, veniam eveniet ipsam. At possimus odit ratione. Illo, sapiente.</p>
            <p><img src="../src/heart.svg" width="14" alt="like" style="margin-right: 3px;"><span>333</span><img src="../src/comment.svg" width="14" style="margin-right: 3px; margin-left: 4px;" alt="comment"><span>333</span></p>`
            docfrag.appendChild(div);

        })
        ul.appendChild(docfrag)
    }
}