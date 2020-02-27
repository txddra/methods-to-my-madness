/******************
 * YOUR CODE HERE *
 ******************/

function slice(str, x, y){
let result = '';

//x=start
//y=end

if(y === undefined){
  for(let i = x; i < str.length; i ++){
    result+= str[i]}

    } 

if(x === undefined && y === undefined)
// for(let i = 0; i < str.length; i ++){
// result+= str[i]}
{return str

}
  
else{ for( let i = x; i < y; i++){
  result+= str[i]} 
}
return result
}

function repeat(str, num){
  
let changedNum = ''

for (let i = 0; i < num; i++){
  changedNum += str

  
}
return changedNum 
}

function startsWith(str, subStr){
//   let result = '';

for(let i = 0; i < subStr.length; i++){
 if( str[i] !== subStr[i]){
return false;
//   if(str[i] === str[1]){
//     return false
//   }

//     }
}
}return true
}
function endsWith(str, subStr){
  //let result ='';
  //for(let i = 0; i < str.length; i--){
return slice(str,str.length- subStr.length)=== subStr;}

function includes(array,str){
let result = '';
for(let i = 0; i < array.length; i++){
if (array[i] === str) {
  return true
}

}
return false
  
} 
function join(x, y = ''){
let stuck = x[0];
for( let i = 1; i < x.length; i++){
  stuck += y + x[i];
}
return stuck
}
function split(x, y = ''){
  const notTogether = [];
  //let
}

function trimStart(str){
  let result = '';
  for (let i = 0; i < str.length; i++){
    if( str[i] !== ' '){
      return slice(str, i);

    }
  }
return result
}
function trimEnd(str){
 let result = '';
 for (let i = str.length - 1; i >= 0; i--){
  if ( str[i]!== ' '){
    return slice(str, 0, i + 1) 
 }

}
return result
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
