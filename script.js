function loadHTML(filename) {
    fetch(`build_content/${filename}`)
        .then(response => response.text())
        .then(htmlContent => {
            document.getElementById('content').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
            document.getElementById('content').innerHTML = 'Error loading content.';
        });
}

// Load default HTML content on page load
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('page1.html');
});
