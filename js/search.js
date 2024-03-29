const showLink = document.getElementById('search');
const hideLink = document.getElementById('cancel');
const mySection = document.getElementById('search_section');

showLink.addEventListener('click', function(e) {
    e.preventDefault(); 
    mySection.classList.remove('hidden');
});

hideLink.addEventListener('click', function(e) {
    e.preventDefault();
    mySection.classList.add('hidden');
});