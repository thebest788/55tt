const allScripts = [
    { title: 'God Mode Script', description: 'Makes your character invincible in the game.', category: 'Gameplay', url: '#' },
    { title: 'Auto Farm Script', description: 'Automatically farms in a Roblox game.', category: 'Gameplay', url: '#' },
    { title: 'Admin Commands', description: 'Gives you admin powers in the game.', category: 'Admin', url: '#' },
    { title: 'Flying Script', description: 'Allows you to fly around in the game world.', category: 'Fun', url: '#' },
    { title: 'GUI Admin Panel', description: 'A custom admin control panel.', category: 'UI', url: '#' },
    { title: 'Teleportation Script', description: 'Teleport to any player in the game.', category: 'Gameplay', url: '#' },
    { title: 'Invisible Script', description: 'Makes your character invisible.', category: 'Gameplay', url: '#' },
    { title: 'Chat Commands Script', description: 'Adds custom chat commands for your game.', category: 'Admin', url: '#' },
    { title: 'Speed Hack', description: 'Increase your speed in the game world.', category: 'Gameplay', url: '#' },
    { title: 'Infinite Jump Script', description: 'Allows you to jump infinitely.', category: 'Fun', url: '#' },
    // Add more scripts as needed
];

function renderScripts(scripts) {
    const scriptsList = document.getElementById('scripts-list');
    scriptsList.innerHTML = ''; // Clear the current list

    scripts.forEach(script => {
        const scriptItem = document.createElement('div');
        scriptItem.classList.add('script-item');

        const title = document.createElement('h3');
        const link = document.createElement('a');
        link.href = script.url;
        link.textContent = script.title;
        title.appendChild(link);

        const description = document.createElement('p');
        description.textContent = script.description;

        scriptItem.appendChild(title);
        scriptItem.appendChild(description);
        scriptsList.appendChild(scriptItem);
    });
}

function searchScripts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredScripts = allScripts.filter(script =>
        script.title.toLowerCase().includes(searchTerm) || script.description.toLowerCase().includes(searchTerm)
    );
    renderScripts(filteredScripts);
}

function filterCategory(category) {
    const filteredScripts = allScripts.filter(script => script.category === category);
    renderScripts(filteredScripts);
}

// Initial render of all scripts
renderScripts(allScripts);
