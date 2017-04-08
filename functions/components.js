const models = require("../model/schema_model")
module.exports = {
	 lastValueSi: () => {
	  return new Promise( (resolve, reject) => {
	    models.models[0].findOne({},null,{sort: {vote: -1 }}, (err, si)=>{
	      if(err){
	        console.log(err)
	        reject()
	      }else{
	        resolve(si)
	      }
	    })
	  })
	},

	 lastValueNo: () => {
	  return new Promise( (resolve, reject) => {
	    models.models[1].findOne({},null,{sort: {vote: -1 }}, (err, no)=>{
	      if(err){
	        console.log(err)
	        reject()
	      }else{
	        resolve(no)
	      }
	    })
	  })
	},

	 lastValueNoSe: () => {
	  return new Promise( (resolve, reject) => {
	    models.models[2].findOne({},null,{sort: {vote: -1 }}, (err, noSe)=>{
	      if(err){
	        console.log(err)
	        reject()
	      }else{
	        resolve(noSe)
	      }
	    })
	  })
	}	

/*
function lastValueSi(){
  return new Promise( (resolve, reject) => {
    voteSi.findOne({},null,{sort: {vote: -1 }}, (err, si)=>{
      if(err){
        console.log(err)
        reject()
      }else{
        resolve(si)
      }
    })
  })
}


function lastValueNo(){
  return new Promise( (resolve, reject) => {
    voteNo.findOne({},null,{sort: {vote: -1 }}, (err, no)=>{
      if(err){
        console.log(err)
        reject()
      }else{
        resolve(no)
      }
    })
  })
}

function lastValueNoSe(){
  return new Promise( (resolve, reject) => {
    voteNoSe.findOne({},null,{sort: {vote: -1 }}, (err, noSe)=>{
      if(err){
        console.log(err)
        reject()
      }else{
        resolve(noSe)
      }
    })
  })
}
*/
}