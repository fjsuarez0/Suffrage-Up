const mongoose = require('mongoose')

const Schema = mongoose.Schema

const voteSchemaJson = {
  vote: Number,
  date: String
}

const voteSchema = new Schema(voteSchemaJson)
const voteSi = mongoose.model('voteSi', voteSchema)
const voteNo = mongoose.model('voteNo', voteSchema)
const voteNoSe = mongoose.model('voteNoSe', voteSchema)

const models = [voteSi, voteNo, voteNoSe]


module.exports.models = models