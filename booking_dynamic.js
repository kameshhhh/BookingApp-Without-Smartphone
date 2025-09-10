// Dynamic booking for car, bus, auto in booking.html
// Add <script src="booking_dynamic.js"></script> before </body> in booking.html
// Assumes there are buttons with class 'btn-book' for each vehicle card
// Prompts user for name, email, and date, and sends vehicle type to backend

document.addEventListener('DOMContentLoaded', function() {
  // Find all book buttons (assume class 'btn-book' and data-type attribute for vehicle)
  const bookButtons = document.querySelectorAll('.btn-book');
  bookButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      // Try to get vehicle type from data-type attribute or fallback to text
      const vehicleType = btn.getAttribute('data-type') || btn.textContent.trim() || 'Unknown';
      // Prompt user for details (or use default for demo)
      const name = prompt('Enter your name:');
      if (!name) return alert('Booking cancelled: Name required');
      const email = prompt('Enter your email:');
      if (!email) return alert('Booking cancelled: Email required');
      const booking_date = prompt('Enter booking date (YYYY-MM-DD):', new Date().toISOString().slice(0,10));
      if (!booking_date) return alert('Booking cancelled: Date required');
      // Send to backend
      fetch('http://localhost:3000/submit-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, booking_date, vehicle: vehicleType })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) alert('Booking submitted for ' + vehicleType + '!');
        else alert('Error: ' + (data.error || 'Unknown error'));
      })
      .catch(err => alert('Network error: ' + err));
    });
  });
});
