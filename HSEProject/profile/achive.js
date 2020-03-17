window.onload = function() {
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