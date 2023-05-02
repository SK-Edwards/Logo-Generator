//Importing from the data needed.
const inquirer = require('inquirer');
const logoCreation= require('./Utils/logoGeneration');
const fs = require('fs');
const {writeFile} = require('fs/promises')
// Prompt question to collect the logo specifics

const promptQuestions = [
 {
    type: 'list',
    message: 'What shape would you like your logo to be?',
    name: 'logoShape',
    choices: ['Square', 'Triangle', 'Circle'],
    validate: (value) => {if(value){return true} else { return 'Value Required'}}
},

{
    type: 'Input',
    message: 'Input 3 letters you would like on your logo. ',
    name: 'text',
    validate: (value) => {if(value){return true} else { return 'Value Required'}}
},

{
    type: 'text',
    message: 'What color would you like your logo to be?',
    name: 'shapeColor',
    validate: (value) => {if(value){return true} else { return 'Value Required'}}
},

{
    type: 'text',
    message: 'What color would you like your logo text to be?',
    name: 'textColor',
    validate: (value) => {if(value){return true} else { return 'Value Required'}}
},

]




//Write to file function for making the .svg file.

function writeToFile(fileName, data) {

    fs.writeFile(fileName,(data), function (err) {
        if (err) {
            return console.log(err);
        }})
}

// Function to initialize the app.

function init() {
    inquirer.prompt(promptQuestions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        
    
       return writeFile("./logo.svg", logoCreation({...data}));

})};

init();