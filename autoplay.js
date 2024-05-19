document.addEventListener("DOMContentLoaded", function() {
    // Function to create balloon pop-up
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.top = Math.random() * window.innerHeight + 'px';
        document.getElementById('balloon-container').appendChild(balloon);

        // Remove the balloon after a few seconds
        setTimeout(() => {
            balloon.remove();
        }, 5000); // Set the pop-up time (in milliseconds)
    }

    // Create pop-ups when the webpage is first loaded
    for (let i = 0; i < 20; i++) {
        createBalloon();
    }

    // Get the video element
    var video = document.getElementById("myVideo1");
    // Get the audio element
    var audio = document.querySelector("audio");

    // Check if the video element is found
    if (video) {
        console.log("Video element found:", video);
    } else {
        console.error("Video element not found!");
    }

    // Check if the audio element is found
    if (audio) {
        console.log("Audio element found:", audio);
    } else {
        console.error("Audio element not found!");
    }

    // Play audio when the webpage is first loaded
    audio.play();

    // Add an event listener to detect video playback
    video.addEventListener("play", function() {
        // Pause the audio when the video is played
        audio.pause();
    });

    // Add an event listener to detect video playback stop
    video.addEventListener("pause", function() {
        // Resume audio playback when the video stops playing
        audio.play();
    });
});
