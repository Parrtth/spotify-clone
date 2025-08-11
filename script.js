<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Sidebar Toggle
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        const sidebar = document.querySelector('.sidebar');

        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });
        }

        // Create Playlist Button
        const createPlaylistBtn = document.querySelector('.create-playlist button');
        if (createPlaylistBtn) {
            createPlaylistBtn.addEventListener('click', () => {
                const playlistName = prompt('Enter Playlist Name:');
                if (playlistName) {
                    const playlistContainer = document.querySelector('.sidebar-scrolbar');
                    const newPlaylist = document.createElement('div');
                    newPlaylist.classList.add('playlist-item');
                    newPlaylist.innerText = playlistName;
                    playlistContainer.appendChild(newPlaylist);
                }
            });
        }

        // Music Card Interaction
        const musicCards = document.querySelectorAll('.item');
        musicCards.forEach(card => {
            const playBtn = card.querySelector('.play-btn');
            if (playBtn) {
                playBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const songTitle = card.querySelector('h4').innerText;
                    const artist = card.querySelector('p').innerText;
                    alert(`Playing: ${songTitle} by ${artist}`);
                });
            }
        });

        // Language Switcher
        const languageSwitcher = document.querySelector('.eng-btn button');
        if (languageSwitcher) {
            languageSwitcher.addEventListener('click', () => {
                const languages = ['English', 'Spanish', 'French', 'German'];
                const currentLang = languageSwitcher.innerText;
                const currentIndex = languages.indexOf(currentLang);
                const nextIndex = (currentIndex + 1) % languages.length;
                languageSwitcher.innerText = languages[nextIndex];
            });
        }
    });
</script>
