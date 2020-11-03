import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de Usuários');

  response.json([
    'Gabriel',
    'Felipe',
    'Souza',
    'Santos',
  ]);
});

app.listen(3333, () => {
  console.log('Server is running!!');
});