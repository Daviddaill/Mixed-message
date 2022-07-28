const generator ={
    _robotName: ['Optimus Prime', 'Bolt Head', 'Sparkles','Radion', 'Sputnik', 'Ash', 'Dance Bot','Brainy','Cowbot','Snap','Antenna', 'Nova', 'Alpha', 'Alexandra','Slicer','Mona'],
    _adj:['sexy', 'fat', 'smart', 'fun', 'super sonic', 'crazy', 'outdated', 'very expensive', 'sensitive', 'non binary','tiny', 'shinny','house', 'bad ass'],
    _someone: ['you', 'your best friend', 'your sister', 'your mum', 'your dog', 'the pope', 'your dad', 'the rest of the world', 'every single women', 'every single men', 'Jennifer Lopez', 'an other Robot'],
    _action1: ['assist', 'help', 'amuse', 'betraye', 'anihilate', 'please','convice', 'eat', 'teach mathematics to', 'understand', 'dance with', 'compete with', 'be as smart as', 'study human behaviour with', 'to write a paper on'],
    _probability: ['prabably', 'maybe', 'hopefully', 'surely', 'evetually', 'strangely', 'suprisingly', 'without a doubt', 'difinitly not', 'desperatly', 'intensly' ],
    _action2: ['need', 'regret ', 'adore', 'hate', 'accept', 'enjoy', 'admire','respect' ],
    _obj2: ['me', 'my very existance', 'this', 'to be around me', 'it', 'that sutff' ],
    _question: ['be friend with', 'sing with', 'dance with', 'tell a joke to', 'tell a sercet to', 'be a big brother to', 'experience love with', 'teach Chinese to', 'visit the  most beautiful places on earth with' , 'write s screanplay with' ],
    
    //get a random single element of an array
    get robotName(){
      return this._robotName[random(this._robotName.length)];
    },
    get adj(){
      return this._adj[random(this._adj.length)]
    },
    get someone(){
      return this._someone[random(this._someone.length)];
    },
    get action1(){
      return this._action1[random(this._action1.length)];
    },
    get probability(){
      return this._probability[random(this._probability.length)];
    },
    get action2(){
      return this._action2[random(this._action2.length)];
    },
    get obj2(){
      return this._obj2[random(this._obj2.length)];
    },
    get question(){
      return this._question[random(this._question.length)];
    }
    
    }
    
    //create a random number and set a max number as parameter
    const random=num=>Math.floor(Math.random()*(num-1));
    
    
    
    //create the message
    function createMsge() {
    console.log(`I am ${generator.robotName}, your ${generator.adj} robot`);
    console.log(`I have the capacity to ${generator.action1} ${generator.someone}.`);
    console.log(`I think You will ${generator.probability} ${generator.action2} ${generator.obj2}.`);
    console.log(`Can I ${generator.question} ${generator.someone}?`);
    }
    
    //call message
    createMsge();
    