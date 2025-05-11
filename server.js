const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { user_id, input } = req.body;

  const numbers = input.filter(ch => !isNaN(ch));
  const alphabets = input.filter(ch => /^[a-zA-Z]$/.test(ch));
  const lowercaseAlphabets = alphabets.filter(ch => ch === ch.toLowerCase());
  const highestAlphabet = lowercaseAlphabets.sort().reverse()[0] || null;

  res.json({
    is_success: true,
    user_id,
    email: "example@bajajfinserv.in",
    roll_number: "AB1234",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
