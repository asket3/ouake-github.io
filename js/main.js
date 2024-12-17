/*1*/
function f() {
    alert('ClientId (by cookie GA): ' + document.cookie.split('; ').find(row => row.startsWith('_ga=')).slice(10));
}
/*2*/
btn1.onclick = function () {
    alert('Ви натиснули на кнопку #1');
    window.dataLayer.push({
        event: 'btn1_click',  // Название события
        event_category: 'engagement',  // Категория события
        event_label: 'btn1_click_clicked',  // Метка события
        value: 1  // Дополнительное значение
    });


}
/*3*/
var btn2 = document.getElementById("btn2")
btn2.onclick = function () {
    alert('Ви натиснули на кнопку #2');
}