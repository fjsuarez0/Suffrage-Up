const models = require("../model/schema_model")
const moment = require("moment")
const d = moment.unix()
module.exports = {
	
	 lastValueSi: () => {
	  return new Promise( (resolve, reject) => {
	    models.models[0].findOne({}, null, {sort: {vote: -1 }}, (err, si)=>{
	      if(err){
	        reject(err)
	      } else{
	        resolve(si)
	      }
	    })
	  })
	},

	 lastValueNo: () => {
	  return new Promise( (resolve, reject) => {
	    models.models[1].findOne({}, null, {sort: {vote: -1 }}, (err, no)=>{
	      if(err){
	        reject(err)
	      } else{
	        resolve(no)
	      }
	    })
	  })
	},

	 lastValueNoSe: () => {
	  return new Promise( (resolve, reject) => {
	    models.models[2].findOne({}, null, {sort: {vote: -1 }}, (err, noSe)=>{
	      if(err){
	        reject(err)
	      } else{
	        resolve(noSe)
	      }
	    })
	  })
	},

	settingDB_Si: () => {
		new Promise ((resolve, reject)=>{
			const si = new models.models[0]({vote: 0, date: d})
			si.save((err)=>{
				if (err) {
					reject(err)
				} else {
					resolve("settingDB_Si")				
				}
			})			
		})

	},
	
	settingDB_NoSe: () => {
		new Promise ((resolve, reject)=>{
			const noSe= new models.models[1]({vote: 0, date: d})
			noSe.save((err)=>{
				if (err) {
					reject(err)
				} else {
					resolve("settingDB_Si")				
				}			
			})			
		})
	},
	
	settingDB_No: () => {
		new Promise ((resolve, reject)=>{
			const no= new models.models[2]({vote: 0, date: d})
			no.save((err)=>{
				if (err) {
					reject(err)
				} else {
					resolve("settingDB_Si")				
				}
			})			
		})

	},
	
	truncateSi: () => {
		return new Promise((resolve, reject) => {
	  		models.models[0].remove({}, (err, data) => {
	  			if (err) {
			      reject(err)
			      } else {
			      	resolve("truncateSi")
			      }
	  		})			
		})

	},

	truncateNo: () => {
		return new Promise((resolve, reject) => {
	  		models.models[1].remove({}, (err, data) => {
	  			if (err) {
			      reject(err)
			      } else {
			      	resolve("truncateNo")
			      }
	  		})			
		})

	},

	truncateNoSe: () => {
		return new Promise((resolve, reject) => {
	  		models.models[2].remove({}, (err, data) => {
	  			if (err) {
			      reject(err)
			      } else {
			      	resolve("truncateNoSe")
			      }
	  		})			
		})

	}	
}