import { select } from "d3-selection";
import rough from "roughjs/bundled/rough.esm.js";
import Chart from "./Chart.js";
import { roughCeiling } from "./utils/roughCeiling.js";
import { applyGradient } from "./utils/gradients.js";

/**
 * Rectangle class, which extends the Chart class.
 */
class Rectangle extends Chart {
    /**
     * Constructs a new Rectangle instance.
     * @param {Object} opts - Configuration object for the rectangle.
     */
    constructor(opts) {
        super(opts);

        // load in arguments from config object
        this.margin = opts.margin || {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
        };
        this.width = opts.width || 200;
        this.height = opts.height || 100;
        this.roughness = roughCeiling({ roughness: opts.roughness });
        this.stroke = opts.stroke || "black";
        this.strokeWidth = opts.strokeWidth || 1;
        this.fillStyle = opts.fillStyle || "none";
        this.fillWeight = opts.fillWeight || 0.5;
        this.backgroundGradient = opts.backgroundGradient || "none";

        // Initialize the chart
        this.initChartValues(opts);
        this.resolveFont();
        this.drawRectangle();
        if (opts.title !== undefined) this.setTitle(opts.title);
    }

    /**
     * Initialize the chart with default attributes.
     * @param {Object} opts - Configuration object for the chart.
     */
    initChartValues(opts) {
        this.roughness = opts.roughness || this.roughness;
        this.stroke = opts.stroke || this.stroke;
        this.strokeWidth = opts.strokeWidth || this.strokeWidth;
        this.fillWeight = opts.fillWeight || this.fillWeight;
        this.fillStyle = opts.fillStyle || this.fillStyle;
        this.backgroundGradient =
            opts.backgroundGradient || this.backgroundGradient;
        this.roughId = this.el + "_svg";
        this.graphClass = this.el.substring(1, this.el.length);
        this.setSvg();
    }

    /**
     * Draw rough SVG elements on chart.
     */
    initRoughObjects() {
        this.roughSvg = document.getElementById(this.roughId);
        this.rc = rough.svg(this.roughSvg, {
            options: {
                stroke: this.stroke === "none" ? undefined : this.stroke,
                strokeWidth: this.strokeWidth,
                roughness: this.roughness,
                bowing: this.bowing,
                fillStyle: this.fillStyle,
                fillWeight: this.fillWeight,
            },
        });
    }

    /**
     * Draw the rectangle.
     */
    drawRectangle() {
        this.initRoughObjects();

        // Apply gradient if specified - this now uses CSS backgrounds
        if (this.backgroundGradient !== "none") {
            // Create a filled rectangle for the gradient reference
            const filledRect = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "rect",
            );
            filledRect.setAttribute("x", "0");
            filledRect.setAttribute("y", "0");
            filledRect.setAttribute("width", this.width.toString());
            filledRect.setAttribute("height", this.height.toString());

            // Apply the gradient using CSS backgrounds (not SVG)
            applyGradient(this.backgroundGradient, this.svg.node(), filledRect);
        }

        // Create the rough rectangle with just the stroke
        const rectangle = this.rc.rectangle(0, 0, this.width, this.height, {
            stroke: this.stroke === "none" ? undefined : this.stroke,
            strokeWidth: this.strokeWidth,
            roughness: this.roughness,
            fillWeight: this.fillWeight,
            fill: "none", // Always no fill since we use CSS background
        });

        // Add the rough rectangle on top
        this.svg.node().appendChild(rectangle);
    }

    /**
     * Set the title of the chart.
     * @param {string} title - The title text.
     */
    setTitle(title) {
        this.svg
            .append("text")
            .attr("x", this.width / 2)
            .attr("y", -this.margin.top / 2)
            .attr("text-anchor", "middle")
            .attr("font-family", this.fontFamily)
            .attr("font-size", this.titleFontSize)
            .text(title);
    }
}

export default Rectangle;
