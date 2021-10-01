# criacao-de-apis
Processos de criação de APIs em: JavaScript, TypeScript e React

# Execução do arquivo
```
npm run start
```

Abra o (http://localhost:5000/api) utilizando seu browser para visualização da reposta

# Criação de uma API utilizando JavaScript
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

# Criação de uma API utilizando TypeScript
1. Inicializa o arquivo package.json com configurações prévias
```
npm init -y
```

2. Instalar as dependências do TypeScript como ferramente de desenvolvimento
```
npm i --save-dev typescript 
```

3. Instalar o ts-node que é o compilador para código TypeScript e instalar a dependência do **nodemon** para que ele realize um **live reload** da sua aplicação. 
```
npm install --save-dev nodemon
```

4. Para instalação global na máquina, utiliza-se
```
npm install -g nodemon
```

5. Inserindo em **scripts** o "start": nodemon 

6. Instalar localmente a dependência no computador do TypeScript, gerando um arquivo de configuração para o TypeScript chamado de tsconfig.json
```
npx tsc --init
```

7. Script **start**
Inicializa a aplicação 
```
npm start
```

8. Script **build**
Vai converter o nosso arquivo TypeScript em JavaScript

