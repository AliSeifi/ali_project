
/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
  res.render('home/index', {
    title: 'Node Express Mongoose Boilerplate'
  });
};

exports.ali = function (req, res) {
	var ali_profile = {
		"name": "Ali",
		"gender": "male",
		"job": "teacher"

	};

	res.send(ali_profile);
}

exports.ali_marriage_states=function(req,res){
	var ali_marriage_states=true;
	res.send(ali_marriage_states);
}
 exports.ali_facebook_details=function(req,res){
	var ali_facebook_details={
		"name":"Ali",
		"facebook_id":"1234"

	};
	res.send(ali_facebook_details);
}