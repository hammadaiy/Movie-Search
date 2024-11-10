// API key
const API_KEY = "6b6f168a";
const searchForm = document.getElementById("searchForm");
const searchResultsDiv = document.getElementById("searchResults");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchQuery = document.getElementById("searchQuery").value.trim();
  if (!searchQuery) {
    toastr.error("Please enter a movie title to search.");
    return;
  }

  toastr.info("Searching for movies...");

  // Clear previous search results
  searchResultsDiv.innerHTML = "";

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
        searchQuery
      )}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    if (data.Response === "False") {
      toastr.error("No movies found for this query");
      return;
    }

    toastr.success("Movies found!");

    // Display each movie result in a Bootstrap card
    data.Search.forEach((movie) => {
      const movieCard = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/150"
            }" class="card-img-top" alt="${movie.Title}">
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <p class="card-text">Year: ${movie.Year}</p>
              <p class="card-text">Type: ${movie.Type}</p>
            </div>
          </div>
        </div>
      `;
      searchResultsDiv.insertAdjacentHTML("beforeend", movieCard);
    });
  } catch (error) {
    toastr.error("An error occurred while searching");
    console.error("Fetch error:", error);
  }
});
