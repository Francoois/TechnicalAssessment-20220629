# Asobo UI Test

## Requirements
- Install NodeJS LTS: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- run `npm install` in your console to install dependencies

## Run app
```
    npm run dev
```
You can then click on the link in the console, or go to http://localhost:3000

## Objective
You're asked to create a simple toolbar system. Given the provided data, you need to create a list of buttons, that will open a corresponding panel on the first click. They are displayed as "selected" when their panel is open. If you click on it again, it will close the current panel.
Clicking a different toolbar button will close the currently opened panel, and open the new one.

A panel has the following functionalities:
- You can close the currently opened panel by clicking on the x icon
- You can expand the panel to become fullscreen by clicking on the square icon
- The panel will contain a custom element, defined by the provided tag in the data


You will be evaluated on how close you can get to the mockups, and the architecture of your code. 

## Architecture
You are given a sample architecture you can use to go faster in your implementation. It is using the custom elements of the Web Components standard (https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), and shadow DOM to make DOM manipulation and initialization easier.
You can start coding in `main.ts`, and look at the SampleComponent for how you can make other components for your purposes.


## Bonus
Make an opening, closing, and expanding animation for the panels