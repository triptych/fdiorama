const generateSky = (svg, type) => {
    const width = svg.clientWidth;
    const height = svg.clientHeight;

    const sky = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    sky.setAttribute('width', width);
    sky.setAttribute('height', height);

    switch (type) {
        case 'day':
            sky.setAttribute('fill', '#87CEEB');
            svg.appendChild(sky);
            generateClouds(svg);
            break;
        case 'sunset':
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            gradient.setAttribute('id', 'sunsetGradient');
            gradient.innerHTML = `
                <stop offset="0%" stop-color="#FF6B6B" />
                <stop offset="50%" stop-color="#FFE66D" />
                <stop offset="100%" stop-color="#4472CA" />
            `;
            svg.appendChild(gradient);
            sky.setAttribute('fill', 'url(#sunsetGradient)');
            svg.appendChild(sky);
            break;
        case 'night':
            sky.setAttribute('fill', '#0C1445');
            svg.appendChild(sky);
            generateMulticoloredStars(svg);
            break;
    }
};

const generateClouds = (svg) => {
    const numClouds = Math.floor(Math.random() * 5) + 3;
    for (let i = 0; i < numClouds; i++) {
        const cloud = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const x = Math.random() * svg.clientWidth;
        const y = Math.random() * (svg.clientHeight / 2);
        const size = Math.random() * 50 + 25;
        
        let path = `M${x},${y} `;
        const numPoints = Math.floor(Math.random() * 5) + 5; // 5 to 9 points
        const angleStep = (Math.PI * 2) / numPoints;
        
        for (let j = 0; j < numPoints; j++) {
            const angle = j * angleStep;
            const radius = size * (0.5 + Math.random() * 0.5); // Randomize radius
            const px = x + Math.cos(angle) * radius;
            const py = y + Math.sin(angle) * radius;
            path += `${j === 0 ? 'M' : 'L'}${px},${py} `;
        }
        
        path += 'Z';
        cloud.setAttribute('d', path);
        cloud.setAttribute('fill', 'white');
        cloud.setAttribute('opacity', '0.8');
        svg.appendChild(cloud);
    }
};

const generateMulticoloredStars = (svg) => {
    const numStars = Math.floor(Math.random() * 100) + 50;
    const starColors = ['#FFD700', '#FF69B4', '#00FFFF', '#FF6347', '#7FFFD4', '#FFFFFF'];
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        star.setAttribute('cx', Math.random() * svg.clientWidth);
        star.setAttribute('cy', Math.random() * (svg.clientHeight / 2)); // Only in upper half
        star.setAttribute('r', Math.random() * 2 + 1); // Larger stars: 1-3px radius
        star.setAttribute('fill', starColors[Math.floor(Math.random() * starColors.length)]);
        
        svg.appendChild(star);
    }
};

export { generateSky };