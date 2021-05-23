function initProductsView() {
    var url = "https://decomprasporlared.com/restapi/product/list/category/1/1/";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {


    var dataArray = JSON.parse(this.responseText);
    console.log(dataArray);

    var tabla = document.createElement("table");
    var tblHead = document.createElement("thead");
      var filaHead = document.createElement("tr");

            var celdaHead = document.createElement("td");
            var textoCeldaHead = document.createTextNode("IMAGEN");
            celdaHead.appendChild(textoCeldaHead);
            filaHead.appendChild(celdaHead);

            var celdaHead = document.createElement("td");
            var textoCeldaHead = document.createTextNode("CODIGO");
            celdaHead.appendChild(textoCeldaHead);
            filaHead.appendChild(celdaHead);

            var celdaHead = document.createElement("td");
            var textoCeldaHead = document.createTextNode("TITULO");
            celdaHead.appendChild(textoCeldaHead);
            filaHead.appendChild(celdaHead);

            var celdaHead = document.createElement("td");
            var textoCeldaHead = document.createTextNode("PRECIO");
            celdaHead.appendChild(textoCeldaHead);
            filaHead.appendChild(celdaHead);

        tblHead.appendChild(filaHead);

        var tblBody  = document.createElement("tbody");
        
        var key;

            for (key in dataArray['data']) {
                
                    var fila = document.createElement("tr");
                
                    var celda = document.createElement("td");
                    var img = new Image();
                    img.src = dataArray['data'][key]['imageurl'];
                    img.setAttribute("width", "70px");
                    img.setAttribute("height","100px");

                    celda.appendChild(img);
                    fila.appendChild(celda);

                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode(dataArray['data'][key]['productshopcode']);
                    celda.appendChild(textoCelda);
                    fila.appendChild(celda);

                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode(dataArray['data'][key]['title']);
                    celda.appendChild(textoCelda);
                    fila.appendChild(celda);

                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode("$"+dataArray['data'][key]['priceinfo']['price']);
                    celda.appendChild(textoCelda);
                    fila.appendChild(celda);

                    tblBody.appendChild(fila);
            
            } /* FIIIIIIIIIN DEL FOR*/
    

    tabla.appendChild(tblBody);
    tabla.appendChild(tblHead);

    tabla.setAttribute("class","table");
    tblHead.setAttribute("class","thead-dark");

    document.getElementById('respond').appendChild(tabla);


    } /* FIIIIIIIIIN DEL IF JASON*/

    }; /*FIIIIIIIIN DE LA FUNCION onreadystatechange*/

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send();


    } /*FIIIIIIIIN DE LA FUNCION initProductsView*/





















    