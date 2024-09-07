window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    setTimeout(() => {
        document.getElementById('form-response').innerText = `Thank you, ${name}! We have received your message.`;
        document.getElementById('contact-form').reset();
    }, 1000);
});
