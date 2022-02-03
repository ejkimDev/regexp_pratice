const str = `
010-1234-5678
testhello@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
hello searchkim
abbcccdddd`;

const reqexp = /search/gi;
console.log(reqexp.test(str));      // true

console.log(str.replace(reqexp, 'AAA'));
console.log(str);
