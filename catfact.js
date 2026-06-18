
let url='https://catfact.ninja/fact';
let btn=document.querySelector("#facts");
let body=document.querySelector("body");
let p=document.createElement("p");
body.append(p);
btn.addEventListener("click",async()=>{
    let result=await getfacts();
    p.innerText=result;
    
    
});
async function getfacts() {
    
        try{
            let result=await fetch(url);// we can axios.get() and we will not be use parse to convert the readable stream data to show real data 
            let data=await result.json();
            return data.fact;
        }
        catch{
            console.log("error found");
        }
    }