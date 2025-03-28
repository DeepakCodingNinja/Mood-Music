const playlists = {
    happy: "https://music.youtube.com/playlist?list=PLLOeu14Q9Rc-2njvwWotBDpN4UsIcP06y",
    sad: "https://music.youtube.com/playlist?list=PLLOeu14Q9Rc_-1ViGRYlSWiS657GtxsO6",
    energetic: "https://music.youtube.com/playlist?list=PLLOeu14Q9Rc8CjK2yK_uM_Em-QepPnnsf",
    chill: "https://music.youtube.com/playlist?list=PLLOeu14Q9Rc9gia303mAmlhjdvapjQ0gd",
    workout: "https://music.youtube.com/playlist?list=PLLOeu14Q9Rc-QfrxEBwRa0tPEiYm4GgF1"
};

function recommendMusic(mood) {
    const playlistDisplay = document.getElementById("playlist-display");
    playlistDisplay.innerHTML = `<p>🎵 Your ${mood} playlist is ready! <a href="${playlists[mood]}" target="_blank">Click here to listen</a>.</p>`;
    playlistDisplay.style.display = "block";
}

function autoRecommend() {
    const moods = Object.keys(playlists);
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    recommendMusic(randomMood);
}
