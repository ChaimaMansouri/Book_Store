module.exports = function(app) {
    var genre = require('../controllers/genreController');
  
   
    app.route('/genres')
      .get(genre.list_all_genres)
      .post(genre.create_a_genre);
  
  
    app.route('/genres/:genreId')
      .get(genre.read_a_genre)
      .put(genre.update_a_genre)
      .delete(genre.delete_a_genre);
  };