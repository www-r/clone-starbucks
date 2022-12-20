const searchEl = document.querySelector('.search');
// document 는 html 자체라고 생각해도 된다
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
} );
