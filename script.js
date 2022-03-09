
//select input, submit, tasks
let input= document.getElementById('input');
let submit= document.getElementById('submit');
let tasks= document.getElementById('tasks');

//addeventListener which click submit
// call createElement Function when input field is not empty 
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if(input.value !== ''){
        tasks.innerHTML += createElement();
    }
    input.value = "";
    input.focus();
    remove();

});
//defining createElement() function and add input value dynamically
function createElement(){

    let ele = `
    <div class="todotask">
        ${input.value}
        <button class="btn" id="btn"> Delete </button>    
    </div>    
    `
    return ele;

}
// define remove function
function remove(){
    let btn = document.querySelectorAll(".btn");
    btn.forEach((button)=>{
        button.addEventListener("click", (e)=>{
            e.preventDefault();
            e.target.parentNode.remove();
        })

    });

};