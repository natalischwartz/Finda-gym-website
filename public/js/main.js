/*=============== SHOW MENU ===============*/
const navClose = document.querySelector('#nav-close');
const navMenu = document.querySelector('#navbarNavDropdown');

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.querySelector('.nav__menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHOW SCROLL UP ===============*/ 





/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message');


const sendEmail =(e) =>{
    e.preventDefault()
    
    const templateParams = {
        user_name: document.getElementById('name-user').value,
        user_lastname : document.getElementById('lastname-user').value,
        user_email: document.getElementById('contact-user').value,
        user_message: document.getElementById('message-user')
    };

    //check if the field has a value 
    if(templateParams.user_email ===""){
                // Add and remove color
                contactMessage.classList.remove('color-green')
                contactMessage.classList.add('color-red')
        
                // Show message
                contactMessage.textContent = 'You must enter your email 👆🏻'
        
                // Remove message three seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 3000)
            }else{
                 // serviceID - templateID - #form - publicKey
                emailjs.sendForm('service_1pw0tun', 'template_4icxwb4','#contact-form', 'XPE5hIxIYXXGy8r0O',templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Mensaje enviado exitosamente!');
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Ocurrió un error al enviar el mensaje.');
                });
            }
    }

    contactForm.addEventListener('submit' , sendEmail)




// const contactForm = document.getElementById('contact-form'),
//     contactMessage = document.getElementById('contact-message'),
//     contactUser = document.getElementById('contact-user')
//     contactTextarea = document.getElementById('contact-message')

// const sendEmail = (e) =>{
//     e.preventDefault()

//     // Check if the field has a value
//     if(contactUser.value ===""){
//         // Add and remove color
//         contactMessage.classList.remove('color-green')
//         contactMessage.classList.add('color-red')

//         // Show message
//         contactMessage.textContent = 'You must enter your email 👆🏻'

//         // Remove message three seconds
//         setTimeout(() =>{
//             contactMessage.textContent = ''
//         }, 3000)
//     }else{
//         // serviceID - templateID - #form - publicKey
//         emailjs.sendForm('service_1pw0tun', 'template_4icxwb4','#contact-form', 'XPE5hIxIYXXGy8r0O')
//             .then(() =>{
//                 // Show message and add color
//                 contactMessage.classList.add('color-green')
//                 contactMessage.textContent = "You registered successfully"


//                 // Remove message after three seconds
//                 setTimeout(() =>{
//                     contactMessage.textContent = ''
//                 }, 3000)
//             }, (error)=>{
//                 // Mail sending error
//                 alert('OOPS! SOMETHING HAS FAILED...',error)
//             })

//         // To clear the input field
//         contactUser.value = '';
//     }

// }

// contactForm.addEventListener('submit' , sendEmail)