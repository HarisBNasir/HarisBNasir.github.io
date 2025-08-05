document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            showAlert('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!validateEmail(data.email)) {
            showAlert('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission (in a real app, you would send to a server)
        showAlert('Your message has been sent successfully!', 'success');
        contactForm.reset();
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        
        const formHeader = contactForm.querySelector('h2');
        if (formHeader) {
            formHeader.insertAdjacentElement('afterend', alertDiv);
        } else {
            contactForm.prepend(alertDiv);
        }
        
        setTimeout(() => {
            alertDiv.style.opacity = '0';
            setTimeout(() => alertDiv.remove(), 300);
        }, 5000);
    }
});