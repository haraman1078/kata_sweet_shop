const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/sweets', authMiddleware, (req, res) => {
  return res.status(403).json({ message: 'Admin access required' });
});

module.exports = router;
