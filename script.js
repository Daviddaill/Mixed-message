const generator ={
    robotName: ['Optimus Prime', 'Bolt Head', 'Sparkles','Radion', 'Sputnik', 'Ash', 'Dance Bot','Brainy','Cowbot','Snap','Antenna', 'Nova', 'Alpha', 'Alexandra','Slicer','Mona'],
    adj:['sexy', 'fat', 'smart', 'fun', 'super sonic', 'crazy', 'outdated', 'very expensive', 'sensitive', 'non binary','tiny', 'shinny','house', 'bad'],
    someone: ['you', 'your best friend', 'your sister', 'your mum', 'your dog', 'the pope', 'your dad', 'the rest of the world', 'every single women', 'every single men', 'Jennifer Lopez', 'an other Robot'],
    action1: ['assist', 'help', 'amuse', 'betraye', 'anihilate', 'please','convice', 'eat', 'teach mathematics to', 'understand', 'dance with', 'compete with', 'be as smart as', 'study human behaviour with', 'to write a paper on'],
    probability: ['prabably', 'maybe', 'hopefully', 'surely', 'evetually', 'strangely', 'suprisingly', 'without a doubt', 'difinitly not', 'desperatly', 'intensly' ],
    action2: ['need', 'regret ', 'adore', 'hate', 'accept', 'enjoy', 'admire','respect' ],
    obj2: ['me', 'my very existance', 'this', 'to be around me', 'it', 'that sutff' ],
    question: ['be friend with', 'sing with', 'dance with', 'tell a joke to', 'tell a sercet to', 'be a big brother to', 'experience love with', 'teach Chinese to', 'visit the  most beautiful places on earth with' , 'write s screanplay with' ],
    
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
    
    
    
    //create the message
    function createMsge() {
    console.log(`I am ${generator.getWord(0)}, your ${generator.getWord(1)} robot...`);
    console.log(`I have the capacity to ${generator.getWord(3)} ${generator.getWord(2)}!`);
    console.log(`You will ${generator.getWord(5)} ${generator.getWord(6)} ${generator.getWord(4)}.`);
    console.log(`Do you think I can ${generator.getWord(7)} ${generator.getWord(2)}?`);
    }
    
    //call message
    createMsge();

    //console.log(generator.getWord())
    