class BiDirectionalPriorityQueue {
  constructor() {
    this.items = [];
    this.insertionCounter = 0;
  }
 
  enqueue(item, priority) {
    this.items.push({ item, priority, index: this.insertionCounter++ });
  }
 
  dequeue(mode) {
    if (this.items.length === 0) return null;
 
    let target = this.items[0];
 
    for (let el of this.items) {
      if (mode === "highest" && el.priority > target.priority) 
        target = el;
      if (mode === "lowest"  && el.priority < target.priority) 
        target = el;
      if (mode === "newest"  && el.index > target.index) 
        target = el;
      if (mode === "oldest"  && el.index < target.index) 
        target = el;
    }
 
    this.items.splice(this.items.indexOf(target), 1);
    return target.item;
  }
 
  peek(mode) {
    const copy = [...this.items];
    const result = this.dequeue(mode);
    this.items = copy;
    return result;
  }
}

const q = new BiDirectionalPriorityQueue();
 
q.enqueue("low", 1);
q.enqueue("high", 10);
q.enqueue("mid", 5);
q.enqueue("urgent", 9);
 
console.log(q.peek("highest"));   
console.log(q.peek("oldest"));   
 
console.log(q.dequeue("highest")); 
console.log(q.dequeue("lowest"));  
console.log(q.dequeue("newest"));  
console.log(q.dequeue("oldest"));  
 
console.log(q.dequeue("highest")); 