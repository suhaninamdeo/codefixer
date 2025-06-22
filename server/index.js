const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/fix', (req, res) => {
  const { code } = req.body;

  // Dummy response — always send this back
  const fixedCode = `// AI Fixed Code:\nfunction test() {\n  console.log("hi");\n}`;
  res.json({ fixedCode });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
