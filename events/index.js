// function btnclick(){
//     alert("button is clicked");
//  }
 
// // let e=document.getElementById('me');
// // e.addEventListener('click',btnclick());

// document.getElementById("me").addEventListener("click",btnclick);
//    let x='lorem';
//    console.log(x);

(document.getElementById("myBtn")).addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}