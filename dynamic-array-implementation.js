
class DynamicArray {
  constructor() {
    this.capacity = 3; //total number of slots
    this._size = 0; //create a property called 'size' for the number of elements actually stored
    this.fixedArray = new Array(this.capacity).fill(null); 
  }

  getSize() {
    return this._size; 
  }

  getCapacity() {
    return this.capacity; 
  }

  append(x) {

    //if the size is equal to the capacity, then can't push it anymore until double the capacity     
    if(this._size < this.capacity) {
      
      this.fixedArray[this._size] = x;
      this._size++; 
      
    } else {
      
      const newArray = new Array(this.capacity * 2).fill(null); 

      for(let i=0; i<this.capacity; i++) {
        newArray[i] = this.fixedArray[i];
      }

      newArray[this._size] = x;
      this._size++;
      this.capacity *= 2; 
      this.fixedArray = newArray; 
    }
    
  }

  get(ind) {
    for(let i=0; i<this.capacity; i++) {
      if (i === ind) {
        return this.fixedArray[i];
      }
    }
  }

  set(ind, val) {
    this.fixedArray[ind] = val;
  }

  pop_back() {
    //do something 
  }

  
}


const arr = new DynamicArray(); 
arr.append(1);
arr.append(3);
arr.append(5);
arr.append(7);
arr.set(2, 8);
console.log(arr.get(2)); 
