# MyReads: A Book Tracking App

## src dir structure
- **assets:** till now it contains the localization files.
- **components:** contains the reusable components.
- **config:** contains configs and public constants for the app.
- **layouts:** contains the master and separate pages layouts.
- **pages:** contains the app pages to redirect to.
- **routes:** contains the app routs.
- **services:** contains the state management (store and slices) and the API calls.
- **utils:** contains the function and utilities used across the app.


## Business flow.
- Data is grabbed from the API.
- In Home Page, Books are displayed.
- Based on the shelf property in each item, the book is attached to a column.
- The main page shows three shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors. Each bookshelf is a reusable component.
- Books can be transferred from column (shelf) to another using drag and drop.
- A search input is existing to filter the displayed books based on a search query by user.
- The search functionality is applied on all shelves.
- If any card (book) in a column is clicked, then it will redirect the user to that book's details.
- When the browser is refreshed, the same information is displayed on the page.
- The Books details page displays book's image, title, rate, desc, and all possible book's data.


## used npm packages.
- @reduxjs/toolkit
- react-router v6
- react-beautiful-dnd
- chakra-ui


In the project directory, you can run:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
To learn chakra-ui, check out the [chakra-ui documentation](https://chakra-ui.com/docs/components).
To learn react-beautiful-dnd, check out the [react-beautiful-dnd documentation](https://github.com/atlassian/react-beautiful-dnd).
