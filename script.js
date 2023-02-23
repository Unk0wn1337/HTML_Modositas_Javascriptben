window.addEventListener("load",init);

function init() {
     document.getElementById("tartalom").innerHTML = "<h1>Javascriptbol irok ide</h1>";
    kedvencSzavak();
    }
function kedvencSzavak(){
    const szavak=["csücsül","leleményes","szivélyes"];
    document.getElementById("szavak").innerHTML=szavak;
    document.getElementById("szavak").innerHTML="<li>";
    for (let index = 0; index < 3; index++) {
          document.getElementById("szavak").innerHTML += "<ul>"+szavak[index]+"</ul>";
        
     }
     
}
