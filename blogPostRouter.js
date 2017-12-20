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
  
});

//Post request
router.post('/', jsonParser, (req, res) => {

});

//Put request
router.put('/:id', jsonParser, (req, res) => {

});

//Delete request
router.delete('/:id', (req, res) => {

});









module.exports = router;
