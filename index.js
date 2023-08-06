

const app = require('express')();

app.get('/', (req, res) => {
    res.send('Hello Jihad, My name is Docker!🐳 Nice to meet you!');
    }
)


 const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is up and running on port' + port);
});
