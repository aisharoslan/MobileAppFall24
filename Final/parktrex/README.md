# Final Project: ParkTrex

[Final Presentation Slides](https://docs.google.com/presentation/d/1o5-P0sfJUVaH5G-G5PlmSS4tWpR734ljOtk9b1ctoCY/edit?usp=sharing)

## Pitch
Nature-lovers and outdoor enthusiasts enjoy visiting the magnificent National Parks across the USA. With ParkTrex, users can easily discover national parks by state and create a personalized list of their favorite parks to visit. It lets users track, rate, and share their experiences of the parks they've visited all in one place. Searching by state allows for easier planning for users. They can decide which park to visit when they are in a specific state.

## User Story
"As a national-park-enthusiast, I would like to search up National Parks in the area. I would like to know general information about the park before I add it to my list. I want a self-curated list that stores my visited parks, comments about my experience, and a rating feature so that I can recommend the best parks to my friends and family."

## Developer Checklist
- Setup API for NPS
- Setup JSONServer
- Text input fields for the create/edit screens
- Form binding for create/edit screens, star rating field
- Setup new context for parks and added fields, adding "rating" field
- Use icons for 'Edit' and 'Delete' and make them clickable
- Figma Design
- CRUD capabilities for Park List

## Revised Checklist
- Need hooks for getting all results for a specific state and for getting a specific park's information
- Listener for 'didFocus' on FavoriteScreen
- Try Catch for all ParkContext methods
- Default layout when there are no parks added to list yet

## UI
![Figma UI](ui_figma1.png)

![Figma UI](ui_figma2.png)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
