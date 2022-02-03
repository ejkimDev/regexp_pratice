const str = `
010-1234-5678
testhello@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
hello searchkim
abbcccdddd
hxyp
http://localhost:8080
동해물과_백두산이 마르고 닳도록`;

console.log(str.match(/d$/gm));    // 끝이 d이면 출력
console.log(str.match(/^h/gm));    // 시작이 h이면 출력

console.log(str.match(/./g));      // 임의의 한 문자하는 단어 출력
console.log(str.match(/h..p/g));   // h??p로 해당하는 단어 출력

console.log(str.match(/search|ddd/g));   // search 또는 ddd가 있으면 출력
console.log(str.match(/https?/g));   // s가 있을수도 있고 없을수도 있는 문자 출력

console.log(str.match(/d{2}/g));     // d가 2개 연속 일치하면 출력
console.log(str.match(/c{2,}/g));    // c가 2개 이상 연속 일치하면 출력
console.log(str.match(/d{2,3}/g));   // d가 2개 이상 3개 이하 연속 일치하면 출력
// \b : 경계(숫자나 문자가 아닌 특수문자에 해당)
// \w : 숫자를 포함한 영어 알파벳을 의미
console.log(str.match(/\b\w{2,3}\b/g));   

console.log('==============================================');
console.log(str.match(/[sea]/g));    // s 또는 e 또는 a 일치 문자 출력
console.log(str.match(/[0-9]/g));    // 모든 숫자 출력
console.log(str.match(/[0-9]{1,}/g));    // 숫자 하나 이상 연속되는 문자 출력
console.log(str.match(/[가-힣]{1,}/g));   // 문자 하나 이상 한글 출력

console.log(str.match(/\w/g));       // 대소문자_ 출력
console.log(str.match(/\b/g));       // 경계 출력
console.log(str.match(/\bf\w{1,}\b/g));  // f로 시작하는 단어 출력
console.log(str.match(/\d/g));       // 숫자 출력
console.log(str.match(/\d{1,}/g));   // 숫자 1개 이상 출력
console.log(str.match(/\s/g));       // 공백 출력
const h = `  the hello world    !

`;
console.log(h.replace(/\s/g, ''));    // 공백 제거
console.log('==============================================');
console.log(str.match(/.{1,}(?=@)/g));     // @ 앞쪽 임의의 문자가 1개 이상
console.log(str.match(/(?<=@).{1,}/g));    // @ 뒤쪽 임의의 문자가 1개 이상







