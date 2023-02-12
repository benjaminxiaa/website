month = new Date().toLocaleString('default', { month: 'short' });
day = new Date().getDate();
year = new Date().getFullYear();


function GetDate() {
    document.getElementById("getDate").innerText = `${month} ${day}, ${year}`;
}