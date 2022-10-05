const tbdata = require('../Dataset/dataset.js')


const datadetl = (req,res)=>{
    try {
        res.send(tbdata)
    } catch (error) {
       console.log(error); 
    }
}

module.exports = {datadetl}