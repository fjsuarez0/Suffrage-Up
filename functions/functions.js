const components = require('./components')
const models = require("../model/schema_model")
const date = new Date()
	
	module.exports = {
		
			winner: (req, res) => {

			    Promise.all([			    
			      components.lastValueSi(),
			      components.lastValueNoSe(),
			      components.lastValueNo()
			    ]).then( (response) => {

			        const si = response[0].vote

			        const noSe = response[1].vote

			        const no = response[2].vote

			        if(si > no && si > noSe){

			          res.send("Si")

			        } else if(no > si && no > noSe){

			          res.send("No")

			        } else if(noSe > no && noSe > si){

			          res.send("No se")

			        } else {
			          res.send("Empate")
			        }

			    }).catch( (err) => {
			        
			        console.log(err)

			    })		 		
			},

			pushVoteSi: (req, res) => {

			    models.models[0].findOne({}, null, {sort: {vote: -1}}, (err, siDocs) => {
			    
			    if (err) {
			    
			      console.log(err)
			    
			    }
			    if (siDocs != null) {


			    	let votePlus = siDocs.vote+1
			    	const pointSi  = new 
			    	models.models[0]({vote: votePlus, date: date})
			      	pointSi.save((err, data) => {
			        
				        if(err){
				        
				          console.log(err)
				        
				        }
				        const lastVote = (data.vote).toString()
				        
				        res.send(lastVote)
			      })

			    } else {			    	

			      	const firstPointSi = new models.models[0]({vote: 1, date: date})
			      	
			      	firstPointSi.save((err,data)=>{
			        	
			        	if(err){			        		
			          		console.log(err)
			        	}

			        	res.send(data)
			      })
			    }
			  })
			},

			pushVoteNo: (req, res) => {
				
				models.models[1].findOne({}, null, {sort: {vote: -1}}, (err, noSeDocs) => {
			    
			    if (err) {
			    
			      console.log(err)
			    
			    }

			    if (noSeDocs != null) {
			    
			    let voteNeutral = noSeDocs.vote+1
			    
			    const pointNoSe  = new models.models[1]({vote: voteNeutral, date: date})
			    
			    pointNoSe.save((err, data) => {
			    	
			    	if(err){
			    
			          console.log(err)
			    
			        }
			    
			        const lastVote = (data.vote).toString()
			    
			        res.send(lastVote)
			      })
			    } else {

			        const firstPointNoSe = new models.models[1]({vote: 1, date: date})
	     		    
	     		    firstPointNoSe.save((err,data) => {

				    	if(err){
	
				          console.log(err)
	
				        }
	
				    	res.send((1).toString())
			      	
			      	})
			    }
			  	})
			},

			pushVoteNoSe: (req, res) => {
				
				models.models[2].findOne({}, null, {sort: {vote: -1}}, (err, noSeDocs) => {
			    
			    if (err) {
			    
			      console.log(err)
			    
			    }

			    if (noSeDocs != null) {
			    
			    let voteNeutral = noSeDocs.vote+1
			    
			    const pointNoSe  = new models.models[2]({vote: voteNeutral, date: date})
			    
			    pointNoSe.save((err, data) => {
			    	
			    	if(err){
			    
			          console.log(err)
			    
			        }
			    
			        const lastVote = (data.vote).toString()
			    
			        res.send(lastVote)
			      })
			    } else {

			        const firstPointNoSe = new models.models[2]({vote: 1, date: date})
	     		    
	     		    firstPointNoSe.save((err,data) => {

				    	if(err){
	
				          console.log(err)
	
				        }
	
				    	res.send((1).toString())
			      	
			      	})
			    }
			  	})
			}

	}