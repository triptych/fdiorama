const generateTerrain = (svg) => {
    const width = svg.clientWidth;
    const height = svg.clientHeight;

    const numPoints = 20; // Increased from 10 to 20 for more detail
    const points = [];

    // Generate base points
    for (let i = 0; i <= numPoints; i++) {
        const x = (i / numPoints) * width;
        const y = height - (Math.random() * (height / 3) + (height / 3));
        points.push([x, y]);
    }

    // Add intermediate points for more detail
    for (let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * (height / 10);
        points.splice(i + 1, 0, [midX, midY]);
        i++; // Skip the newly inserted point
    }

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let d = `M${points[0][0]},${height} `;

    for (let i = 0; i < points.length; i++) {
        d += `L${points[i][0]},${points[i][1]} `;
    }

    d += `L${width},${height} Z`;

    path.setAttribute('d', d);
    path.setAttribute('fill', '#4CAF50');

    svg.appendChild(path);
};

export { generateTerrain };