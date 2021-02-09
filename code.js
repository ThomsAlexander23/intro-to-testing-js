// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// sayHello function
function sayHello(name= "World") {
    if ((name === true) || (name === false) || (name === null)){
        return sayHello();
    }
    else {
        name = name.toString()
        return "Hello, " + name + "!";
    }
}