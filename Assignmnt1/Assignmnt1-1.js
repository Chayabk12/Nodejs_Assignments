var number= 100;

primeNumber(number); 
function primeNumber(num){
    	var flag=false;
    	for( var i = 0; i <= num; i++)
         {
             for(  var j = 2; j < i; j++)
             {
                 if(i % j == 0)
                 {
                     flag = false;
                     break;
                 }
                 else
                 {
                     flag = true;
                 }
             }
             if(flag)
             {
                 console.log(i);
             }
         }
    }