document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            // Show success message
            Swal.fire({
                title: 'Success!',
                text: 'Your registration has been submitted successfully!',
                icon: 'success',
                confirmButtonColor: '#49B66E'
            }).then((result) => {
                if (result.isConfirmed) {
                    form.reset();
                    window.location.href = 'home.html';
                }
            });
        }

        form.classList.add('was-validated');
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            }
        });
    });
});