// Booking form validation
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Booking successful! We'll contact you soon.");
      bookingForm.reset();
    });
  }
});
