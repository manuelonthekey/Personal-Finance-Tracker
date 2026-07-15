// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  // Segmented Navigation Interactivity
  const segmentedButtons = document.querySelectorAll('.segmented-nav button');
  segmentedButtons.forEach(button => {
    button.addEventListener('click', () => {
      segmentedButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Assistant Chips Interactivity
  const suggestionChips = document.querySelectorAll('.chip');
  const chatInput = document.querySelector('.assistant-input input');
  
  suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Simulate selecting a suggestion
      chatInput.value = chip.textContent;
      chatInput.focus();
    });
  });

  // Map Markers Interactivity
  const mapMarkers = document.querySelectorAll('.map-marker');
  mapMarkers.forEach(marker => {
    marker.addEventListener('click', (e) => {
      // Prevent clicking multiple at once
      e.stopPropagation();
      mapMarkers.forEach(m => m.classList.remove('active'));
      marker.classList.add('active');
    });
  });
  
  // Close Assistant Panel (visual only)
  const closeAssistantBtn = document.querySelector('.assistant-header .icon-btn.small');
  const assistantPanel = document.querySelector('.assistant-panel');
  if(closeAssistantBtn && assistantPanel) {
    closeAssistantBtn.addEventListener('click', () => {
      assistantPanel.style.opacity = '0';
      assistantPanel.style.transform = 'translateY(20px)';
      setTimeout(() => {
        assistantPanel.style.display = 'none';
      }, 300);
    });
  }

});
