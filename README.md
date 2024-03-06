# TV-Show

![TV-Show Homepage](https://raw.githubusercontent.com/ReQs1/tv-show/main/readme_image/readme_image.png)

TV-Show is a web application that allows users to search for movies, series, or TV shows. With a clean and intuitive interface, users can easily discover new content to watch based on their preferences.

## Live Preview

Check out the live preview of TV-Show [here](https://tv-show-five.vercel.app).

## Features

- **Search Functionality**: Users can search for movies, series, or TV shows by entering keywords.
- **Detailed Information**: Each search result displays comprehensive details about the selected movie, series, or TV show, including synopsis, ratings, cast, and more.
- **Adding to Watchlist**: Users can easily add movies, series, or TV shows to their watchlist for later viewing.
- **Responsive Design**: TV-Show is designed to be responsive, ensuring a seamless user experience across various devices and screen sizes.

## Technologies Used

- **Vite**: Utilizing Vite for fast and efficient development.
- **React with TypeScript**: Developed using React.js with TypeScript, providing type safety and improved code maintainability.
- **Tailwind CSS**: Using Tailwind CSS for styling to enable rapid development and customization of UI components.
- **Framer Motion**: Integrated Framer Motion for smooth animations, enhancing the overall user experience.

## Installation

To run TV-Show locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ReQs1/tv-show.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tv-show
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

4. Obtain an API key from [The Movie Database (TMDb)](https://www.themoviedb.org) and update the `.env` file with your API key and access token:

   ```plaintext
   VITE_API_READ_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173/` to view TV-Show.

## To-Do

- ~~Enhance navbar appearance for better aesthetics.~~
- Create watchlist page.
- Implement search functionality.
- Fix footer appearance.
