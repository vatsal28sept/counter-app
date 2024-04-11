const count = document.getElementById("count");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const reset = document.getElementById("reset");

add.addEventListener('click', () =>{
    count.innerHTML++;
    Color();
});
sub.addEventListener('click', () =>{
    count.innerHTML--;
    Color();
});
reset.addEventListener('click', () =>{
    count.innerHTML = 0;
    Color();
});

function Color(){
    if(count.innerHTML > 0){
        count.style.color = "green";
    }else if(count.innerHTML < 0){
        count.style.color = "orangered";
    }else{
        count.style.color = "black"
    }
}