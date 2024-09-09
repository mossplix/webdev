const mediaDetails = {
    media1: {
        title: "AI Ethics in Practice",
        type: "Interview",
        description: "In this in-depth interview, we explore the complex landscape of AI ethics. Topics include data privacy, algorithmic bias, and the responsible development of AI systems. The discussion also covers practical strategies for implementing ethical guidelines in AI projects and the importance of diverse perspectives in AI development.",
        videoUrl: "assets/videos/ai-ethics.mp4"
    },
    media2: {
        title: "The Future of AI in Healthcare",
        type: "Conference Talk",
        description: "This conference presentation delves into the transformative potential of AI in healthcare. It covers topics such as AI-assisted diagnostics, personalized treatment plans, and the use of machine learning in drug discovery. The talk also addresses challenges such as data security, regulatory hurdles, and the need for collaboration between AI experts and healthcare professionals.",
        videoUrl: "assets/videos/ai-ethics.mp4"
    },
    media3: {
        title: "AI and the Future of Work",
        type: "Podcast",
        description: "In this podcast episode, we discuss the profound impact of AI on the global job market. Topics include the automation of routine tasks, the creation of new AI-related job roles, and the skills that will be in demand in an AI-driven economy. The conversation also explores strategies for workers and businesses to adapt to these changes.",
        videoUrl: "assets/videos/ai-ethics.mp4"
    }
};

const modal = document.getElementById("mediaModal");
const closeModal = document.getElementsByClassName("close-modal")[0];
const viewMediaButtons = document.getElementsByClassName("view-media");

for (let button of viewMediaButtons) {
    button.onclick = function() {
        const media = mediaDetails[this.getAttribute("data-media")];
        modal.style.display = "block";
        document.querySelector(".modal-title").textContent = media.title;
        document.querySelector(".modal-description").textContent = media.description;



    document.querySelector(".modal-video").innerHTML = `   <video width="100%" height="100%" controls>
  <source src="${media.videoUrl}" type="video/mp4">
Your browser does not support the video tag.
</video> `;
    
    
    }
}

closeModal.onclick = function() {
    modal.style.display = "none";
    document.querySelector(".modal-video").innerHTML = "";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.querySelector(".modal-video").innerHTML = "";
    }
}
