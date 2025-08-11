document.addEventListener('DOMContentLoaded', () => {
  const hotelBtn = document.getElementById("hotel");
  const cruiseBtn = document.getElementById("cruise");
  const hotelForm = document.getElementById("form-hotel");
  const cruiseForm = document.getElementById("form-cruise");

  hotelBtn.addEventListener("click", () => {
    hotelForm.style.display = "block";
    cruiseForm.style.display = "none";
  });

  cruiseBtn.addEventListener("click", () => {
    cruiseForm.style.display = "block";
    hotelForm.style.display = "none";
  });
});
