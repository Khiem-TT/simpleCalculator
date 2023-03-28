let view = document.getElementById('result');
function inputValue(value) {
    view.value += value;
}
function dl() {
    view.value = '';
}
function result() {
    view.value = eval(view.value);
}