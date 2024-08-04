const fantasyEmojis = [
    { emoji: '🧙', name: 'wizard', type: 'ground' },
    { emoji: '🧝', name: 'elf', type: 'ground' },
    { emoji: '🧛', name: 'vampire', type: 'ground' },
    { emoji: '🧟', name: 'zombie', type: 'ground' },
    { emoji: '🐉', name: 'dragon', type: 'air' },
    { emoji: '🦄', name: 'unicorn', type: 'ground' },
    { emoji: '🏰', name: 'castle', type: 'ground' },
    { emoji: '🗡️', name: 'sword', type: 'ground' },
    { emoji: '🛡️', name: 'shield', type: 'ground' },
    { emoji: '🧚', name: 'fairy', type: 'air' },
    { emoji: '🧞', name: 'genie', type: 'air' },
    { emoji: '🦹', name: 'supervillain', type: 'ground' },
    { emoji: '🦸', name: 'superhero', type: 'ground' },
];

const generateCharacters = (svg) => {
    const width = svg.clientWidth;
    const height = svg.clientHeight;
    const numCharacters = Math.floor(Math.random() * 5) + 3; // 3 to 7 characters

    for (let i = 0; i < numCharacters; i++) {
        const x = Math.random() * width;
        const character = fantasyEmojis[Math.floor(Math.random() * fantasyEmojis.length)];
        
        let y;
        if (character.type === 'ground') {
            // Place ground characters in the lower 1/4 of the screen
            y = height - (Math.random() * (height / 4));
        } else {
            // Place air characters in the upper 3/4 of the screen
            y = Math.random() * (height * 3/4);
        }

        const size = Math.random() * 30 + 20; // Size between 20 and 50

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('font-size', `${size}px`);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.textContent = character.emoji;

        // Add a title for accessibility
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = character.name;
        text.appendChild(title);

        svg.appendChild(text);
    }
};

export { generateCharacters };