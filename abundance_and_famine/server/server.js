import express from 'express';
import path from 'path';

const app = express();
const publicPath = path.resolve('../abundance_and_famine/public')
console.log(publicPath);
app.use(express.static(publicPath));

app.get('/', function (req, res) {
  const indexPath = path.resolve('../abundance_and_famine/index.html')
  console.log(indexPath);
  res.sendFile(indexPath);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
