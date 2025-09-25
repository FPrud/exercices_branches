const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstName');

if (firstNameInput) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userName = firstNameInput.value;
        if (userName) {
            localStorage.setItem('userName', userName);
            window.location.href = '/menu';
        };
    });
};