let bodyEl = document.querySelector("body")

let listBoxEl = document.createElement("ol")
bodyEl.appendChild(listBoxEl)



let buttonSortTitle = document.getElementById("sortName")
let buttonSortDate = document.getElementById("sortDate")
let buttonSortCategory = document.getElementById("sortCategory")


let buttonElAddList = document.getElementById("buttonforadd")

buttonElAddList.addEventListener("click", addlist);
buttonSortTitle.addEventListener("click", sortByTitle)
buttonSortDate.addEventListener("click", sortByDate)
buttonSortCategory.addEventListener("click", sortByCategory)

let datoEl = document.getElementById("dato");
let titteEl = document.getElementById("tittel");
let kategoriEl= document.getElementById("kategori");
let innholdEl = document.getElementById("innhold")
let tekstFargeEl = document.getElementById("textColor")


let contentArray = [];



function showList(){
listBoxEl.innerHTML = ""
for (let i = 0; i < contentArray.length; i++) {
    
    let o = contentArray[i];
  
    
    let divEl = document.createElement("div");
    divEl.classList = "nyttObjekt";

   
    let pEl = document.createElement("p");
    pEl.classList = "greier";
    pEl.innerHTML = " dato:  " + o.date + "<br>" + "kategori: " + o.category + "<br>" + o.content
    
    let h1El = document.createElement("h1");
    h1El.classList = "titler";
    h1El.innerHTML = o.title;

    if(o.category === "bleh"){
      divEl.style.backgroundImage = "url(bleh.jpg)"
    }
    else if(o.category === "svartHvit"){
      divEl.style.backgroundImage = "url(blackWhite.jpg)"
    }
    else if(o.category ==="uncannyStare"){
      divEl.style.backgroundImage = "url(uncannyCat.jpg)"
    }
    else if(o.category ==="cannyStare"){
      divEl.style.backgroundImage = "url(cannyCat.jpg)"
    }
    else if(o.category ==="pickle"){
      divEl.style.backgroundImage = "url(pickle.png)"
    }
    else if(o.category ==="skinWalker"){
      divEl.style.backgroundImage = "url(skinwalker.png.png)"
    }
    
    if(o.textColor === "hvit"){
      divEl.style.color = "white"
      console.log("works")
    }
    else if(o.textColor === "hvit"){
      divEl.style.color = "black"
    }
    divEl.appendChild(h1El);    
    divEl.appendChild(pEl);
  


    listBoxEl.appendChild(divEl);

}
}




function addlist(){

    let dato = datoEl.value
    let tittel = titteEl.value
    let kategori = kategoriEl.value
    let innhold =  innholdEl.value
    let tekstfarge = tekstFargeEl.value

    
    let nyTing = {
        title: tittel,
        date: dato,
        category: kategori,
        content: innhold,
        textColor: tekstfarge 
    }
    
    contentArray.push(nyTing);
    

    console.log(nyTing);
    showList()
}



function sortByTitle(){
    contentArray.sort(compareTitle);
    showList();
}

function sortByDate() {
    contentArray.sort(compareDate);
    showList();
}

function sortByCategory() {
    contentArray.sort(compareCategory);
    showList();
}


function compareTitle(a,b){
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
}

function compareDate(a, b) {
    if (a.date > b.date) {
      return 1;
    } else if (a.date < b.date) {
      return -1;
    } else {
      return 0;
    }
}

function compareCategory(a, b) {
    if (a.category > b.category) {
      return 1;
    } else if (a.category < b.category) {
      return -1;
    } else {
      return 0;
    }
}



