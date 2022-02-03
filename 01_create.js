const str = `
010-1234-5678
testhello@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
hello searchkim
abbcccdddd`;

// 플래그
// g : global, 모든 문자에서 여러번
// i : ignore case, 대소문자 구별 X

// 생성자 함수 방식
const reqexp = new RegExp('hello', 'gi');
console.log(str.match(reqexp));

// 리터럴 방식
const reqexpR = /hello/gi;
console.log(str.match(reqexpR));



