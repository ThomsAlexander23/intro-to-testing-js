// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// sayHello function
function sayHello(name= "World") {
    if (name === true || name === false){
        return sayHello();
    }
    else {
        return "Hello, " + name + "!";
    }
}