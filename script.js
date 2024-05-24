const gallery = document.getElementById("gallery");

// Array store for gallery.
const galleryStore = [
  {
    id: 0,
    src: "https://i.pinimg.com/564x/e3/98/43/e398436db203e26ed95db2d6b07db791.jpg",
    alt: "suit-1",
  },
  {
    id: 1,
    src: "https://i.pinimg.com/564x/ab/b3/ce/abb3ceea336c7eec2feefcf4d9eaf5c0.jpg",
    alt: "cloth-1",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/564x/d8/e1/51/d8e151fac0fbc23a9bddb5dbc285b745.jpg",
    alt: "suit-3",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/564x/e2/4a/f5/e24af5b1087be241793a2f9b2871121f.jpg",
    alt: "cloth-2",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/564x/4a/ba/27/4aba27dcb39c9db7fe75523217d8a3d5.jpg",
    alt: "suit-2",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/564x/80/5c/db/805cdb2875666667c6fec25943d546cd.jpg",
    alt: "cloth-3",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/564x/4b/e7/47/4be74751ac974ae9c786b273e43e9aba.jpg",
    alt: "suit-4",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/564x/b3/20/6f/b3206f838824e680a361cececad87fac.jpg",
    alt: "cloth-4",
  },
];

// Functionality to display the gallery.
const renderGallery = (array) => {
  const galleryDisplay = array
    .map((photo) => {
      return `
        <img id="${photo.id}" src="${photo.src}" alt="${photo.alt}" />
        `;
    })
    .join("");

  gallery.innerHTML = galleryDisplay;
};

renderGallery(galleryStore);

// Functionality to focus the email input when one of the plans are clicked.
const email = document.getElementById("email");
const basicPlan = document.getElementById("basic-plan");
const proPlan = document.getElementById("pro-plan");

const focusInput = (name) => {
  if (name === "basic") {
    // Removes the class if it is present already.
    email.classList.remove("shaking-input");

    // Trigger the shaking effect.
    email.focus();
    email.classList.add("shaking-input");

    console.log("Basic option was clicked.");
  } else if (name === "pro") {
    // Removes the class if it is present already
    email.classList.remove("shaking-input");

    // Trigger the shaking effect.
    email.focus();
    email.classList.add("shaking-input");

    console.log("Pro option was clicked");
  }
};

basicPlan.addEventListener("click", () => {
  focusInput("basic");
});
proPlan.addEventListener("click", () => {
  focusInput("pro");
});
