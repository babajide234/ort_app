document.addEventListener('DOMContentLoaded', function () {

  // Mocked agreement data
  const mockAgreements = [
    {
      id: "LGL-2025-008",
      title: "Agreement Review for Project Phoenix",
      metadata: "LGL-2025-009: Compliance Audit for Project Delta Mark as Non-Compliant"
    },
    {
      id: "LGL-2025-008",
      title: "Agreement Review for Project Phoenix",
      metadata: "LGL-2025-009: Compliance Audit for Project Delta Mark as Non-Compliant"
    },
    {
      id: "LGL-2025-008",
      title: "Agreement Review for Project Phoenix",
      metadata: "LGL-2025-009: Compliance Audit for Project Delta Mark as Non-Compliant"
    },
    {
      id: "LGL-2025-008",
      title: "Agreement Review for Project Phoenix",
      metadata: "LGL-2025-009: Compliance Audit for Project Delta Mark as Non-Compliant"
    },
    {
      id: "LGL-2025-008",
      title: "Agreement Review for Project Phoenix",
      metadata: "LGL-2025-009: Compliance Audit for Project Delta Mark as Non-Compliant"
    }
  ];

  // Populate agreement list
  function populateAgreements(data) {
    const agreementList = document.getElementById('agreementList');
    const noData = document.getElementById('noData');
    
    if (data.length === 0) {
      agreementList.innerHTML = '';
      noData.style.display = 'block';
      return;
    }

    noData.style.display = 'none';
    agreementList.innerHTML = data.map(agreement => `
      <div class="agreement-item">
        <div class="agreement-item-left">
          <div class="agreement-item-title">${agreement.id}: ${agreement.title}</div>
          <button class="btn-download">
            <i class="fas fa-download"></i>
            Download as Report
          </button>
        </div>
        <div class="agreement-item-right">
          <div class="agreement-item-meta">${agreement.metadata}</div>
        </div>
      </div>
    `).join('');
  }

  // Initialize agreements
  populateAgreements(mockAgreements);

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredData = mockAgreements.filter(agreement => 
        agreement.id.toLowerCase().includes(searchTerm) ||
        agreement.title.toLowerCase().includes(searchTerm) ||
        agreement.metadata.toLowerCase().includes(searchTerm)
      );
      populateAgreements(filteredData);
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