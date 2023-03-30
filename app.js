fetch("https://fakestoreapi.com/products")
    .then(function (res) { return res.json(); })
    .then(function (res) {
    // this is not allowed
    // let a:Actor = <Actor>res;
    // I use an intermediate variable a to get around this...
    var a = res;
    console.log(res);
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    row.setAttribute("class", "table-dark");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "S.No";
    cell2.innerHTML = "Name";
    cell3.innerHTML = "Description";
    cell4.innerHTML = "Price";
    cell5.innerHTML = "Image";
    for (var i = 0; i < res.length; i++) {
        var row = table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = res[i].id;
        cell2.innerHTML = res[i].category;
        cell3.innerHTML = res[i].description;
        cell4.innerHTML = res[i].price;
        cell5.innerHTML = "<img src=\"".concat(res[i].image, "\" width=\"80\" height='80'>");
    }
});
