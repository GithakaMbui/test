function Queue() {

    let items = [];
    //properties and methods go here

    //enqueu method: adds element(s) to the back of the queu
    this.enqueu = function(element){
        items.push(element);
    };

    //deenqueu method : removes an element from the top of the queu

    this.dequeu = function(){
        return items.shift();

    };

    //front method: peeks the first element in the queu
    this.front = function(){
       return items[0];
    };

    //isEmpty: finds if the queu is empty and returns true 
    this.isEmpty = function(){
        return items.length == 0;
    };

    //size: finds the size of the queu

    this.size = function() {
        return items.length;
    };

    //print: This prints the contents of various mathods in this class

    this.print = function(){

        console.log(items.toString());
    };
}

//create an instance of the class Queue

//using the queue class 
let queue = new Queue();

//verifying if the queue is empty

console.log(queue.isEmpty());

//now lets add some elements

queue.enqueu("John");
queue.enqueu("David");
queue.enqueu("Camilla");

//lets execute some other commands
queue.print();


console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeu();
queue.dequeu();
queue.print();


//Application of queues

//1. Priority Queues

function PriorityQueue(){
    let items = [];
    //difference between the implementation of the default Queue and PriorityQueue
    //classes is that we need to create a special element to be added to PriorityQueue.
    //This element contains the element that we want to add to the queue (it can be any type),
    //plus the priority on the queue.

    function QueueElement (element, priority){
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority){
        let queueElement = new QueueElement(element, priority);

        let added = false;
        for (let i=0 ; i<items.length; i++){
            if (queueElement.priority < items[i].priority){
                items.splice(i,0,queueElement);
                added = true;
                break;
            }
        }
        if(!added){
            items.push(queueElement);
        }
    };

    this.print = function(){
        for (let i= 0; i<items.length; i++){
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    };

    //other methods - same as default Queue implementation
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();

//Application of queues

