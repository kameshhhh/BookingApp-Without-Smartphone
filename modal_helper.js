// modal_helper.js
// Helper to inject SweetAlert2 modals for improved UX
// Does NOT modify any original project files

// Load SweetAlert2 from CDN if not present
(function () {
  if (!window.Swal) {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    script.onload = function () {
      window.Swal = window.Swal || Swal;
    };
    document.head.appendChild(script);
  }
})();

// Modal helpers
window.ModalHelper = {
  notify: function (msg, type = "info") {
    if (window.Swal) {
      Swal.fire({
        text: msg,
        icon: type,
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      alert(msg);
    }
  },
  prompt: function (title, inputType = "text", inputValue = "", callback) {
    if (window.Swal) {
      Swal.fire({
        title: title,
        input: inputType,
        inputValue: inputValue,
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) callback(result.value);
        else callback(null);
      });
    } else {
      var val = prompt(title, inputValue);
      callback(val);
    }
  },
};
