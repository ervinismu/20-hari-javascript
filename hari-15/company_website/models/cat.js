let mongoose = require('mongoose');

// schema
var kittySchema = new mongoose.Schema({
  name: String,
  age: { 
    type: Number,
    min: [2, 'Kucingnya terlalu muda!'],
    max: [5, 'Melampaui batas maksimum umur yang ditentukan!'],
    required: true
  }
});

// method
kittySchema.methods.hello = function(){
  let teks = `Hello my name ${this.name}, and i'am ${this.age} y.o, miaow!`
  console.log(teks);
};

// exports model
module.exports = mongoose.model('Cat', kittySchema);
