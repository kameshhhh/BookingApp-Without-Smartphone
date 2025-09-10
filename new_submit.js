// JS for new.html to submit new entry to backend
// Assumes you have fields with ids: newTitle, newDescription
// Add <script src="new_submit.js"></script> before </body> in new.html

document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submitNew');
  if (!submitBtn) return;
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const title = document.getElementById('newTitle')?.value;
    const description = document.getElementById('newDescription')?.value;
    if (!title || !description) {
      alert('Please fill all fields');
      return;
    }
    fetch('http://localhost:3000/submit-new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) alert('Entry submitted!');
      else alert('Error: ' + (data.error || 'Unknown error'));
    })
    .catch(err => alert('Network error: ' + err));
  });
});
