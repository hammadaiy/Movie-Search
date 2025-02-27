# Movie-Search App ([Live Link](https://moviesearch-application.vercel.app/))

A web application that lets users search for movies using the OMDb API, displaying movie details like posters, titles, release years, and types in a clean Bootstrap card format.

## Features

- **Movie Search**: Users can enter a movie title to find related movies.
- **Results Display**: Each movie is shown with a poster, title, release year, and type (movie, series, etc.) in a responsive Bootstrap card format.
- **User Feedback**: Provides notifications using Toastr, such as:
  - “Searching for movies…” when a search starts
  - “Movies found!” if results are available
  - “No movies found for this query” if there are no results
  - “An error occurred while searching” in case of a network issue or API error

## Technologies Used

- **HTML, JavaScript**: For frontend structure and functionality
- **Bootstrap**: Responsive layout and card formatting
- **Toastr**: User notifications
- **OMDb API**: Provides movie data based on user input

## How It Works

1. **Search**: Enter a movie title in the input field and click the Search button.
2. **Fetch Data**: The app uses `fetch()` and `async/await` to retrieve data from OMDb’s API.
3. **Display Results**: If movies are found, they are displayed as Bootstrap cards with information. Previous results clear out with each search.

## Error Handling

The app uses `try/catch` for error handling. It will display an error notification using Toastr if there’s a network or API issue.



## Screenshot of the Interface.


![Screenshot 2024-11-11 162035](https://github.com/user-attachments/assets/db23a909-c771-4908-b23c-e776d554151c)

