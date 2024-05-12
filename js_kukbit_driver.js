function validateForm(formType) {
    var username = document.getElementById(formType + '_username').value;
    var password = document.getElementById(formType + '_password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Additional validation logic can be added here

    return true;
}

const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const fd = new FormData(form);

    const obj = Object.fromEntries(fd);
    //console.log(obj);
    
    const json = JSON.stringify(obj);
    localStorage.setItem('form', json);

    window.location.href = "driverdata.html"
})