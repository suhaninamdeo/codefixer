import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/fix-code', (req, res) => {
  const { code, language } = req.body;

  // Dummy response
  const fixedCode = `console.log("Hello from dummy CodeFixer!");`;

  res.json({ fixedCode });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
