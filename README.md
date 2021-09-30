# criacao-de-apis
Processos de criação de APIs em: JavaScript, TypeScript e React

# Execução do arquivo
```
npm run start
```

Abra o (http://localhost:5000/api) utilizando seu browser para visualização da reposta

# Conceitos
```
const express = require('express');

const api = express();

api.get('/api', (req,res) => {
    res.status(200).send('Hello World API');
});

api.listen(5000, () => {
    console.log('Api is running at http://localhost:5000');
});
```

1. Ao utilizar o **npm run start** estaremos executando o arquivo em Node.JS, sendo que foi passado o caminho do arquivo para execução do projeto;

2. Quando receber uma requisição **get**, no endpoint '/api', estou passando o que desejo que aconteça; 

3. Espero um requição e aguardo uma resposta (req,res);

4. Devolvo uma resposta com o status '200' e envio uma mensagem 'Hello World API'; 