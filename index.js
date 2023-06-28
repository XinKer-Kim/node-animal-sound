const express = require('express')
const app = express()
const port = 3000;
app.use(cors())
app.get('/dog',(req,res) =>{
  res.send({'sound':'멍멍'})
})
app.get('/sound/:name',(req,res) =>{
  const { name } = req.params
  if (name == 'dog'){
    res.json({'sound':'멍멍'})
  } else if (name == 'cat'){
    res.json({'sound':'냥냥'})
  } else {
    res.json({'sound':'ㅁ?ㄹ'})
  }
})
app.get('/user/:id',(req,res) =>{
  // const q = req.params
  // console.log(q)
  const q = req.query
  console.log(q)
  res.json({'userid':q.id})
})

app.listen(port,()=>{

})