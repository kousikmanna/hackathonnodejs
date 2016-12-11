/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var jsonfile = require('jsonfile');
var moment = require('moment');
module.exports = {

  attributes: {

  },


  dumpMongoDB: function(type, cb){
  	if(type == 'Badges'){
		var file = 'files/Badges.json';
		jsonfile.readFile(file, function(err, data) {
		  if(!err){
		  	async.map(data.badges.row, function(dataObj, cb2){
		  		Badges.findOne({'-Id': dataObj['-Id']}).exec(function(err, getData){
		  			if(!err && !getData){
		  				Badges.create(dataObj).exec(function(err, created){
		  					if(!err){
		  						cb2(null, created)
		  					}else{
		  						cb2(err)
		  					}
		  				});
		  			}else if(!err && getData){
		  				cb2(null, {})
		  			}else{
		  				cb2(err)
		  			}
		  		})
		  	},function(err, badges){
		  		cb(null, badges);
		  	})
		  }else{
		  	cb(err)
		  }
		  
		})
  	}else 
  if(type == 'Comments'){
  		var file = 'files/Comments.json';
		jsonfile.readFile(file, function(err, data) {
		  if(!err){
		  	async.map(data.Comments.row, function(dataObj, cb2){
		  		Comments.findOne({'-Id': dataObj['-Id']}).exec(function(err, getData){
		  			if(!err && !getData){
		  				Comments.create(dataObj).exec(function(err, created){
		  					if(!err){
		  						cb2(null, created)
		  					}else{
		  						cb2(err)
		  					}
		  				});
		  			}else if(!err && getData){
		  				cb2(null, {})
		  			}else{
		  				cb2(err)
		  			}
		  		})
		  	},function(err, Comments){
		  		cb(null, Comments);
		  	})
		  }else{
		  	cb(err)
		  }
		  
		})

  	}else if(type == 'PostLinks'){
  		var file = 'files/PostLinks.json';
		jsonfile.readFile(file, function(err, data) {
		   if(!err){
			  	async.map(data.postlinks.row, function(dataObj, cb2){
			  		PostLinks.findOne({'-Id': dataObj['-Id']}).exec(function(err, getData){
			  			if(!err && !getData){
			  				PostLinks.create(dataObj).exec(function(err, created){
			  					if(!err){
			  						cb2(null, created)
			  					}else{
			  						cb2(err)
			  					}
			  				});
			  			}else if(!err && getData){
			  				cb2(null, {})
			  			}else{
			  				cb2(err)
			  			}
			  		})
			  	},function(err, PostLinks){
			  		cb(null, PostLinks);
			  	})
		    }else{
		  	  cb(err)
		    }
		})
  	}else if(type == 'Posts'){
  		var file = 'files/Posts.json';
		jsonfile.readFile(file, function(err, data) {
		   if(!err){
			  	async.map(data.Posts.row, function(dataObj, cb2){
			  		Posts.findOne({'-Id': dataObj['-Id']}).exec(function(err, getData){
			  			if(!err && !getData){
			  				Posts.create(dataObj).exec(function(err, created){
			  					if(!err){
			  						cb2(null, created)
			  					}else{
			  						cb2(err)
			  					}
			  				});
			  			}else if(!err && getData){
			  				cb2(null, {})
			  			}else{
			  				cb2(err)
			  			}
			  		})
			  	},function(err, Posts){
			  		cb(null, Posts);
			  	})
		    }else{
		  	  cb(err)
		    }
		})
  		
  	}else if(type == 'Tags'){

  		var file = 'files/Tags.json';
		jsonfile.readFile(file, function(err, data) {
		   if(!err){
		   		async.map(data.tags.row, function(dataObj, cb2){
			  		Tags.findOne({'-Id': dataObj['-Id']}).exec(function(err, getData){
			  			if(!err && !getData){
			  				Tags.create(dataObj).exec(function(err, created){
			  					if(!err){
			  						cb2(null, created)
			  					}else{
			  						cb2(err)
			  					}
			  				});
			  			}else if(!err && getData){
			  				cb2(null, {})
			  			}else{
			  				cb2(err)
			  			}
			  		})
			  	},function(err, Tags){
			  		cb(null, Tags);
			  	})
		    }else{
		  	  cb(err)
		    }
		})
  		
  	}else if(type == 'Users'){

  		var file = 'files/Users.json';
		jsonfile.readFile(file, function(err, data) {
		   if(!err){
			  	async.map(data.Users.row, function(dataObj, cb2){
			  		Users.findOne({'-Id': dataObj['-Id']}).exec(function(err, getData){
			  			if(!err && !getData){
			  				Users.create(dataObj).exec(function(err, created){
			  					if(!err){
			  						cb2(null, created)
			  					}else{
			  						cb2(err)
			  					}
			  				});
			  			}else if(!err && getData){
			  				cb2(null, {})
			  			}else{
			  				cb2(err)
			  			}
			  		})
			  	},function(err, Users){
			  		cb(null, Users);
			  	})
		    }else{
		  	  cb(err)
		    }
		})
  		
  	}else if(type == 'Votes'){

  		var file = 'files/Votes.json';
		jsonfile.readFile(file, function(err, data) {
		   if(!err){
			  	async.map(data.votes.row, function(dataObj, cb2){
			  		Votes.findOne({'-Id': dataObj['-Id']}).exec(function(err, getData){
			  			if(!err && !getData){
			  				Votes.create(dataObj).exec(function(err, created){
			  					if(!err){
			  						cb2(null, created)
			  					}else{
			  						cb2(err)
			  					}
			  				});
			  			}else if(!err && getData){
			  				cb2(null, {})
			  			}else{
			  				cb2(err)
			  			}
			  		})
			  	},function(err, Votes){
			  		cb(null, Votes);
			  	})
		    }else{
		  	  cb(err)
		    }
		})
  		
  	}

  },

  getUsers: function(input, cb){
  	Users.find().exec(function(err, users){
  		if(!err){
  			cb(null, users);
  		}else{
  			cb(err)
  		}
  	});
  },

  relatedProfileDetail: function(input, cb){
  	var previous = moment(input['-CreationDate']).subtract(365, 'days').toDate();
    var next = moment(input['-CreationDate']).add(365, 'days').toDate();
  	Users.find({'$or' : [{'-CreationDate': {'$gte': previous, '$lt': next}},
			   {'-Age': input['-Age']},
			   {'-Reputation': input['-Reputation']},
			   {'-Location': input['-Location']}],
			   id: { $nin: [input.id]}}).exec(function(err, users){
    		
  		if(!err){
  			cb(null, users);
  		}else{
  			cb(err)
  		}
  	});
  },
   
};

