const cors = require("cors");
const express = require('express');
const bodyparser = require('body-parser')
const { success, error } = require("consola");
const { connect } = require('mongoose')

const { DB, PORT } = require('./config')

const app = express()

const startApp = async () => {
    try {
        await connect(DB);
        success({
            message: `Successfully connected with the Database ${DB}`,
            badge: true
        })

        app.listen(PORT, () => success({ message: `Server started on PORT ${PORT}`, badge: true }))
    } catch (err) {
        
        error({
            message: `Unable to connect with the Database ${DB}`,
            badge: true
        })
        startApp();
    }


}

startApp();
