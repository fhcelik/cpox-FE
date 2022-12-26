# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# https://github.com/fhcelik/cpox-fe the repository for the question
# https://fhcelik.github.io/cpox-fe/ the published page

### `Question`

Consider a collection of objects. Each object has a name (be creative), a type (triangle, square, circle), a hex color (web standard #RRGGBB), a size (float in the range of [5px-15px radius]), a position (x, y each in the range of [0px - 800px]).


Create a short, single page app that runs in the browser, which:


creates and stores a random collection of N objects, (N specified by the user), stored in a react-standard state management system,


display a list of these objects in the browser console,


shows an representation in a 600px by 600px bordered region containing the objects (scaled to fit from the 800px by 800px range) each object filled with its color, labeled with its name in 10pt text (the bordered region should act like a window, and it should clip the scaled representation - think of an air-traffic control screen),


and allows all objects with a certain type to be made 50% transparent by toggling one of three buttons (a button for triangles, squares and circles, all initially in a selected state) below the bordered region.


Save and bundle this work and include instructions detailing how to run it in Chrome.


Then, extend the project by adding a random velocity field (dx, dy as a float in the range of -5px to 5px per second) to each object and a forward and backward button below the bordered region. Animate the representation (backward or forward) in 1 second increments when the button is clicked, and stop it when the button is unclicked, or the other button is clicked.


Save and bundle this work as a second project, and include instructions detailing how to run it in Chrome.

# How To Run

1. Open a terminal and navigate to the directory containing the app.
2. Run the command "npm install" to install the necessary dependencies for the app.
3. Run the command "npm start" to start the app.
4. The app should now be running in your default web browser (preferably Chrome).
5. To create and store a random collection of N objects, enter the desired number of objects in the input field provided and click the "Generate Objects" button.
6. The list of objects will be displayed in the browser console, and the objects will be displayed in the bordered region.
7. To toggle the transparency of objects with a certain type, click the corresponding button for triangles, squares, or circles.
8. To animate the representation of the objects in the bordered region, click the "Forward" or "Backward" button. The animation will stop when the button is unclicked or the other button is clicked.

Note: If the app is not running in Chrome, you may need to manually open the app in Chrome by navigating to the localhost address provided in the terminal.