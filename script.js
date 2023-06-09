const form = document.querySelector("form");
eField = form.querySelector(".userID"),
eInput = eField.querySelector("input"),

form.onsubmit = (e)=>{
  e.preventDefault();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkID();

  setTimeout(()=>{ 
    eField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkID();} 

  function checkID(){
    let pattern = /^\d{9}$/;
    if(!eInput.value.match(pattern)){
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid GSW ID" : errorTxt.innerText = "User ID can't be blank";
    }
    else{
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
    if(eInput.value == "ED9A6A83" || eInput.value == "ed9a6a83"){
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
    if(eInput.value == "334c3833" || eInput.value == "334C3833"){
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  if(!eField.classList.contains("error")){
    window.location.href = form.getAttribute("action");
    
    if(eInput.value == "913236543"){
      alert("Welcome Tayvion Lyons!")
    }
    if(eInput.value == "913111111"){
      alert("Welcome Jeremiah Harrison!")
    }
    if(eInput.value == "ED9A6A83" || eInput.value == "ed9a6a83"){
      alert("Welcome Deep Patel!")
    }
    if(eInput.value == "334c3833" || eInput.value ==  "334C3833"){
      alert("Welcome Jimmy Moore!")
    }

  }
}