// JS for booking.html to submit booking data to backend
// Assumes you have fields with ids: bookingName, bookingEmail, bookingDate
// Add <script src="booking_submit.js"></script> before </body> in booking.html

document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submitBooking');
  if (!submitBtn) return;
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('bookingName')?.value;
    const email = document.getElementById('bookingEmail')?.value;
    const booking_date = document.getElementById('bookingDate')?.value;
    if (!name || !email || !booking_date) {
      alert('Please fill all fields');
      return;
    }
    fetch('http://localhost:3000/submit-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, booking_date })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) alert('Booking submitted!');
      else alert('Error: ' + (data.error || 'Unknown error'));
    })
    .catch(err => alert('Network error: ' + err));
  });
});
