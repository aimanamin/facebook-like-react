module.exports = {
  presets: [
    "@babel/preset-env", //responsável por alterar funcionalidades do javascript que o navegador nao entender (import, export, arrow func) 
    "@babel/preset-react" //responsável por alterar funcionalidades do react
   ],
   plugins: [
     '@babel/plugin-proposal-class-properties',
   ]
}