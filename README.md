CarFilters Application

Overview

CarFilters is a simple React-based project created with Vite. This application allows users to filter vehicles by type and model year, and view the results. While the requirements mentioned Next.js, this implementation uses React due to the developer's experience and proficiency with it. Vite is used as the build tool for faster development.

Features

Filter vehicles by type (make) and model year.

Dynamic fetching of vehicle makes and models using VPIC API.

Redux Toolkit for state management.

Styled with Tailwind CSS for a clean and responsive UI.

Error handling for API calls.

Additional "Return to Home" button for user convenience.

How to Run the Application

Clone the repository:

git clone <repository-url>
cd carfilters

Install dependencies:

npm install

Create a .env file in the root directory to store environment variables. For Vite, the syntax is import.meta.env. Example:

VITE_API_BASE_URL=https://vpic.nhtsa.dot.gov/api

Start the development server:

npm run dev

Open the application in your browser at http://localhost:5173.

To build the project for production:

npm run build

To preview the production build:

npm run preview

Notes

React Instead of Next.js: The project was implemented using React instead of Next.js due to the developer’s familiarity with React and lack of experience with Next.js.

Suspense Component: React's Suspense component was not used in this project. Since Redux Toolkit handles state management effectively, Suspense was deemed unnecessary.

Environment Variables: Unlike Next.js, Vite uses import.meta.env syntax for environment variables. Make sure to adjust any configurations accordingly.

Navigation Convenience: A "Return to Home" button was added for better user experience.

Commands Summary

Command

Description

npm run dev

Starts the development server.

npm run build

Builds the project for production.

npm run preview

Previews the production build locally.

npm run lint

Runs ESLint to check code quality.

npm run format

Formats the codebase using Prettier.

API Endpoints Used

Fetch Vehicle Makes:

GET https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json

Fetch Vehicle Models:

GET https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json

Final Notes

The application satisfies the functional requirements mentioned in the task with the above modifications. For any further feedback or questions, feel free to reach out. Thank you for your understanding!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
