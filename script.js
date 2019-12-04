const msg = document.querySelector('.msg');
const name = document.getElementById('nameField');
const email = document.getElementById('emailField');
const btn = document.getElementById('submit-btn');

 

btn.addEventListener('click', (e) =>{
    e.preventDefault;
    console.log(e);
    // console.log(e.target.style.color = 'red');
    // msg.classList.add('error');
    // msg.textContent = 'Hello There';
    if (name.value == "" && email.value == "") {
        msg.classList.add('error');
        msg.textContent = "You must type a name and an email address";
        setTimeout(() => msg.remove(), 3000)
        
    } else {
        document.querySelector('.users').innerHTML = `<h3 style ="color: green"> Name</h3> : ${name.value} <h3 style ="color: green">Email:</h3>${email.value}`;
        msg.classList.add('success');
        msg.textContent = "Congratulations you've been added to the list";
        setTimeout(() => msg.remove(), 4000)
    }

   
});



// function fadeMsg(){
//         let opacity = Number(window.getComputedStyle(msg).getPropertyPriority('opacity'));
//     if (opacity === 0){
//         opacity-=0.1;
//         msg.style.opacity = 'opacity';
//     } else{
//         clearInterval(setInterval(fadeMsg, 200));
//     }
// }