var express = require('express')

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

app.listen('3000')