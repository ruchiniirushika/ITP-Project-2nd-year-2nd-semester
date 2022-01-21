const cors = require("cors");
const express = require('express');
const bodyparser = require('body-parser')
const  { success , error } = require("consola");
const {connect} = require('mongoose')

const { DB , PORT } = require('./config')

const app = express()

app.listen(PORT , ()=>success({message:`Server started on PORT ${PORT}` , badge:true}))