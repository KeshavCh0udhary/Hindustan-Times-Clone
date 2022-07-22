// =============================================== Middle-Section News ========================================
let url = `https://newsapi.org/v2/everything?q=latest&from=2022-06-22&sortBy=publishedAt&apiKey=63825965b33f4ca5ad1b5902cb8c8382`

let getData = async() => {
    let res = await fetch (url)
    let data = await res.json()

    console.log(data.articles)
    appendData(data.articles)
};

getData()


let appendData = (data) => {

 let container = document.getElementById("middle-section");

 data.forEach(function(ele){
let div = document.createElement("div");
div.setAttribute("class","news_div");
div.addEventListener("click", () =>{
   details(ele)
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

function details(ele) {
    console.log(ele)
   let container = document.getElementById("middle-section");
   container.innerHTML = null;
    let div = document.createElement("div")
    div.setAttribute("class","detailzz_div");
  
      let titlee = document.createElement("h3")
      titlee.innerText = ele.title;
  
      let imgz = document.createElement("img")
      imgz.src = ele.urlToImage;
  
      let desc = document.createElement("p")
      desc.innerText = ele.description;
  
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
  
      let link = document.createElement("iframe")
      link.src = ele.url;
  
      let content = document.createElement("p")
      content = ele.content;
  
      let advertisements = document.createElement("div");
      advertisements.setAttribute("id", "new_data")
      advertisements.addEventListener("click",getData())
   
    div.append(titlee, imgz, desc, mix_div, link, content, advertisements)
    container.append(div)
  
  }