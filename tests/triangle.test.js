const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    test('should display a black circle with red text inside', () => {
        const text = 'BPM';
        const textColor = 'red';
        const shape = '<polygon points="150, 18 244, 182 56, 182"';
        const shapeColor = 'black'
        const expectedLogo = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="150, 18 244, 182 56, 182" fill="black" />
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">BPM</text>
    
        </svg>`
        const triangle = new Triangle(text, textColor, shape, shapeColor);
        expect(triangle.draw()).toEqual(expectedLogo)
    })
})