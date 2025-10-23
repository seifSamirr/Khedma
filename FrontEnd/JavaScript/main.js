// This function runs when the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Path to your components relative to the HTML pages in the 'Pages' folder
    const navbarPath = '../Components/navbar.html';
    const footerPath = '../Components/footer.html';

    // Find the placeholders
    const navbarPlaceholder = document.getElementById('navbar');
    const footerPlaceholder = document.getElementById('footer');

    // Load Navbar
    if (navbarPlaceholder) {
        fetch(navbarPath)
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading navbar:', error));
    }

    // Load Footer
    if (footerPlaceholder) {
        fetch(footerPath)
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});