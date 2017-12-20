'use strict';

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./models');
console.log('Router is wired up');

BlogPosts.create('lorem ipsum', 'Test content', 'Marty', 'July 4, 2017');

BlogPosts.create('lorem ipsum', 'Test content', 'Bruno', 'August 6, 2017');
console.log(BlogPosts);


//Get request
router.get('/', (req, res) => {
    res.json(BlogPosts.get());
});

//Post request
router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['title', 'content', 'author', 'publishDate'];
    for (let i=0; i<requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = 'Missing ${field}` in request body';
            console.error(message);
            return res.status(400).send(message);
        }
    }
    const item = BlogPosts.create(req.body.title, req.body.content, req.body.author, req.body.publishDate);
    res.status(201).json(item);
});

//Put request
router.put('/:id', jsonParser, (req, res) => {

});

//Delete request
router.delete('/:id', (req, res) => {

});









module.exports = router;
