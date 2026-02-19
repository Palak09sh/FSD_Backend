const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/systemInfo", (req, res) => {
  res.json({
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    cpuArch: os.arch(),
    userInfo: os.userInfo(),
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
