document.addEventListener('DOMContentLoaded', function () {

  // Mocked documents data
  const mockDocuments = [
    {
      documentName: "Partnership NDA",
      requestId: "LEGALREQ6220873",
      documentType: "Document Type",
      dateCreated: "11/07/25"
    },
    {
      documentName: "Document Name",
      requestId: "Request ID",
      documentType: "Document Type",
      dateCreated: "08/06/25"
    },
    {
      documentName: "Document Name",
      requestId: "Request ID",
      documentType: "Document Type",
      dateCreated: "05/05/25"
    }
  ];

  // Populate table
  function populateTable(data) {
    const tbody = document.getElementById('documentsTableBody');
    const noData = document.getElementById('noData');
    
    if (data.length === 0) {
      tbody.innerHTML = '';
      noData.style.display = 'block';
      return;
    }

    noData.style.display = 'none';
    tbody.innerHTML = data.map(doc => `
      <tr>
        <td>${doc.documentName}</td>
        <td>${doc.requestId}</td>
        <td>${doc.documentType}</td>
        <td>${doc.dateCreated}</td>
        <td>
          <button class="table-action-btn" title="View">
            <i class="fas fa-eye"></i>
          </button>
        </td>
      </tr>
    `).join('');
  }

  // Initialize table
  populateTable(mockDocuments);

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredData = mockDocuments.filter(doc => 
        doc.documentName.toLowerCase().includes(searchTerm) ||
        doc.requestId.toLowerCase().includes(searchTerm) ||
        doc.documentType.toLowerCase().includes(searchTerm)
      );
      populateTable(filteredData);
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