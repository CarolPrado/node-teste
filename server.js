const express = require('express');
const port = process.env.PORT || 3000;

var app = express()

app.get('/', (req, res) => {
	res.send('<h1>Olar</h1>')
})

app.get('/olar', (req, res) => {
	res.send({
		olar: 'olar',
		olar1: 'olar1',
		olar2: [
			'olar3',
			'olar4'
		]
	})
})

app.get('/bad', (req, res) => {
	res.send({
		error: {
			code: 6969,
			description: 'deu erro'
		}
	})
})

app.listen(port, () => {
	console.log(`Servidor rodando na porta: ${port}`)
});