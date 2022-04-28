$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});

// const btn = document.getElementById('button');

// document.getElementById('form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();

//     btn.value = 'Sending...';

//     const serviceID = 'service_sqifveb';
//     const templateID = 'template_5vpivwy';

//     emailjs.sendForm(serviceID, templateID, this)
//       .then(() => {
//         btn.value = 'Send Email';
//         alert('Sent!');
//       }, (err) => {
//         btn.value = 'Send Email';
//         alert(JSON.stringify(err));
//       });
//   });

function SendMail(){
  var  params = {
    name : document.getElementById("fullName").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value
  }
  emailjs.sendForm('service_sqifveb', 'template_5vpivwy', params).then( function (res) { 
    alert("message send " + res.status);
  })
}