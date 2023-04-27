const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

const circle = new Circle();
const triangle = new Triangle();
const square = new Square();

const questions = [
    {
        type: 'input',
        message: 'Enter text (no more than 3 characters):',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter text color:',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Enter shape:',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'Enter shape color:',
        name: 'shapeColor',
    },    
]

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log("Generated logo.svg");
        if (data.shape === 'Circle') {
            fs.writeFile('./examples/logo.svg', circle.render(data));
        }else if (data.shape === 'Triangle') {
            fs.writeFile('./examples/logo.svg', triangle.render(data));      
        }else {
            fs.writeFile('./examples/logo.svg', square.render(data));
        }    
    }
)}

init();