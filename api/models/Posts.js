/**
 * Posts.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  // attributes: {

  // },


  getPosts: function(input, cb){
  	Posts.find().exec(function(err, posts){
  		if(!err){
  			cb(null, posts);
  			
  		}else{
  			cb(err)
  		}
  	});

  }
};

