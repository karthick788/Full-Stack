function bmical(weight,height){
    return weight/(height*height);
}

var bmi = bmical(65,1.8);
console.log(Math.round(bmi));