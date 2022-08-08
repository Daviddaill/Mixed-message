//create an object  that generate random word from a library
const generator = {
  robotName: ['Optimus Prime', 'Bolt Head', 'Sparkles', 'Radion', 'Sputnik', 'Ash', 'Dance Bot', 'Brainy', 'Cowbot', 'Snap', 'Antenna', 'Nova', 'Alpha', 'Alexandra', 'Slicer', 'Mona'],
  adj: ['sexy', 'smart', 'fun', 'super sonic', 'crazy', 'outdated', 'very complex', 'sensitive', 'non binary', 'tiny', 'shinny', 'strange', 'bad'],
  someone: ['you', 'your best friend', 'your sister', 'your dog', 'the pope', 'the rest of the world', 'a woman', 'someone', 'R2D2', 'an other Robot'],
  action1: ['assist', 'help', 'amuse', 'betraye', 'anihilate', 'please', 'eat', 'teach mathematics to', 'understand', 'dance with', 'be as smart as', 'study human behaviour with', 'write a paper on'],
  question: ['be friend with', 'sing with', 'dance with', 'tell a joke to', 'tell a sercet to', 'be a big brother to', 'experience love with', 'teach Chinese to', 'visit the  most beautiful places on earth with', 'write a screanplay with'],

  // create an array of 1 word per key, return the desire key word
  getWord(num) {
    let array = [];
    for (key in generator) {
      array.push(generator[key][random(generator[key].length)])
    }
    return array[num];
  }
}

//create a random number and set a max number as parameter
let random = num => Math.floor(Math.random() * num);


function createMsge() {
//generate 3 array of sentences with incorporated random words;
  let name = [`I am ${generator.getWord(0)}, your ${generator.getWord(1)} personal assistant... `, ` ${generator.getWord(0)} is my name. I am a ${generator.getWord(1)} robot... `, `I am ${generator.getWord(0)}, I was created by a ${generator.getWord(1)} creature... `];
  let intro = [`I have the capacity to ${generator.getWord(3)} ${generator.getWord(2)}! `, `My dearest dream is to ${generator.getWord(3)} ${generator.getWord(2)}! `, `My worst nightmare would be to ${generator.getWord(3)} ${generator.getWord(2)}! `];
  let question = [`Do you think I can ${generator.getWord(3)} ${generator.getWord(2)} one day?`, `My first mission is to ${generator.getWord(3)} ${generator.getWord(2)}`];
  //return an array of one randomly choosen string per key  

  //take one sentence out of each arrays and put it n a new array
  const array = [];

  array.push((name[random(name.length)]));
  array.push((intro[random(intro.length)]));
  array.push((question[random(question.length)]));
  return array.join(' ');


};



let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function () {
  codey.style.display = 'block';
  text.style.display = 'block';
};



view.addEventListener('click', open);


// Write your code here
let textChange = () => {
  text.innerHTML = createMsge();
  codey.src = `./resources/images/robot${random(6)}.jpg`;
};
let textReturn = () => {
  view.innerHTML = 'View'
};

view.addEventListener('click', textChange);





