<pre><code>yarn init -y</code></pre>
<pre><code>yarn add express</code></pre>
<pre><code>yarn add nodemon -D</code></pre>
<pre><code>npx nodemon src/index.js</code></pre>

- yarn.lock é o arquivo reponsável por travar as versões dos pacotes utilizados, sendo assim
  quando alguém querer baixar os projetos, ele garante que irá instalar os pacotes exatamente
  na versão em que o sistema foi desenvolvido.

- Porque o node_modules já tem tantas depêndencias? Se abrirmo o package.json do express, podemos
  observar que existe várias depêndencias, onde essas tem mais depêndencias também, e fica nessa recursividade. Por isso esse tanto de pacotes já no começo do nosso desenvolvimento.

- Com o nodemon não precisamos ficar parando o servidor e subindo novamente a cada nova
  alteração que fazemos, ele atualiza automaticamente toda vez que salvamos. Se quiser reiniciá-lo
  pelo terminal, é só digitar "rs".

- Os NPM scripts servem para duas coisas basicamente: automatizar alguns processos e pra criar atalhos
  para comando que são muito repetitivos.

- Hooks são comandos que executam automaticamente em momentos pré estabelecidos. Add o comando
  dev no package.json para iniciar nosso servidor, um alias para "nodemon src/index.js". Porém se for rodar
  esse comando com o npm "npm dev" não irá funcionar, pois o npm procura nos comandos pré-estabelecidos.
  Para funcionar precisamos fazer "npm run dev".
