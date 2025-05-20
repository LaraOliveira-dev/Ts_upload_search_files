import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.get('/', (req, res) => {
    res.send('SPA server is working!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
