var display, counter = 0;

window.addEventListener("load", ()=>{
    display = document.getElementById("ctr");
    document.getElementById("inc").addEventListener("click", increment);
    document.getElementById("dec").addEventListener("click", decrement);
});
function increment(){
    counter++;
    display.innerText = counter;
}

function decrement(){
    counter--;
    display.innerText = counter;
}