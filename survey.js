const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable", (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question("What's an activity you like doing?", (answer2) => {
    console.log(`${answer2} is very cool!`);
    rl.question("What do you listen to while doing that?", (answer3) => {
      console.log(`Listening to ${answer3} while doing ${answer2} is great!`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.", (answer4) => {
        console.log(`I like ${answer4} too!`);
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          console.log(`I like ${answer5} too!`);
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            console.log(`Don't forget to play ${answer6} after the bootcamp!`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`${answer7} is something I always wanted to try!`);
              rl.close();
            });
          });
        });   
      }); 
    });
  });
});




/*rl.question("What's an activity you like doing?", (answer) => {
  console.log(`${answer} is very cool!`);

  rl.close();
});*/


/*rl.question("What do you listen to while doing that?"), (answer) => {
  console.log(`I will try lisetning ${answer} when I`);

  rl.close();
}); */








/*What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at! */
