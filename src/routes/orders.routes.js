const express = require('express');
const router = express.Router();

router.post('/orders', (req, res) => {
  return res.status(501).json({
    message: 'Order system not implemented yet'
  });
});

module.exports = router;
