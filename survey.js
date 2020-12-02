const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Your name: ${answer}`);
  rl.question('What\'s an activity you like doing? ', (ans) => {
    console.log(`Your activity: ${ans}`);
    rl.question('What do you listen to while doing that? ', (song) => {
      console.log(`Your song: ${song}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        console.log(`Your favourite meal: ${meal}`);
        rl.question('What\'s your favourite thing to eat for that meal?', (item) => {
          console.log(`Your favourite food: ${item}`)
          rl.question('Which sport is your absolute favourite?', (sport) => {
            console.log(`Your sport: ${sport}`)
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (power) => {
              console.log(`Your power: ${power}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});