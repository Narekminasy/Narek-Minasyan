import { Router } from 'express';

const router = Router();

let posts = [];

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Post!'
  });
});

router.post('/', (req, res) => {
  res.json({
    message: 'Welcome to the Post!'
  });
});

router.post('/post', (req, res) => {
   const post = {
       id:Date.now(),
       title: req.body.title,
   }
   posts.push(post);
   res.json(post);
});




export default router;

