window.onload = function() {
    var ul = document.getElementById('articles');
    var docfrag = document.createElement("div")

    var btn = document.getElementById('btn')
    if (btn != 0) {
        btn.addEventListener("click", function() {
            this.parentElement.removeChild(this);

            var div = document.createElement("div");
            div.className = "col-sm-11 field";

            div.innerHTML = `<p><a href="#">nickname</a> 28 января 2020 года</p>
            <a href="article1.html" class="title">Обучение программированию на Java. Уроки с нуля</a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem obcaecati exercitationem praesentium natus dolorem vitae velit provident amet aliquid a perferendis, veniam eveniet ipsam. At possimus odit ratione. Illo, sapiente.</p>
            <p><img src="../src/heart.svg" width="14" alt="like" style="margin-right: 3px;"><span>333</span><img src="../src/comment.svg" width="14" style="margin-right: 3px; margin-left: 4px;" alt="comment"><span>333</span></p>
            `
            docfrag.appendChild(div);

            var div = document.createElement("div");
            div.className = "col-sm-11 field";

            div.innerHTML = `<p><a href="#">nickname</a> 28 января 2020 года</p>
            <a href="article1.html" class="title">Обучение программированию на Java. Уроки с нуля</a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem obcaecati exercitationem praesentium natus dolorem vitae velit provident amet aliquid a perferendis, veniam eveniet ipsam. At possimus odit ratione. Illo, sapiente.</p>
            <p><img src="../src/heart.svg" width="14" alt="like" style="margin-right: 3px;"><span>333</span><img src="../src/comment.svg" width="14" style="margin-right: 3px; margin-left: 4px;" alt="comment"><span>333</span></p>
            `
            docfrag.appendChild(div);


        })
        ul.appendChild(docfrag)
    }
}