function loadData() {
    var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', openUrl, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dataset = JSON.parse(xhr.responseText);
            console.log("取得資料：", dataset); // 可觀察資料結構
            addNewData(dataset);
        }
    };
}

function addNewData(dataset) {
    var myTable = document.getElementById("csie");

    dataset.forEach(function (data) {
        if (data.showInfo && data.showInfo.length > 0) {
            var row = myTable.insertRow(-1);
            row.insertCell(0).innerHTML = data.title || '無標題';
            row.insertCell(1).innerHTML = data.showInfo[0].location || '無地點';
            row.insertCell(2).innerHTML = data.showInfo[0].price || '無票價';
        }
    });
}
