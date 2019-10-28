function Stack() {
    
    //properties and methods go here
    //we need a data structure that wil store the elements of the stack. We can use an array for this
    let items = [];
    //below we declare the methods available to our stack
    //Pushing elements to the Stack
    this.push = function (element) {
        items.push(element);
    };
    //Popping elements from the stack
    this.pop = function () {
        return items.pop();
    };
    //Peeking the element from the top of the stack
    this.peek = function () {
        return items[items.length - 1];
    };
    //Verifying if the stack is empty
    this.isEmpty = function () {
        return items.length == 0;
    };
    // this.isEmpty = function() {
    //     return items.length == 0;
    // };
    this.size = function () {
        return items.length;
    };
    //Clearing and printing the elements of stack
    this.clear = function () {
        items = [];
    };
    //let's implement a helper method called print that is going to output the contents of the stack on the console
    // this.print = function () {
    //     this.console.log(items.toString());
    // };
    this.print = function(){
        console.log(items.toString());
    };
        
}

//instantiate the Stack class we just created
let stack = new Stack();

//verify whether it is empty 
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.isEmpty());

console.log(stack.peek());

//console.log(stack.peep());

//add another element
stack.push(11);
console.log(stack.size());

//add another element
stack.push(15);

//let's remove two elements from the stack
stack.pop();
stack.pop();
console.log(stack.size());
//stack.print();
stack.print();