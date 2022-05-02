let append =(container,data)=>{

    container.innerHTML=null;
    
    data.forEach((el)=>{


        let div = document.createElement("div");
        div.setAttribute("class","news");

        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class","each");

        let image = document.createElement("img");
        image.src = el.urlToImage;

        let div2 = document.createElement("div")

        let title = document.createElement("h3");
        title.innerText=el.title;
        title.style.cursor="pointer";
        title.addEventListener("click",function(){

            localStorage.setItem("news",JSON.stringify(el));
            window.location.href="news.html";
        });

        let description = document.createElement("p");
        description.innerText = el.description;
        let content = document.createElement("p");
        content.innerText = el.content;

        div2.append(title,description,content);
        imgdiv.append(image);
        div.append(imgdiv,div2);

       container.append(div);


    })
      
  }

  export default append;