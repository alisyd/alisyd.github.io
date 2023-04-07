const  ward = document.getElementById('ward'); 
ward.addEventListener("click", function() {
  alert("Ward 2A");
});
let grad = true;
const room = document.getElementById('room');
room.addEventListener("dblclick", function() {
    console.log("Premier Single");
});

const bed= document.getElementById('bed');
bed.addEventListener("click", function() {
    if (grad) {
    bed.style.background = "linear-gradient(to top right, #2f57f4, #acc8f0)"
    grad = false;
        
      } else {
    bed.style.background = "linear-gradient(to top right, #f0d420, #fbefbf)";
        grad = true;
}
});

const payment = document.getElementById('payment');
payment.addEventListener("click", function() {
    alert("Insurance");
});