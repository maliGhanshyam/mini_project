'use strict';

/**
 * Navbar toggle
 */
document.addEventListener("DOMContentLoaded", function() {
  const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
  const header = document.querySelector("[data-header]");

  if (navToggleBtn && header) {
    navToggleBtn.addEventListener("click", function () {
      this.classList.toggle("active");
      header.classList.toggle("active");
    });
  }

  /**
   * Show go top button when scrolling window to 500px
   */
  const goTopBtn = document.querySelector("[data-go-top]");

  if (goTopBtn) {
    window.addEventListener("scroll", function () {
      window.scrollY >= 500 ? goTopBtn.classList.add("active")
        : goTopBtn.classList.remove("active");
    });
  }

  // Create the header element
  const dynamicHeader = document.createElement('header');
  dynamicHeader.className = 'header';
  dynamicHeader.setAttribute('data-header', '');

  // Create the container div
  const container = document.createElement('div');
  container.className = 'container';

  // Create the logo link
  const logoLink = document.createElement('a');
  logoLink.href = '#';

  const logo = document.createElement('h1');
  logo.className = 'logo';
  logo.textContent = 'MAHADarshan';
  logoLink.appendChild(logo);

  // Create the toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'nav-toggle-btn';
  toggleButton.setAttribute('data-nav-toggle-btn', '');
  toggleButton.setAttribute('aria-label', 'Toggle Menu');

  const openIcon = document.createElement('ion-icon');
  openIcon.name = 'menu-outline';
  openIcon.className = 'open';
  const closeIcon = document.createElement('ion-icon');
  closeIcon.name = 'close-outline';
  closeIcon.className = 'close';

  toggleButton.appendChild(openIcon);
  toggleButton.appendChild(closeIcon);

  // Create the navbar
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';

  const navbarList = document.createElement('ul');
  navbarList.className = 'navbar-list';

  // Navbar items
  const navbarItems = [
    { href: 'index.html', text: 'Home' },
    { href: 'aboutUs.html', text: 'About Us' },
    { href: 'popularTours.html', text: 'Tours' },
    // { href: 'destinations.html', text: 'Destinations' },
    { href: 'blogs.html', text: 'Blog' },
    { href: 'contactUs.html', text: 'Contact Us' },
    { href: 'login.html', text: 'Login' },
  ];

  navbarItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.className = 'navbar-link';
    a.textContent = item.text;
    li.appendChild(a);
    navbarList.appendChild(li);
  });

  navbar.appendChild(navbarList);

  // Create the booking button
  const bookingButton = document.createElement('a');
  bookingButton.href = 'bookNow.html';
  bookingButton.className = 'btn btn-secondary';
  bookingButton.textContent = 'Booking Now';

  navbar.appendChild(bookingButton);

  // Append everything to the container
  container.appendChild(logoLink);
  container.appendChild(toggleButton);
  container.appendChild(navbar);

  // Append the container to the header
  dynamicHeader.appendChild(container);

  // Append the header to the body
  document.getElementById('navbar-container').appendChild(dynamicHeader);

  // Add toggle functionality
  toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

 // Add functionality to highlight clicked tab
 const navbarLinks = document.querySelectorAll('.navbar-link');

 navbarLinks.forEach(link => {
   link.addEventListener('click', function() {
     navbarLinks.forEach(navLink => navLink.classList.remove('active'));
     this.classList.add('active');
   });
 });
});

// Logic for Contact Us
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

function validateName() {
  const name = nameInput.value.trim();
  if (name === '') {
    nameError.textContent = 'Name is required.';
    return false;
  } else if (name.split(' ').length < 2) {
    nameError.textContent = 'Name must contain at least two words.';
    return false;
  } else {
    nameError.textContent = '';
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  if (email === '') {
    emailError.textContent = 'Email is required.';
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.textContent = 'Email is not valid.';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

function validateSubject() {
  const subject = subjectInput.value.trim();
  if (subject === '') {
    subjectError.textContent = 'Subject is required.';
    return false;
  } else if (subject.length < 5) {
    subjectError.textContent = 'Subject must be at least 5 characters long.';
    return false;
  } else {
    subjectError.textContent = '';
    return true;
  }
}

function validateMessage() {
  const message = messageInput.value.trim();
  if (message === '') {
    messageError.textContent = 'Message is required.';
    return false;
  } else if (message.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters long.';
    return false;
  } else {
    messageError.textContent = '';
    return true;
  }
}

// Validate on blur
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
subjectInput.addEventListener('blur', validateSubject);
messageInput.addEventListener('blur', validateMessage);

// Validate on form submit
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    // If no errors, send the form data
    // Here you can add the AJAX request to send the form data to the server
    alert('Feedback sent successfully!');
  }
});



// Booking Page 
const bookingForm = document.getElementById('bookingForm');
    const bookingNameInput = document.getElementById('name');
    const bookingEmailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const destinationSelect = document.getElementById('destination');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    const bookingNameInputError = document.getElementById('nameError');
    const bookingEmailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const destinationError = document.getElementById('destinationError');
    const startDateError = document.getElementById('startDateError');
    const endDateError = document.getElementById('endDateError');

    function validateName() {
      const name = bookingNameInput.value.trim();
      if (name === '') {
        nameError.textContent = 'Name is required.';
        return false;
      } else if (name.split(' ').length < 2) {
        nameError.textContent = 'Name must contain at least two words.';
        return false;
      } else {
        nameError.textContent = '';
        return true;
      }
    }

    function validateEmail() {
      const email = bookingEmailInput.value.trim();
      if (email === '') {
        bookingEmailError.textContent = 'Email is required.';
        return false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        bookingEmailError.textContent = 'Email is not valid.';
        return false;
      } else {
        bookingEmailError.textContent = '';
        return true;
      }
    }

    function validatePhone() {
      const phone = phoneInput.value.trim();
      if (phone === '') {
        phoneError.textContent = 'Phone number is required.';
        return false;
      } else if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = 'Phone number must be 10 digits.';
        return false;
      } else {
        phoneError.textContent = '';
        return true;
      }
    }

    function validateDestination() {
      const destination = destinationSelect.value;
      if (destination === '') {
        destinationError.textContent = 'Destination is required.';
        return false;
      } else {
        destinationError.textContent = '';
        return true;
      }
    }

    function validateDates() {
      const startDate = startDateInput.value;
      const endDate = endDateInput.value;

      if (startDate === '') {
        startDateError.textContent = 'Start date is required.';
        return false;
      } else if (endDate === '') {
        endDateError.textContent = 'End date is required.';
        return false;
      } else if (new Date(startDate) >= new Date(endDate)) {
        startDateError.textContent = 'Start date must be before end date.';
        return false;
      } else {
        startDateError.textContent = '';
        endDateError.textContent = '';
        return true;
      }
    }

    // Validate on blur
    bookingNameInput.addEventListener('blur', validateName);
    bookingEmailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    destinationSelect.addEventListener('blur', validateDestination);
    startDateInput.addEventListener('blur', validateDates);
    endDateInput.addEventListener('blur', validateDates);

    // Validate on form submit
    bookingForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isDestinationValid = validateDestination();
      const areDatesValid = validateDates();

      if (isNameValid && isEmailValid && isPhoneValid && isDestinationValid && areDatesValid) {
        // If no errors, send the form data
        // Here you can add the AJAX request to send the form data to the server
        alert('Booking submitted successfully!');
      }
    });

    