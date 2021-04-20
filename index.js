import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import route from './src/routes/NMroute.js';



const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Setup mongoose server
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/NMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

route(app);

// seting up the bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


app.listen(PORT, ()  => console.log(`Server running on port ${PORT}`));