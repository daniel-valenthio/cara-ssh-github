const express = require('express');
const router = express.Router();
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
// @route POST api/users
// @desc Register user
// @access Public
router.post('/', [
  check('name', 'Nama harus di isi').not().isEmpty(),
  check('email', 'Isi dengan valid email').isEmail(),
  check('password', 'Isi password minimal 6 atau lebih karakter').isLength({
  min: 6 })
  ],
  (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
  }
  res.send('User route')
});

// export route
module.exports = router;