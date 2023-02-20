'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Kunj';
      const str = `Oh you are a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str);
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Appu';

calcAge(1991);
