function SuNavHide() {
    var element = document.body.classList.toggle('active');
    var elements = document.querySelectorAll('*');
    elements.forEach((element) => {
        element.classList.remove('open');
    });
}
function SuNavOpen() {
    var element = document.body.classList.add('active');
    event.target.classList.add('open');
}
function SuNavUser() {
    var element = document.getElementById('user');
    element.classList.add('open');
}
function SuNavSearch() {
    var element = document.getElementById('search');
    element.classList.add('open');
}
function SuNavFav() {
    var element = document.getElementById('fav');
    element.classList.add('open');
}
function SuNavRamos() {
    var element = document.getElementById('ramos');
    element.classList.add('open');
}
function SuNavPrev() {
    var element = document.getElementById('prev');
    element.classList.add('open');
}
function SuNavSaude() {
    var element = document.getElementById('saude');
    element.classList.add('open');
}
function SuNavVida() {
    var element = document.getElementById('vida');
    element.classList.add('open');
}
function SuNavOdonto() {
    var element = document.getElementById('odonto');
    element.classList.add('open');
}