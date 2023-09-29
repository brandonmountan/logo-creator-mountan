const Square = require('../lib/square');

describe('Square', () => {
    test('should display a black circle with red text inside', () => {
        const text = 'BPM';
        const textColor = 'red';
        const shape = '<rect x="75" y="25" width="150" height="150"';
        const shapeColor = 'black'
        const expectedLogo = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
    
        <rect x="75" y="25" width="150" height="150" fill="black" />
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">BPM</text>
    
        </svg>`
        const square = new Square(text, textColor, shape, shapeColor);
        expect(square.draw()).toEqual(expectedLogo)
    })
})