// const express = require('express');
// const app = express();
// const path = require('path');
// const router = express.Router();


// app.use(express.static('public'));


// // app.get('/', (req, res) => {
// //     res.send('An alligator approaches!');
// // });
// // router.get('/', function (req, res) {
// //     res.sendFile(path.join(__dirname + '/index.html'));
// // });

// // app.use(express.static(__dirname + '/public'));
// // app.use(express.static(__dirname + '/src'));

// // app.use('/static', express.static(path.join(__dirname, 'public')))


// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
//     //__dirname : It will resolve to your project folder.
// });
// app.use('/', router);

// app.listen(8000, () => console.log('Gator app listening on port 5000!'));


const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'react-hyf-client', 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'react-hyf-client', 'build', 'index.html'));
});

app.listen(5000, () => console.log(' listening on port 5000!'));