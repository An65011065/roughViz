import "./style.css";
import Rectangle from "../src/Rectangle.js";

// Wait for DOM to be fully loaded
window.addEventListener("load", () => {
    try {
        // Create a new Rectangle instance
        new Rectangle({
            element: "#visualization",
            width: 500,
            height: 300,
            roughness: 4,
            backgroundGradient: "sunset",
            stroke: "#2c3e50",
            strokeWidth: 2,
            fillWeight: 1,
            title: "Noisy Ember Rectangle",
            margin: {
                top: 50,
                right: 20,
                bottom: 20,
                left: 20,
            },
        });
    } catch (error) {
        console.error("Error creating visualizations:", error);
    }
});
