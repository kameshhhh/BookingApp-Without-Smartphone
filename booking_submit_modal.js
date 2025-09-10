// booking_submit_modal.js
// Enhanced version using ModalHelper for notifications
// Does NOT modify the original booking_submit.js

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBooking');
    if (!submitBtn) return;
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const name = document.getElementById('bookingName') ? .value;
        const email = document.getElementById('bookingEmail') ? .value;
        const booking_date = document.getElementById('bookingDate') ? .value;
        if (!name || !email || !booking_date) {
            window.ModalHelper.notify('Please fill all fields', 'warning');
            return;
        }
        fetch('http://localhost:3000/submit-booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, booking_date })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) window.ModalHelper.notify('Booking submitted!', 'success');
                else window.ModalHelper.notify('Error: ' + (data.error || 'Unknown error'), 'error');
            })
            .catch(err => window.ModalHelper.notify('Network error: ' + err, 'error'));
    });
});