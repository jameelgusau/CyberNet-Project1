function b(){
    var myVar;
    console.log(myVar);
    if (myVar===undefined){
        console.log('Hello there!');
    }
    else{
        console.log();
    }
}
function a(){
    var myVar = 2;
    console.log(myVar);
    b();
    
}
var myVar = 1;
    console.log(myVar);
a();
