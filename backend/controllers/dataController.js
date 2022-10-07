const tbdata = require('../Dataset/dataset.js')


const datadetl = (req,res)=>{
    try {
        res.json(tbdata)
        console.log(tbdata);
    } catch (error) {
       console.log(error); 
    }
}

module.exports = {datadetl}