const express = require('express')
const app = express()
const port = 3333
const cors = require('cors')
const fs = require('fs')
const { v4: uuidv4} = require('uuid')


app.use(cors())
app.use(express.static('./assets/images'))

// const addStuff = () => {
//     const parsedData = JSON.parse(fs.readFileSync('./assets/products.json'))
   
//     parsedData.forEach(item => {
//         item.onSale = false
//         item.discount = item.price
//         item.id = uuidv4()
//     })
//     let stringy = JSON.stringify(parsedData)
//     fs.writeFileSync('assets/products.json', stringy) 
// }


app.get('/', (req, res) => {
    const parsedData = JSON.parse(fs.readFileSync('./assets/products.json'))
    res.send(parsedData)
})


app.listen(port, () => {
    console.log(`Megy a szerver a ${port}-es porton` );
})
