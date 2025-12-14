const express = require('express');
const prisma = require('../prisma');
const authMiddleware = require('../middleware/auth.middleware');
const adminMiddleware = require('../middleware/admin.middleware');

const router = express.Router();

router.post('/sweets', authMiddleware, adminMiddleware, async (req, res) => {
  const { name, category, price, quantity } = req.body;

  const sweet = await prisma.sweet.create({
    data: { name, category, price, quantity },
  });

  res.status(201).json(sweet);
});

module.exports = router;
