document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get the search term from the input
    const searchTerm = document.getElementById('search-input').value;

    // Encode the search term for use in a URL
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    // Construct the Terraria Wiki.gg search URL
    const wikiSearchUrl = `https://terraria.wiki.gg/wiki/Special:Search?search=${encodedSearchTerm}`;

    let url = new URL(window.location.href);
            
            // Add or update the query parameter
    url.searchParams.set('search', searchTerm);
            
            // Update the browser's URL without reloading the page
    window.history.pushState({}, '', url);

    // Set the src attribute of the iframe to the search URL
    document.getElementById('search-iframe').src = wikiSearchUrl;
});