//create an object  that generate random word from a library
const generator = {
  robotName: ['Optimus Prime', 'Bolt Head', 'Sparkles', 'Radion', 'Sputnik', 'Ash', 'Dance Bot', 'Brainy', 'Cowbot', 'Snap', 'Antenna', 'Nova', 'Alpha', 'Alexandra', 'Slicer', 'Mona'],
  adj: ['sexy', 'smart', 'fun', 'super sonic', 'crazy', 'outdated', 'very complex', 'sensitive', 'non binary', 'tiny', 'shinny', 'strange', 'bad'],
  someone: ['you', 'your sister', 'your dog', 'the pope', 'the rest of the world', 'a woman', 'someone', 'R2D2', 'an other Robot'],
  action1: ['assist', 'help', 'betraye', 'anihilate','dance salsa with', 'travel the world with',  'eat', 'teach mathematics to', 'understand',  'study human behaviour with', 'write a paper on'],
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
  let intro = [`My special talent is to ${generator.getWord(3)} ${generator.getWord(2)}! `, `My dearest dream is to ${generator.getWord(3)} ${generator.getWord(2)}! `, `My worst nightmare would be to ${generator.getWord(3)} ${generator.getWord(2)}! `];
  let question = [`Do you think I can ${generator.getWord(4)} ${generator.getWord(2)} one day?`, `My first mission will be to ${generator.getWord(3)} ${generator.getWord(2)}`, 'Would you like to be my friend?'];
  //return an array of one randomly choosen string per key  

  //take one sentence out of each arrays and put it n a new array
  const array = [];

  array.push((name[random(name.length)]));
  array.push((intro[random(intro.length)]));
  array.push((question[random(question.length)]));
  return array.join(' ');


};



let view = document.getElementById('view-button');
let text = document.getElementById('text');
let codey = document.getElementById('codey');

let open = function () {
  codey.style.display = 'block';
  codey.style.position= 'absolute';
  codey.style.left= '50px';
  text.style.display = 'block';
  codey.style.animationName=  'rotate'
  codey.style.animationDuration= '0.7s';
  codey.style.animationDirection= 'normal';

};

let buttonEffect=()=>{
  view.style.backgroundColor= '#bbffe7';
  
}
let resetbuttonEffect=()=>{
  view.style.backgroundColor= '';
}
let buttonDown=()=>{
  view.style.top= '2px';
  view.style.left= '2px';

}
let buttonUp=()=>{
  view.style.top= '';
  view.style.left= '';
}


view.addEventListener('click', open);
view.addEventListener('mouseover', buttonEffect);
view.addEventListener('mouseout', resetbuttonEffect);
view.addEventListener('mousedown',buttonDown);
view.addEventListener('mouseup', buttonUp);


// Write your code here
let textChange = () => {
  text.innerHTML = createMsge();
  codey.src = `./resources/images/robot${random(6)}.jpg`;


};
let textReturn = () => {
  view.innerHTML = 'View'
};

view.addEventListener('click', textChange);





