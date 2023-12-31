const Shape = require('./shape');

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    draw() {
        return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
    
        ${this.shape} fill="${this.shapeColor}" />
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
        </svg>`
    }
}

module.exports = Triangle