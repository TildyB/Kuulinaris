const express = require('express')
const app = express()
const port = 3333
const cors = require('cors')
const mongoose = require('mongoose')
const Products = require('./model/Products')


app.use(cors())
app.use(express.static('./assets/images'))

// const addStuff = () => {
//     const parsedData = JSON.parse(fs.readFileSync('./assets/products.json'))
   
//     parsedData.forEach(item => {
        
//         let newname = ""
//         for (let i = 0; i < item.filename.length; i++) {
//             if (item.filename[i+1] === ".") {
//                 newname += item.filename[i]
//                 item.articleNumber = newname
//                 return newname
//             } else {
//                 newname += item.filename[i]
//                 item.articleNumber = newname
//             }
//         }
//     })
//     let stringy = JSON.stringify(parsedData)
//     fs.writeFileSync('assets/products.json', stringy) 
// }

// addStuff()

require('dotenv').config()

mongoose.connect('mongodb+srv://hospitalsDB:hospitalsDB2023@hospital.shz8y3u.mongodb.net/Kuulinaris')
// .then(
//     (response) => {console.log("Működik!")} 
// ).catch(err => console.log("Jaj error van"))


app.get('/', async (req, res) => {
   
    const allProducts = await Products.find()
    res.send(allProducts)
})


app.listen(port, () => {
    console.log(`Megy a szerver a ${port}-es porton` );
})
