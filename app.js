var modal = document.getElementById('modalReward');
var modalP25 = document.getElementById('btn-modal-p25');
var modalP75 = document.getElementById('btn-modal-p75');
var span = document.getElementsByClassName("close")[0];

var sbNoReward = document.getElementById('select-box-noReward'); 
var checkboxNoReward = document.getElementById('no-reward');

var checkboxPledge25 = document.getElementById('radio-p25');
var sbPledge25 =  document.getElementById('select-box-pledge25'); // modal select box pledge 25
var pledge25 = document.getElementById('Pledge-25');
var input25 = document.getElementById('input-p25');

var checkboxPledge75 = document.getElementById('radio-p75');
var sbPledge75 =  document.getElementById('select-box-pledge75');// modal select box pledge 75
var pledge75 = document.getElementById('Pledge-75');
var input75 = document.getElementById('input-p75');

var modalNoReward = document.getElementById("back-project");


const openModal = (elPledge, elSb, elPledgeRemove, elSbRemove,inputPledge, inputRemove, radioChecked, radioRemoved) =>{
  modal.style.display = "block";
  checkInput(elPledge, elSb, elPledgeRemove, elSbRemove,inputPledge, inputRemove, radioChecked, radioRemoved);
}

const checkInput = (elPledge, elSb, elPledgeRemove, elSbRemove,inputPledge, inputRemove, radioChecked, radioRemoved) =>{
  elPledge.style.display = "flex";
  elSb.classList.add("checked");
  sbNoReward.classList.remove("checked");
  inputPledge.required = true;
  radioChecked.checked = true;
  if(elPledgeRemove.style.display === "flex"){
    elPledgeRemove.style.display = "none";
    elSbRemove.classList.remove("checked");
    inputRemove.required = false;
    radioRemoved.checked = false;
  }
}

// When the user clicks the button, open the modal 
modalP25.onclick = function() {
  openModal(pledge25,sbPledge25,pledge75,sbPledge75, input25,input75,checkboxPledge25,checkboxPledge75);
}

modalP75.onclick = function() {
  openModal(pledge75,sbPledge75,pledge25,sbPledge25, input75,input25,checkboxPledge75,checkboxPledge25);
}

modalNoReward.onclick = () => {
  modal.style.display = "block";
  sbNoReward.classList.add("checked");
  checkboxNoReward.checked = true;
}

  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


checkboxPledge25.onclick = function(){
  checkInput(pledge25,sbPledge25,pledge75,sbPledge75, input25,input75,checkboxPledge25,checkboxPledge75);
}
checkboxPledge75.onclick = function(){
  checkInput(pledge75,sbPledge75,pledge25,sbPledge25, input75,input25,checkboxPledge75,checkboxPledge25);
}

checkboxNoReward.onclick = function(){
  sbNoReward.classList.add("checked");
  pledge25.style.display = "none";
  pledge75.style.display = "none";
  sbPledge25.classList.remove("checked");
  sbPledge75.classList.remove("checked");
}
