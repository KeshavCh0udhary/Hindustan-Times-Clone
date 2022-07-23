// ============================================== Navbar ==================================

import { MiniNav, Nav, Side, Temp } from "../../ComponentNav/navbar.js";
document.getElementById("NaVbAr").innerHTML = Nav();
Side();
Temp();

document.getElementById("MiNi").innerHTML = MiniNav();
import{fotter,foot} from "../../pankaj fotter/fotter.js";
document.getElementById("fotter").innerHTML=fotter();
foot();

// =============================================== Middle-Section News ========================================
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=63825965b33f4ca5ad1b5902cb8c8382`

let getData = async() => {
    let res = await fetch (url)
    let data = await res.json()

    console.log(data.articles)
    appendData(data.articles)
};

getData()


let appendData = (data) => {

 let container = document.getElementById("middle-section");

      let div = document.createElement("div");
        div.setAttribute("id","big_div");
        div.addEventListener("click", () =>{
        details(data[10],div)
        })

let titles =  document.createElement("h5");
titles.innerText = data[10].title;

let mix_div = document.createElement("div");
mix_div.setAttribute("id","icons_div")

      let date =  document.createElement("p");
      date.innerText =  `Updated on ${data[0].publishedAt}`;
      date.style.color = "grey";

      let icons =  document.createElement("div");
      icons.setAttribute("id","icons")
      
          let share =  document.createElement("i");
          share.setAttribute("class","fa fa-share-alt")

          let bookmark =  document.createElement("i");
          bookmark.setAttribute("class","fa fa-bookmark-o")

      icons.append(share, bookmark);

  mix_div.append(date, icons)

let div2 = document.createElement("div");
div2.setAttribute("class","news_div2");

let images =  document.createElement("img");
images.src = data[10].urlToImage;

div2.append(images);


div.append(titles, div2, mix_div);

container.append(div);


 data.forEach(function(ele){
let div = document.createElement("div");
div.setAttribute("class","news_div");
div.addEventListener("click", () =>{
   details(ele,div)
})
    
      let div1 = document.createElement("div");
      div1.setAttribute("class","news_div1");
  
          let heading =  document.createElement("h4");
          heading.innerText = "INDIA NEWS";
  
          let titles =  document.createElement("h5");
          titles.innerText = ele.title;

          let mix_div = document.createElement("div");
          mix_div.setAttribute("id","icons_div")

                let date =  document.createElement("p");
                date.innerText = ele.publishedAt;
  
                let icons =  document.createElement("div");
                icons.setAttribute("id","icons")
                
                    let share =  document.createElement("i");
                    share.setAttribute("class","fa fa-share-alt")
        
                    let bookmark =  document.createElement("i");
                    bookmark.setAttribute("class","fa fa-bookmark-o")
        
                icons.append(share, bookmark);

            mix_div.append(date, icons)
  
      div1.append(heading, titles, mix_div);
  
  
      let div2 = document.createElement("div");
      div2.setAttribute("class","news_div2");
        
      let images =  document.createElement("img");
      images.src = ele.urlToImage;
  
      div2.append(images);
  
  
   div.append(div1, div2);
  
   container.append(div);


 })
  

}

function details(ele,div) {
    console.log(div)
//    let container = document.getElementById("middle-section");
    div.style.height = "auto";
    div.innerHTML = null;
    div.setAttribute("class","detailzz_div");

    let div_ = document.createElement("div")

      let titlee = document.createElement("h3")
      titlee.innerText = ele.title;
  
      let imgz = document.createElement("img")
      imgz.src = ele.urlToImage;
  
      let desc = document.createElement("p")
      desc.innerText = ele.description;
  
      let mix_div = document.createElement("div");
            mix_div.setAttribute("id","icons_div")
  
                  let date =  document.createElement("p");
                  date.innerText = `Updated on ${ele.publishedAt}`;
                  date.setAttribute("id","datez")
                  date.style.color = "grey";
                  date.style.marginTop = "10px";
    
                  let icons =  document.createElement("div");
                  icons.setAttribute("id","icons")
                  
                      let share =  document.createElement("i");
                      share.setAttribute("class","fa fa-share-alt")
          
                      let bookmark =  document.createElement("i");
                      bookmark.setAttribute("class","fa fa-bookmark-o")
          
                  icons.append(share, bookmark);
  
              mix_div.append(date, icons)
  
      let link = document.createElement("iframe")
      link.src = ele.url;
  
      let content = document.createElement("p")
      content = ele.content;
  
      let advertisements = document.createElement("div");
      advertisements.setAttribute("id", "new_data")
      advertisements.addEventListener("click",getData())

      let btn = document.createElement("button");
      btn.innerText = "Go Back";
      btn.setAttribute("id","btn");
      btn.style.cursor = "pointer";
      btn.addEventListener("click", () => {
          btnclick()
      });
   
    div_.append(titlee, imgz, desc, mix_div, link, content, advertisements, btn)
    div.append(div_)

  }

  


function btnclick() {
  
        window.location.href = "./india.html";
     

}