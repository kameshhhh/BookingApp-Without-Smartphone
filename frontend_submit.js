// JS for frontend.html to submit feedback to backend
// Assumes you have fields with ids: username, feedback
// Add <script src="frontend_submit.js"></script> before </body> in frontend.html

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username')?.value;
    const feedback = document.getElementById('feedback')?.value;
    if (!username || !feedback) {
      alert('Please fill all fields');
      return;
    }
    fetch('http://localhost:3000/submit-frontend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, feedback })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) alert('Feedback submitted!');
      else alert('Error: ' + (data.error || 'Unknown error'));
    })
    .catch(err => alert('Network error: ' + err));
  });
});
