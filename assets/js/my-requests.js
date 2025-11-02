document.addEventListener('DOMContentLoaded', function () {

  // Mocked request data
  const mockRequests = [
    {
      requester: "Princess Audu",
      title: "Requester",
      idNo: "LEGALREQ1207385",
      date: "02-03-2025",
      status: "Completed"
    },
    {
      requester: "Princess Audu",
      title: "Requester",
      idNo: "LEGALREQ1207385",
      date: "02-03-2025",
      status: "Under review"
    },
    {
      requester: "Princess Audu",
      title: "Requester",
      idNo: "LEGALREQ1207385",
      date: "02-03-2025",
      status: "Completed"
    },
    {
      requester: "Princess Audu",
      title: "Requester",
      idNo: "LEGALREQ1207385",
      date: "02-03-2025",
      status: "Completed"
    }
  ];

  // Populate table
  function populateTable(data) {
    const tbody = document.getElementById('requestsTableBody');
    const noData = document.getElementById('noData');
    
    if (data.length === 0) {
      tbody.innerHTML = '';
      noData.style.display = 'block';
      return;
    }

    noData.style.display = 'none';
    tbody.innerHTML = data.map(request => `
      <tr>
        <td>${request.requester}</td>
        <td>${request.title}</td>
        <td>${request.idNo}</td>
        <td>${request.date}</td>
        <td>
          <span class="table-status ${request.status.toLowerCase().replace(' ', '-')}">
            <span class="table-status-dot"></span>
            ${request.status}
          </span>
        </td>
        <td>
          <button class="table-action-btn" title="View">
            <i class="fas fa-eye"></i>
          </button>
        </td>
      </tr>
    `).join('');
  }

  // Initialize table
  populateTable(mockRequests);

  // Drawer functionality
  const requestDrawer = document.getElementById('requestDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  // Open drawer when clicking the eye icon
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-eye') || e.target.classList.contains('table-action-btn')) {
      const row = e.target.closest('tr');
      if (row) {
        const cells = row.querySelectorAll('td');
        const requestId = cells[2].textContent;
        const requestTitle = cells[1].textContent;
        const status = cells[4].textContent.trim();
        
        // Populate drawer with request data
        document.getElementById('drawerSubtitle').textContent = `Details about request ${requestId}`;
        document.getElementById('drawerRequestType').textContent = 'Agreement';
        document.getElementById('drawerAgreementType').textContent = 'NDA';
        document.getElementById('drawerSubject').textContent = requestTitle;
        document.getElementById('drawerDetails').textContent = 'lorem ipsum dolor sit amet lorem ipsum lorem ipsum';
        
        // Update status badge
        const statusBadge = document.querySelector('.status-badge-drawer');
        if (status.toLowerCase().includes('completed')) {
          statusBadge.textContent = 'Closed';
          statusBadge.className = 'status-badge-drawer closed';
        } else {
          statusBadge.textContent = 'In progress';
          statusBadge.className = 'status-badge-drawer in-progress';
        }
        
        // Open drawer
        requestDrawer.classList.add('active');
      }
    }
  });

  // Close drawer
  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', () => {
      requestDrawer.classList.remove('active');
    });
  }

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredData = mockRequests.filter(request => 
        request.requester.toLowerCase().includes(searchTerm) ||
        request.title.toLowerCase().includes(searchTerm) ||
        request.idNo.toLowerCase().includes(searchTerm)
      );
      populateTable(filteredData);
    });
  }

  // Modal elements
  const newRequestModal = document.getElementById('newRequestModal');
  const uploadDocModal = document.getElementById('uploadDocModal');
  const successModal = document.getElementById('successModal');
  const notificationPopup = document.getElementById('notificationPopup');
  const logoutPopup = document.getElementById('logoutPopup');

  // New Request Modal handlers
  const newRequestBtn = document.getElementById('newRequestBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const backBtn = document.getElementById('backBtn');
  const cancelFormBtn = document.getElementById('cancelFormBtn');

  if (newRequestBtn) {
    newRequestBtn.addEventListener('click', () => {
      newRequestModal.classList.add('active');
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      newRequestModal.classList.remove('active');
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      newRequestModal.classList.remove('active');
    });
  }

  if (cancelFormBtn) {
    cancelFormBtn.addEventListener('click', () => {
      newRequestModal.classList.remove('active');
    });
  }

  // Upload area click - opens upload document modal
  const uploadArea = document.getElementById('uploadArea');
  if (uploadArea) {
    uploadArea.addEventListener('click', () => {
      newRequestModal.classList.remove('active');
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
      newRequestModal.classList.remove('active');
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
      successModal.classList.remove('active');
      window.location.reload();
    });
  }

  // Close modals when clicking outside
  [newRequestModal, uploadDocModal, successModal].forEach(modal => {
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