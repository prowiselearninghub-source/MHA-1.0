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

// Load and display team profiles in grid format (Founder in Row 0 middle, Team in Row 1+ grid)
function loadTeamProfiles() {
    const founderTrack = document.getElementById('teamFounderTrack');
    const cardsTrack = document.getElementById('teamCardsTrack');
    
    if (founderTrack && typeof founderProfileData !== 'undefined') {
        founderTrack.innerHTML = '';
        const founderObj = {
            ...founderProfileData,
            credentials: founderProfileData.title || founderProfileData.credentials
        };
        const founderCard = createTeamProfileCard(founderObj, 0);
        founderTrack.appendChild(founderCard);
    }

    if (cardsTrack) {
        cardsTrack.innerHTML = '';
        teamMembersData.forEach((member, index) => {
            const card = createTeamProfileCard(member, index + 1);
            cardsTrack.appendChild(card);
        });
    }
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
