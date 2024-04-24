const express = require('express');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
const port = 9000;
// app.use("/", (req, res) => {
//     res.json({ message: "Hello bro"})
// })

app.listen(9000, () => {
    console.log(`Starting Server on port ${port}`)
})

app.get('/', (req, res) => res.render('home'));
