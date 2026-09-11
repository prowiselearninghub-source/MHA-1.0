// Team Profiles Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadTeamProfiles();
    initializeFounderProfileModal();
    initTeamGraphObserver();
});

function initializeFounderProfileModal() {
    const founderCard = document.getElementById('founderProfileCard');
    const founderButton = document.getElementById('founderProfileBtn');

    if (!founderCard && !founderButton) return;

    if (founderCard) {
        founderCard.style.cursor = 'pointer';
        founderCard.addEventListener('click', openFounderProfileModal);
    }

    if (founderButton) {
        founderButton.addEventListener('click', function(event) {
            event.stopPropagation();
            openFounderProfileModal();
        });
    }
}

function openFounderProfileModal() {
    if (typeof founderProfileData !== 'undefined') {
        openProfileModal(founderProfileData);
    }
}

// Load and display team profiles in grid format (Founder in Row 0 middle, Team in Row 1+ grid)
function loadTeamProfiles() {
    const cardsTrack = document.getElementById('teamCardsTrack');
    if (!cardsTrack) return;

    const members = typeof founderProfileData !== 'undefined'
        ? [{ ...founderProfileData, credentials: founderProfileData.title }, ...teamMembersData]
        : teamMembersData;
    const pageSize = 5;
    const pageCount = Math.ceil(members.length / pageSize);
    let currentPage = 0;
    const dots = document.getElementById('teamCarouselDots');
    const previousButton = document.getElementById('teamPreviousButton');
    const nextButton = document.getElementById('teamNextButton');

    const renderPage = () => {
        const pageMembers = members.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
        cardsTrack.innerHTML = '';
        pageMembers.forEach((member, index) => cardsTrack.appendChild(createTeamProfileCard(member, index)));
        cardsTrack.classList.remove('team-page-entering');
        requestAnimationFrame(() => cardsTrack.classList.add('team-page-entering'));
        if (dots) {
            dots.querySelectorAll('button').forEach((dot, index) => dot.classList.toggle('is-active', index === currentPage));
        }
        if (previousButton) previousButton.disabled = currentPage === 0;
        if (nextButton) nextButton.disabled = currentPage === pageCount - 1;
    };

    if (dots) {
        dots.innerHTML = Array.from({ length: pageCount }, (_, index) =>
            `<button type="button" aria-label="Show team members ${index + 1}" class="${index === 0 ? 'is-active' : ''}"></button>`
        ).join('');
        dots.querySelectorAll('button').forEach((dot, index) => dot.addEventListener('click', () => {
            currentPage = index;
            renderPage();
        }));
    }
    if (previousButton) previousButton.addEventListener('click', () => {
        if (currentPage > 0) { currentPage -= 1; renderPage(); }
    });
    if (nextButton) nextButton.addEventListener('click', () => {
        if (currentPage < pageCount - 1) { currentPage += 1; renderPage(); }
    });
    renderPage();
}

// Create team profile card
function createTeamProfileCard(member, index) {
    const card = document.createElement('div');
    card.className = 'team-profile-card';
    card.setAttribute('data-card-index', index);
    card.onclick = () => openTeamMemberModal(member);

    const fallbackInitials = member.name
        .split(' ')
        .map(part => part.charAt(0))
        .join('')
        .slice(0, 2)
        .toUpperCase();
    const hasImage = Boolean(member.image) && !member.image.includes('member-placeholder');
    
    const imageMarkup = hasImage
        ? `<img src="${member.image}" alt="${member.name}">`
        : `<div class="team-profile-avatar-fallback" aria-hidden="true">${fallbackInitials}</div>`;

    card.innerHTML = `
        <div class="team-profile-image-container${hasImage ? '' : ' has-fallback'}">
            ${imageMarkup}
        </div>
        <div class="team-profile-info">
            <h3 class="team-profile-name">${member.name}</h3>
            ${member.credentials ? `<span class="team-profile-credentials">${member.credentials}</span>` : ''}
        </div>
    `;

    // Handle broken images
    const imageContainer = card.querySelector('.team-profile-image-container');
    const image = imageContainer.querySelector('img');

    if (image) {
        const applyFallback = () => {
            imageContainer.classList.add('has-fallback');
            imageContainer.innerHTML = `<div class="team-profile-avatar-fallback" aria-hidden="true">${fallbackInitials}</div>`;
        };

        image.addEventListener('error', applyFallback, { once: true });

        if (image.complete && image.naturalWidth === 0) {
            applyFallback();
        }
    }

    return card;
}

// Open team member detail modal
function openProfileModal(profile) {
    const modal = document.getElementById('teamMemberModal');
    const detailsContainer = document.getElementById('teamMemberDetails');

    const bioContent = profile.bioHTML ? profile.bioHTML : `<p>${profile.bio || ''}</p>`;

    detailsContainer.innerHTML = `
        <div class="premium-profile-layout">
            <div class="premium-profile-sidebar">
                <div class="premium-profile-image-wrapper">
                    <img src="${profile.enhancedImage || profile.image}" alt="${profile.name}">
                </div>
                
                <div class="premium-profile-meta-sidebar">
                    ${profile.experience ? `
                    <div class="meta-item">
                        <span class="meta-label">Experience</span>
                        <span class="meta-value">${profile.experience}</span>
                    </div>` : ''}
                    ${profile.specialization ? `
                    <div class="meta-item">
                        <span class="meta-label">Focus</span>
                        <span class="meta-value">${profile.specialization}</span>
                    </div>` : ''}
                </div>
            </div>
            
            <div class="premium-profile-main">
                <div class="premium-profile-header">
                    <h2>${profile.name}</h2>
                    <p class="premium-profile-credentials">${profile.credentials}</p>
                    ${profile.title ? `<span class="premium-profile-badge">${profile.title}</span>` : ''}
                </div>
                
                <div class="premium-profile-body">
                    <div class="premium-profile-bio">
                        ${bioContent}
                    </div>
                    
                    ${profile.expertise && profile.expertise.length ? `
                    <div class="premium-profile-expertise">
                        <h3>Key Specialties</h3>
                        <div class="premium-expertise-grid">
                            ${profile.expertise.map(exp => `
                            <div class="expertise-pill">
                                <i class="fas fa-check-circle"></i>
                                <span>${exp}</span>
                            </div>`).join('')}
                        </div>
                    </div>` : ''}
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openTeamMemberModal(member) {
    openProfileModal(member);
}

// Close team member modal
function closeTeamModal() {
    const modal = document.getElementById('teamMemberModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('teamMemberModal');
    if (event.target === modal) {
        closeTeamModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeTeamModal();
    }
});

// Scroll-triggered sequence animation for Team Graph cards (triggers ONCE per visit, resets on browser refresh)
function initTeamGraphObserver() {
    const teamSection = document.getElementById('team-graph') || document.querySelector('.team-grid-section');
    if (!teamSection) return;

    // Reset initial state on page refresh / load
    teamSection.classList.remove('in-view');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target); // Trigger ONCE per visit
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        observer.observe(teamSection);
    } else {
        teamSection.classList.add('in-view');
    }
}
