const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // get prompt to select media
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
    }
}

button.addEventListener('click', async () => {
    //Disable Button
    button.disabled = true;

    // Start picture in picture
    await videoElement.requestPictureInPicture();

    //Reset Button
    button.disabled = false;
});
// On Load
selectMediaStream();