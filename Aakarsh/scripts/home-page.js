// ---------------------------------Mid Page

let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3040f5b972084c11b5135e4e11bb78ab`
let fetchData = async()=>{
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    displayData(data.articles)
}
fetchData()

let displayData = (data) =>{
    let container = document.getElementById("home-mid")

    data.forEach((el)=>{

        let box = document.createElement("div")
        box.setAttribute("class","data-boxes")
        
        let head = document.createElement("h3")
        head.innerText = "INDIA NEWS"

        let title = document.createElement("h5")
        title.innerText = el.title

        let image = document.createElement("img")
        image.src = el.urlToImage
        image.setAttribute("class","data-img")

        let publish = document.createElement("p")
        publish.innerText = ` Updated on ${el.publishedAt}`

        box.append(head, title,image,publish)
        container.append(box)




    })

}

// First Page

let url_First = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3040f5b972084c11b5135e4e11bb78ab"

let fetchData_first = async()=> {
    let res_first = await fetch(url_First)
    let data_first = await res_first.json()
    console.log("data_first: ", data_first);
    append_first_div_data(data_first.articles)
    
}
fetchData_first()

let append_first_div_data = (data_first) => {
    let first_div_container = document.getElementById("home-first")


    data_first.forEach((el)=>{


        let title = document.createElement("h5")
        title.innerText = el.title

        let publish = document.createElement("p")
        publish.innerText = ` Updated on ${el.publishedAt}`

        let first_data_div = document.createElement("div")
        first_data_div.setAttribute("class","first_data_div")


        first_data_div.append(title,publish)
        first_div_container.append(first_data_div)



    })
}