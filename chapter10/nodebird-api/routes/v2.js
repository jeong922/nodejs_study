const express = require('express');
const cors = require('cors');

const {
  verifyToken,
  apiLimiter,
  corsWhenDomainMatches,
} = require('../middlewares');
const {
  createToken,
  tokenTest,
  getMyPosts,
  getPostsByHashtag,
} = require('../controllers/v2');

const router = express.Router();

router.use(corsWhenDomainMatches);

router.use(
  cors({
    credentials: true,
  })
);

// POST /v2/token
router.post('/token', createToken);

// POST /v2/test
router.get('/test', verifyToken, tokenTest);

// GET /v2/posts/my
router.get('/posts/my', verifyToken, getMyPosts);

// GET /v2/posts/hashtag/:title
router.get('/posts/hashtag/:title', verifyToken, getPostsByHashtag);

module.exports = router;
