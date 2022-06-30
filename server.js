const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'Chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'Dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
    
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappers]){
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
    // response.json(rappers)
})
app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better catch it!`)
})