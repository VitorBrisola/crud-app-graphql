var GraphQLList = require('graphql').GraphQLList;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLNonNull = require('graphql').GraphQLNonNull;

var Model = require('../mongodb/schema');
var Type = require('./type').Type;

const questions = {
  type: new GraphQLList(Type),
  resolve:  async ()=> {
    const quests = await Model.find()
    if (!quests) {
            throw new Error('error while fetching data')
    }
    return quests
  }
}

const question = {
  type: Type,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async(root, args)=> { 
    const quest = await Model.findById(args.id)
    if (!quest) {
      throw new Error('error');
    }
    return quest
  }
}

module.exports = {
  questions,
  question
}