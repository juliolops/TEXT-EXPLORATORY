
buttonRun = document.querySelector(".buttonRun")

buttonStop = document.querySelector(".buttonStop")



buttonStop.addEventListener("click", function() {


  document.querySelector("p").innerText = "0"


})


buttonRun.addEventListener("click", function() {

    document.querySelector(".status-system").innerText = "Running"

    document.querySelector(".status-system").style.color = "#008000"

    console.log("carregou!")
    
    contentTwitter = document.querySelector(".contentTwitter").value;
    
    console.log(contentTwitter)
    
    dados = {data:contentTwitter,status_sytem:"Running"};
    
    let data = new FormData();
    
    data.append("contentTwitter", contentTwitter);
    
    
    
    console.log("clicou aqui!")
      
    const Http = new XMLHttpRequest();
    
    const url='http://127.0.0.1:8000/persist_results';
    
    
    data.append("contentTwitter", contentTwitter);

    data.append("status_sytem", contentTwitter);
    
    
    
    console.log(dados)
    
    Http.open("POST", url,true);
    
    Http.send(data);
    
    Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
    location.reload(true);
    
    }
    
    }
    
    
    // this is inside your loop
)





interval = setInterval(function () {
  
  
  if(document.querySelector(".status-system").innerText == "Running") {
  
    
    console.log("carregou!")
    
    contentTwitter = document.querySelector(".contentTwitter").value;
    
    console.log(contentTwitter)
    
    dados = {data:contentTwitter};
    
    let data = new FormData();
    
    data.append("contentTwitter", contentTwitter);

    data.append("contentTwitter", contentTwitter);
    
    
    
    console.log("clicou aqui!")
      
    const Http = new XMLHttpRequest();
    
    const url='http://127.0.0.1:8000/persist_results';
    
    
    data.append("contentTwitter", contentTwitter);
    
    
    
    console.log(dados)
    
    Http.open("POST", url,true);
    
    Http.send(data);
    
    Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
    location.reload(true);
    
    }
    
    }
    
    
    // this is inside your loop
  }, 10000)





/*

interval = null;

startBTN.onclick = function () {
    var i = 0;
    interval = setInterval(function () {
        console.log(i++);  // this is inside your loop
    }, 1);
};

stopBTN.onclick = function () {
    clearInterval(interval);
};

*/



