document.addEventListener('DOMContentLoaded', function () {

  // Modal logic
  const modal = document.getElementById('newRequestModal');
  const openBtn = document.getElementById('newRequestBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const cancelBtn = document.getElementById('cancelModalBtn');
  const form = document.getElementById('requestForm');

  // Notification popup logic
  const notificationBtn = document.getElementById('notificationBtn');
  const notificationPopup = document.getElementById('notificationPopup');

  if (notificationBtn && notificationPopup) {
    notificationBtn.addEventListener('click', (e) => {
      e.preventDefault();
      notificationPopup.classList.toggle('active');
    });

    // Close notification when clicking outside
    document.addEventListener('click', (e) => {
      if (!notificationBtn.contains(e.target) && !notificationPopup.contains(e.target)) {
        notificationPopup.classList.remove('active');
      }
    });
  }

  // Logout popup logic
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
        // Implement actual logout logic here
        alert('Logging out...');
        logoutPopup.classList.remove('active');
        // window.location.href = '/login.html';
      });
    }

    // Close logout popup when clicking outside
    logoutPopup.addEventListener('click', (e) => {
      if (e.target === logoutPopup) {
        logoutPopup.classList.remove('active');
      }
    });
  }

  if (openBtn) openBtn.addEventListener('click', () => modal.classList.add('active'));
  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  if (cancelBtn) cancelBtn.addEventListener('click', () => modal.classList.remove('active'));
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

  // Form submit placeholder
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Request created (demo). Implement backend integration to save the request.');
      modal.classList.remove('active');
      form.reset();
    });
  }

  // Mark current nav item active (based on current location)
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(a => {
    if (a.href === window.location.href || a.getAttribute('href') === window.location.pathname.split('/').pop()) {
      a.classList.add('active');
    }
  });


  // Initialize Vanilla DataTable
   const mockRequests = [
    {
      title: "Legal Review of MOU",
      requester: "John Doe",
      subject: "Memorandum of Understanding",
      status: "Completed",
      date: "2025-10-17",
      type: "Agreement",
    },
    {
      title: "Vendor Contract Draft",
      requester: "Jane Smith",
      subject: "Procurement Terms",
      status: "Pending",
      date: "2025-10-18",
      type: "Contract",
    },
    {
      title: "Partnership Agreement",
      requester: "David Atuwo",
      subject: "Collaboration Draft",
      status: "In Progress",
      date: "2025-10-19",
      type: "Agreement",
    },
  ];

  // Initialize DataTable
  const table = new DataTable("#activeRequestsTable", {
    data: mockRequests.map((req) => [
      req.title,
      req.requester,
      req.subject,
      getStatusBadge(req.status),
      req.date,
      req.type,
      getActionButtons(),
    ]),
    columns: [
      { title: "Title" },
      { title: "Requester" },
      { title: "Subject" },
      { title: "Request Status" },
      { title: "Date Created" },
      { title: "Request Type" },
      { title: "Actions" },
    ],
    responsive: true,
    pageLength: 5,
    lengthMenu: [5, 10, 25],
  });

  // Helper functions
  function getStatusBadge(status) {
    const color =
      status === "Completed"
        ? "badge-success"
        : status === "Pending"
        ? "badge-warning"
        : "badge-info";
    return `<span class="badge ${color}">${status}</span>`;
  }

function getActionButtons() {
  return `
    <button class="btn-action view" title="View">
      <i class="fas fa-eye"></i>
    </button>
  `;
}


});


