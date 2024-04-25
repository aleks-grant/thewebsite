document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert("Form submitted!");
});

const songOfTheDay = {
    title: "Example Song",
    artist: "Example Artist",
    album: "Example Album",
    genre: "Example Genre",
    description: "Example Description",
    audioUrl: "example-audio.mp3" // URL to the audio file
};

// Update the HTML elements with the data for the "Song of the Day"
document.getElementById("song-title").textContent = songOfTheDay.title;
document.getElementById("artist").textContent = songOfTheDay.artist;
document.getElementById("album").textContent = songOfTheDay.album;
document.getElementById("genre").textContent = songOfTheDay.genre;
document.getElementById("description").textContent = songOfTheDay.description;

// Set the audio source for the audio player
document.getElementById("audio-player").src = songOfTheDay.audioUrl;
