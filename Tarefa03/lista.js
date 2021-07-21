class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
}

//insert first node
class insertFirst {
    constructor(data) {
        this.head = new Node(data, this.head);
    }
}
//insert last node


//insert anywhere


//get anyone


//clear list


//print list data
const ll = new linkedList();

ll.insertFirst(100);

console.log(ll);