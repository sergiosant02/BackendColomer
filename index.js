const express = require('express')
const cors = require('cors')
require('dotenv').config()
const path = require('path')
const helmet = require('helmet')

const app = express()
app.use(express.json()) // parser de requests body como json
app.use(cors()) // habilita peticiones desde otro dominio
app.use(helmet()) // seguridad general en servicios REST



const { initSequelize } = require('./config/sequelize')
const sequelize = initSequelize()
console.log('init')
sequelize.sync({force:true})
    .then((value) => console.log('Sincronizado', value.json))
    .catch((err) => console.log(err))

sequelize.authenticate()
  .then(() => {
    console.info('INFO - Database connected.')
    const port = process.env.APP_PORT || 3600
    return app.listen(port)
  })
  .then((server) => {
    console.log('Deliverus listening at http://localhost:' + server.address().port)
  })
  .catch(err => {
    console.error('ERROR - Unable to connect to the database:', err)
  })