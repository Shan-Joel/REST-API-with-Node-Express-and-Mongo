const express = require('express');

const router = express.Router();

// Routes
router.get('/', (req, res) => {
   res.send('Posts Page');
});

router.get('/specific', (req, res) => {
   res.send('Specific Page');
});

module.exports = router;
