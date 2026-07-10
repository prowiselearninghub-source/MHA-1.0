const motionModuleUrl = 'https://cdn.jsdelivr.net/npm/motion/+esm';

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

function setActiveStoryState(index, steps, panels) {
    steps.forEach((step, stepIndex) => {
        step.classList.toggle('active', stepIndex === index);
    });

    panels.forEach((panel, panelIndex) => {
        const isCurrent = panelIndex === index;

        panel.classList.toggle('active', isCurrent);
        panel.classList.toggle('current', isCurrent);
    });
}

function initStoryScene() {
    const storyZone = document.getElementById('storyScrollZone');
    const progressFill = document.getElementById('storyProgressFill');
    const steps = Array.from(document.querySelectorAll('[data-story-step]'));
    const panels = Array.from(document.querySelectorAll('[data-story-panel]'));

    if (!storyZone || !progressFill || !steps.length || !panels.length) {
        return () => { };
    }

    // Helper: calculate element position relative to the scrollytelling container
    const getOffsetTopRelativeToZone = (elem) => {
        let offset = 0;
        let current = elem;
        while (current && current !== storyZone) {
            offset += current.offsetTop;
            current = current.offsetParent;
        }
        return offset;
    };

    const render = () => {
        const rect = storyZone.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const currentCenterOffset = viewportCenter - rect.top;

        const step0Center = getOffsetTopRelativeToZone(steps[0]) + steps[0].offsetHeight / 2;
        const stepLastCenter = getOffsetTopRelativeToZone(steps[steps.length - 1]) + steps[steps.length - 1].offsetHeight / 2;
        const startBuffer = steps[0].offsetHeight * 0.45;
        const endBuffer = steps[steps.length - 1].offsetHeight * 0.45;
        const progressStart = step0Center - startBuffer;
        const progressEnd = stepLastCenter + endBuffer;

        const range = progressEnd - progressStart;
        let progress = 0;
        if (range > 0) {
            const rawProgress = (currentCenterOffset - progressStart) / range;
            progress = clamp(rawProgress, 0, 1);
        } else {
            progress = currentCenterOffset >= progressStart ? 1 : 0;
        }

        const stage = Math.min(steps.length - 1, Math.floor(progress * steps.length));

        // Adjust progress bar direction depending on screen size
        if (window.innerWidth >= 1025) {
            progressFill.style.height = `${Math.max(progress * 100, 12)}%`;
            progressFill.style.width = '100%';
        } else {
            progressFill.style.width = `${Math.max(progress * 100, 12)}%`;
            progressFill.style.height = '100%';
        }
        
        setActiveStoryState(stage, steps, panels);
    };

    // Add click listeners to story steps to enable smooth scrolling to center each step in the screen
    steps.forEach((step, index) => {
        step.style.cursor = 'pointer';
        step.addEventListener('click', () => {
            const rect = storyZone.getBoundingClientRect();
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const zoneTop = rect.top + scrollTop;
            const viewportHeight = window.innerHeight;
            const viewportCenter = viewportHeight / 2;

            const stepCenter = getOffsetTopRelativeToZone(step) + step.offsetHeight / 2;

            // Scroll page so that the clicked step card centers perfectly in the viewport
            const targetScrollY = zoneTop + stepCenter - viewportCenter;

            window.scrollTo({
                top: targetScrollY,
                behavior: 'smooth'
            });
        });
    });

    render();
    return render;
}

function initParallaxScene() {
    const elements = Array.from(document.querySelectorAll('[data-parallax]'));

    if (!elements.length) {
        return () => { };
    }

    const render = () => {
        const viewportHeight = window.innerHeight;

        elements.forEach((element) => {
            const speed = Number(element.getAttribute('data-parallax-speed') || 0.12);
            const rect = element.getBoundingClientRect();
            const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
            const offset = distanceFromCenter * speed * -0.18;

            element.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
        });
    };

    render();
    return render;
}

function initScrollScenes() {
    const storyRenderer = initStoryScene();
    const parallaxRenderer = initParallaxScene();
    let ticking = false;

    const run = () => {
        storyRenderer();
        parallaxRenderer();
        ticking = false;
    };

    const requestTick = () => {
        if (ticking) {
            return;
        }

        ticking = true;
        window.requestAnimationFrame(run);
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick, { passive: true });
    requestTick();
}

async function initMotionEnhancements() {
    const homePage = document.querySelector('.home-page');

    if (!homePage) {
        return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    initScrollScenes();

    if (prefersReducedMotion) {
        return;
    }

    let motionLib = null;

    try {
        motionLib = await import(motionModuleUrl);
    } catch (error) {
        return;
    }

    const { animate, inView, stagger } = motionLib;
    const motionGroups = Array.from(document.querySelectorAll('[data-motion-group]'));

    motionGroups.forEach((group) => {
        const items = Array.from(group.querySelectorAll('[data-motion-item]'));

        if (!items.length) {
            return;
        }

        items.forEach((item) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(24px)';
        });

        inView(group, () => {
            animate(
                items,
                { opacity: [0, 1], y: [24, 0] },
                {
                    duration: 0.82,
                    delay: stagger(0.1),
                    easing: [0.22, 1, 0.36, 1]
                }
            );
        }, { amount: 0.28 });
    });

    const floatingCards = document.querySelectorAll('.hero-floating-card');

    if (floatingCards.length) {
        animate(
            floatingCards,
            { opacity: [0, 1] },
            {
                duration: 0.82,
                delay: stagger(0.12, { startDelay: 0.35 }),
                easing: [0.22, 1, 0.36, 1]
            }
        );
    }

    // 2. Interactive enhancements for What We Bring (mosaic cards)
    const mosaicCards = Array.from(document.querySelectorAll('.mosaic-card'));
    if (mosaicCards.length) {
        // Isolate from main.js reveal observer
        mosaicCards.forEach(card => {
            card.classList.remove('reveal-slide-up', 'reveal-fade');
            if (window.revealObserver) {
                window.revealObserver.unobserve(card);
            }
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px) scale(0.975)';
            
            // Mousemove tracking coordinates for spotlight background glow
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Trigger stagger entrance via Motion One
        const grid = document.querySelector('.mosaic-grid');
        if (grid) {
            inView(grid, () => {
                animate(
                    mosaicCards,
                    { opacity: [0, 1], y: [40, 0], scale: [0.975, 1] },
                    {
                        duration: 0.85,
                        delay: stagger(0.12),
                        easing: [0.16, 1, 0.3, 1]
                    }
                );
            }, { amount: 0.15 });
        }
    }

    // 3. Staggered scroll entrance for capability cloud chips
    const chips = Array.from(document.querySelectorAll('.capability-chip'));
    if (chips.length) {
        const cloud = document.querySelector('.capability-cloud');
        if (cloud) {
            cloud.classList.remove('reveal-fade');
            if (window.revealObserver) {
                window.revealObserver.unobserve(cloud);
            }
        }

        chips.forEach(chip => {
            chip.style.opacity = '0';
            chip.style.transform = 'translateY(15px) scale(0.9)';
        });

        if (cloud) {
            inView(cloud, () => {
                animate(
                    chips,
                    { opacity: [0, 1], y: [15, 0], scale: [0.9, 1] },
                    {
                        duration: 0.72,
                        delay: stagger(0.06),
                        easing: [0.16, 1, 0.3, 1]
                    }
                );
            }, { amount: 0.12 });
        }
    }
}

initMotionEnhancements();
