const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

describe('Circle', () => {
    describe('render', () => {
        it('should take data and produce a render of that data', () => {
            const circle = new Circle();
            const data = {
                text: 'BCI',
                textColor: 'white',
                shape: 'Circle',
                shapeColor: 'blue',
            };
            expect(circle.render(data)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><Circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BCI</text></svg>`)
        })
    })
})

describe('Triangle', () => {
    describe('render', () => {
        it('should take data and produce a render of that data', () => {
            const triangle = new Triangle();
            const data = {
                text: 'BCI',
                textColor: 'white',
                shape: 'Triangle',
                shapeColor: 'blue',
            };
            expect(triangle.render(data)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><Triangle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BCI</text></svg>`)
        })
    })
})

describe('Square', () => {
    describe('render', () => {
        it('should take data and produce a render of that data', () => {
            const square = new Square();
            const data = {
                text: 'BCI',
                textColor: 'white',
                shape: 'Square',
                shapeColor: 'blue',
            };
            expect(square.render(data)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><Square cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BCI</text></svg>`)
        })
    })
})