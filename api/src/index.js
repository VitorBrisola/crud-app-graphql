const express = require('express')
const app = express()
const mongoose = require('mongoose');
// import graphql-express and BookSchema
const graphqlExpress = require("express-graphql");
const Schema = require('./schema').Schema;
const cors = require('cors');	

//connecting to mongodb
mongoose.connect('mongodb://mongo/myappdb', { useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if (err) throw err;
    console.log("connected to mongo");
})  

app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), ()=> {    
    console.log("Node app is running at localhost:" + app.get('port'))
});

console.log("Is watching changes He")

app.use(cors());
//add the schema to graphql-express 
app.use('/graphql', graphqlExpress({
    schema: Schema,
    rootValue: global,
    graphiql: true
}));


