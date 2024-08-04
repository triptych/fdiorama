const generateVegetation = (svg) => {
    const width = svg.clientWidth;
    const height = svg.clientHeight;

    const numTrees = Math.floor(Math.random() * 10) + 5;

    for (let i = 0; i < numTrees; i++) {
        const x = Math.random() * width;
        const y = height - (Math.random() * (height / 4) + (height / 4));
        const size = Math.random() * 50 + 25;

        const tree = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        const trunk = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        trunk.setAttribute('x', x - size / 20);
        trunk.setAttribute('y', y);
        trunk.setAttribute('width', size / 10);
        trunk.setAttribute('height', size / 2);
        trunk.setAttribute('fill', '#8B4513');

        const leaves = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const leafPoints = `${x},${y - size / 2} ${x - size / 2},${y} ${x + size / 2},${y}`;
        leaves.setAttribute('points', leafPoints);
        leaves.setAttribute('fill', '#228B22');

        tree.appendChild(trunk);
        tree.appendChild(leaves);
        svg.appendChild(tree);
    }
};

export { generateVegetation };