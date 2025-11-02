document.addEventListener('DOMContentLoaded', function () {

  // Modal elements
  const uploadDocModal = document.getElementById('uploadDocModal');
  const successModal = document.getElementById('successModal');
  const notificationPopup = document.getElementById('notificationPopup');
  const logoutPopup = document.getElementById('logoutPopup');

  // Upload area click - opens upload document modal
  const uploadArea = document.getElementById('uploadArea');
  if (uploadArea) {
    uploadArea.addEventListener('click', () => {
      uploadDocModal.classList.add('active');
    });
  }

  // Upload Document Modal handlers
  const closeUploadModalBtn = document.getElementById('closeUploadModalBtn');
  const cancelUploadBtn = document.getElementById('cancelUploadBtn');

  if (closeUploadModalBtn) {
    closeUploadModalBtn.addEventListener('click', () => {
      uploadDocModal.classList.remove('active');
    });
  }

  if (cancelUploadBtn) {
    cancelUploadBtn.addEventListener('click', () => {
      uploadDocModal.classList.remove('active');
    });
  }

  // File upload handling
  const docUploadArea = document.getElementById('docUploadArea');
  const fileInput = document.getElementById('fileInput');
  const fileNameDisplay = document.getElementById('fileNameDisplay');

  if (docUploadArea && fileInput) {
    docUploadArea.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        fileNameDisplay.textContent = `Selected: ${file.name}`;
        fileNameDisplay.classList.add('active');
      }
    });
  }

  // Request Form Submit
  const requestForm = document.getElementById('requestForm');
  if (requestForm) {
    requestForm.addEventListener('submit', (e) => {
      e.preventDefault();
      successModal.classList.add('active');
    });
  }

  // Upload Document Form Submit
  const uploadDocForm = document.getElementById('uploadDocForm');
  if (uploadDocForm) {
    uploadDocForm.addEventListener('submit', (e) => {
      e.preventDefault();
      uploadDocModal.classList.remove('active');
      successModal.classList.add('active');
    });
  }

  // Success Modal - Back Home
  const backHomeBtn = document.getElementById('backHomeBtn');
  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', () => {
      window.location.href = 'my-request.html';
    });
  }

  // Close modals when clicking outside
  [uploadDocModal, successModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  });

  // Notification popup
  const notificationBtn = document.getElementById('notificationBtn');
  if (notificationBtn && notificationPopup) {
    notificationBtn.addEventListener('click', (e) => {
      e.preventDefault();
      notificationPopup.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!notificationBtn.contains(e.target) && !notificationPopup.contains(e.target)) {
        notificationPopup.classList.remove('active');
      }
    });
  }

  // Logout popup
  const logoutBtn = document.getElementById('logoutBtn');
  const cancelLogout = document.getElementById('cancelLogout');
  const confirmLogout = document.getElementById('confirmLogout');

  if (logoutBtn && logoutPopup) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      logoutPopup.classList.add('active');
    });

    if (cancelLogout) {
      cancelLogout.addEventListener('click', () => {
        logoutPopup.classList.remove('active');
      });
    }

    if (confirmLogout) {
      confirmLogout.addEventListener('click', () => {
        alert('Logging out...');
        logoutPopup.classList.remove('active');
      });
    }

    logoutPopup.addEventListener('click', (e) => {
      if (e.target === logoutPopup) {
        logoutPopup.classList.remove('active');
      }
    });
  }

});