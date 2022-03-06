require('dotenv').config();

const express = require('express');
const app = express();

// Home Page
app.get('/', (req, res) => {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black;
            height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
                <h1>White Page</h1>
        </body>`);
    console.log('Server is running!')
});

// Teal Page ... Now using query params:
app.get('/:color', function (req, res) {
    let myColor = req.params.color;
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor.charAt(0).toUpperCase() + myColor.slice(1)} Page YASSSS!!!</h1>
        </body>
    `) // ^ adds uppercasing to first letter of h1.
});

// // Crimson Page
// app.get('/crimson', function (req, res) {
//     res.send(`
//         <body style="margin: 0;">
//             <div style="border: 1px solid black; height: 10vh; background-color: crimson;">
//                 <h2 style="text-align: center;">NAV BAR</h2>
//             </div>
//             <h1 style="color: crimson;">Crimson Page</h1>
//         </body>
//     `)
// });

app.post('/:color', (req, res) => {
    res.send('Hello world')
});

app.listen(process.env.PORT);
