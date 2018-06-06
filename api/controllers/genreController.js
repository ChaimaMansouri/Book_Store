var mongoose = require('mongoose'),
  genre = mongoose.model('genre');

exports.list_all_genres = function(req, res) {
  genre.find({}, function(err, genre) {
    if (err)
      res.send(err);
    res.json(genre);
  });
};


exports.create_a_genre = function(req, res) {
  var new_genre = new genre(req.body);
  new_genre.save(function(err, genre) {
    if (err)
      res.send(err);
    res.json(genre);
  });
};


exports.read_a_genre = function(req, res) {
  genre.findById(req.params.genreId, function(err, genre) {
    if (err)
      res.send(err);
    res.json(genre);
  });
};


exports.update_a_genre = function(req, res) {
  genre.findOneAndUpdate({_id: req.params.genreId}, req.body, {new: true}, function(err, genre) {
    if (err)
      res.send(err);
    res.json(genre);
  });
};


exports.delete_a_genre = function(req, res) {
  genre.remove({
    _id: req.params.genreId
  }, function(err, genre) {
    if (err)
      res.send(err);
    res.json({ message: 'genre successfully deleted' });
  });
};

