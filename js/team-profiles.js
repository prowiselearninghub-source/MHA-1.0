// Team Profiles Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadTeamProfiles();
    initializeFounderProfileModal();
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

// Load and display team profiles
function loadTeamProfiles() {
    const teamGrid = document.getElementById('teamProfilesGrid');
    if (!teamGrid) return;

    teamGrid.innerHTML = '';

    teamMembersData.forEach(member => {
        const card = createTeamProfileCard(member);
        teamGrid.appendChild(card);
        
        // Register dynamically created card with our viewport observer
        if (window.revealObserver) {
            window.revealObserver.observe(card);
        }
    });
}

// Create team profile card
function createTeamProfileCard(member) {
    const card = document.createElement('div');
    card.className = 'team-profile-card reveal-slide-up';
    card.onclick = () => openTeamMemberModal(member);

    // Limit expertise to first 3 items for card display
    const limitedExpertise = member.expertise.slice(0, 3);

    card.innerHTML = `
        <div class="team-profile-image-container">
            <img src="${member.image}" alt="${member.name}">
        </div>
        <div class="team-profile-info">
            <h3>${member.name}</h3>
            <p class="team-profile-credentials">${member.credentials}</p>
            <p class="team-profile-specialization"><i class="fas fa-briefcase"></i> ${member.specialization}</p>
            <p class="team-profile-experience"><i class="fas fa-clock"></i> ${member.experience} Experience</p>
            <div class="team-profile-expertise">
                <h4>Key Expertise:</h4>
                <div class="expertise-list">
                    ${limitedExpertise.map(exp => `<span class="expertise-tag">${exp}</span>`).join('')}
                    ${member.expertise.length > 3 ? `<span class="expertise-tag">+${member.expertise.length - 3} more</span>` : ''}
                </div>
            </div>
            <button class="view-profile-btn">View Full Profile</button>
        </div>
    `;

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
