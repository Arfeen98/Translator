const translate = require('translate-google')
const express = require('express')
const app = express()
app.use(express.json())

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
    console.log("listening to port 6767")
})
// const tranObj = {
//     a: 1,
//     b: '1',
//     c: "నీ పేరు ఏమిటి'",
//     d: [true, 'true', 'hi', { a: 'get lost', b: ['world']}],
//   }
  
//   translate(tranObj, {to: 'hi', except:['a']}).then(res => {
//       console.log(res)
//   }).catch(err => {
//       console.error(err)
//   })
//   translate(tranObj, {to: 'en', except:['a']}).then(res => {
//       console.log(res)
//   }).catch(err => {
//       console.error(err)
//   })
//   translate(tranObj, {to: 'es', except:['a']}).then(res => {
//       console.log(res)
//   }).catch(err => {
//       console.error(err)
//   })
//   translate(tranObj, {to: 'bn', except:['a']}).then(res => {
//       console.log(res)
//   }).catch(err => {
//       console.error(err)
//   })
//   translate(tranObj, {to: 'fr', except:['a']}).then(res => {
//       console.log(res)
//   }).catch(err => {
//       console.error(err)
//   })
  