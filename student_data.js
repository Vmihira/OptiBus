const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const fd = new FormData(form);
    console.log(fd);
});