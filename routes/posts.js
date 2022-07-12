const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

// Just the index route for posts
router.get('/', (req, res) => {
   res.send('Posts Page');
});

// Create a new post
router.post('/create-post', async (req, res) => {
   const post = new Post({
      title: req.body.title,
      description: req.body.description,
   });

   try {
      const savedPost = await post.save();
      res.json(savedPost);
   } catch (err) {
      res.json({ message: err });
   }
});

// Retrieve all posts
router.get('/read-all-posts', async (req, res) => {
   try {
      const readPosts = await Post.find();
      res.json(readPosts);
   } catch (err) {
      res.json({ message: err });
   }
});

// Specific Post by ID
router.get('/:postID', async (req, res) => {
   try {
      const specificPost = await Post.findById(req.params.postID);
      res.json(specificPost);
   } catch (err) {
      res.json({ message: err });
   }
});

// Delete a Specific Post
router.delete('/:postID', async (req, res) => {
   try {
      // const deletePost = await Post.remove({_id: req.params.postID }); //we can use this remove() method as well but I mostly prefer the findByIdAndDelete one!
      const deletePost = await Post.findByIdAndDelete(req.params.postID);
      res.json(deletePost);
   } catch (err) {
      res.json({ message: err });
   }
});

// Update a specific post
router.patch('/:postId', async (req, res) => {
   try {
      const updatePost = await Post.findByIdAndUpdate(
         //In here also we can use updateOne() method to update a post but I used the findByIdAndUpdate() one
         { _id: req.params.postId },
         {
            $set: req.body,
         }
      );
      res.json(updatePost);
   } catch (err) {
      res.json({ message: err });
   }
});

module.exports = router;
