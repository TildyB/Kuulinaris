const express = require('express')
const app = express()
const port = 3333
const cors = require('cors')
const fs = require('fs')

app.use(cors())
app.use(express.static('./assets/images'))

const addStuff = () => {
    const parsedData = JSON.parse(fs.readFileSync('./assets/products.json'))
    ///
    parsedData.forEach(item => {
        item.onSale = false
        item.discount = item.price
    })
    ///
    
    let stringy = JSON.stringify(parsedData)
    fs.writeFileSync('assets/products.json', stringy)
    
}

addStuff()

app.get('/', (req, res) => {
    const parsedData = JSON.parse(fs.readFileSync('./assets/products.json'))
    res.send(parsedData)
})


app.listen(port, () => {
    console.log(`Megy a szerver a ${port}-es porton` );
})
