const readlineSync = require('readline-sync');

const chalk = require('chalk');

//default value
let score = 0;


// function for new line
function newLine(){
  console.log("\n");
}

// guide
console.log(chalk.white.bgBlack.bold("hello there this is my first CLI app. \nguess how much you know me 😁 \neach correct guess gives you one point"));

newLine();

let userName = readlineSync.question("what's your name: ");

console.log("hi " + userName + "\nlet's get started");

newLine();


// destructuring 
let arr = [
  {que:"1. What is my city name: ",ans:"udaipur"},
  {que:"2. Whom i like the most dogs/cats: ",ans:"both"},
  {que:"3. Do i have a girlfriend yes/no: ", ans:"no"},
  {que:"4. Which anime is my fev: ",ans:"naruto"},
  {que:"5. My fev hobby: ",ans:"swimming"}
];


// loop for Q/A
for(let i=0; i<arr.length;i++){
    let userAns = readlineSync.question(arr[i].que);
    if(userAns.length > 0){
      if(userAns.toLowerCase() === arr[i].ans){
      console.log("wow!!🥳 correct its "+ arr[i].ans);
      score++;
      console.log("your current score: " + score);
      newLine();
      }else{
      console.log("thats not the correct🤕 ans correct ans is " + arr[i].ans);
      newLine();
    }
    
  }
  else{
    i--;
    console.log("Please enter an answer.")
  }
}

console.log("Your finnal score is: "+ score);

newLine();

if(score >= (arr.length/2)){
  console.log("yeah!! you the best " + userName);

}else{
  console.log("ohh you don't know me");
  console.log("lets be friends \ni dont want you to loss next time");
  console.log("harshit#9241 add me on discord")
}
