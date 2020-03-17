window.onload = function() {
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