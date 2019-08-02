

var countno=0
var countchar=0
var words=0
var countSpaces=0
exports.WordCount=function WordCount (str) { 
    
   words= str.split(" ").length;
var str1= str.replace(/ /g,'');

console.log(str1)
  for(var i =0; i<str1.length; i++){

if( str1[i]>=0 && str1[i]<=9){
    countno++
}

else if(str1[i] >= 'A' && str1[i] <= 'Z' || str1[i]>= 'a' && str1[i] <='z'){
countchar++
}

  }
var string = "words count :" +" "+words+ " "+ "character count :" + " "+ countchar + " "+"digit count :" + " "+ countno 
  return(string)
  /*  return(words, countchar, countno) */
}

