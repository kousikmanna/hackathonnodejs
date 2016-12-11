/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');
module.exports = {
	dumpMongoDB: function(req, res){
		var type = req.body.type;
		Users.dumpMongoDB(type, function(err, dumpedInMongoDB){


			if(err){
				res.json(err);
			}else{
				res.json(dumpedInMongoDB);
			}
		})
	},

	posts: function(req, res){
		res.view('web/posts');
	},

	getPosts: function(req, res){
		Posts.getPosts(req, function(err, posts){
			if(err){
				res.json(err);
			}else{
				
				_.each(posts, function(post){
					post['-CreationDate'] = moment(posts['-CreationDate']).format('MMMM Do YYYY, h:mm:ss a');

				})
				res.json(posts);
			}
		})
	},
	profiles: function(req, res){
		res.view('web/profiles');
	},

	profileList: function(req, res){
		Users.getUsers(req, function(err, users){
			if(err){
				res.json(err);
			}else{
				res.json(users);
			}
		})
	},

	relatedProfileDetail: function(req, res){
		var input = req.body;
		sails.log.debug('input',input);
		Users.relatedProfileDetail(input, function(err, users){
			if(err){
				res.json(err);
			}else{
				res.json(users);
			}
		})
	},

};

