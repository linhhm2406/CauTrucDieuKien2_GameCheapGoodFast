
function clickcheapbutton() {
    let cheap = document.getElementById("clickcheap").checked;
    // alert(cheap);
    let good = document.getElementById("clickgood").checked;
    let fast = document.getElementById("clickfast").checked;

    if(cheap === true){
        if(good === true){
            fast=false;
        } else {fast = document.getElementById("clickfast").checked;
        }}

    document.getElementById("clickcheap").checked=cheap;
    document.getElementById("clickgood").checked=good;
    document.getElementById("clickfast").checked=fast;
}
function clickgoodbutton() {
    let cheap = document.getElementById("clickcheap").checked;
    // alert(cheap);
    let good = document.getElementById("clickgood").checked;
    let fast = document.getElementById("clickfast").checked;

    if(good === true){
        if(fast === true){
            cheap=false;
        } else {cheap = document.getElementById("clickcheap").checked;
    }}

    document.getElementById("clickcheap").checked=cheap;
    document.getElementById("clickgood").checked=good;
    document.getElementById("clickfast").checked=fast;
}

function clickfastbutton() {
    let cheap = document.getElementById("clickcheap").checked;
    // alert(cheap);
    let good = document.getElementById("clickgood").checked;
    let fast = document.getElementById("clickfast").checked;

    if(fast === true){
        if(cheap === true){
            good=false;
        } else {good = document.getElementById("clickgood").checked;
        }}
    document.getElementById("clickcheap").checked=cheap;
    document.getElementById("clickgood").checked=good;
    document.getElementById("clickfast").checked=fast;
}

//binh comment