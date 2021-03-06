require('./config/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Peticion
app.get('/usuario', function (req, res) {
  res.send('get usuario')
})

// Envio
app.post('/usuario', function (req, res) {
  let body = req.body

  if(body.nombre === undefined){
      res.status(400).json({
        ok: false,
        mensaje: 'El nombre es necesario'
      })
  } else {
    res.json({
      persona: body
    })
  }
})

// Actualizacion por usuario
app.put('/usuario/:id', function (req, res) {
  // Obtenemos el parametro
  let id = req.params.id

  res.json({
    id
  })
})

// Borrar
app.delete('/usuario', function (req, res) {
  res.send('delete usuario')
})

app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto: ', process.env.PORT)
})
