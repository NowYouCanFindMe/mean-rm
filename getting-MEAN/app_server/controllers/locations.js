/* GET 'home' page */
module.exports.home = function(req, res){
  res.render('index', { title: 'Home' });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
  res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
};
