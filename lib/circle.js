const Logo = require('./logo');

class Circle  extends Logo {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(data) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
      </svg>`;
    }
}

module.exports = Circle;