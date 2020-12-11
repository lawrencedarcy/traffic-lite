const Topic = require('./models');
const mongoose = require('./db');


const getTopics = async (req, res) => {
  console.log('get request received!'); // eslint-disable-line
  try {
    const topics = await Topic.find();   
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addTopic = async (req, res) => {
  
  console.log(req.body);// eslint-disable-line
  const topic = new Topic(
    {
      title: req.body.title,
      timestamp: Date.now(),
      votes: 0
    }
  );
  try {
    const newTopic = await topic.save();
    res.status(201).json(newTopic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  
};



const upVote = async (req, res) => {
  try {
    const upVoted = await Topic.findOneAndUpdate({_id: req.params.id}, { $inc: { votes: 1}});
    res.status(200).json(upVoted); 
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
};



module.exports = {
  getTopics,
  addTopic,
  deleteTopic,
  upVote,
  downVote
}; 


