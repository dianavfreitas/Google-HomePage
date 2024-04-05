function searchalert(){
    let inputValue = document.getElementById("searchinput").value;
    alert("You searched for: " + inputValue);
  }
  
  document.getElementById("googlesearch").addEventListener("click", searchalert);