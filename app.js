/*Note to self, Fix all spelling errors!*/
var userName = prompt('Let\'s get to know each other! What\'s your name?');
console.log('userName = ' + userName);

alert('Nice to meet\'cha ' + userName + '! Before you dig into my webpage, let\'s play a quick guessing game, shall we?');

var questionOne = prompt('Do you think I love animals?').toUpperCase();
console.log('questionOne = ' + questionOne);
if(questionOne === 'Y') {
  console.log('First if');
  alert('You got it ' + userName + '! I take care of several diffrent animals at home!');
} else {
  console.log('First else');
  alert('Turns out, I love just about every animal on this planet. Even spiders, spiders are cool just so long as they aren\'t on me');
}
var questionTwo = prompt('Do you think I like bungie jumping?').toUpperCase();
console.log('questionTwo = ' + questionTwo);
if(questionTwo === 'N') {
  console.log('Second if');
  alert('You\'re right, I have acrophobia\(fear of heights\)!');
} else {
  console.log('Second else');
  alert('Well, ' + userName + ' as you get to know me, you\'ll start to understand that my fear of hieghts prevents me from even considering crazy things like bungie jumping.');
}
var questionThree = prompt('Is there a better video game than "Zelda: Ocarina of Time?"').toUpperCase();
console.log('questionThree = ' + questionThree);
if (questionThree === 'N') {
  console.log('Third if');
  alert('Glad to see we agree. Just thinking about that game, makes me want to play it.');
}else{
  console.log('Third else');
  alert('While you\'re allowed to have an opnion, I don\'t agree with it ' + userName + '!' );
}
var questionFour = prompt('Is pie better than cake?').toUpperCase();
console.log('questionFour = ' + questionFour);
if (questionFour === 'Y'){
  console.log('Fourth if');
  alert('I think we can be friends! After all, pie is the holy grail of desserts');
}else{
  console.log('Fourth else');
  alert('Oh, No. You\'re very wrong. Very wrong indeed. Nothing beats pie, cake is a lie!');
}
var questionFive = prompt('Do you think I\'m afraid of sharks?').toUpperCase();
console.log('questionFive = ' + questionFive);
if(questionFive === 'N' || questionFive === 'NO'){
  console.log ('Fith if');
  alert('You\'re right. Sharks are actually very misunderstood creatures. Most shark "Attacks" are a case of mistaken identity.');
} else{
  console.log('Fith else');
  alert('Belive it or not, I have no fear of sharks. I\'ve dove with them several times. I\'m actually way more afraid of porpoises.');
}
var jeffTopAnimals = ['dogs','cats','otters','octopus','hedghogs'];
var questionSix = prompt('What is one of my top five favorit animals?').toLowerCase();
console.log('questionSix = ' + questionSix);
if (jeffTopAnimals.indexOf(questionSix) === -1) {
  console.log('Sixth if');
  alert('I probably do love ' + questionSix + ', but it\'s not one of my top five animals.');
} else {
  console.log('Sixth else');
  var answerToSix = jeffTopAnimals.indexOf(questionSix);
  console.log ('answerToSix = ' + answerToSix);
  alert('Great guess, ' + jeffTopAnimals[answerToSix] + ' is in my top five!' );
}

alert('Welp, thats all ' + userName + ', thanks for playing! I hope you leanred something aobut me.');
console.log('Full javascript was sucessfull');


//don't forget pseduo code/console.log()

/* guessing game format;

var questionOne= prompt ('');
      questionOne = questionOne.toUpperCase();
      console.log('this is the first value of questionOne ' + questionOne)

        if(questionOne === 'Y'){
          console.log('This is the if')
          alert('' + userName + '');
        } else {
          console.log('this is the else')
          alert ('' + userName + '');
        };
        */
