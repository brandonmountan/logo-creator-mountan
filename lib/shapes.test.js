const shapes = require('./shapes');
const Circle = shapes.Circle;

describe('Circle', () => {
    describe('svgBuilder', () => {
        test('should display a black circle with red text inside', () => {
            const circle = new Circle('BPM', 'blue', 'circle', 'red');
            expect(circle.draw()).toBe(            `
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
            <circle cx="150" cy="100" r="100" fill="red" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">BPM</text>
        
            </svg>
            `)
        })
    })
})