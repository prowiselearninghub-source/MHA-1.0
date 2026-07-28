// Service Details Data - MHA Complete Services
const serviceDetails = {
    1: {
        title: "Governance & Ongoing Compliances",
        content: `
            <p>Robust governance and regular compliances form the foundation of sustainable businesses. We act as long‑term governance partners to boards and management teams.</p>
            
            <h4>Coverage includes:</h4>
            <ul>
                <li>End‑to‑end compliances under the Companies Act, 2013</li>
                <li>Board and shareholder meeting processes and secretarial standards</li>
                <li>ROC filings, registers, and statutory records</li>
                <li>Governance reporting and compliance health reviews</li>
                <li>Advisory support to promoters, boards, and senior management</li>
            </ul>
        `
    },
    2: {
        title: "SEBI & Listed Entity Advisory",
        content: `
            <p>We advise listed companies and capital‑market participants on continuous disclosure and governance requirements under SEBI regulations.</p>
            
            <h4>Services include:</h4>
            <ul>
                <li>SEBI LODR compliances and certifications</li>
                <li>Insider Trading (PIT) compliance frameworks</li>
                <li>Related Party Transactions and corporate actions</li>
                <li>Advisory under SEBI ICDR, SAST, DP and allied regulations</li>
                <li>Liaison with stock exchanges, SEBI, and SAT</li>
            </ul>
        `
    },
    3: {
        title: "FEMA & Cross‑Border Advisory",
        content: `
            <p>We support Indian and foreign clients in structuring and executing cross‑border transactions in compliance with FEMA and RBI regulations.</p>
            
            <h4>Key areas:</h4>
            <ul>
                <li>FDI, FPI, NRI and PIO investments</li>
                <li>FC‑GPR, FC‑TRS, ODI and ECB compliances</li>
                <li>Share transfers between residents and non‑residents</li>
                <li>FEMA audits, certifications, and compounding matters</li>
                <li>Advisory on overseas investments and global structuring</li>
            </ul>
        `
    },
    4: {
        title: "Business Setup & Structuring",
        content: `
            <p>We assist domestic and international clients in establishing and restructuring business entities in India.</p>
            
            <h4>Our services include:</h4>
            <ul>
                <li>Incorporation of companies and LLPs</li>
                <li>Drafting and alteration of MOA & AOA</li>
                <li>Registration of subsidiaries, joint ventures, and SPVs</li>
                <li>Conversion between company, LLP, and partnership structures</li>
                <li>Registration of Branch, Liaison and Project Offices</li>
                <li>Shifting of registered offices and jurisdictional changes</li>
                <li>Representation before NCLT, Regional Director, and Registrar of Companies</li>
            </ul>
        `
    },
    5: {
        title: "Startups & MSME Advisory",
        content: `
            <p>We provide tailored legal, governance, and fundraising support to startups and MSMEs across their growth journey.</p>
            
            <h4>Support includes:</h4>
            <ul>
                <li>Startup India and DPIIT registrations</li>
                <li>Early‑stage and primary investment support</li>
                <li>Drafting and negotiation of SHA, SSA, and SPA</li>
                <li>ESOP structuring and advisory</li>
                <li>Drafting and vetting of commercial contracts</li>
            </ul>
        `
    },
    6: {
        title: "Fundraising & Capital Structuring",
        content: `
            <p>We advise companies on capital raising and ownership structuring aligned with regulatory, valuation, and investor considerations.</p>
            
            <h4>Services include:</h4>
            <ul>
                <li><strong>Investor Representation & Pitch Deck Preparation</strong> — representing companies in front of investors, structuring deals, and preparing comprehensive pitch decks for fundraising</li>
                <li><strong>Preferential Issues for Listed Entities</strong> — including complex share issuances for consideration other than cash, structured for acquiring other companies</li>
                <li><strong>Rights Issues</strong> for listed and unlisted companies</li>
                <li>Bonus issues and sweat equity shares</li>
                <li>Instrument structuring (CCDs, CCPS, hybrid securities)</li>
                <li>Share warrants and capital reclassification</li>
                <li>Exit planning and implementation</li>
            </ul>
            
            <p style="margin-top: 1rem; font-style: italic; color: var(--primary-turquoise);">MHA has successfully executed numerous complex fundraising transactions, including representing companies in investor meetings and preparing compelling pitch decks that led to successful capital raises.</p>
        `
    },
    7: {
        title: "IPO & SME IPO Advisory",
        content: `
            <p>We provide end‑to‑end advisory for Mainboard and SME IPOs, supporting clients from readiness to post‑listing compliance.</p>
            
            <h4>Our expertise covers:</h4>
            <ul>
                <li><strong>IPO Planning, Structuring & Readiness Assessment</strong> — comprehensive preparation for public markets</li>
                <li><strong>DRHP Drafting Assistance</strong> — working with merchant bankers on regulatory documentation</li>
                <li><strong>Direct Listings</strong> — SME platform to Mainboard migrations</li>
                <li><strong>Cross-Exchange Listings</strong> — assisting entities already listed on one exchange to obtain listing on other exchanges</li>
                <li>Regulatory coordination with stock exchanges, SEBI, and advisors</li>
                <li>Post‑listing governance and ongoing compliance support</li>
            </ul>
            
            <p style="margin-top: 1rem; font-style: italic; color: var(--primary-turquoise);">MHA has hands-on experience with complex listing scenarios including direct SME-to-Mainboard transitions and multi-exchange listing strategies.</p>
        `
    },
    8: {
        title: "Mergers, Acquisitions & Restructuring",
        content: `
            <p>We advise on complex corporate restructurings and strategic transactions.</p>
            
            <h4>Coverage includes:</h4>
            <ul>
                <li>Mergers, demergers, and corporate reorganisations</li>
                <li>Share acquisitions and transfer of control</li>
                <li>Buy‑back, redemption, and reduction of share capital</li>
                <li>Internal and group‑level restructurings</li>
            </ul>
        `
    },
    9: {
        title: "Due Diligence & Compliance Reviews",
        content: `
            <p>We conduct transaction‑specific and periodic legal and secretarial due diligence to assess risk and compliance exposure.</p>
            
            <h4>Applicable to:</h4>
            <ul>
                <li>Venture capital and private equity investments</li>
                <li>Domestic and cross‑border M&A</li>
                <li>IPOs, rights issues, and lender due diligence</li>
                <li>Overseas borrowings including ECBs and GDRs</li>
            </ul>
        `
    },
    10: {
        title: "Secretarial Audit",
        content: `
            <p>We conduct Secretarial Audits for listed and unlisted companies under the Companies Act, 2013, ensuring timely reporting and regulatory alignment.</p>
            
            <p>Our team has extensive experience conducting secretarial audits across various sectors, maintaining the highest standards of compliance and reporting quality.</p>
        `
    },
    11: {
        title: "NCLT & Regulatory Matters",
        content: `
            <p>We assist clients in proceedings before the National Company Law Tribunal and allied authorities.</p>
            
            <h4>Including:</h4>
            <ul>
                <li>Revival of struck‑off companies</li>
                <li>Voluntary and compulsory winding‑up</li>
                <li>Business closure and restructuring proceedings</li>
            </ul>
        `
    },
    12: {
        title: "Transaction Advisory & CFO Support",
        content: `
            <p>We provide integrated transaction and financial advisory support.</p>
            
            <h4>Services include:</h4>
            <ul>
                <li>Tax and cross‑border taxation advisory</li>
                <li>IBC‑related advisory and valuation coordination</li>
                <li>Transfer pricing advisory</li>
                <li>Fundraising documentation and transaction support</li>
                <li>Virtual CFO services and financial projections</li>
            </ul>
        `
    },
    13: {
        title: "Other Allied Services",
        content: `
            <p>We provide comprehensive support services to complement our core offerings.</p>
            
            <h4>Services include:</h4>
            <ul>
                <li>Import Export Code (IEC) applications</li>
                <li>Intellectual property registrations (Trademark, Copyright, Design)</li>
                <li>PAN, TAN, and GST registrations</li>
                <li>Shops & Establishments Act registrations</li>
                <li>Charge registration, search reports, and bank due diligence</li>
                <li>Certified copies and regulatory document retrieval</li>
                <li>Legal opinions and advisory</li>
            </ul>
        `
    }
};

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations with premium stagger effect
    const revealObserver = new IntersectionObserver((entries, observer) => {
        const intersecting = entries.filter(e => e.isIntersecting);

        intersecting.forEach((entry, index) => {
            const el = entry.target;
            const delay = index * 100; // Stagger entry delay (100ms spacing)

            setTimeout(() => {
                el.classList.add('reveal-visible');
            }, delay);

            observer.unobserve(el);
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    });

    window.revealObserver = revealObserver;

    // Observe initial static elements
    document.querySelectorAll('.reveal-fade, .reveal-slide-up').forEach(el => {
        revealObserver.observe(el);
    });

    // "What We Bring" — scroll-triggered drop animation
    const bringSection = document.querySelector('.bring-section');
    if (bringSection) {
        let firstCheck = true;
        new IntersectionObserver(function (entries, obs) {
            // Skip the very first callback (page load) — only trigger on actual scroll
            if (firstCheck) {
                firstCheck = false;
                if (entries[0].isIntersecting) return; // already visible on load, wait for re-entry
            }
            if (entries[0].isIntersecting) {
                bringSection.classList.add('in-view');
                obs.disconnect();
            }
        }, { threshold: 0.15 }).observe(bringSection);
    }

    // Animated counter for hero metrics
    const counterElements = document.querySelectorAll('.metric-number[data-count]');
    if (counterElements.length) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    const duration = 2000;
                    const startTime = performance.now();

                    function animate(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease-out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(eased * target);
                        el.textContent = current.toLocaleString();
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    }
                    requestAnimationFrame(animate);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(el => counterObserver.observe(el));
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalHtml = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            formStatus.innerHTML = '';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    formStatus.innerHTML = '<div class="form-status success">Thank you for reaching out. We will get back to you shortly.</div>';
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Unable to send message right now.');
                }
            } catch (error) {
                formStatus.innerHTML = '<div class="form-status error">We could not send your message automatically. Please email compliance@mha-cs.com or call 022 4516 5109 directly.</div>';
            } finally {
                submitButton.disabled = false;
                submitButton.innerHTML = originalHtml;
            }
        });
    }

    const careerForm = document.getElementById('careerForm');
    const careerFormStatus = document.getElementById('careerFormStatus');

    if (careerForm && careerFormStatus) {
        careerForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const submitButton = careerForm.querySelector('button[type="submit"]');
            const originalHtml = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Submitting...</span><i class="fas fa-spinner fa-spin"></i>';
            careerFormStatus.innerHTML = '';

            const formData = new FormData(careerForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    careerFormStatus.innerHTML = '<div class="form-status success">Thank you for submitting your application. We will get back to you shortly.</div>';
                    careerForm.reset();
                } else {
                    throw new Error(result.message || 'Unable to send message right now.');
                }
            } catch (error) {
                careerFormStatus.innerHTML = '<div class="form-status error">We could not send your application automatically. Please email compliance@mha-cs.com or call 022 4516 5109 directly.</div>';
            } finally {
                submitButton.disabled = false;
                submitButton.innerHTML = originalHtml;
            }
        });
    }
    // Scroll progress animator for "How We Work" section
    const approachSection = document.getElementById('approach');
    const stickyWrapper = document.querySelector('.approach-sticky-wrapper');
    const timelineContainer = document.querySelector('.approach-timeline-container');
    const timelineProgress = document.querySelector('.approach-line-progress');
    const approachCards = document.querySelectorAll('.approach-card');

    if (approachSection && stickyWrapper && timelineContainer && timelineProgress && approachCards.length) {
        const handleTimelineScroll = () => {
            const sectionRect = approachSection.getBoundingClientRect();
            const containerRect = timelineContainer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const isDesktop = window.innerWidth > 1024;
            let progress = 0;

            if (isDesktop) {
                // Pinning calculations: track scroll percentage of the section wrapper
                const totalScrollable = sectionRect.height - viewportHeight;
                const scrolled = -sectionRect.top;

                if (scrolled >= 0 && totalScrollable > 0) {
                    progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
                }
            } else {
                // Mobile trigger line at 65% height from top of viewport
                const triggerPoint = viewportHeight * 0.65;
                if (containerRect.top <= triggerPoint) {
                    progress = Math.min(Math.max((triggerPoint - containerRect.top) / containerRect.height, 0), 1);
                }
            }

            // Dynamically align line track with center of nodes
            const node1 = approachCards[0].querySelector('.approach-node');
            const node3 = approachCards[approachCards.length - 1].querySelector('.approach-node');
            const timelineLine = document.querySelector('.approach-line');

            if (node1 && node3 && timelineLine) {
                const node1Rect = node1.getBoundingClientRect();
                const node3Rect = node3.getBoundingClientRect();

                if (isDesktop) {
                    const left = node1Rect.left + node1Rect.width / 2 - containerRect.left;
                    const right = containerRect.right - (node3Rect.left + node3Rect.width / 2);
                    const top = node1Rect.top + node1Rect.height / 2 - containerRect.top;

                    timelineLine.style.left = `${left}px`;
                    timelineLine.style.right = `${right}px`;
                    timelineLine.style.top = `${top}px`;
                    timelineLine.style.bottom = 'auto';
                    timelineLine.style.width = 'auto';
                    timelineLine.style.height = '2px';

                    timelineProgress.style.width = `${progress * 100}%`;
                    timelineProgress.style.height = '100%';
                } else {
                    const top = node1Rect.top + node1Rect.height / 2 - containerRect.top;
                    const bottom = containerRect.bottom - (node3Rect.top + node3Rect.height / 2);
                    const left = node1Rect.left + node1Rect.width / 2 - containerRect.left;

                    timelineLine.style.left = `${left}px`;
                    timelineLine.style.right = 'auto';
                    timelineLine.style.top = `${top}px`;
                    timelineLine.style.bottom = `${bottom}px`;
                    timelineLine.style.width = '2px';
                    timelineLine.style.height = 'auto';

                    timelineProgress.style.height = `${progress * 100}%`;
                    timelineProgress.style.width = '100%';
                }
            }

            approachCards.forEach((card, index) => {
                const step = index + 1;
                let active = false;
                if (step === 1 && progress > 0.05) active = true;
                if (step === 2 && progress > 0.45) active = true;
                if (step === 3 && progress > 0.85) active = true;

                if (active) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleTimelineScroll, { passive: true });
        window.addEventListener('resize', handleTimelineScroll, { passive: true });
        handleTimelineScroll();
    }
    // Scroll progress animator for "Specialized Transaction Experience" section left border
    const transactionBox = document.querySelector('.transaction-expertise-box');
    const transactionProgress = document.querySelector('.transaction-line-progress');

    if (transactionBox && transactionProgress) {
        const handleTransactionScroll = () => {
            const rect = transactionBox.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate progress based on box visibility in viewport
            const totalScrollable = rect.height + viewportHeight;
            const scrolled = viewportHeight - rect.top;

            let progress = 0;
            if (scrolled >= 0 && scrolled <= totalScrollable) {
                progress = scrolled / totalScrollable;
            } else if (scrolled > totalScrollable) {
                progress = 1;
            }

            transactionProgress.style.height = `${progress * 100}%`;

            // Activate cards sequentially as scroll progress fills down past them
            const cards = transactionBox.querySelectorAll('.transaction-card');
            cards.forEach((card, index) => {
                const stepThreshold = 0.1 + (index * 0.12); // distributes activation progressively
                if (progress > stepThreshold) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        };
        window.addEventListener('scroll', handleTransactionScroll, { passive: true });
        handleTransactionScroll();
    }

    // Always scroll back to top on page refresh
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.addEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
    });
    // Fallback: force scroll to top on load
    window.scrollTo(0, 0);
});

// Service Modal Functions
function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    const service = serviceDetails[serviceId];
    if (service) {
        modalTitle.textContent = service.title;
        modalContent.innerHTML = service.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function (event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeServiceModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeServiceModal();
    }
});
