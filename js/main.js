const searchEl = document.querySelector('.search');
// document 는 html 자체라고 생각해도 된다
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
} );

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputElEl.setAttribute('placeholder','통합검색');
    // setAttribute('attribute','value')
});
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputElEl.setAttribute('placeholder','');
    // setAttribute('attribute','value')
});