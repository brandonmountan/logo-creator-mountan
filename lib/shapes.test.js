// const indexJs = require('../index')
// const svgPrint = require('../index')
const shapes = require('../lib/shapes')
const Circle = shapes.Circle

describe('Circle', () => {
    it('should display a black circle with red text inside', () => {
        const circle = new Circle('BPM', 'blue', 'circle', 'red');
        expect(circle(text, textColor, shape, shapeColor,).render()).toBe(
            `
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
            <circle cx="150" cy="100" r="100" fill="red" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">BPM</text>
        
            </svg>
            `
        )
    })
})

// describe('svgPrint square', () => {
//     test.each`
//     text | textColor | shapeColor | shape | expected
//     ${BPM} | ${blue} | ${red} | ${'square'} | ${`
//                                                     <svg version="1.1"
//                                                         width="300" height="200"
//                                                         xmlns="http://www.w3.org/2000/svg">

//                                                     '<rect x="75" y="25" width="150" height="150"' fill="black" />

//                                                     <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">BPM</text>

//                                                     </svg>

//                                                     `}
//     ` ('returns $expected when type=$shape for $text & $textColor & $shapeColor', ({ text, textColor, shape, shapeColor }) => {
//         expect(svgPrint({ text, textColor, shape, shapeColor })).toBe(expected);
// });
// });