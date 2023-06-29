
class Circle {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    draw() {
        return `
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="100" fill="red" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">BPM</text>

            </svg>`
    }
};

function createSVG(answers) {
    switch (answers.shape) {
        case 'Circle':
            const svgCircle = new Circle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
            return svgCircle.draw();
            break;
    };
};

module.exports = {
    createSVG: createSVG,
    Circle: Circle
};