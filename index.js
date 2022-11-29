

function showData() {
    fetch("http://localhost:3000/posts?_page=1&_limit=3")
    .then((res) => res.json())
    .then((data) => {
        return append(data);
    })
    .catch((err) =>  err)
}

showData();

let shwoData = document.querySelector("#showData")
function append(data) {
    shwoData.innerHTML = null;
    // console.log(data);
    data.forEach((item) => {
        let p = document.createElement("p");
        p.textContent = item.id;

        let title = document.createElement("p");
        title.textContent = item.title

        let author = document.createElement("p");
        author.textContent = item.author

        shwoData.append(p,title,author);
    })
}
document.querySelector("#asc").addEventListener("click", asc);
document.querySelector("#desc").addEventListener("click", desc);

function asc(){
    fetch(`http://localhost:3000/posts?_sort=${"title"}&_order=${"asc"}`)
    .then((res) => res.json())
    .then((data) => append(data))
    .catch((err) => err);
}

function desc(){
    fetch(`http://localhost:3000/posts?_sort=${"title"}&_order=${"desc"}`)
    .then((res) => res.json())
    .then((data) => append(data))
    .catch((err) => err);
}

document.querySelector("#prev").addEventListener("click", perv);
document.querySelector("#next").addEventListener("click", next);

var count = 1;
function perv(){
    count--;
    if(count > 1) {
        document.querySelector("#prev").style.display = "none"  
    }
    else{
        document.querySelector("#prev").style.display = "block" 
    fetch(`http://localhost:3000/posts?_page=${count}&_limit=${3}`)
    .then((res) => res.json())
    .then((data) => append(data))
    }
}

function next(){
    count++;
    if(count == 1) {
        document.querySelector("#next").style.backgroundColor = "red";
    }
    fetch(`http://localhost:3000/posts?_page=${count}&_limit=${3}`)
    .then((res) => res.json())
    .then((data) => append(data));
}