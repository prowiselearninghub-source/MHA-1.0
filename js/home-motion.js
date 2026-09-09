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
    // The MHA process is intentionally presented as a complete vertical sequence.
    // Each step remains visible, so visitors can read the full approach without toggling cards.
    return () => { };
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
