// Dark Mode Toggle
const darkModeButton = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  // Toggle button text
  darkModeButton.innerHTML = body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Search Form Logic
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const categorySelect = document.getElementById('category-select');
const resultsContainer = document.getElementById('results');
const loadMoreButton = document.getElementById('load-more');

let currentPage = 1;
let totalResults = 0;

// Function to fetch scripts from API (mocked API for this example)
async function fetchScripts(query = '', category = 'all', page = 1) {
  // Replace with actual API call to ScriptBlox API
  const apiUrl = `https://api.scriptblox.com/search?s=${query}&category=${category}&page=${page}`;
  
  // Mock API response
  const mockApiResponse = {
    scripts: [
      { title: 'God Mode Script', description: 'Makes you invincible in the game.', id: '1' },
      { title: 'Auto Farm Script', description: 'Automatically farms resources for you.', id: '2' },
      { title: 'Fly Script', description: 'Allows your character to fly in the game.', id: '3' }
    ],
    totalResults: 3
  };
  
  // Simulate delay for API call
  await new Promise(resolve => setTimeout(resolve, 500));

  return mockApiResponse;
}

// Display Scripts in the Results Section
function displayScripts(scripts) {
  scripts.forEach(script => {
    const scriptElement = document.createElement('div');
    scriptElement.classList.add('script');
    scriptElement.innerHTML = `
      <h3>${script.title}</h3>
      <p>${script.description}</p>
      <button class="button">View Script</button>
    `;
    resultsContainer.appendChild(scriptElement);
  });
}

// Handle Search Form Submission
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const query = searchInput.value;
  const category = categorySelect.value;
  
  // Reset results and page number
  resultsContainer.innerHTML = '';
  currentPage = 1;

  const response = await fetchScripts(query, category, currentPage);
  totalResults = response.totalResults;
  displayScripts(response.scripts);
});

// Handle Load More Button Click
loadMoreButton.addEventListener('click', async () => {
  if (resultsContainer.children.length < totalResults) {
    currentPage++;
    const query = searchInput.value;
    const category = categorySelect.value;
    
    const response = await fetchScripts(query, category, currentPage);
    displayScripts(response.scripts);
  }
});
