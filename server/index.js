const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/fix", (req, res) => {
  try {
    const { code } = req.body;

    if (!code || typeof code !== "string") {
      return res.status(400).json({ error: "Invalid code input" });
    }

    // Dummy formatting
    const fixedCode = `// AI Fixed Code:\nfunction test() {\n  console.log("hi");\n}`;

    return res.status(200).json({ fixedCode });
  } catch (error) {
    console.error("❌ Backend error:", error);
    return res.status(500).json({ error: "Failed to format code" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend is running on port ${PORT}`);
});
