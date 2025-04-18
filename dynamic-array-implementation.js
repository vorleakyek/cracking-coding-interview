
class DynamicArray {
  constructor() {
    this.capacity = 10; //total number of slots
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
    if (this._size === this.capacity) {
      const newArray = new Array(this.capacity * 2).fill(null); 

      for(let i = 0; i < this._size; i++) {
        newArray[i] = this.fixedArray[i];
      }

      this.fixedArray = newArray;
      this.capacity *= 2; 
    }

     this.fixedArray[this._size] = x;
     this._size++;
  }

  get(i) {
    if (i < 0 || i >= this._size) {
      throw new Error("Index out of bounds.");
    } 
    return this.fixedArray[i];
  }

  set(ind, val) {
    if (ind < 0 || ind >= this._size) {
      throw new Error("Index out of bounds.")
    }
    this.fixedArray[ind] = val;
  }

  popBack() {
    if (this._size === 0 ) {
      throw new Error("no elements in the array");
    }

    this._size--; 

    if (this._size / this.capacity < 0.25 && this.capacity > 10) {
      //resize it 
    }
  }
}


const arr = new DynamicArray(); 
arr.append(1);
arr.append(3);
arr.append(5);
arr.append(7);
arr.set(2, 8);
console.log(arr.get(2)); 
