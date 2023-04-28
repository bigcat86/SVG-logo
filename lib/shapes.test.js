const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

describe('Circle', () => {
    describe('render', () => {
        it('should take data and produce a render of that data', () => {
            const data = {
                text: 'BCI',
                textColor: 'white',
                shape: 'Circle',
                shapeColor: 'blue',
            };
            const circle = new Circle(data.text, data.textColor, data.shape, data.shapeColor);
            expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BCI</text></svg>`)
        })
    })
})

describe('Triangle', () => {
    describe('render', () => {
        it('should take data and produce a render of that data', () => {
            const data = {
                text: 'BCI',
                textColor: 'white',
                shape: 'Triangle',
                shapeColor: 'blue',
            };
            const triangle = new Triangle(data.text, data.textColor, data.shape, data.shapeColor);
            expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="70 180, 150 20, 230 180" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">BCI</text></svg>`)
        })
    })
})

describe('Square', () => {
    describe('render', () => {
        it('should take data and produce a render of that data', () => {
            const data = {
                text: 'BCI',
                textColor: 'white',
                shape: 'Square',
                shapeColor: 'blue',
            };
            const square = new Square(data.text, data.textColor, data.shape, data.shapeColor);
            expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BCI</text></svg>`)
        })
    })
})
