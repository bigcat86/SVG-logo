const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('./lib/logo');
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


// .then((data) => {
//     const circleShape = Circle.render(data);
//     const triangleShape = Triangle.render(data);
//     const squareShape = Square.render(data);
// })

function pickShape(data) {
    
}

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log("Generated logo.svg");
        const circleShape = Circle.render();
        const triangleShape = Triangle.render();
        const squareShape = Square.render();
        if (data.shape === 'Circle') {
            fs.writeFile('./examples/logo.svg', circleShape);
        }else if (data.shape === 'Triangle') {
            fs.writeFile('./examples/logo.svg', triangleShape);      
        }else {
            fs.writeFile('./examples/logo.svg', squareShape);
        }    
    }
)}

init();