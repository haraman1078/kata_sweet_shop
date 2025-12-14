const express = require('express');
const router = express.Router();

router.get('/sweets', (req, res) => {
  return res.status(501).json({
    message: 'Not implemented yet'
  });
});

module.exports = router;
