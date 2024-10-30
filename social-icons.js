document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement('div');
    footer.className = "social-icons";
    footer.innerHTML = `
        <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
    `;
    document.body.appendChild(footer);
});
