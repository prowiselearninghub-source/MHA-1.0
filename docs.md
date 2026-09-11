# Mihen Halani & Associates Website

## Client Handover Documentation

This document summarises the website delivered for Mihen Halani & Associates (MHA), including the technology used, page structure, completed functionality, design work, and ongoing maintenance notes.

## 1. Project Overview

The website presents MHA as a Practicing Company Secretaries firm providing corporate governance, company secretarial, regulatory, legal, and transaction advisory support.

The experience is designed to:

- Explain MHA's services in a clear and professional way.
- Build trust through the firm's positioning, team profiles, business coverage, and contact details.
- Help prospective clients schedule a consultation.
- Help prospective candidates learn about careers at MHA and submit an application.
- Provide direct access to privacy and website usage information.

## 2. Technology Stack

### Frontend

- HTML5 for page structure and accessible semantic content.
- CSS3 for layout, responsive behavior, typography, visual styling, transitions, and animations.
- Vanilla JavaScript for navigation, forms, modals, team rendering, carousel controls, and scroll behavior.
- GSAP 3.12.5 with ScrollTrigger and ScrollToPlugin for homepage motion and scroll-based storytelling.

### External Services and Libraries

- Web3Forms for the contact and career application submissions.
- Font Awesome 6.4.0 for interface and service icons.
- Google Fonts: Cormorant Garamond for display headings and Manrope for supporting interface and body text.

### Project Type

This is a lightweight static website. It does not require a database, server-side application, or build process to run. The pages can be hosted on any static hosting service, provided the folder structure and asset paths are preserved.

## 3. Pages Delivered

### 3.1 Homepage: `index.html`

The homepage is the primary business and conversion page. It includes:

- Responsive navigation with links to Home, About, Services, Team, Careers, and Contact.
- Hero section presenting MHA's corporate governance, secretarial, and regulatory advisory positioning.
- Primary calls to action for scheduling a consultation and exploring services.
- Trust and coverage strips describing the types of organisations and matters supported.
- "Why MHA" section explaining the firm's approach through discovery, advisory, and implementation stages.
- "What We Bring" section covering corporate governance, business setup, startups and MSMEs, cross-border matters, and transactions and restructuring.
- Core services section containing 12 service areas.
- Interactive service detail modal opened through each "Learn More" action.
- Team section with dynamically rendered team cards, responsive layout, page controls, previous/next navigation, and profile modals.
- Contact section with office address, phone number, email address, and consultation form.
- Footer with navigation links, legal links, and contact information.

### 3.2 Careers: `career.html`

The careers page provides a dedicated recruitment experience with:

- Career-focused hero section.
- "Why Join Us" content covering meaningful work, mentorship, and a growth-minded culture.
- Application form collecting name, email, phone, location, experience, area of interest, message, and LinkedIn profile.
- Submission feedback for successful and unsuccessful requests.
- Navigation back to the homepage and shared legal/footer links.

### 3.3 Privacy Policy: `privacy-policy.html`

The privacy page documents:

- Scope and applicability of the policy.
- Information collected through the website and advisory interactions.
- How information is used.
- Confidentiality, security, retention, and cross-border processing.
- Cookie usage and privacy rights.
- Governing law and grievance contact information.

The page includes a structured table of contents with smooth scrolling and active-section behavior.

### 3.4 Terms and Conditions: `terms-conditions.html`

This page covers acceptance, applicability, professional disclaimers, intellectual property, digital communications, limitation of liability, third-party links, modifications, jurisdiction, and contact information.

### 3.5 Terms of Use: `terms-of-use.html`

This page provides the website usage terms and supporting professional disclaimers for visitors, prospective clients, and other stakeholders.

## 4. Services Included

The homepage presents the following service categories, each with supporting detail available through an interactive modal:

1. Corporate Secretarial Services
2. SEBI and Listing
3. FEMA (Foreign Exchange Management Act)
4. Financial and Corporate Restructuring
5. Due Diligence
6. Business Setup and Compliance
7. MSME and Startups
8. Secretarial Audit
9. NCLT
10. Transaction Advisory
11. Legal Compliance Health Check
12. Other Miscellaneous Services

## 5. Functional Features

### Navigation and Responsive Behavior

- Desktop and mobile navigation layouts.
- Mobile menu toggle with accessible button labeling.
- Anchor navigation between major homepage sections.
- Responsive grids and content layouts for desktop, tablet, and mobile screens.

### Homepage Motion and Interaction

- Hero visual treatment with ambient background elements and grid lines.
- Scroll-triggered reveal animations.
- Scroll-based "Why MHA" story progression.
- Parallax and motion enhancements using GSAP where applicable.
- Hover states for buttons, service cards, team cards, and imagery.

### Service Modals

- Each service card opens a modal containing expanded service information.
- Modals can be closed using the close button, outside click, or Escape key.
- Body scrolling is disabled while a modal is open and restored after closing.

### Team Profiles

- Team data is maintained separately in JavaScript for easier content updates.
- Cards are generated dynamically from the team data.
- Team members can be browsed through carousel pages.
- Each profile opens a detailed modal with image, credentials, experience, focus areas, biography, and specialties.
- Profile card text areas are kept visually consistent so longer credentials do not shift the layout.
- Missing or broken profile images display an initials-based fallback.

### Forms

- Homepage consultation form submits through Web3Forms.
- Careers application form submits through Web3Forms.
- Buttons show a sending/submitting state while a request is in progress.
- Success and error messages are displayed without leaving the page.
- Direct phone and email details are provided as fallback contact methods.

## 6. Design and UI Work Completed

- Reworked the homepage into a structured premium corporate advisory experience.
- Added consistent visual hierarchy across hero, section headings, cards, forms, modals, and footer areas.
- Added responsive behavior for desktop, tablet, and mobile breakpoints.
- Added and integrated MHA branding, logo, team imagery, office imagery, and supporting visual assets.
- Added professional typography using Cormorant Garamond and Manrope.
- Added green, gold, white, and neutral supporting colors aligned with the MHA visual direction.
- Added hover states, reveal animations, scroll interactions, and modal transitions.
- Corrected spacing, indentation, alignment, section rhythm, and responsive layout issues.
- Removed unnecessary content and UI elements that did not support the client experience.
- Added consistent legal-page styling and navigation.
- Added footer navigation and corrected duplicate footer/layout issues.
- Improved the team section so cards do not move vertically because one profile has longer credentials.

## 7. Project File Structure

```text
/
|-- index.html                  Homepage
|-- career.html                Careers and application page
|-- privacy-policy.html        Privacy policy
|-- terms-conditions.html      Terms and conditions
|-- terms-of-use.html          Terms of use
|-- docs.md                    Client handover documentation
|-- README.md                  Project overview and background notes
|-- requirement.md             Initial project requirements
|-- css/
|   |-- style.css              Shared/base styles
|   |-- home-premium.css       Homepage and premium visual styles
|   |-- legal-pages.css        Legal page styles
|   |-- team-profiles.css      Team section and profile styles
|-- js/
|   |-- main.js                Navigation, forms, services, and shared behavior
|   |-- home-motion.js         GSAP and homepage scroll interactions
|   |-- team-data.js           Team member content
|   |-- founder-profile-data.js Founder profile data source
|   |-- team-profiles.js       Team cards, carousel, and profile modals
|-- images/                    Logos, backgrounds, office, and team imagery
```

## 8. Content and Asset Management

### Updating Team Profiles

Team member details are maintained in `js/team-data.js`. Founder-specific content can be maintained in `js/founder-profile-data.js`. Profile images are stored under `images/latest-images/team/` and referenced from the relevant data object.

When updating a profile, keep the following fields consistent where available:

- `name`
- `title`
- `credentials`
- `image`
- `enhancedImage`
- `specialization`
- `experience`
- `expertise`
- `bio` or `bioHTML`

### Updating Services

Service descriptions and modal content are maintained in `js/main.js`. Service card titles and summaries are authored in the service section of `index.html`.

### Updating Contact Details

The primary contact details appear in `index.html`, `career.html`, and the legal pages where applicable. If the phone number, email address, office address, or Web3Forms configuration changes, update every relevant page and script message together.

## 9. Form and Integration Notes

Both forms use the Web3Forms endpoint:

```text
https://api.web3forms.com/submit
```

The forms currently use the configured Web3Forms access key in their hidden fields. The client should keep this key private and rotate it through Web3Forms if the account or ownership changes.

Before launch or after any form change, test:

- Successful contact submission.
- Successful career application submission.
- Required-field validation.
- Error handling when the service is unavailable.
- Receipt of submissions at the configured Web3Forms destination.

## 10. Hosting and Deployment

The website can be deployed to any static hosting provider, including:

- Netlify
- Vercel static hosting
- GitHub Pages
- Cloudflare Pages
- Traditional web hosting with file upload

Upload the complete project while preserving the relative paths to `css/`, `js/`, and `images/`. The website should be tested on the final domain because external fonts, Font Awesome, GSAP, and Web3Forms are loaded from external services.

## 11. Quality and Testing Checklist

Before publishing updates, verify:

- All five HTML pages open correctly.
- Navigation links work on desktop and mobile.
- The mobile menu opens and closes correctly.
- Service modals open, display the correct service, and close correctly.
- Team carousel controls and profile modals work correctly.
- Team cards remain aligned when a profile has longer credentials.
- Contact and career forms show loading, success, and error states.
- Images load correctly and broken profile images show fallbacks.
- Legal-page table of contents scrolls to the correct section.
- Layouts are checked at desktop, tablet, and mobile widths.
- Phone and email links open the expected applications.

## 12. Recommended Future Enhancements

The current website is complete as a corporate profile and lead-generation site. Potential future enhancements include:

- A blog or regulatory updates section.
- Case studies and anonymised client outcomes.
- Downloadable compliance guides and resources.
- CMS integration for non-technical content updates.
- Analytics and conversion tracking.
- Spam protection and server-side form validation.
- A secure client portal for documents and engagement workflows.

## 13. Client Contact Details Displayed on the Website

**Mihen Halani & Associates**  
Phone: 022 4516 5109  
Email: mihenhalani@mhacs.in  
Address: 312, Kalpataru Avenue CHS LTD, Opp. ESIC Hospital, Akurli Road, Kandivali (East), Mumbai - 400 101, Maharashtra, India

---

**Document purpose:** Client handover and project overview  
**Website:** Mihen Halani & Associates  
**Last updated:** September 2026