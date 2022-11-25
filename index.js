function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
   return function fn(){
       "returns a function"
   }
}
function returnsAnAnonymousFunction(){
   return function (){
       "returns an anonymous function"
   }

}