//create an object  that generate random word from a library
const generator ={
  robotName: ['Optimus Prime', 'Bolt Head', 'Sparkles','Radion', 'Sputnik', 'Ash', 'Dance Bot','Brainy','Cowbot','Snap','Antenna', 'Nova', 'Alpha', 'Alexandra','Slicer','Mona'],
  adj:['sexy', 'fat', 'smart', 'fun', 'super sonic', 'crazy', 'outdated', 'very complex', 'sensitive', 'non binary','tiny', 'shinny','strange', 'bad'],
  someone: ['you', 'your best friend', 'your sister', 'your mum', 'your dog', 'the pope', 'your dad', 'the rest of the world', 'a woman', 'people', 'Jennifer Lopez', 'an other Robot'],
  action1: ['assist', 'help', 'amuse', 'betraye', 'anihilate', 'please','convice', 'eat', 'teach mathematics to', 'understand', 'dance with', 'compete with', 'be as smart as', 'study human behaviour with', 'write a paper on'],
  probability: ['prabably', 'maybe', 'hopefully', 'surely', 'eventually', 'strangely', 'suprisingly', 'desperatly', 'intensly' ],
  action2: ['need', 'regret ', 'adore', 'hate', 'accept', 'enjoy', 'admire','respect' ],
  obj2: ['me', 'my very existance', 'this', 'to be around me', 'it', 'that stuff' ],
  question: ['be friend with', 'sing with', 'dance with', 'tell a joke to', 'tell a sercet to', 'be a big brother to', 'experience love with', 'teach Chinese to', 'visit the  most beautiful places on earth with' , 'write a screanplay with' ],
  
  // create an array of 1 word per key, return the desire key word
  getWord(num){
    const array=[];
    for(key in generator){
     array.push(generator[key][random(generator[key].length)])
    }
    return array[num];
  } 
  }
  
  //create a random number and set a max number as parameter
  const random=num=>Math.floor(Math.random()*(num));
  
  //create a sentences object 
  const sentences={
    name: [`I am ${generator.getWord(0)}, your ${generator.getWord(1)} personal assistant...`, ` ${generator.getWord(0)} is my name. I am a ${generator.getWord(1)} robot...`,`my creator is ${generator.getWord(0)}, a ${generator.getWord(1)} fellow...` ],
    intro: [`I have the capacity to ${generator.getWord(3)} ${generator.getWord(2)}!`, `My dearest dream is to ${generator.getWord(3)} ${generator.getWord(2)}!`,`My worst nightmare would be to ${generator.getWord(3)} ${generator.getWord(2)}!`],
    statement: [`You will ${generator.getWord(5)} ${generator.getWord(6)} ${generator.getWord(4)}.`, `People will ${generator.getWord(5)} ${generator.getWord(6)} ${generator.getWord(4)}.`,`${generator.getWord(2)} will ${generator.getWord(5)} ${generator.getWord(6)} ${generator.getWord(4)}.`],
    question: [`Do you think I can ${generator.getWord(7)} ${generator.getWord(2)} one day?`, `Is it possible to ${generator.getWord(7)} ${generator.getWord(2)}?`],
  //return an array of one randomly choosen string per key  
  getSentence(){
      const array=[];
      for(key in sentences){
       array.push((sentences[key][random(sentences[key].length)]));
      }
      return array;
    }
  }

//turn the array into a message
const message=()=> sentences.getSentence().join(' ');
  //print  message
console.log(message());



  
  
  