<script>
    // Sidebar Toggle
    const sidebarToggle = document.querySelector('.sidebar-toggle'); // Add an element for toggling the sidebar
    const sidebar = document.querySelector('.sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active'); // Toggle the 'active' class for the sidebar
    });

    // Create Playlist Button
    const createPlaylistBtn = document.querySelector('.create-playlist-btn'); // Add a button with this class
    createPlaylistBtn.addEventListener('click', () => {
        const playlistName = prompt('Enter Playlist Name:');
        if (playlistName) {
            const playlistContainer = document.querySelector('.playlist-container'); // Add an element to hold playlists
            const newPlaylist = document.createElement('div');
            newPlaylist.classList.add('playlist-item');
            newPlaylist.innerText = playlistName;
            playlistContainer.appendChild(newPlaylist);
        }
    

    // Music Card Interaction
    const musicCards = document.querySelectorAll('.music-card'); // Add a class to your music cards
    musicCards.forEach(card => {
        card.addEventListener('click', () => {
            const songTitle = card.querySelector('.song-title').innerText; // Assuming each card has a '.song-title'
            alert(`Playing: ${songTitle}`);
        });
    });

    // Language Switcher
    const languageSwitcher = document.querySelector('.language-switcher'); // Assuming an element exists
    languageSwitcher.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        alert(`Language changed to: ${selectedLanguage}`);
    });
</script>
