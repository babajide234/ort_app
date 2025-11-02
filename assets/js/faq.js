document.addEventListener('DOMContentLoaded', function () {

  // FAQ data
  const faqData = [
    {
      question: "How do I submit a new legal request through the portal?",
      answer: "To submit a new legal request, click on the '+ New Request' button on the My Active Request page. Fill out the required information including request type, project/subject, requesting unit, description, deadline, and upload any relevant documents. You can also mark the request as confidential if needed. Once completed, click 'Submit' to send your request to the legal team."
    },
    {
      question: "What is the difference between a 'Pending' status and an 'In Progress' status?",
      answer: "'Pending' status means your request has been submitted and is awaiting review by the General Counsel. 'In Progress' status indicates that your request has been assigned to a Legal Officer and is actively being worked on. You will receive notifications when the status changes."
    },
    {
      question: "What should I do if the Legal Officer asks for 'Additional Information'?",
      answer: "If a Legal Officer requests additional information, you will receive a notification. Click on the notification or go to your request details page where you can view the specific information requested. You can then upload additional documents or provide clarifications through the comment section or by uploading new files."
    },
    {
      question: "How can I access the final, signed document after the process is complete?",
      answer: "Once your request is marked as 'Completed', you will receive a notification. You can access the final signed document by going to the 'Documents' section or by clicking on your completed request in the 'My Active Request' page. The document will be available for download in PDF format."
    },
    {
      question: "How do I know if an agreement I tracked is about to expire?",
      answer: "The Agreement Tracker section displays all your tracked agreements with their expiration dates. Agreements nearing expiration (within 30 days) will be highlighted. You will also receive email notifications 30 days, 14 days, and 7 days before an agreement expires."
    },
    {
      question: "Can I request revisions or negotiation on a final document provided by the Legal Unit?",
      answer: "Yes, if you need revisions or want to negotiate terms in a final document, you can submit a comment on the request or create a new request specifically for revisions. Include details about what changes you need and why. The Legal Officer will review your request and respond accordingly."
    },
    {
      question: "If I upload a final signed agreement, where is it stored, and how is it named?",
      answer: "All uploaded signed agreements are stored securely in the Documents section of the portal. They are automatically named using the format: [Request ID]_[Project Name]_[Date]. You can search for and access your documents at any time through the Documents page."
    }
  ];

  // Populate FAQ accordion
  function populateFAQ() {
    const faqAccordion = document.getElementById('faqAccordion');
    
    faqAccordion.innerHTML = faqData.map((faq, index) => `
      <div class="faq-item" data-index="${index}">
        <div class="faq-question">
          <div class="faq-question-text">${faq.question}</div>
          <div class="faq-icon">
            <i class="fas fa-plus"></i>
          </div>
        </div>
        <div class="faq-answer">
          <div class="faq-answer-content">${faq.answer}</div>
        </div>
      </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
          faqItem.classList.add('active');
        }
      });
    });
  }

  // Initialize FAQ
  populateFAQ();

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