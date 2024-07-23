$(document).ready(function() {
    // Check if the cookie consent has already been given
    if (!getCookie('cookieConsent')) {
        // Show the cookie consent modal
        $('#cookieConsentModal').modal('show');
    }
  
    // Set cookie consent
    $('#acceptAll').click(function() {
        setCookie('cookieConsent', 'accepted', 365);
        $('#cookieConsentModal').modal('hide');
    });
  
    $('#rejectAll').click(function() {
        setCookie('cookieConsent', 'rejected', 365);
        $('#cookieConsentModal').modal('hide');
    });
  
    $('#cookieSettings').click(function() {
        alert('Cookie settings clicked');
    });
  
    // Function to set a cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
  
    // Function to get a cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
  });
  


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
function animateCounter(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
        current += increment;
        obj.textContent = current.toLocaleString();
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function() {
    animateCounter("projects", 0, 154000, 2000);
    animateCounter("countries", 0, 60, 2000);
    animateCounter("people", 0, 62897351, 2000);
};

