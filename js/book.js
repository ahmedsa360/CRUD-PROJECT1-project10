let bookname = document.getElementById("name");
let urlname = document.getElementById("url");
let bookList = [];
let alert1 = document.querySelector(".alert1")


if(localStorage.getItem('booklist') != null){
      bookList = JSON.parse(localStorage.getItem('booklist'))
      display()
}

function AddBook(){
   
    if(isexist() == true){
        alert1.classList.replace("d-none", "d-block")
    }else{
        alert1.classList.replace("d-block", "d-none")
        let book ={
            name: bookname.value,
            url: urlname.value,
          }
          bookList.push(book);
          localStorage.setItem('booklist' ,JSON.stringify(bookList));
          display()
          clearInputs()
        }
}

function display(){
    let cartona = "";
    for(let i =0; i < bookList.length; i++){
        cartona+=(`
        <tr>
        <td>${i+1}</td>
        <td>${bookList[i].name}</td>
        <td ><i class="fa-solid fa-eye"></i><button class=" visit btn "><a href="${bookList[i].url}">visit</a></button></td>
        <td> <i class="fa-solid fa-trash"></i><button class="delete btn" onclick='deletebook(${i})'>delete</button></td>
    </tr>
        `)
    }
    document.getElementById("tablebook").innerHTML = cartona
}

function deletebook(index){
  bookList.splice(index , 1)
  console.log(bookList)
  localStorage.setItem('booklist' , JSON.stringify(bookList))
  display()
}



function clearInputs(){
    bookname.value = ""
    urlname.value = ""
}
function isexist(){
    for(let i= 0; i < bookList.length; i++){
        if(bookname.value == bookList[i].name){
            return true
        }
    }
}
