var contact_us =document.getElementById('contact-us');
var us_contact =document.getElementById('us-contact');

function hideButtonContact(){
      if(window.innerWidth <= 985 ){
        contact_us.classList.add('contactUS');
        us_contact.classList.add('usContact');
      }
      else {
        contact_us.classList.remove('contactUS');
        us_contact.classList.remove('usContact');
      }
}

window.addEventListener('load', hideButtonContact);
window.addEventListener('resize', hideButtonContact);