# NSIA Legal Portal

A comprehensive web-based legal management system for the Nigeria Sovereign Investment Authority (NSIA) to streamline legal operations, document management, and request tracking.

## 📋 Overview

The NSIA Legal Portal is a frontend application designed to facilitate legal operations management within NSIA. It provides an intuitive interface for submitting legal requests, tracking agreements, managing legal documents, and monitoring the status of various legal matters.

## ✨ Features

### Core Functionality
- **Dashboard**: Centralized view of all legal activities and metrics
- **Request Management**: Submit and track legal requests through their lifecycle
- **Agreement Tracker**: Monitor and manage legal agreements
- **Document Management**: Organize and access legal documents
- **Legal Reports**: Generate and view legal reports
- **Task Management**: Assign and track legal tasks
- **Historical Records**: Access historical legal data

### User Interface
- Clean, modern design with NSIA branding
- Responsive layout for desktop and mobile devices
- Interactive data tables with sorting and filtering
- Real-time notifications
- User authentication and profile management

## 🗂️ Project Structure

```
ort_app/
├── index.html              # Landing page
├── dashboard.html          # Main dashboard (v1)
├── dashboard-2.html        # Alternative dashboard (v2)
├── my-request.html         # User's legal requests
├── new-request.html        # Submit new legal request
├── complete-request.html   # Request completion form
├── agreement-tracker.html  # Agreement tracking interface
├── legal-docs.html         # Legal documents repository
├── legal-report.html       # Legal reports viewer
├── historical.html         # Historical records
├── faq.html               # Frequently asked questions
├── LEGAL/
│   ├── my-tasks.html      # Task list for legal team
│   └── my-task-detail.html # Detailed task view
└── assets/
    ├── css/               # Stylesheets
    ├── js/                # JavaScript files
    └── image/             # Images and logos
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/babajide234/ort_app.git
cd ort_app
```

2. Open the project:
   - **Option 1**: Open `index.html` directly in your browser
   - **Option 2**: Use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. Navigate to `http://localhost:8000` in your browser

## 📱 Pages Overview

### Public Pages
- **Landing Page** (`index.html`): Welcome page with portal introduction

### User Pages
- **Dashboard** (`dashboard.html`, `dashboard-2.html`): Overview of legal activities
- **My Requests** (`my-request.html`): View and manage submitted requests
- **New Request** (`new-request.html`): Submit new legal requests
- **Complete Request** (`complete-request.html`): Finalize request details
- **Agreement Tracker** (`agreement-tracker.html`): Monitor agreement status
- **Legal Documents** (`legal-docs.html`): Access legal documentation
- **Legal Reports** (`legal-report.html`): View generated reports
- **Historical** (`historical.html`): Browse historical records
- **FAQ** (`faq.html`): Common questions and answers

### Legal Team Pages
- **My Tasks** (`LEGAL/my-tasks.html`): Task assignments for legal staff
- **Task Details** (`LEGAL/my-task-detail.html`): Detailed task information

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling and responsive design
- **JavaScript**: Interactive functionality
- **DataTables**: Advanced table features
- **Font Awesome**: Icon library

## 🎨 Design System

The portal follows NSIA's brand guidelines with:
- Primary colors aligned with NSIA branding
- Consistent typography and spacing
- Accessible UI components
- Responsive breakpoints for mobile, tablet, and desktop

## 📦 Dependencies

External libraries loaded via CDN:
- DataTables (v2.3.4) - Table management
- Font Awesome (v6.4.0) - Icons

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- **babajide234** - Initial development

## 🔄 Version History

- **v1.0.0** - Initial release with core functionality
  - Landing page and authentication
  - Request management system
  - Agreement tracking
  - Document management
  - Legal team task management

---

**Note**: This is a frontend-only application. Backend integration and API connections need to be configured for full functionality.
