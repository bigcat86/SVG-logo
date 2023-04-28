const Logo = require('./logo');

class Triangle  extends Logo {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        if (this.text.length > 3 || this.text.length <= 0) {
            throw new Error('Please enter text 1-3 characters long');
        }
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="70 180, 150 20, 230 180" fill="${this.shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

module.exports = Triangle;