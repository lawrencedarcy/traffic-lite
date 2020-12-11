const express = require('express');

const router = express.Router();
const { getTopics, addTopic, deleteTopic, upVote, downVote } = require('./controllers');



router.get('/topics', getTopics);
router.post('/topics', addTopic);
router.delete('/topics/:id', deleteTopic);
router.put('/topics/:id/up', upVote);
router.put('/topics/:id/down', downVote);
module.exports = router;