const components = require('./components')
const models = require("../model/schema_model")
const moment = require("moment")
const date = moment.unix()
	
	module.exports = {
			configureDB: () => {
				Promise.all([
					components.settingDB_Si(),
					components.settingDB_NoSe(),
					components.settingDB_No()
				]).then((response) => {
				const message = response.reduce((previus, current) => {
					return previus+" "+current
				})
				console.log(message) // La Base de Datos esta limpia y configurada ;			        		
    		}).catch((err) => {
    			console.error(err)
   			})				
   		},

			truncateAll: (req, res) => {
			   
			    Promise.all([			    
			      components.truncateSi(),
			      components.truncateNoSe(),
			      components.truncateNo()
			    ]).then( (response) => {
			    	
			    	var log = response.reduce((previus, current) => {
			    		return previus+" "+current
			    	})			     			    	
			    	console.log(log+": Arepa") // Welcome to Javascript ;)
			    }).catch( (err) => {			         
			    	console.log(err)
			    })		 		

					Promise.all([
						components.settingDB_Si(),
						components.settingDB_NoSe(),
						components.settingDB_No()
					]).then((response) => {
					const message = response.reduce((previus, current) => {
						return previus+" "+current
					})
					console.log(message) 
					}).catch((err) => {
						console.error(err)
					})						
					res.status(200).send("All is great")
			},
			winner: (req, res) => {

			    Promise.all([			    
			      components.lastValueSi(),
			      components.lastValueNoSe(),
			      components.lastValueNo()
			    ]).then( (response) => {
			   		
			   		if (response[0] == null, response[1] == null, response[2] == null) {
	
			    		configureDB() 					    	
	
			    	} 
	
			    	const si = response[0].vote

		        const noSe = response[1].vote

		        const no = response[2].vote			    				  	
			    					       				        
		        if (si > no && si > noSe) {

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
			    	const pointSi  = new  models.models[0]({vote: votePlus, date: date})
			      	pointSi.save((err, data) => {
			        
				        if(err){
				        
				          console.log(err)
				        
				        }
				        const lastVote = (data.vote).toString()
				        console.log(lastVote)
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