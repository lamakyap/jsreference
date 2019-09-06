// Start with strings, numbers and booleans
//let age = 100;
//let age2 = age;
//console.log(age, age2);
//age = 200;
//console.log(age, age2);

//let name = 'Lame';
//let name2 = name;
//console.log(name, name2);
//name = 'Lama';
//console.log(name, name2);

//Let's say we have an array

const players = ['Lame', 'Rinchen', 'Nyima', 'Topjor'];

// and we want to make a copy of it
const team = players

console.log(players, team);

// You might think we can just do something like this
//team[3] = 'Lux';

// however what happens when we update that array

// now here is the problem!

// oh no we have edited the original array too

// why? It's because that is an array reference, not an array coopy they both point to the same array!

// so, how do we fux this? we take a copy instead!

const team2 = players.slice();

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new es6 spread

const team4 = [...players];
team4[3] = 'heheh hoho';
console.log(team4);

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

//the same things goes for objects, let's say we have a person object

// with objects
const person = {
  name: 'Lame Jiebu',
  age: 56
};

// and think we make a coopy
//const captain = person;
//captain.number = 99;

// how do we take a copy instead
const cap2 = Object.assign({}, person, {number: 99});
console.log(cap2);

// we will hopefully soon see the object ...spread
const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const wes = {
      name: 'Wes',
      age: 100,
      social: {
        twitter: '@lamadvlpr',
        facebook: 'lama.developer'
      }
    };
    console.clear();
    console.log(wes);
    const dev = Object.assign({}, wes);
    const dev2 = JSON.parse(JSON.stringify(wes));
