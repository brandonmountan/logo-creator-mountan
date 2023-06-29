// class Square {
//     constructor(text, textColor, shape, shapeColor) {
//         this.text = text;
//         this.textColor = textColor;
//         this.shapeColor = shapeColor;
//     }
// }

class Circle {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    draw() {
        return `    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="100" fill="red" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">bpm</text>

    </svg>
`
    }

}

// class Triangle {
//     constructor(text, textColor, shape, shapeColor) {
//         this.text = text;
//         this.textColor = textColor;
//         this.shapeColor = shapeColor;
//     }
// }

function testShapes(answers) {
    switch (answers.shape) {
        case 'Circle':
            const svgCircle = new Circle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
            return svgCircle.draw()
            // answers.shape = '<circle cx="150" cy="100" r="100"';
            // let circleSvgBlueprint = svgPrint(answers)
            // fs.writeFile('./examples/logo.svg', circleSvgBlueprint, (err) => 
            // err ? console.log(err) : console.log('success'));
            break;
        // case 'triangle':
        //     answers.shape = '<polygon points="150, 18 244, 182 56, 182"';
        //     let triangleSvgBlueprint = svgPrint(answers)
        //     fs.writeFile('./examples/logo.svg', triangleSvgBlueprint, (err) => 
        //     err ? console.log(err) : console.log('success'));
        //     break;    
        // case 'square':
        //     answers.shape = '<rect x="75" y="25" width="150" height="150"';
        //     let squareSvgBlueprint = svgPrint(answers)
        //     fs.writeFile('./examples/logo.svg', squareSvgBlueprint, (err) => 
        //     err ? console.log(err) : console.log('success'));
        //     break;
    };
}

module.exports = {
    testShapes: testShapes,
    Circle: Circle
}