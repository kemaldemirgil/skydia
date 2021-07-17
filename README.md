<p align = "center"> <img src="/src/assets/skydia.gif"/> </p>
 
<p align = "center">
  <img src="https://img.shields.io/npm/v/npm?color=red&logo=npm"/>
  <img src="https://img.shields.io/node/v/jest"/>
  <img src="https://img.shields.io/github/license/kemaldemirgil/skydia?color=cyan&label=License&logo=github&logoColor=cyan"/>
  <img src="https://img.shields.io/github/issues/kemaldemirgil/skydia?color=yellow&label=Issues&logo=github&logoColor=yellow">
  <img src="https://img.shields.io/github/last-commit/kemaldemirgil/skydia?color=orange&label=Last%20Commit&logo=git&logoColor=orange">
</p>

<h1 align = "center">Weather Application</h1>

[Skydia Deployed Link](https://kemaldemirgil.github.io/skydia)

## About:
**Skydia** is a simple weather application which allows users to search for the current weather of the desired city, it also allows adding cities to their **Favourites List** which could be accessed anytime on their local computer. 

## Usage:
- Once navigated to the [application](https://kemaldemirgil.github.io/skydia), an **Entry Page** will be presented, simply click on the `ENTER` button to view the **Search Page**.
- In the **Search Page**, enter a city name to get the current weather. Hit the `Save to Favourites` button to add the city to your **Favourites list**.
- The **List** could be accessed through the *Navigation Bar* in the upper right corner of the page.
- In the **My Favourites Page**, select the city to view it's current weather, this will generate the current weather of that city. More information could be accessed through the `Click for more information` link at the bottom of the card.
- The city can be removed from the **Favourites List** by clicking on the `Delete City` button.

## Issues:
If any issues or bugs are present, please submit a ticket to the `Issues` tab or contact me through kemal.demirgil@hotmail.com and I will get back to it as soon as possible.\
![](/src/assets/issue.gif)

## Installation:
`Skydia` could also be running in your local computer however, I wouldn't recommend it since you would be needing an `API KEY` from [Open Weather API](https://openweathermap.org/api) and obtaining one could take *10 minutes to 2 hours*. Also, a `.env` file needs to be added to the root of the application using the following format for `React` applications.
```env
REACT_APP_API_KEY=<YOUR_API_KEY_HERE>
```
However, after those steps, simply pull this repository and run;
```bash
npm install
```
on the root of the directory. \
After installing the dependencies, run;
```bash
npm run start
```
to start the application on `http://localhost:3000`.
## Tools & Dependencies:

Tools & Frameworks      
:-------------------------:
ReactJS
TypeScript
Semantic UI
AOS

```json
"dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "@types/jest": "^26.0.24",
    "@types/node": "^12.20.16",
    "@types/react": "^17.0.14",
    "@types/react-dom": "^17.0.9",
    "gh-pages": "^3.2.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-semantic-toasts": "^0.6.5",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.0.3",
    "typescript": "^4.3.5",
    "web-vitals": "^1.1.2"
  }
```

## Images:

Entry Page                    |Search Page                  |Favourites Page
:-------------------------:   |:-------------------------:  |:-----------------:
![](/src/assets/ss1.png)      |![](/src/assets/ss2.png)     |![](/src/assets/ss3.png)


## Notes & Improvements:
Building this application using `Typescript` was challenging at the beginning, since it was my first time, it took many hours of troubleshooting to understand the flow of things however, once I was able to get comfortable with it, I realized the power that `Typescript` offers. Even though, writing strict code and specifying every type of element can be time-consuming for small projects like this one, on bigger applications it could definitely save many possible errors that might occur.
> I am aware that the `Favourites Page` should've displayed each city in a card format rather than selecting it through the dropdown however, unfortunately many bugs were present in my attempt on it. I even tried doing it using `Lazy Loading` where the user would click on a city card then the data would be fetched displaying the current weather but, that also brought many bugs to it. Furthermore, I understand the requirements and, this problem still could've been fixed however, in this case I was too focused on delivering the result as soon as possible.

<h3 align = "center">Connect with me!</h3>
<p align="center">
  <a href="https://www.linkedin.com/in/kemaldemirgil/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=plastic&logo=linkedin&logoColor=white"/></a>
  <a href="mailto: kemal.demirgil@hotmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=plastic&logo=gmail&logoColor=white"/></a>
</p>

## License:
Copyright © Kemal Demirgil. All rights reserved.
Licensed under the [MIT](https://github.com/kemaldemirgil/skydia/blob/main/LICENSE) license.
