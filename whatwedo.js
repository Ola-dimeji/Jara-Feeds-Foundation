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

  