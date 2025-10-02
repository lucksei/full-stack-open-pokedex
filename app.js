const express = require('express');
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

// Version route
app.get('/version', (req, res) => {
  return res.send('1.0.0');
});

app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`); // eslint-disable-line 
});
