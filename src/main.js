// Function to load HTML content dynamically
export function loadContent(file) {
  fetch(`content/${file}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error loading ${file}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      // Inject the loaded HTML into the content div
      document.getElementById('content').innerHTML = html;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('content').innerHTML = `<p>Error loading content. Please try again.</p>`;
    });
}

// Example of loading a default page (optional)
document.addEventListener('DOMContentLoaded', () => {
  loadContent('page1.html'); // Automatically load the first page

  //Add event listeners for the links

  document.querySelector('#page-1-link').addEventListener("click", (e) => {
    e.preventDefault();
    loadContent('page1.html')
  })

  document.querySelector('#page-2-link').addEventListener("click", (e) => {
    e.preventDefault();
    loadContent('page2.html')
  })
});
