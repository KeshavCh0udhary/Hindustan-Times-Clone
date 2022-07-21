let ENews = [
    "https://epsfs.hindustantimes.com/HT/2022/07/21/HT_DELH/HT_DELH/5_02/9543e2d1_02_mr.jpg", "https://epsfs.hindustantimes.com/HT/2022/07/21/HT_DELH/HT_DELH/5_03/a5d1eccf_03_mr.jpg", "https://epsfs.hindustantimes.com/HT/2019/08/02/HT_BRU/HT_BRU/5_01/b48a540e_01_mr.jpg","https://epsfs.hindustantimes.com/HT/2022/07/21/HT_DELH/HT_DELH/5_01/5094df6a_01_mr.jpg","https://epsfs.hindustantimes.com/HT/2022/07/21/HT_DELH/HT_DELH/1_04/715bd271_04_mr.jpg"
];
let Epaper = document.getElementById("Epaper");
Epaper.src = ENews[3];

let i = 0;
let Interval;
let SlideShow=()=> {
     Interval = setInterval(()=> {
        if (i === ENews.length) {
            i = 0;
        }
        Epaper.src = ENews[i];
        // console.log(Epaper.src);
        i++;
    }, 3000);
}
SlideShow();
let Back=document.getElementById("Back").addEventListener("click", ()=>{
    back();
});

let back=()=>{
    if(Interval){
        clearTimeout(Interval)
    }
    i--;
    if(i===0){
      i = ENews.length-1;
    }
    Epaper.src = ENews[i]
    SlideShow();
}

let Forward=document.getElementById("Forward").addEventListener("click", ()=>{
    forward();
});

let forward=()=>{
    if(Interval){
        clearTimeout(Interval)
    }
    i++;
    if(i===ENews.length){
      i = 0;
    }
    Epaper.src = ENews[i]
    SlideShow();
}