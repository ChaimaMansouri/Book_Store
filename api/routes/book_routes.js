module.exports = function(app) {
    var book = require('../controllers/bookController');
  
   
    app.route('/books')
      .get(book.list_all_books)
      .post(book.create_a_book);
  
  
    app.route('/books/:bookId')
      .get(book.read_a_book)
      .put(book.update_a_book)
      .delete(book.delete_a_book);
  };