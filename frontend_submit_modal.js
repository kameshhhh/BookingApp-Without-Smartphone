// frontend_submit_modal.js
// Enhanced version using ModalHelper for notifications
// Does NOT modify the original frontend_submit.js

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username') ? .value;
        const feedback = document.getElementById('feedback') ? .value;
        if (!username || !feedback) {
            window.ModalHelper.notify('Please fill all fields', 'warning');
            return;
        }
        fetch('http://localhost:3000/submit-frontend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, feedback })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) window.ModalHelper.notify('Feedback submitted!', 'success');
                else window.ModalHelper.notify('Error: ' + (data.error || 'Unknown error'), 'error');
            })
            .catch(err => window.ModalHelper.notify('Network error: ' + err, 'error'));
    });
});