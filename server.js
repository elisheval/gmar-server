const manager = require('./controllers/manager');
const customer = require('./controllers/customer');
const branch = require('./controllers/branch');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/manager', manager);
app.use('/api/customer', customer);
app.use('/api/branch', branch);

const post = process.env.POST || 5005;
app.listen(post, () => {
    console.log(`listening on port ${post}...`);
})
