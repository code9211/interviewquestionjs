function createCounter() {
    let privateCounter = 0; // Private variable
  
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  }
  
  const counter = createCounter();
  
  console.log(counter.value()); // 0
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2
  counter.decrement();
  console.log(counter.value()); // 1
  console.log(counter.privateCounter); // undefined (privateCounter is not accessible)
  