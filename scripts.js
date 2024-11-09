const allScripts = [
    { title: 'God Mode Script', description: 'Makes your character invincible.', category: 'Gameplay', script: 'your-god-mode-script-here', url: '#' },
    { title: 'Auto Farm Script', description: 'Automatically farms for you.', category: 'Gameplay', script: 'auto-farm-script-here', url: '#' },
    { title: 'Admin Commands', description: 'Gives you admin powers.', category: 'Admin', script: 'admin-commands-script-here', url: '#' },
    { title: 'Flying Script', description: 'Fly in the game world.', category: 'Fun', script: 'flying-script-here', url: '#' },
    { title: 'GUI Admin Panel', description: 'Custom admin GUI panel.', category: 'UI', script: 'gui-admin-panel-script-here', url: '#' },
    // Add more scripts as necessary
];

function renderScripts(scripts) {
    const scriptList = document.getElementById('script-list');
    scriptList.innerHTML = '';

    scripts.forEach(script => {
        const scriptItem = document.createElement('div');
        scriptItem.classList.add('script-item');
        scriptItem.innerHTML = `<h3>${script.title}</h3><p>${script.description}</p>`;
        scriptItem.addEventListener('click', () => showScriptDetails(script));
        scriptList.appendChild(scriptItem);
    });
}

function searchScripts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredScripts = allScripts.filter(script => 
        script.title.toLowerCase().includes(searchTerm) || script.description.toLowerCase().includes(searchTerm)
    );
    renderScripts(filteredScripts);
}

function showScriptDetails(script) {
    const modal = document.getElementById('script-modal');
    const scriptContent = document.getElementById('script-content');
    scriptContent.textContent = script.script;

    const copyButton = document.getElementById('copy-script');
    const executeButton = document.getElementById('execute-script');

    // Copy Script to Clipboard
    copyButton.onclick = () => {
        navigator.clipboard.writeText(script.script).then(() => {
            alert('Script copied to clipboard!');
        });
    };

    // Execute the Script (in Roblox, this will not actually execute, but you can integrate with ScriptBlox API or other solutions here)
    executeButton.onclick = () => {
        alert('Executing script is not possible from here directly. This is just a mock-up.');
    };

    modal.style.display = 'flex';
}

// Close the Modal
const closeModal = document.getElementsByClassName('close')[0];
closeModal.onclick = () => {
    const modal = document.getElementById('script-modal');
    modal.style.display = 'none';
};

// Initial render of all scripts
renderScripts(allScripts);
