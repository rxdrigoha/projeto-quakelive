document.addEventListener('DOMContentLoaded', () => {
    const rankingListKey = 'quakeLiveRankingList';

    let rankingList = JSON.parse(localStorage.getItem(rankingListKey)) || [
        "TYLER (I DIDNT LAST 10 SECONDS)",
        "Nyx",
        "dark (humble)",
        "trackingxd (humilde)",
        "O",
        "CHALQ (BRO PLAYED WITH ME)",
        "ts (merda ele pegou meu dodge)",
        "ploob (aura farmer)",
        "apt",
        "Saccade"
    ];

    const rankingListElement = document.getElementById('ranking-list');

    function renderRanking() {
        rankingListElement.innerHTML = '';
        rankingList.forEach((player, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${index + 1} - ${player}
                <button class="remove-btn" data-index="${index}">Remover</button>
            `;
            rankingListElement.appendChild(li);
        });
    }

    document.getElementById('add-player-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const playerName = document.getElementById('player-name').value;
        const playerComment = document.getElementById('player-comment').value;
        const playerRank = parseInt(document.getElementById('player-rank').value, 10) - 1;

        rankingList.splice(playerRank, 0, `${playerName} (${playerComment})`);
        localStorage.setItem(rankingListKey, JSON.stringify(rankingList));
        renderRanking();
        document.getElementById('add-player-form').reset();
    });

    rankingListElement.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const index = e.target.getAttribute('data-index');
            rankingList.splice(index, 1);
            localStorage.setItem(rankingListKey, JSON.stringify(rankingList));
            renderRanking();
        }
    });

    renderRanking();
});