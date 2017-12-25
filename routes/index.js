const express = require('express');

const router = express.Router();

//import Template from './components/Template';

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MusicList Alpha' });
});

module.exports = router;
