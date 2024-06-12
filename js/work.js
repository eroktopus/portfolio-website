document.addEventListener("DOMContentLoaded", function () {
  const detailsButtons = document.querySelectorAll(".detailsButton");
  detailsButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.parentNode.parentNode.nextElementSibling;
      if (modal && modal.classList.contains("modal")) {
        modal.style.display = "flex"; // Ensure modal is displayed as flex to cover full screen
      } else {
        console.error("Modal not found for button", this);
      }
    });
  });

  const closeButtons = document.querySelectorAll(".close-button");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      } else {
        console.error("Close button does not have a modal associated", this);
      }
    });
  });

  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  };

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const openModal = document.querySelector(
        ".modal[style*='display: flex']"
      );
      if (openModal) {
        openModal.style.display = "none";
      }
    }
  });
});
