const Stack = require('./stack');
class PseudoQueue {

  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue() {
    //if both stacks are empty, throw an error
    if (!this.stack1.top && !this.stack2.top) throw new Error('Queue is empty, unable to dequeue.');

    //if stack 2 is empty, reverse stack 1 into stack 2
    if (!this.stack2.top){
      //loop while stack 1 still has values
      while (this.stack1.top){
        var nodeValue = this.stack1.pop();
        this.stack2.push(nodeValue);
      }
    }

    //return the top of stack 2
    return this.stack2.pop();
  }

  isEmpty(){
    if(this.stack1.isEmpty() && this.stack2.isEmpty()) return true;
    else return false;
  }
}

module.exports = PseudoQueue;
