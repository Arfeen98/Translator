const translate = require('translate-google')
const tranObj = {
    a: 1,
    b: '1',
    c: "నీ పేరు ఏమిటి'",
    d: [true, 'true', 'hi', { a: 'hello', b: ['world']}],
  }
  
  translate(tranObj, {to: 'hi', except:['a']}).then(res => {
      console.log(res)
  }).catch(err => {
      console.error(err)
  })
  translate(tranObj, {to: 'en', except:['a']}).then(res => {
      console.log(res)
  }).catch(err => {
      console.error(err)
  })
  translate(tranObj, {to: 'es', except:['a']}).then(res => {
      console.log(res)
  }).catch(err => {
      console.error(err)
  })
  translate(tranObj, {to: 'bn', except:['a']}).then(res => {
      console.log(res)
  }).catch(err => {
      console.error(err)
  })
  translate(tranObj, {to: 'fr', except:['a']}).then(res => {
      console.log(res)
  }).catch(err => {
      console.error(err)
  })
  