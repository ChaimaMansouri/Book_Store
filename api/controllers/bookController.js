var mongoose = require('mongoose'),
  book = mongoose.model('book');

exports.list_all_books = function(req, res) {
  book.find({}, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.create_a_book = function(req, res) {
  var new_book = new book(req.body);
  new_book.save(function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.read_a_book = function(req, res) {
  book.findById(req.params.bookId, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.update_a_book = function(req, res) {
  book.findOneAndUpdate({_id: req.params.bookId}, req.body, {new: true}, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.delete_a_book = function(req, res) {
  book.remove({
    _id: req.params.bookId
  }, function(err, book) {
    if (err)
      res.send(err);
    res.json({ message: 'book successfully deleted' });
  });
};

