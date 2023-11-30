const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
});

router.get('/dashboard', (req, res) => {
});

router.get('/post/:id', (req, res) => {
});

module.exports = router;
