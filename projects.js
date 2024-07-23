function setDonationType(type) {
  const donationTypeElement = document.getElementById('donation-type');
  if (type === 'once') {
      donationTypeElement.textContent = 'Once';
  } else if (type === 'monthly') {
      donationTypeElement.textContent = 'Monthly';
  } else {
      donationTypeElement.textContent = 'Weekly';
  }
}

document.getElementById('donationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('submitBtn');
  const loadingSpinner = document.getElementById('loadingSpinner');
  
  submitBtn.disabled = true;
  loadingSpinner.style.display = 'inline-block';
  const amount = document.getElementById('amount').value;
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const donationType = document.getElementById('donation-type').value;
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  const message = document.getElementById('message').value;
  const giftAid = document.getElementById('giftAid').checked;

  // Simulate form submission process
  setTimeout(() => {
      alert(`Thank you for your donation of ₦${amount}! A confirmation email will be sent to your email address.`);
      $('#donateModal').modal('hide');
      submitBtn.disabled = false;
      loadingSpinner.style.display = 'none';
    }, 5000); // Simulated delay for form processing

});


$(document).ready(function() {
  // Show the modal when the subscribe button is clicked
  $('#subscribeBtn').click(function() {
      $('#subscribeModal').modal('show');
  });

  // Handle the form submission
  $('#subscribeForm').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission

      var firstName = $('#firstName').val();
      var message = `Dear ${firstName}, you have successfully subscribed to our newsletter. You can always unsubscribe anytime. Thanks for choosing Jarafeeds Foundation. We are feeding hope, ending hunger.`;

      alert(message);

      // Close the modal
      $('#subscribeModal').modal('hide');

      // Optionally, reset the form
      $('#subscribeForm')[0].reset();
  });
});

let currentMember = 0;
const members = document.querySelectorAll('.member');

function showMember(index) {
  members.forEach((member, i) => {
    member.classList.toggle('active', i === index);
  });
}

function prevMember() {
  currentMember = (currentMember > 0) ? currentMember - 1 : members.length - 1;
  showMember(currentMember);
}

function nextMember() {
  currentMember = (currentMember < members.length - 1) ? currentMember + 1 : 0;
  showMember(currentMember);
}

document.addEventListener('DOMContentLoaded', () => {
  showMember(currentMember);
});

$('#link').click(function () {
  var src = 'http://www.youtube.com/v/FSi2fJALDyQ&amp;autoplay=1';
  $('#myModal').modal('show');
  $('#myModal iframe').attr('src', src);
});

$('#myModal button').click(function () {
  $('#myModal iframe').removeAttr('src');
});



// scroll to top
window.onscroll = function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}