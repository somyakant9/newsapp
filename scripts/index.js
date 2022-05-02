// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
import append from "./fetch.js";

document.getElementById("navbar").innerHTML = navbar();




let query = document.getElementById("search_input").value;
let container=document.getElementById("results");

let news = async()=>{

    try{

      
        let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in");
        let data = await res.json();
        return (data.articles);
    }catch(err){
        console.log(err);
    }
  }  

news().then((res)=>{

    append(container,res);
});





   
let myfunc = async()=>{

    let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in");
    let data =await res.json();
    let real = data.articles;
     append(container,real);
        
    }
    document.getElementById("in").addEventListener("click",myfunc);


let myfunc1 = async()=>{

    let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch");
    let data =await res.json();
    let real = data.articles;
     append(container,real);
        
    }
    document.getElementById("ch").addEventListener("click",myfunc1); 

let myfunc2 = async()=>{

    let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=us");
    let data =await res.json();
    let real = data.articles;
     append(container,real);
        
    }
  
document.getElementById("us").addEventListener("click",myfunc2);


let myfunc3 = async()=>{

    let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk");
    let data =await res.json();
    let real = data.articles;
     append(container,real);
        
    }
    document.getElementById("uk").addEventListener("click",myfunc3);   

let myfunc4 = async()=>{

    let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz");
    let data =await res.json();
    let real = data.articles;
     append(container,real);
        
    }

    document.getElementById("nz").addEventListener("click",myfunc4);


    // https://masai-mock-api.herokuapp.com/news?q={query}

