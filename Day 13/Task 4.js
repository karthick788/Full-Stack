function main(){
   FirstRow();
   turnl();
   SecondRow();
   turnr();
   FirstRow();
   turnl();
   SecondRow();
   turnr();
   FirstRow();
}
function FirstRow(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}  
function turnl(){    
   turnLeft();
   move();
   turnLeft();
}
function SecondRow(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
function turnr(){
   turnRight();
   move();
   turnRight();
}