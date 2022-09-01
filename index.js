const translate = require('translate-google')
const express = require('express')
const app = express()
app.use(express.json())
app.get("/", (req,res)=>
{
res.send("welcome to home page")
})

app.post("/translate", (req, res)=>{
    console.log(req.body)
    const {fromLanguage, toLanguage, sentence} = req.body
    const tranObj = {
        a: 1,
        b: '1',
        c: sentence,
        d: [true, 'true', fromLanguage, { a: 'hello', b: ['world']}],
    }
    translate(tranObj, {to: toLanguage, except:['a']}).then(data => {
              res.send(data)
          }).catch(err => {
             res.send(err)
    })
})
app.listen(6767, ()=>{
    console.log("listening to port 6767");
})
