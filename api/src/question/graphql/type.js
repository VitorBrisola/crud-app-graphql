var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

exports.Type = new GraphQLObjectType({
    name: 'question',
    fields:  () =>{
        return {
            id: {       type: new GraphQLNonNull(GraphQLID)     },      
            description: {        type: GraphQLString      },  
            //answers: {        type: new GraphQLList(AnswerType)     }        
        }
    }
});