const readlineSync = require('readline-sync');

const chalk = require('chalk');

//default value
let score = 0;

const wrong = chalk.white.bgRed.bold('wrong');



// function for new line
function newLine(){
  console.log("\n");
}
// function for intro
function intro(){
console.log(chalk.white.bgBlack.bold("hello there this is my first CLI app. \nguess how much you know me 😁 \neach correct guess gives you one point"));
}

let userName = readlineSync.question("what's your name: ");

if(userName.length > 0){
  console.log("hi " + userName + "\nlet's get started");
  newLine();
  // guide
  intro();
}else{
  console.log("Hello Mr anonymous \nlet's get started");
  newLine();
  // guide
  intro();
}

newLine();



let arr = [
  {que:"1. What is my city name: ",ans:"udaipur"},
  {que:"2. Whom i like the most dogs/cats: ",ans:"both"},
  {que:"3. Do i have a girlfriend yes/no: ", ans:"no"},
  {que:"4. Which anime is my fev: ",ans:"naruto"},
  {que:"5. My fev hobby: ",ans:"swimming"},
  {que:"6. Do i like marvel yes/no ",ans:"no"}
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
      console.log(`that's ${wrong}🤕 ans correct ans is ` + arr[i].ans);
      console.log("your current score: " + score);
      newLine();
    }
    
  }
  else{
    i--;
    console.log("Please enter an answer.");
    newLine();
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
