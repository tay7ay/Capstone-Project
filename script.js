const form = document.querySelector("form");
eField = form.querySelector(".userID"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkID();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ 
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkID();} 
  pInput.onkeyup = ()=>{checkPass();} 

  function checkID(){
    let pattern = /^\d{9}$/;
    if(!eInput.value.match(pattern)){
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid GSW ID" : errorTxt.innerText = "User ID can't be blank";
    }else{
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){
    if(pInput.value == ""){
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action");
    
    if(eInput.value == "913236543"){
      alert("Welcome Tayvion!")
    }
    if(eInput.value == "913111111"){
      alert("Welcome Jeremiah!")
    }
  }
}