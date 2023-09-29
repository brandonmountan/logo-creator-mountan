const Circle = require('../lib/circle');

describe('Circle', () => {
    test('should display a black circle with red text inside', () => {
        const text = 'BPM';
        const textColor = 'red';
        const shape = '<circle cx="150" cy="100" r="100"';
        const shapeColor = 'black'
        const expectedLogo = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="150" cy="100" r="100" fill="black" />
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">BPM</text>
    
        </svg>`
        const circle = new Circle(text, textColor, shape, shapeColor);
        expect(circle.draw()).toEqual(expectedLogo)
    })
})