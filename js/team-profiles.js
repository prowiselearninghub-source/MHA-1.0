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

// Load and display team profiles for horizontal scrollytelling
function loadTeamProfiles() {
    const namesNav = document.getElementById('teamNamesNav');
    const cardsTrack = document.getElementById('teamCardsTrack');
    
    if (!namesNav || !cardsTrack) return;

    namesNav.innerHTML = '';
    cardsTrack.innerHTML = '';

    teamMembersData.forEach((member, index) => {
        // 1. Create navigation item
        const navItem = document.createElement('li');
        navItem.className = 'team-nav-item';
        if (index === 0) navItem.classList.add('active');
        navItem.setAttribute('data-index', index);
        navItem.innerHTML = `
            <span class="nav-bullet"></span>
            <span class="nav-name">${member.name}</span>
        `;
        namesNav.appendChild(navItem);

        // 2. Create card element
        const card = createTeamProfileCard(member, index);
        cardsTrack.appendChild(card);
    });

    // Initialize layout scripts
    initTeamScrollytelling();
}

// Create team profile card
function createTeamProfileCard(member, index) {
    const card = document.createElement('div');
    card.className = 'team-profile-card';
    card.setAttribute('data-card-index', index);
    card.onclick = () => openTeamMemberModal(member);

    const limitedExpertise = member.expertise.slice(0, 3);
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
            <h3>${member.name}</h3>
            <p class="team-profile-credentials">${member.credentials}</p>
            <div class="team-profile-details">
                <p class="team-profile-specialization"><i class="fas fa-briefcase"></i> ${member.specialization}</p>
                <p class="team-profile-experience"><i class="fas fa-clock"></i> ${member.experience} Experience</p>
                <button class="view-profile-btn">
                    <span>View Full Profile</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
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

// Scrollytelling engine using horizontal snap scroll and arrow navigation
function initTeamScrollytelling() {
    const track = document.getElementById('teamCardsTrack');
    const rightContainer = document.querySelector('.team-cards-viewport');
    const navItems = document.querySelectorAll('.team-nav-item');
    const originalCards = document.querySelectorAll('.team-profile-card');
    const prevBtn = document.getElementById('teamPrevBtn');
    const nextBtn = document.getElementById('teamNextBtn');
    
    if (!track || !rightContainer || originalCards.length === 0) return;

    const n = originalCards.length;

    // 1. Clone all cards once to create a double list for seamless looping
    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.onclick = card.onclick;
        track.appendChild(clone);
    });

    // 2. Query all cards (original + clones)
    const allCards = document.querySelectorAll('.team-profile-card');

    let currentActiveIndex = 0;
    let autoplayTimer = null;
    const AUTOPLAY_DELAY = 2500; // 2.5 seconds per card

    // Helper: update active states
    const updateActiveIndex = (activeIndex) => {
        currentActiveIndex = activeIndex % n;
        navItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === currentActiveIndex);
        });
        allCards.forEach((card, idx) => {
            card.classList.toggle('active-card', (idx % n) === currentActiveIndex);
        });
    };

    const containerPadding = () => window.innerWidth > 1024 ? 0 : 32;

    // Helper: scroll to specific index in allCards array
    const scrollToCardElement = (elementIndex, smooth = true) => {
        const targetCard = allCards[elementIndex];
        if (targetCard) {
            rightContainer.scrollTo({
                left: targetCard.offsetLeft - containerPadding(),
                behavior: smooth ? 'smooth' : 'auto'
            });
        }
    };

    // Helper: get current scroll index in allCards array
    const getCurrentScrollIndex = () => {
        const scrollLeft = rightContainer.scrollLeft;
        let closestIndex = 0;
        let minDiff = Infinity;
        allCards.forEach((card, idx) => {
            const cardLeft = card.offsetLeft;
            const diff = Math.abs(cardLeft - scrollLeft);
            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = idx;
            }
        });
        return closestIndex;
    };

    // Autoplay controls
    const startAutoplay = () => {
        if (autoplayTimer) return;
        autoplayTimer = setInterval(() => {
            const modal = document.getElementById('teamMemberModal');
            if (modal && modal.classList.contains('active')) {
                return;
            }
            
            const closestIndex = getCurrentScrollIndex();
            scrollToCardElement(closestIndex + 1, true);
        }, AUTOPLAY_DELAY);
    };

    const stopAutoplay = () => {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    };

    const resetAutoplay = () => {
        stopAutoplay();
        startAutoplay();
    };

    // Navigation Item Click Binding (maps original card index `idx` to elementIndex `idx`)
    navItems.forEach((item, idx) => {
        item.onclick = (e) => {
            e.preventDefault();
            scrollToCardElement(idx, true);
            resetAutoplay();
        };
    });

    // Control Buttons Click Binding
    if (prevBtn) {
        prevBtn.onclick = (e) => {
            e.preventDefault();
            let closestIndex = getCurrentScrollIndex();
            if (closestIndex <= 0) {
                // Instantly snap to duplicate set
                closestIndex = n;
                rightContainer.scrollTo({
                    left: allCards[n].offsetLeft - containerPadding(),
                    behavior: 'auto'
                });
            }
            scrollToCardElement(closestIndex - 1, true);
            resetAutoplay();
        };
    }

    if (nextBtn) {
        nextBtn.onclick = (e) => {
            e.preventDefault();
            const closestIndex = getCurrentScrollIndex();
            scrollToCardElement(closestIndex + 1, true);
            resetAutoplay();
        };
    }

    let isSnapping = false;

    // Scroll listener to update active index dynamically and perform seamless snaps
    rightContainer.addEventListener('scroll', () => {
        if (isSnapping) return;

        const scrollLeft = rightContainer.scrollLeft;
        const indexNLeft = allCards[n].offsetLeft - containerPadding();
        const index0Left = allCards[0].offsetLeft - containerPadding();

        // Snapping logic for infinite loop:
        // If we reach or cross the clone set start (index n), instantly jump back to original start (index 0)
        if (scrollLeft >= indexNLeft - 5) {
            isSnapping = true;
            const offsetDiff = indexNLeft - index0Left;
            rightContainer.scrollTo({
                left: scrollLeft - offsetDiff,
                behavior: 'auto'
            });
            updateActiveIndex(0);
            setTimeout(() => { isSnapping = false; }, 50);
            return;
        }

        // Calculate closest card index
        let closestIndex = 0;
        let minDiff = Infinity;
        allCards.forEach((card, idx) => {
            const cardLeft = card.offsetLeft;
            const diff = Math.abs(cardLeft - scrollLeft);
            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = idx;
            }
        });

        const activeIndex = closestIndex % n;
        if (activeIndex !== currentActiveIndex) {
            updateActiveIndex(activeIndex);
        }
    }, { passive: true });

    // Pause autoplay on mouse hover / touch interaction
    rightContainer.addEventListener('mouseenter', stopAutoplay);
    rightContainer.addEventListener('mouseleave', startAutoplay);
    rightContainer.addEventListener('touchstart', stopAutoplay, { passive: true });
    rightContainer.addEventListener('touchend', startAutoplay, { passive: true });

    // Immediately start at the actual first card
    rightContainer.scrollTo({
        left: allCards[0].offsetLeft - containerPadding(),
        behavior: 'auto'
    });
    updateActiveIndex(0);
    startAutoplay();
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
