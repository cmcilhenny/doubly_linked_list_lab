function Node(value){
  this.value = value || null;
  this.next = null;
  this.previous = function(){
    return null;
  }
};

Node.prototype.setPrevious = function(node){
  this.previous = function(){
    return node;
  }
  return this;
};

try {
  module.exports = Node;
} catch(e){
  
}

function List(){
  this.head = null;
  this.tail = null;
  this.length = 0;
};

List.prototype.push = function(value){
	if(this.head === null) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length += 1;
	} else {
		var oldTail = this.tail;
		this.tail.next = new Node(value);
		this.tail = this.tail.next;
		this.tail.setPrevious(oldTail);
		this.length += 1;
	}
	return this;
};

List.prototype.pop = function(){
	// If list is empty, do nothing
	if (this.length === 0) {
		return null;
	} 
	// If only one thing in list, list is now empty
	else if (this.length === 1){
		this.head = null;
		this.tail = null;
		this.length = 0;
		return this;
	} 
	// Otherwise:
	// 1) Set the new tail to be the current tail's previous entry
  // 2) Decrease the length by 1
	else {
		this.tail = this.tail.previous();
		this.length -= 1;
		this.tail.next = null;
	};
	return null;
};

List.prototype.getIndex = function(index){

};

List.prototype.setIndex = function(index, value){

};

List.prototype.shift = function(){
	if (this.length === 0) {
		return null;
	}
	else if (this.length === 1) {
		this.head = null;
		this.tail = null;
		this.length = 0;
		return this;
	} else {
		this.head = this.head.next;
		this.length -= 1;
		this.head.previous = function() {
			return null;
		}
	}
	return null;
};

List.prototype.unshift = function(value){

};

List.prototype.insert = function(index, value) {
	if (this.length === 0 && index === 0) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length += 1;
		return this;
	} 
	if (index < 0 || index > this.length -1) {
		throw new RangeError("Out of bounds!")
	};
	if (this.length === index) {
		this.push(value);
		return this;
	}
	if (this.length )
};

try {
  module.exports = List;
} catch(e){

}
