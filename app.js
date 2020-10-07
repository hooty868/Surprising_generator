// include package and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateSentence = require('./generateSentence.js')
const app = express()
const port = 3000

// data for Generater
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}
const phrase = ['很簡單', '很容易', '很快', '很正常']

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const sentence = generateSentence(options, task, phrase)
  res.render('index', { options, sentence })
})

// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})