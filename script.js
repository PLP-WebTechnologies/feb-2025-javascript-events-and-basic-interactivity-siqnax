
    // Form validation and submission
    document.getElementById('subscribeForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const formMessage = document.getElementById('formMessage');

      let valid = true;
      nameError.textContent = '';
      emailError.textContent = '';
      formMessage.textContent = '';

      if (name === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
      }

      if (email === '') {
        emailError.textContent = 'Email is required.';
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
      }

      if (valid) {
        formMessage.textContent = 'Successfully subscribed!';
        formMessage.className = 'success';
        // Clear the form
        document.getElementById('subscribeForm').reset();
      }
    });

    // Toggle surprise message
    document.getElementById('toggleMessageBtn').addEventListener('click', function() {
      const msg = document.getElementById('surpriseMessage');
      msg.classList.toggle('hidden');
    });
