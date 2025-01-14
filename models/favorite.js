// models/favorite.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dishes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'dish'
  }]
}, {
  timestamps: true
});

const Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites;
