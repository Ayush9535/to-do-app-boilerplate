
// Select all elements 
const input = document.getElementById("input")
const addbtn = document.getElementById("button")
const todolist = document.getElementById("todolist")

// initailize an empty array 
let arr = [];   // let arr2 = new array(5)  alternate way to create a array


function addtodo(){
    if (input.value == ""){
        alert("Enter a Task To Add")
    }else{
        arr.push(input.value);
        input.value = "";
        console.log(arr)
    
        showList()
    }
}

addbtn.addEventListener("click" , addtodo);

function showList(){

    // everytime the function runs , we have to clear the container first
    todolist.innerHTML = "";
    
    // HOF - foreach - append all the list items from the array

    // arr.forEach((el,i) => {
    //     todolist.innerHTML += "<li>" + el + "<a onclick= 'editList("+i+")'>Edit</a>" + "<a onclick= 'deleteList("+i+")'>Delete</a>" + "</li>";
    // })

    arr.forEach((el , i) =>{
        let listItem = document.createElement("li")
        let anchor1 = document.createElement("a")
        let anchor2 = document.createElement("a")

        listItem.innerText = el
        anchor1.innerText = "Edit"
        anchor2.innerText = "Delete"

        anchor1.onclick = () =>{
            editList(i)
        }

        anchor2.onclick = () =>{
            deleteList(i)
        }

        listItem.append(anchor2,anchor1)
        anchor2.style.marginLeft = "10px"
        todolist.append(listItem)
    })
    
}

function editList(i){
    
    console.log("editted")

    // showing a prompt - getting a value
    let val = prompt("Please insert a value")

    // replacing the value at particular index
    arr.splice(i,1,val)
    showList()
}

function deleteList(index){

    console.log("deleted")

    arr.splice(index,1)
    showList()
}


