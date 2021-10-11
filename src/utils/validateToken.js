const validateToken = (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
  } catch (err) {
    res.status(401).json({ success: false, message: 'Unauthorized Access' });
  }
};

module.exports = validateToken;
