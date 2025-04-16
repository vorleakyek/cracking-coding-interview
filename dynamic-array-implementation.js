
class DynamicArray {
  constructor() {
    this.capacity = 2; //total number of slots
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
      
      this.fixedArray.push(x);
      this._size++; 
      
    } else {
      
      const newArray = new Array(this.capacity * 2).fill(null); 

      for(let i=0; i<this.capacity; i++) {
        newArray.push(this.fixedArray[i])
      }

      newArray.push(x);
      this._size++;
      this.capacity *= 2; 
      this.fixedArray = newArray; 
    }
    
  }
}


const arr = new DynamicArray(); 
arr.append(1);
arr.append(3);
arr.append(5)
console.log(arr.getCapacity()); 

// Your previous Plain Text content is preserved below:

// Hello! Your interview question is below. Write code in this pad just like you would normally – your AI Interviewer will be able to see it.

// # Implement Dynamic Array

// Assume your programming language only supports fixed-size arrays. Implement a dynamic array data structure that supports the following:

// `Dynamic Array API:`

// - `append(x)`: adds element x to the end of the array
// - `get(i)`: returns the element at index i
// - `set(i, x)`: updates the preexisting element at index i to be x
// - `size()`: returns the number of elements in the array
// - `pop_back()`: removes the last element

// You should only declare arrays of a fixed size and not use built-in `append()` methods or equivalent. If you are coding in a strongly typed language, assume all elements are integers.

// ```
// Example 1:
// d = DynamicArray()
// d.append(1)
// d.append(2)
// d.get(0)  # returns 1
// d.get(1)  # returns 2
// d.size()  # returns 2

// Example 2:
// d = DynamicArray()
// d.append(1)
// d.set(0, 10)
// d.get(0)  # returns 10

// Example 3:
// d = DynamicArray()
// d.append(1)
// d.append(2)
// d.pop_back()
// d.size()  # returns 1
// d.get(0)  # returns 1
// ```

// Constraints:

// - All operations should work with arrays of up to 10^6 elements
// - All integer elements are between -10^9 and 10^9
