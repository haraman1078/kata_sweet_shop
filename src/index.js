const express = require('express');
const sweetsRoutes = require('./routes/sweets.routes');

const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const authMiddleware = require('./middleware/auth.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', sweetsRoutes);


app.get('/protected', authMiddleware, (req, res) => {
  res.json({
    message: 'Access granted',
    user: req.user,
  });
});
app.get('/', (req, res) => {
  res.send('Sweet Shop API is running');
});

//  ONLY start server if file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
