const projectDetails = {
  project1: {
    title: "AI Pet Translator™",
    description:
      "A neural network-powered translator that deciphers your pet's thoughts and vocalizations. Know exactly why Fido’s barking or what your goldfish truly thinks of you. Spoiler: It's probably food-related.",
    image: "https://picsum.photos/seed/ai1/800/400",
    tags: [
      "Neural Networks",
      "Pet Communication",
      "AI Translator",
      "Animal Behavior",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  project2: {
    title: "SmartToaster Pro Max™",
    description:
      "An AI-enhanced toaster with facial recognition that remembers your perfect toast shade. Automatically orders artisanal bread when supplies run low and sends motivational quotes while you wait.",
    image: "https://picsum.photos/seed/ai2/800/400",
    tags: ["AI Toaster", "Facial Recognition", "Smart Home", "Kitchen Tech"],
    demoLink: "#",
    githubLink: "#",
  },
  project3: {
    title: "VirtuPet™: The Digital Companion",
    description:
      "A holographic AI pet that adapts to your mood, with adjustable cuteness levels. It feeds on likes and follows from your social media, keeping you entertained and mildly terrified of its digital affection needs.",
    image: "https://picsum.photos/seed/ai3/800/400",
    tags: ["AI Pet", "Holography", "Digital Companion", "Social Media"],
    demoLink: "#",
    githubLink: "#",
  },
  project4: {
    title: "ProcrastiBot™",
    description:
      "An AI assistant that optimizes your procrastination schedule. Suggests the best ways to waste time while still appearing productive, like color-coding your inbox or learning the ancient art of sandwich sculpting.",
    image: "https://picsum.photos/seed/ai4/800/400",
    tags: ["AI Assistant", "Time Management", "Productivity", "Humor"],
    demoLink: "#",
    githubLink: "#",
  },
  project5: {
    title: "Quantum Refrigerator AI+™",
    description:
      "A smart fridge that keeps groceries fresh while using quantum algorithms to suggest meals based on your DNA, mood, and social calendar. Also, tells corny food jokes.",
    image: "https://picsum.photos/seed/ai5/800/400",
    tags: ["Quantum Computing", "Smart Home", "Food Tech", "Refrigerator AI"],
    demoLink: "#",
    githubLink: "#",
  },
  project6: {
    title: "AutoChirp™: AI Birdsong Generator",
    description:
      "An AI device that mimics bird songs with a twist—it mixes in pop songs, traffic noises, and motivational affirmations in bird language for a surreal forest experience.",
    image: "https://picsum.photos/seed/ai6/800/400",
    tags: [
      "AI Sound Generator",
      "Nature Simulation",
      "Sound Design",
      "Birdsong",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  project7: {
    title: "EmoWearables™: The AI Mood Clothing Line",
    description:
      "AI-powered clothing that changes color, fabric, or shape depending on your emotional state. From 'comfort cocoon' mode for bad days to a dazzling LED display when feeling bold.",
    image: "https://picsum.photos/seed/ai7/800/400",
    tags: [
      "Wearable AI",
      "Fashion Tech",
      "Emotion Detection",
      "Smart Clothing",
    ],
    demoLink: "#",
    githubLink: "#",
  },
};

const modal = document.getElementById("projectModal");
const closeModal = document.getElementsByClassName("close-modal")[0];
const viewDetailsButtons = document.getElementsByClassName("view-details");

for (let button of viewDetailsButtons) {
  button.onclick = function () {
    const project = projectDetails[this.getAttribute("data-project")];
    modal.style.display = "block";
    document.querySelector(
      ".modal-image"
    ).style.backgroundImage = `url('${project.image}')`;
    document.querySelector(".modal-title").textContent = project.title;
    document.querySelector(".modal-description").textContent =
      project.description;
    document.querySelector(".modal-tags").innerHTML = project.tags
      .map((tag) => `<span class="modal-tag">${tag}</span>`)
      .join("");
    document.querySelector(".modal-demo").href = project.demoLink;
    document.querySelector(".modal-github").href = project.githubLink;
  };
}

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
