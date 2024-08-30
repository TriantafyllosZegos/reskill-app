# Reskilling Application

Hello All,

This is my effort to create a web app for the reskilling assignment. My application is split into two main parts:

1. **Backend**
2. **Frontend**

## Backend

On the backend, implemented in `server.js`, I used Express, Axios, and the CORS middleware. Here’s a summary of what was implemented:

### Routes

1. **`/posts` Route:**
   - **Returns:**
     - `userId`
     - `id`
     - `title`
     - `thumbnail`
   - **Description:** This route combines data from two URLs to provide a list of posts with their associated thumbnails. The response also includes a `limit` parameter to control the number of posts fetched.

2. **`/post/:id` Route:**
   - **Returns:**
     - `userId`
     - `id`
     - `title`
     - `subheader`
     - `paragraph1`
     - `paragraph2`
     - `paragraph3`
     - `photo`
   - **Description:** This route combines data from two URLs and formats the post body into a `subheader` and three paragraphs based on new line characters (`\n`). It fetches detailed information about a specific post using the provided `id`.

## Frontend

The frontend is where I invested most of my effort for this assignment. The project structure is as follows:

### Project Structure

- **`src` Folder:**
  - **`assets/`**: Contains images used in the web app.
  - **`components/`**: Contains reusable components.
  - **`pages/`**: Contains different pages for the web app.

### Components

- **`Header` and `Footer`**: Basic header and footer components.
- **`IntroPost`**: Displays the main post on the app, not fetched from the backend.
- **`Loader`**: Shows a loading message; can be animated in the future.
- **`Posts`**: Fetches and displays post information from the backend.

### Pages

- **`HomePage`**: Combines the `IntroPost` component with the `Posts` component.
- **`SinglePost`**: Displays detailed information for a specific post, fetched using the `post/:id` route.
- **`ErrorPage`**: Shows an error message for incorrect URLs.
- **`AboutPage`**: A simple page linked from the header component.
- **`ContactPage`**: Another simple page with no additional functionality.

### Routing

- **`App.jsx`**: Implements React Router for navigation between different pages.

## Installation and Running the Project

To get the project up and running, follow these steps:

1. **Install Dependencies:**

   - Navigate to the backend directory and run:
     ```bash
     npm install
     ```
   - Navigate to the frontend directory and run:
     ```bash
     npm install
     ```

2. **Run the Project:**

   - In both the backend and frontend directories, use the following command to start the project:
     ```bash
     npm run dev
     ```

   This will start both the backend and frontend servers in development mode.

For any questions or further clarifications, feel free to ask.

Thank you for reading,

**Zegos Triantafyllos**
