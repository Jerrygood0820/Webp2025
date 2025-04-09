let allData = [];        // 原始資料
let filteredData = [];   // 搜尋後的資料
let currentPage = 1;
const rowsPerPage = 10;

function loadData() {
    const openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', openUrl, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            allData = JSON.parse(xhr.responseText);
            filteredData = allData;
            currentPage = 1;
            renderTable();
        }
    };
}

function renderTable() {
    const myTable = document.getElementById("csie");

    // 清除舊資料（保留表頭）
    while (myTable.rows.length > 1) {
        myTable.deleteRow(1);
    }

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);

    pageData.forEach(data => {
        if (data.showInfo && data.showInfo.length > 0) {
            const row = myTable.insertRow(-1);
            row.insertCell(0).innerHTML = data.title || "無標題";
            row.insertCell(1).innerHTML = data.showInfo[0].location || "無地點";
            row.insertCell(2).innerHTML = data.showInfo[0].price || "無票價";
        }
    });

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    document.getElementById("pageInfo").innerText = `第 ${currentPage} 頁 / 共 ${totalPages} 頁`;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
}

function filterData() {
    const keyword = document.getElementById("search").value.trim().toLowerCase();
    if (keyword === "") {
        filteredData = allData;
    } else {
        filteredData = allData.filter(data => data.title && data.title.toLowerCase().includes(keyword));
    }

    currentPage = 1;
    renderTable();
}

window.onload = loadData;
