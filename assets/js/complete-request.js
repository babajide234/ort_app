document.addEventListener('DOMContentLoaded', function () {

  // Mocked completed requests data
  const completedRequests = [
    {
      id: "LGL-2025-008",
      title: "Agreement Review for Project Phoenix",
      uploadButton: "Upload Signed Document",
      markButton: "Mark as Executed",
      files: [
        "FileCompliance_Vendor_Partnership.pdf",
        "FileCompliance_Vendor_Partnership.pdf"
      ],
      status: null
    },
    {
      id: "LGL-2025-009",
      title: "Budget Approval for Initiative Alpha",
      uploadButton: "Upload Approved Budget",
      markButton: "Mark as Finalized",
      files: [
        "FileCompliance_Vendor_Partnership.pdf"
      ],
      status: null
    },
    {
      id: "LGL-2025-010",
      title: "Compliance Review for Vendor Partnership",
      uploadButton: "Upload Compliance Certificates",
      markButton: "Mark as Compliant",
      files: [
        "FileCompliance_Vendor_Partnership.pdf"
      ],
      status: null
    },
    {
      id: "LGL-2025-011",
      title: "Terms of Service Update for App Release",
      uploadButton: "Upload Updated Terms",
      markButton: "Mark as Published",
      files: [
        "FileCompliance_Vendor_Partnership.pdf"
      ],
      status: null
    },
    {
      id: "LGL-2025-008",
      title: "Agreement Review for Project Phoenix",
      uploadButton: null,
      markButton: null,
      files: [
        "FileCompliance_Vendor_Partnership.signed.pdf",
        "FileCompliance_Vendor_Partnership.pdf"
      ],
      status: "Closed - Document Filed"
    }
  ];

  // Populate completed requests
  function populateRequests(data) {
    const requestsList = document.getElementById('completedRequestsList');
    
    requestsList.innerHTML = data.map(request => `
      <div class="completed-request-item">
        <div class="completed-request-left">
          <div class="completed-request-title">${request.id}: ${request.title}</div>
          <div class="completed-request-actions">
            ${request.uploadButton ? `<button class="btn-request-action">${request.uploadButton}</button>` : ''}
            ${request.markButton ? `<button class="btn-request-action">${request.markButton}</button>` : ''}
            ${request.status ? `<span class="status-badge">${request.status}</span>` : ''}
          </div>
        </div>
        <div class="completed-request-right">
          <div class="completed-request-files">
            ${request.files.map(file => `<div class="file-name">${file}</div>`).join('')}
          </div>
          <button class="btn-action-outline">Download Document</button>
        </div>
      </div>
    `).join('');
  }

  // Initialize requests
  populateRequests(completedRequests);

  // Drawer functionality
  const requestDrawer = document.getElementById('requestDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  // Open drawer when clicking on request title
  document.addEventListener('click', (e) => {  
    if (e.target.classList.contains('completed-request-title')) {
      const requestId = e.target.textContent.split(':')[0];
      const request = completedRequests.find(r => e.target.textContent.includes(r.id));
      
      if (request) {
        // Populate drawer with request data
        document.getElementById('drawerSubtitle').textContent = `Details about request ${request.id}`;
        document.getElementById('drawerRequestType').textContent = 'Agreement';
        document.getElementById('drawerAgreementType').textContent = 'NDA';
        document.getElementById('drawerSubject').textContent = request.title.split(': ')[1];
        document.getElementById('drawerDetails').textContent = 'lorem ipsum dolor sit amet lorem ipsum lorem ipsum';
        
        // Update status badge
        const statusBadge = document.querySelector('.status-badge-drawer');
        if (request.status) {
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
      const filteredData = completedRequests.filter(request => 
        request.id.toLowerCase().includes(searchTerm) ||
        request.title.toLowerCase().includes(searchTerm)
      );
      populateRequests(filteredData);
    });
  }

  // Notification popup
  const notificationBtn = document.getElementById('notificationBtn');
  const notificationPopup = document.getElementById('notificationPopup');
  
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
  const logoutPopup = document.getElementById('logoutPopup');
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