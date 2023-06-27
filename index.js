const inquirer = require('inquirer')
const fs = require('fs')

const svgPrint = ({
    text,
    textColor,
    shape,
    shapeColor,
}) => `${text}${textColor}${shape}${shapeColor}`

inquirer
.prompt([
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
])
.then((answers) => {
    console.log(answers)
    switch (answers.shape) {
        case 'circle':
            answers.shape = '';
            let circleSvgBlueprint = svgPrint(answers)
            fs.writeFile('testSVG.svg', circleSvgBlueprint, (err) => 
            err ? console.log(err) : console.log('success'));
            break;
        case 'triangle':
            answers.shape = '';
            let triangleSvgBlueprint = svgPrint(answers)
            fs.writeFile('testSVG.svg', triangleSvgBlueprint, (err) => 
            err ? console.log(err) : console.log('success'));
            break;    
        case 'square':
            answers.shape = '';
            let squareSvgBlueprint = svgPrint(answers)
            fs.writeFile('testSVG.svg', squareSvgBlueprint, (err) => 
            err ? console.log(err) : console.log('success'));
            break;
    };
})
.catch((error) => {
    console.log(error);
})

// fs.writeFile('testSVG.svg', svg, (err) => {  
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // success case, the file was saved
//     console.log('SVG written!');
// });


// `<circle cx="25" cy="75" r="20"/>`

// `<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>`