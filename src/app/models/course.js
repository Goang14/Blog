const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Courses = new Schema({
  name: {type: String, maxLength:255},
  age: {type: String, maxLength:255},
  address:  {type: String, maxLength:255},
  price: {type: String, maxLength:255},
  img:  {type: String, maxLength:255},
  slug:  {type: String, slug: 'name'},
  createAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Courses', Courses);