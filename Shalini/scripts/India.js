// =============================================== Middle-Section News ========================================
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=63825965b33f4ca5ad1b5902cb8c8382`

let getData = async() => {
    let res = await fetch (url)
    let data = await res.json()

    console.log(data.articles)
    appendData(data.articles)
};

getData()

// -------------------------------------------Top Front News------------------------


// let big_div = document.createElement("div");
// big_div.setAttribute("id", "big_div");

//     let head =  document.createElement("h3");
//     head.innerText = "INDIA NEWS";

//     let title =  document.createElement("h3");
//     title.innerText = "IPL Team Owners Snap Up All 6 Franchises In New South Africa T20 League - NDTV Sports";

//     let image =  document.createElement("img");
//     image.src = "https://c.ndtvimg.com/2022-02/8dvukpg_ipl-auction-2022-flags_625x300_12_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675";

//     let dateAndtime  =  document.createElement("h4");
//     dateAndtime.innerText = "2022-07-20T07:43:32Z" ;

//     let icon =  document.createElement("div");

//        let sharei =  document.createElement("i");
//        sharei.setAttribute("class","fa fa-share")

//        let bokmark =  document.createElement("i");
//        bokmark.setAttribute("class","fa fa-bookmark")

//     icon.append(sharei, bokmark)

// big_div.append(head, title, image, dateAndtime, icon)










let appendData = (data) => {

 let container = document.getElementById("middle-section");

 data.forEach(function(ele){
    //  console.log(ele)
// -------------------------------------------Bottom small Div News---------------------------------------------

    let div = document.createElement("div");
    div.setAttribute("class","news_div");
    // div.addEventListener("click", () =>{
    //     details(ele)
    // })
    
  
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

// function details(ele) {
//   console.log(ele)
//  let container = document.getElementById("middle-section");
//   let div = document.createElement("div")

//     let titlee = document.createElement("h3")
//     titlee.innerText = ele.title;

//     let imgz = document.createElement("img")
//     imgz.src = ele.urlToImage;

//     let desc = document.createElement("p")
//     desc.innerText = ele.description;

//   div.append(titlee, imgz, desc)
//   container.append(div)



// }

// // ===================================== Left-Section News ====================================================

// let url = ``

// let getData = async() => {
//     let res = await fetch (url)
//     let data = await res.json()

//     console.log(data)
//     appendData(data)
// }


// let appendData = () => {

//     let container = document.getElementById("left-section");
   
//     data.forEach(function(ele){


//         let div = document.createElement("div");
//         div.setAttribute("id", "left_topnews_div");
    
//             let heading =  document.createElement("h2");
//             heading.innerText = ;
    
//             let title =  document.createElement("h3");
//             title.innerText = ;
    
//             let dateAndtime  =  document.createElement("h3");
//             dateAndtime.innerText = ;
    
//         div.append(heading, title, dateAndtime)


//     });

// };





// // ============================================ Right-Section News ===================================================