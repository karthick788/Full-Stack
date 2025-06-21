function bmical(weight,height){
    let ans = Math.round(weight/(height*height));
    if (ans < 18.5){
        console.log(`Your BMI is ${ans} so your are Underweight`); 
    } 
    else if (ans > 18.5 && ans <= 24.9) {
        console.log(`Your BMI is ${ans} so your are Normalweight`);
    } else {
        console.log(`Your BMI is ${ans} so your are Overweight`);  
    }
}
bmical(65,1.8);