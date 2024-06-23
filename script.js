burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
leftnav =document.querySelector('.leftnav')
rightnav =document.querySelector('.rightnav')
aboutlist =document.querySelector('.aboutlist')

burger.addEventListener('click', () =>{
  rightnav.classList.toggle('v-class');
  leftnav.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
  aboutlist.classList.toggle('h-about');
})

function myFunction(x) {
    x.classList.toggle("change");
  }


  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = true;

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    // Name validation
    if (name.length < 3 || !/^[a-zA-Z\s]+$/.test(name)) {
        isValid = false;
        document.getElementById('nameError').style.display = 'block';
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Mobile number validation
    if (!/^\d{10}$/.test(mobile)) {
        isValid = false;
        document.getElementById('mobileError').style.display = 'block';
    } else {
        document.getElementById('mobileError').style.display = 'none';
    }

    if (isValid) {
        var popup = document.getElementById('popup');
        popup.style.display = 'flex';
    }
});

document.getElementById('closeBtn').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
});
