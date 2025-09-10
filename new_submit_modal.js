// new_submit_modal.js
// Enhanced version using ModalHelper for notifications
// Does NOT modify the original new_submit.js

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitNew');
    if (!submitBtn) return;
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const title = document.getElementById('newTitle') ? .value;
        const description = document.getElementById('newDescription') ? .value;
        if (!title || !description) {
            window.ModalHelper.notify('Please fill all fields', 'warning');
            return;
        }
        fetch('http://localhost:3000/submit-new', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) window.ModalHelper.notify('Entry submitted!', 'success');
                else window.ModalHelper.notify('Error: ' + (data.error || 'Unknown error'), 'error');
            })
            .catch(err => window.ModalHelper.notify('Network error: ' + err, 'error'));
    });
});