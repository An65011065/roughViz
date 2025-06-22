/**
 * Gradient definitions stored as CSS background styles
 */
const GRADIENTS = {
    noisyEmber: `
        background-color: hsla(8, 100%, 60%, 1);
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1799 1799' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), radial-gradient(circle at 50% 80%, hsla(18, 100%, 65%, 1) 14%, transparent 60%), radial-gradient(circle at 80% 20%, hsla(28, 100%, 70%, 1) 10%, transparent 70%), radial-gradient(circle at 20% 40%, hsla(3, 90%, 60%, 1) 12%, transparent 75%), radial-gradient(circle at 60% 10%, hsla(14, 95%, 55%, 1) 5%, transparent 80%);
        background-blend-mode: overlay, normal, normal, normal, normal;
    `,

    noisyLime: `
        background-color: hsla(79, 98%, 66%, 1);
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1799 1799' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), radial-gradient(circle at 94% 95%, hsla(170, 88%, 68%, 1) 3%, transparent 76%), radial-gradient(circle at 89% 34%, hsla(263, 96%, 51%, 1) 1%, transparent 86%), radial-gradient(circle at 86% 50%, hsla(318, 80%, 65%, 1) 7%, transparent 76%), radial-gradient(circle at 89% 79%, hsla(248, 76%, 53%, 1) 7%, transparent 87%), radial-gradient(circle at 15% 44%, hsla(4, 74%, 80%, 1) 15%, transparent 81%), radial-gradient(circle at 99% 20%, hsla(75, 88%, 92%, 1) 1%, transparent 68%);
        background-blend-mode: overlay, normal, normal, normal, normal, normal, normal;
    `,

    softPink: `
        background-color: hsla(320, 70%, 90%, 1);
        background-image: radial-gradient(circle at 30% 70%, hsla(320, 70%, 90%, 1) 0%, hsla(300, 70%, 80%, 0.8) 50%, hsla(280, 60%, 78%, 0.6) 100%);
        background-blend-mode: normal;
    `,
    noisyDusk: `
        background-color: hsla(266, 30%, 68%, 1);
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1799 1799' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), radial-gradient(circle at 40% 80%, hsla(260, 50%, 60%, 1) 9%, transparent 65%), radial-gradient(circle at 75% 25%, hsla(300, 45%, 65%, 1) 10%, transparent 70%), radial-gradient(circle at 15% 45%, hsla(230, 40%, 70%, 1) 8%, transparent 75%), radial-gradient(circle at 60% 10%, hsla(270, 55%, 62%, 1) 6%, transparent 80%);
        background-blend-mode: overlay, normal, normal, normal, normal;
    `,
    noisyCitrus: `
    background-color: hsla(90, 80%, 85%, 1);
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1799 1799' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), radial-gradient(circle at 60% 70%, hsla(85, 95%, 70%, 1) 10%, transparent 70%), radial-gradient(circle at 30% 30%, hsla(140, 60%, 75%, 1) 6%, transparent 65%), radial-gradient(circle at 80% 20%, hsla(100, 40%, 80%, 1) 8%, transparent 75%), radial-gradient(circle at 10% 60%, hsla(60, 70%, 85%, 1) 5%, transparent 70%);
background-blend-mode: overlay, normal, normal, normal, normal;`,
    roseGold: `
    background-color: hsl(25, 80%, 94%);
background-image: radial-gradient(at 100% 0%, hsl(30, 100%, 90%) 0px, transparent 50%), radial-gradient(at 0% 100%, hsl(350, 90%, 92%) 0px, transparent 50%);
`,
    sunset: `
    background-color: hsla(28, 100%, 85%, 1);
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1799 1799' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), radial-gradient(circle at 90% 85%, hsla(340, 82%, 70%, 1) 7%, transparent 68%), radial-gradient(circle at 25% 60%, hsla(17, 100%, 70%, 1) 10%, transparent 75%), radial-gradient(circle at 70% 30%, hsla(42, 100%, 80%, 1) 6%, transparent 70%), radial-gradient(circle at 10% 30%, hsla(12, 92%, 60%, 1) 12%, transparent 65%), radial-gradient(circle at 80% 10%, hsla(322, 95%, 65%, 1) 4%, transparent 85%);
background-blend-mode: overlay, normal, normal, normal, normal, normal;
    `,
    bloom: `
    background-color: hsla(320, 70%, 90%, 1);
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1799 1799' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), radial-gradient(circle at 70% 75%, hsla(300, 70%, 80%, 1) 10%, transparent 70%), radial-gradient(circle at 20% 30%, hsla(330, 80%, 85%, 1) 8%, transparent 75%), radial-gradient(circle at 60% 20%, hsla(280, 60%, 78%, 1) 6%, transparent 65%), radial-gradient(circle at 15% 80%, hsla(340, 75%, 87%, 1) 7%, transparent 70%);
background-blend-mode: overlay, normal, normal, normal, normal;
    `,
};

/**
 * Applies gradient using SVG foreignObject with CSS background
 * @param {string} gradientId - The ID of the gradient to apply
 * @param {SVGElement} svg - The SVG element
 * @param {SVGRectElement} rect - The rectangle element
 */
export const applyGradient = (gradientId, svg, rect) => {
    const gradientCSS = GRADIENTS[gradientId];
    if (!gradientCSS) {
        console.warn(`Gradient "${gradientId}" not found`);
        return;
    }

    // Get rectangle dimensions
    const x = parseFloat(rect.getAttribute("x") || "0");
    const y = parseFloat(rect.getAttribute("y") || "0");
    const width = parseFloat(rect.getAttribute("width"));
    const height = parseFloat(rect.getAttribute("height"));

    // Remove fill from the SVG rectangle
    rect.setAttribute("fill", "none");

    // Create foreignObject to embed HTML/CSS
    const foreignObject = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "foreignObject",
    );
    foreignObject.setAttribute("x", x.toString());
    foreignObject.setAttribute("y", y.toString());
    foreignObject.setAttribute("width", width.toString());
    foreignObject.setAttribute("height", height.toString());

    // Create the div with the gradient background
    const gradientDiv = document.createElement("div");
    gradientDiv.style.cssText = `
        width: 100%;
        height: 100%;
        ${gradientCSS}
    `;

    foreignObject.appendChild(gradientDiv);

    // Remove any existing gradient
    const existingGradient = svg.querySelector("foreignObject");
    if (existingGradient) {
        existingGradient.remove();
    }

    // Add the gradient background to the SVG (it will appear behind subsequently added elements)
    svg.appendChild(foreignObject);
};

/**
 * Get list of available gradient IDs
 * @returns {string[]} Array of gradient IDs
 */
export const getAvailableGradients = () => {
    return Object.keys(GRADIENTS);
};

/**
 * Legacy function for backwards compatibility
 */
export const createGradient = (gradientId, defs) => {
    return {
        noisyEmber: () => ({ gradient: null, type: "noisyEmber" }),
        noisyLime: () => ({ gradient: null, type: "noisyLime" }),
        softPink: () => ({ gradient: null, type: "softPink" }),
    };
};

/**
 * Legacy function for backwards compatibility
 */
export const applyGradientToRect = (rect, gradientId, gradientType, svg) => {
    applyGradient(gradientType, svg, rect);
};
