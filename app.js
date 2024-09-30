const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express()

app.set('view engine','ejs')
app.use(expressLayouts)

app.use(express.static(path.join(__dirname,'public')))

//utilizamos router
const router = require('./routes/routes')
app.use(router.routes)

// app.get('/',(req,res)=>{
//     res.send('Dashboard con Node JS')
// })

app.listen(3000, ()=>{
    console.log('Server up runnung in http://localhost:3000')
    
});
