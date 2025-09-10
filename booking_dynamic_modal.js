// booking_dynamic_modal.js
// Enhanced version using ModalHelper for prompts and notifications
// Does NOT modify the original booking_dynamic.js

// ...existing code...
document.addEventListener("DOMContentLoaded", function () {
  const bookButtons = document.querySelectorAll(".btn-book");
  bookButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const vehicleType =
        btn.getAttribute("data-type") || btn.textContent.trim() || "Unknown";
      window.ModalHelper.prompt(
        "Enter your name:",
        "text",
        "",
        function (name) {
          if (!name)
            return window.ModalHelper.notify(
              "Booking cancelled: Name required",
              "warning"
            );
          window.ModalHelper.prompt(
            "Enter your email:",
            "email",
            "",
            function (email) {
              if (!email)
                return window.ModalHelper.notify(
                  "Booking cancelled: Email required",
                  "warning"
                );
              window.ModalHelper.prompt(
                "Enter booking date (YYYY-MM-DD):",
                "text",
                new Date().toISOString().slice(0, 10),
                function (booking_date) {
                  if (!booking_date)
                    return window.ModalHelper.notify(
                      "Booking cancelled: Date required",
                      "warning"
                    );
                  fetch("http://localhost:3000/submit-booking", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name,
                      email,
                      booking_date,
                      vehicle: vehicleType,
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.success)
                        window.ModalHelper.notify(
                          "Booking submitted for " + vehicleType + "!",
                          "success"
                        );
                      else
                        window.ModalHelper.notify(
                          "Error: " + (data.error || "Unknown error"),
                          "error"
                        );
                    })
                    .catch((err) =>
                      window.ModalHelper.notify(
                        "Network error: " + err,
                        "error"
                      )
                    );
                }
              );
            }
          );
        }
      );
    });
  });
});
