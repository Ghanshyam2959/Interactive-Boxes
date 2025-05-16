const radioButtons = document.querySelectorAll('input[name="unit"]');
const options = document.querySelectorAll('.option');

let lastSelected = null;

radioButtons.forEach(radio => {
  radio.addEventListener('click', () => {
    const currentOption = radio.closest('.option');

    // If same option is already active, toggle it off
    if (currentOption.classList.contains('active')) {
      currentOption.classList.remove('active');
      radio.checked = false; // Uncheck manually
      lastSelected = null;
    } else {
      // Remove active from all
      options.forEach(opt => opt.classList.remove('active'));
      // Add to current
      currentOption.classList.add('active');
      lastSelected = radio;
    }
  });
});
