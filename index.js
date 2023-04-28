const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

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
            const circle = new Circle(data.text, data.textColor, data.shape, data.shapeColor);
            fs.writeFile('./examples/logo_circle.svg', circle.render(), (err) => {
                console.log(err)
            });
        }else if (data.shape === 'Triangle') {
            const triangle = new Triangle(data.text, data.textColor, data.shape, data.shapeColor);
            fs.writeFile('./examples/logo_triangle.svg', triangle.render(), (err) => {
                console.log(err)
            });    
        }else {
            const square = new Square(data.text, data.textColor, data.shape, data.shapeColor);
            fs.writeFile('./examples/logo_square.svg', square.render(), (err) => {
                console.log(err)
            });
        }    
    }
)}

init();