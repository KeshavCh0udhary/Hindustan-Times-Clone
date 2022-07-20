let data=localStorage.getItem('data')||[];

document.getElementById("button").addEventListener("click",()=>{
    let UserName=document.getElementById("email").value;
    if(UserName==""){
        return;
    }
    console.log("UserName: " + UserName);
    data.includes(UserName)?console.log("ok"):data.push(UserName);
    console.log(data);
    localStorage.setItem('data', JSON.stringify(data));  
});