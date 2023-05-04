//Importing from the data needed.
const inquirer = require('inquirer');
// const logoGeneration = require('./lib/logoGeneration');
const fs = require('fs');
const { writeFile } = require('fs/promises')
// Prompt question to collect the logo specifics
const {Shape, Square, Triangle, Circle } = require("./lib/Shapes")


const promptQuestions = [
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        name: 'logoShape',
        choices: ['Square', 'Triangle', 'Circle'],
        validate: (value) => { if (value) { return true } else { return 'Value Required' } }
    },

    {
        type: 'Input',
        message: 'Input 3 letters you would like on your logo. ',
        name: 'text',
        validate: (value) => { if (value) { return true } else { return 'Value Required' } }
    },

    {
        type: 'text',
        message: 'What color would you like your logo to be?',
        name: 'shapeColor',
        validate: (value) => { if (value) { return true } else { return 'Value Required' } }
    },

    {
        type: 'text',
        message: 'What color would you like your logo text to be?',
        name: 'textColor',
        validate: (value) => { if (value) { return true } else { return 'Value Required' } }
    },

]




//Write to file function for making the .svg file.

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    })
}

// Function to initialize the app.

function init() {
    inquirer.prompt(promptQuestions).then((data) => {
        switch (data.logoShape) {
            case "Circle":
                writeToFile("./logo.svg", new Circle(data.text, data.textColor, data.shapeColor).renderSVG())
                break;
            case "Triangle":
                writeToFile("./logo.svg", new Triangle(data.text, data.textColor, data.shapeColor).renderSVG())
                break;
            default:
                writeToFile("./logo.svg", new Square(data.text, data.textColor, data.shapeColor).renderSVG())
                break;
        }
console.log(data);
console.log('Generated logo.svg')
    })
   
};

init(); 
