const inquirer = require('inquirer')
const fs = require('fs')

const svgPrint = ({
    text,
    textColor,
    shape,
    shapeColor,
}) => `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    ${shape} fill="${shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>

    `;

const questions = 
    [
        { 
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color (or hexidecimal code) for your text',
        },
        {
        type: 'list',
        name: 'shape',
        choices: [
            'circle',
            'triangle',
            'square',
            ]
        },
        {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color (or hexidecimal code) for your shape',
        },
    ];

function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        err ? console.log(err) : console.log('success')
    })
};


function init() {
inquirer
.prompt(questions)
.then((answers) => {
    console.log(answers)
    switch (answers.shape) {
        case 'circle':
            answers.shape = '<circle cx="150" cy="100" r="100"';
            let circleSvgBlueprint = svgPrint(answers)
            fs.writeFile('./examples/logo.svg', circleSvgBlueprint, (err) => 
            err ? console.log(err) : console.log('success'));
            break;
        case 'triangle':
            answers.shape = '<polygon points="150, 18 244, 182 56, 182"';
            let triangleSvgBlueprint = svgPrint(answers)
            fs.writeFile('./examples/logo.svg', triangleSvgBlueprint, (err) => 
            err ? console.log(err) : console.log('success'));
            break;    
        case 'square':
            answers.shape = '<rect x="75" y="25" width="150" height="150"';
            let squareSvgBlueprint = svgPrint(answers)
            fs.writeFile('./examples/logo.svg', squareSvgBlueprint, (err) => 
            err ? console.log(err) : console.log('success'));
            break;
    };
})
.catch((error) => {
    console.log(error);
})
}

init();