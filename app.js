const express = require('express');
const path = require('path');
const app = express();
const port = 4009;

app.use(express.static(path.join(__dirname,'routes')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,('routes','index.html')))
});
app.listen(port,()=>{
    console.log(`this website start on port no:${port}`);
})