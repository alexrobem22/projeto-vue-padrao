const express = require("express")
const app = express()
const porta = process.env.PORT || 8080

//responser a requisições feitas para o servidor web por meio da rota get
app.use(express.static(__dirname + '/dist/'))

app.get('/', function(req, res){
    //send = pega o retorno
    res.sendfile(__dirname + '/dist/index.html')
})

//listen fica ouvindo as requisições
app.listen(porta, function(){
    console.log('Servidor web rodando com EXpress')
})