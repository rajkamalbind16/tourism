const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'C:/Users/ADMIN/Desktop/shivila join/day2/server/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Create multer instance
const upload = multer({ storage });

// MongoDB connection URI
const uri = 'mongodb+srv://prakashurkude:prakash1998@cluster0.nuhssqs.mongodb.net/task4'; // Replace with your MongoDB connection URI

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define the post schema
const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  postUrl: {
    type: String,
    required: true
  }
});

// Create the post model
const Post = mongoose.model('Post', postSchema);

// Handle POST request to create a new post
// Handle POST request to create a new post
app.post('/user/post/add/:userId', upload.single('post'), async (req, res) => {
    const userId = req.params.userId;
    const caption = req.body.caption;
    const postUrl = req.file.filename;
  
    try {
      // Create a new post document
      const newPost = new Post({
        userId,
        caption,
        postUrl
      });
  
      // Save the post to the database
      const createdPost = await newPost.save();
  
      // Log the created post for debugging
      
  
      // Return a response with the created post
      return res.status(201).json(createdPost);
      console.log(createdPost);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ message: 'Failed to create post' });
    }
  });
  

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
