// Open the modal
document.getElementById('openModal').addEventListener('click', function () {
    document.getElementById('joinModal').style.display = 'block';
  });
  
  // Close the modal when user clicks the close button
  document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('joinModal').style.display = 'none';
  });
  
  // Close the modal if user clicks outside of the modal
  window.onclick = function (event) {
    if (event.target == document.getElementById('joinModal')) {
      document.getElementById('joinModal').style.display = 'none';
    }
  }