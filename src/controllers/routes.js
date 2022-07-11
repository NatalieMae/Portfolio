const { getModulesPluginNames } = require('@babel/preset-env')

require('dotenv').config()
const router = require('express').Router()  
const App = router()    

router.get('*', (req, res) => {
    console.log("Take One", getModulesPluginNames)
    res.send('Index')
})

module.export = router