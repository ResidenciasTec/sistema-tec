const express = require('express');
const app = express();

app.use(express.static('./dist/tec-materiales'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/tec-materiales/'}
  );
  });

  app.listen(process.env.PORT || 8080);