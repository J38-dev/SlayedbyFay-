alert("JS WORKS");

/* =========================================================
   SLAYED BY FAY — MAIN JAVASCRIPT
   Edit the DATA section first.
   ========================================================= */


/* =========================================================
   1. EDITABLE BUSINESS DATA
   ========================================================= */

const SITE = {
  businessName: "Slayed by Fay",
  tagline: "NAILS ART STUDIO",
  location: "Kibler Park, Johannesburg",
  whatsapp: "27756260945",
  whatsappDisplay: "+27 75 626 0945",

  socials: {
    instagram: "", // Add Instagram URL
    tiktok: "",    // Add TikTok URL
    facebook: ""   // Add Facebook URL
  }
};


/* =========================================================
   2. SERVICES
   Change names/prices here — no HTML editing needed.
   ========================================================= */

const SERVICES = [
  {
    id: "gel",
    name: "Gel Overlay",
    price: 250,
    description: "A clean, glossy gel finish on your natural nails.",
    duration: "60 min"
  },
  {
    id: "french",
    name: "French Tips",
    price: 300,
    description: "Classic French detailing with a polished finish.",
    duration: "75 min"
  },
  {
    id: "acrylic",
    name: "Acrylic Full Set",
    price: 380,
    description: "Durable acrylic extensions shaped to your preference.",
    duration: "120 min"
  },
  {
    id: "acrylic-french",
    name: "Acrylic French",
    price: 450,
    description: "Acrylic extensions finished with elegant French detailing.",
    duration: "135 min"
  },
  {
    id: "overlay",
    name: "Acrylic Overlay",
    price: 330,
    description: "Acrylic strength while keeping your natural nail length.",
    duration: "90 min"
  },
  {
    id: "short-set",
    name: "Short Nail Set",
    price: 320,
    description: "A practical, neat and stylish short set.",
    duration: "90 min"
  },
  {
    id: "medium-set",
    name: "Medium Nail Set",
    price: 380,
    description: "A versatile medium-length set.",
    duration: "105 min"
  },
  {
    id: "long-set",
    name: "Long Nail Set",
    price: 450,
    description: "Longer statement nails with a premium finish.",
    duration: "120 min"
  },
  {
    id: "nail-art",
    name: "Nail Art",
    price: 80,
    description: "Creative custom detailing added to your set.",
    duration: "30 min"
  },
  {
    id: "removal",
    name: "Soak Off / Removal",
    price: 100,
    description: "Safe removal of an existing enhancement.",
    duration: "30 min"
  },
  {
    id: "repair",
    name: "Nail Repair",
    price: 50,
    description: "Repair for a damaged or broken nail.",
    duration: "20 min"
  },
  {
    id: "custom",
    name: "Custom Set",
    price: 500,
    description: "A personalised set designed around your style.",
    duration: "150 min"
  }
];


/* =========================================================
   3. PRICE CALCULATOR OPTIONS
   ========================================================= */

const LENGTH_PRICES = {
  0: 0,
  50: 50,
  100: 100,
  150: 150
};

const DESIGN_PRICES = {
  0: 0,
  50: 50,
  100: 100,
  150: 150
};


/* =========================================================
   4. POLISH COLOUR SYSTEM
   ========================================================= */

const POLISH_COLORS = [
  { name: "Milky", hex: "#F4EDE4" },
  { name: "Nude", hex: "#D8BBA5" },
  { name: "Blush", hex: "#D9A6A2" },
  { name: "Rose", hex: "#B96F72" },
  { name: "Mocha", hex: "#8A6653" },
  { name: "Chocolate", hex: "#513A31" },
  { name: "Cherry", hex: "#8E2634" },
  { name: "Black", hex: "#171412" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Gold", hex: "#C9A45C" },
  { name: "Silver", hex: "#B9B9B9" },
  { name: "Sage", hex: "#AAB3A0" }
];


/* =========================================================
   5. GALLERY
   Replace the image paths with your actual images.
   ========================================================= */

const GALLERY = [
  {
    image: "images/gallery-01.jpg",
    title: "Soft French",
    type: "Nails"
  },
  {
    image: "images/gallery-02.jpg",
    title: "Glossy Nude",
    type: "Nails"
  },
  {
    image: "images/gallery-03.jpg",
    title: "Elegant Detail",
    type: "Nails"
  },
  {
    image: "images/gallery-04.jpg",
    title: "Blush Set",
    type: "Nails"
  },
  {
    image: "images/gallery-05.jpg",
    title: "Statement Set",
    type: "Nails"
  },
  {
    image: "images/gallery-06.jpg",
    title: "Minimal Art",
    type: "Nails"
  },
  {
    image: "images/gallery-07.jpg",
    title: "Chocolate Gloss",
    type: "Nails"
  },
  {
    image: "images/gallery-08.jpg",
    title: "Classic French",
    type: "Nails"
  },
  {
    image: "images/gallery-09.jpg",
    title: "Custom Art",
    type: "Nails"
  },
  {
    image: "images/gallery-10.jpg",
    title: "Clean Girl Set",
    type: "Nails"
  },
  {
    image: "images/gallery-11.jpg",
    title: "Soft Pink",
    type: "Nails"
  },
  {
    image: "images/gallery-12.jpg",
    title: "Luxury Detail",
    type: "Nails"
  },
  {
    image: "images/gallery-13.jpg",
    title: "Gloss Finish",
    type: "Nails"
  },
  {
    image: "images/gallery-14.jpg",
    title: "Modern Art",
    type: "Nails"
  },
  {
    image: "images/gallery-15.jpg",
    title: "Signature Set",
    type: "Nails"
  }
];


/* =========================================================
   6. INSTAGRAM CONTENT
   Manually managed — not a fake live Instagram feed.
   ========================================================= */

const INSTAGRAM_POSTS = [
  {
    image: "images/instagram-01.jpg",
    caption: "Fresh set energy.",
    link: ""
  },
  {
    image: "images/instagram-02.jpg",
    caption: "Details make the difference.",
    link: ""
  },
  {
    image: "images/instagram-03.jpg",
    caption: "A little luxury.",
    link: ""
  },
  {
    image: "images/instagram-04.jpg",
    caption: "Your next set could look like this.",
    link: ""
  },
  {
    image: "images/instagram-05.jpg",
    caption: "Clean. Glossy. Slayed.",
    link: ""
  },
  {
    image: "images/instagram-06.jpg",
    caption: "Custom nail art.",
    link: ""
  }
];


/* =========================================================
   7. TIKTOK CONTENT
   These are previews, not a fake TikTok interface.
   ========================================================= */

const TIKTOK_POSTS = [
  {
    image: "images/tiktok-01.jpg",
    title: "Watch the set come together",
    link: ""
  },
  {
    image: "images/tiktok-02.jpg",
    title: "French tip transformation",
    link: ""
  },
  {
    image: "images/tiktok-03.jpg",
    title: "Behind the scenes",
    link: ""
  },
  {
    image: "images/tiktok-04.jpg",
    title: "Nail art process",
    link: ""
  },
  {
    image: "images/tiktok-05.jpg",
    title: "Fresh set reveal",
    link: ""
  },
  {
    image: "images/tiktok-06.jpg",
    title: "From blank nails to finished set",
    link: ""
  }
];


/* =========================================================
   8. REVIEWS
   Replace these with real client reviews before publishing.
   ========================================================= */

const REVIEWS = [
  {
    name: "Client Review",
    text: "Beautiful work, lovely finish and such attention to detail.",
    rating: 5
  },
  {
    name: "Client Review",
    text: "The final set looked exactly how I wanted it. Absolutely beautiful.",
    rating: 5
  },
  {
    name: "Client Review",
    text: "Professional service and gorgeous nails. I will definitely be back.",
    rating: 5
  },
  {
    name: "Client Review",
    text: "The attention to detail was amazing and the nails lasted beautifully.",
    rating: 5
  }
];


/* =========================================================
   9. FAQ
   ========================================================= */

const FAQS = [
  {
    question: "Where is Slayed by Fay located?",
    answer: "Slayed by Fay is based in Kibler Park, Johannesburg."
  },
  {
    question: "What are your opening hours?",
    answer: "Appointments are available between 09:00 and 19:00. Update the opening-hours settings below if your schedule changes."
  },
  {
    question: "Do I need an appointment?",
    answer: "Appointments are recommended so your preferred time can be reserved."
  },
  {
    question: "How do I book?",
    answer: "Complete the booking form on this website and continue through WhatsApp to confirm your appointment."
  },
  {
    question: "Can I request a specific design?",
    answer: "Yes. Use the design field when booking to describe the style you would like."
  },
  {
    question: "Can I bring a nail design?",
    answer: "Yes. You can describe your inspiration or discuss your preferred design when confirming your appointment."
  },
  {
    question: "Do you offer French tips?",
    answer: "Yes. French tips are available as a dedicated service."
  },
  {
    question: "Do you offer acrylic nails?",
    answer: "Yes. Acrylic sets and overlays are available."
  },
  {
    question: "Do you do nail art?",
    answer: "Yes. Nail art can be added to suitable services."
  },
  {
    question: "How long does an appointment take?",
    answer: "Appointment times vary by service. Estimated durations are shown in the service menu."
  },
  {
    question: "Can I choose my nail length?",
    answer: "Yes. Short, medium, long and extra-long options can be discussed when booking."
  },
  {
    question: "Can I choose my polish colour?",
    answer: "Yes. You can choose a colour based on the available polish selection."
  },
  {
    question: "Do you remove existing nails?",
    answer: "Yes. A soak-off/removal service is available."
  },
  {
    question: "Can a broken nail be repaired?",
    answer: "Yes. Nail repairs can be requested when making your booking."
  },
  {
    question: "Can I customise my set?",
    answer: "Yes. Custom sets are available for clients wanting a more personalised design."
  },
  {
    question: "How does the price calculator work?",
    answer: "The estimator combines your selected service, nail length and design level to give you an estimated starting price."
  },
  {
    question: "Is the price calculator a final quote?",
    answer: "No. It is an estimate. Your final price may depend on the exact design and work required."
  },
  {
    question: "Can I contact Slayed by Fay on WhatsApp?",
    answer: "Yes. WhatsApp is available for appointment enquiries and booking confirmation."
  },
  {
    question: "Where can I see more nail designs?",
    answer: "Browse the gallery and visit the Instagram and TikTok sections for more content."
  },
  {
    question: "What happens after I submit the booking form?",
    answer: "Your selected appointment details are prepared into a WhatsApp message so you can send the request for confirmation."
  }
];


/* =========================================================
   10. OPENING HOURS
   Edit these if needed.
   ========================================================= */

const OPENING_HOURS = [
  { day: "Monday", open: "09:00", close: "19:00" },
  { day: "Tuesday", open: "09:00", close: "19:00" },
  { day: "Wednesday", open: "09:00", close: "19:00" },
  { day: "Thursday", open: "09:00", close: "19:00" },
  { day: "Friday", open: "09:00", close: "19:00" },
  { day: "Saturday", open: "09:00", close: "19:00" },
  { day: "Sunday", open: "09:00", close: "19:00" }
];


/* =========================================================
   11. POLICIES
   ========================================================= */

const POLICIES = [
  {
    icon: "fa-clock",
    title: "Appointments",
    text: "Please arrive on time so your appointment can run smoothly."
  },
  {
    icon: "fa-calendar-xmark",
    title: "Cancellations",
    text: "Please give reasonable notice if you need to change or cancel your appointment."
  },
  {
    icon: "fa-palette",
    title: "Designs",
    text: "Custom designs may affect the final price and appointment duration."
  },
  {
    icon: "fa-comments",
    title: "Confirmation",
    text: "Your WhatsApp booking request must be confirmed before your appointment is considered booked."
  }
];


/* =========================================================
   12. NAIL QUIZ
   ========================================================= */

const QUIZ = [
  {
    question: "What kind of look are you going for?",
    options: [
      {
        label: "Clean & minimal",
        result: "clean"
      },
      {
        label: "Classic & elegant",
        result: "classic"
      },
      {
        label: "Bold & noticeable",
        result: "bold"
      },
      {
        label: "Creative & unique",
        result: "creative"
      }
    ]
  },
  {
    question: "What nail length do you prefer?",
    options: [
      {
        label: "Short",
        result: "short"
      },
      {
        label: "Medium",
        result: "medium"
      },
      {
        label: "Long",
        result: "long"
      },
      {
        label: "Extra long",
        result: "extraLong"
      }
    ]
  },
  {
    question: "Which finish sounds most like you?",
    options: [
      {
        label: "Nude / natural",
        result: "nude"
      },
      {
        label: "French",
        result: "french"
      },
      {
        label: "Colour",
        result: "colour"
      },
      {
        label: "Nail art",
        result: "art"
      }
    ]
  }
];

const QUIZ_RESULTS = {
  clean: {
    title: "The Clean Set",
    text: "A soft, polished look with simple detailing and a timeless finish."
  },
  classic: {
    title: "The Classic Set",
    text: "Elegant French details, refined colours and a sophisticated finish."
  },
  bold: {
    title: "The Statement Set",
    text: "Longer lengths, stronger colours and details designed to stand out."
  },
  creative: {
    title: "The Custom Set",
    text: "A personalised look with creative details made around your style."
  },
  short: {
    title: "Short & Chic",
    text: "Short nails can still make a statement with the right shape and finish."
  },
  medium: {
    title: "The Perfect Middle",
    text: "A versatile length that gives you room for both clean and creative designs."
  },
  long: {
    title: "Long & Luxe",
    text: "Longer nails give your design more space to make an impact."
  },
  extraLong: {
    title: "Extra Statement",
    text: "Extra-long nails create maximum space for dramatic shapes and detailed art."
  },
  nude: {
    title: "Nude Beauty",
    text: "Soft neutrals and glossy finishes for a refined everyday look."
  },
  french: {
    title: "French Favourite",
    text: "A timeless French finish that works beautifully with almost any occasion."
  },
  colour: {
    title: "Colour Moment",
    text: "Choose a shade that lets your personality show through."
  },
  art: {
    title: "Artistic Energy",
    text: "Creative detailing turns your nails into the main accessory."
  }
};


/* =========================================================
   13. GLOBAL STATE
   ========================================================= */

let galleryIndex = 0;
let reviewIndex = 0;
let quizIndex = 0;
let quizAnswers = [];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];


/* =========================================================
   14. GENERAL HELPERS
   ========================================================= */

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMoney(amount) {
  return `R${Number(amount).toLocaleString("en-ZA")}`;
}

function getService(id) {
  return SERVICES.find(service => service.id === id);
}

function scrollToSection(id) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* =========================================================
   15. BUSINESS INFORMATION
   ========================================================= */

function setupBusinessInfo() {
  $$("[data-business]").forEach(element => {
    const key = element.dataset.business;

    if (SITE[key]) {
      element.textContent = SITE[key];
    }
  });

  $$("[data-social]").forEach(link => {
    const platform = link.dataset.social;
    const url = SITE.socials[platform];

    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#";
      link.classList.add("social-disabled");

      link.addEventListener("click", event => {
        event.preventDefault();
      });
    }
  });

  const whatsappLinks = $$(
    'a[href*="27756260945"], #contactWhatsapp'
  );

  whatsappLinks.forEach(link => {
    const message = encodeURIComponent(
      `Hi Slayed by Fay, I'd like to enquire about an appointment.`
    );

    link.href = `https://wa.me/${SITE.whatsapp}?text=${message}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}


/* =========================================================
   16. MOBILE NAVIGATION
   ========================================================= */


/* =========================================================
   16. MOBILE NAVIGATION
   ========================================================= */

function setupMobileMenu() {
  const menuButton =
  $("#menuToggle") ||
  $("#mobileMenuButton") ||
  $(".menu-toggle");

const menu =
  $("#mobileMenu") ||
  $(".mobile-menu");

const overlay = $("#mobileMenuOverlay");

const closeButton =
  $("#menuClose") ||
  $("#mobileMenuClose") ||
  $(".menu-close");

  if (!menuButton || !menu) return;

  function openMenu() {
  menu.classList.add("active");
    overlay?.classList.add("is-visible");
    document.body.classList.add("menu-open");
    menuButton.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
  menu.classList.remove("active");
    overlay?.classList.remove("is-visible");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  menuButton.addEventListener("click", () => {
    menu.classList.contains("is-open")
      ? closeMenu()
      : openMenu();
  });

  closeButton?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);

  $$("#mobileMenu a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}


/* =========================================================
   17. SERVICES
   ========================================================= */

function renderServices() {
  const container = $("#servicesGrid");

  if (!container) return;

  container.innerHTML = SERVICES.map(service => `
    <article class="service-card">
      <div class="service-card-top">
        <span class="service-number">
          ${String(SERVICES.indexOf(service) + 1).padStart(2, "0")}
        </span>

        <span class="service-duration">
          ${escapeHTML(service.duration)}
        </span>
      </div>

      <div class="service-card-body">
        <h3>${escapeHTML(service.name)}</h3>
        <p>${escapeHTML(service.description)}</p>

        <div class="service-card-bottom">
          <strong>From ${formatMoney(service.price)}</strong>

          <button
            type="button"
            class="service-book"
            data-service="${escapeHTML(service.id)}"
          >
            Book
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  $$(".service-book").forEach(button => {
    button.addEventListener("click", () => {
      const service = getService(button.dataset.service);

      if (!service) return;

      const bookingService = $("#bookingService");

      if (bookingService) {
        bookingService.value = service.id;
      }

      scrollToSection("booking");
    });
  });
}


/* =========================================================
   18. SERVICE DROPDOWNS
   ========================================================= */

function populateServiceSelects() {
  const selects = [
    $("#priceService"),
    $("#bookingService")
  ].filter(Boolean);

  selects.forEach(select => {
    select.innerHTML = `
      <option value="">Select a service</option>
      ${SERVICES.map(service => `
        <option value="${escapeHTML(service.id)}">
          ${escapeHTML(service.name)} — ${formatMoney(service.price)}
        </option>
      `).join("")}
    `;
  });
}


/* =========================================================
   19. PRICE ESTIMATOR
   ========================================================= */

function calculatePrice() {
  const serviceId = $("#priceService")?.value;
  const length = $("#priceLength")?.value;
  const design = $("#priceDesign")?.value;
  const output = $("#estimatedPrice");

  if (!output) return;

  if (!serviceId) {
    output.textContent = "Select your service";
    return;
  }

  const service = getService(serviceId);

  if (!service) {
    output.textContent = "Select your service";
    return;
  }

  const total =
    service.price +
    (LENGTH_PRICES[length] || 0) +
    (DESIGN_PRICES[design] || 0);

  output.textContent = `Estimated from ${formatMoney(total)}`;
}

function setupPriceCalculator() {
  [
    "#priceService",
    "#priceLength",
    "#priceDesign"
  ].forEach(selector => {
    $(selector)?.addEventListener("change", calculatePrice);
  });

  calculatePrice();
}


/* =========================================================
   20. POLISH PALETTE
   Dynamically adds the colour system without extra HTML.
   ========================================================= */

function renderPolishPalette() {
  const estimator = $(".estimator-card");

  if (!estimator) return;

  const existing = $("#polishPalette");

  if (existing) return;

  const section = document.createElement("div");

  section.id = "polishPalette";
  section.className = "polish-palette";

  section.innerHTML = `
    <div class="palette-heading">
      <span>Colour inspiration</span>
      <small>Tap a shade</small>
    </div>

    <div class="polish-colors">
      ${POLISH_COLORS.map(color => `
        <button
          type="button"
          class="polish-color"
          data-color="${escapeHTML(color.name)}"
          title="${escapeHTML(color.name)}"
          aria-label="${escapeHTML(color.name)}"
        >
          <span
            class="polish-swatch"
            style="background:${escapeHTML(color.hex)}"
          ></span>
          <span>${escapeHTML(color.name)}</span>
        </button>
      `).join("")}
    </div>
  `;

  estimator.appendChild(section);

  $$(".polish-color").forEach(button => {
    button.addEventListener("click", () => {
      $$(".polish-color").forEach(item => {
        item.classList.remove("selected");
      });

      button.classList.add("selected");

      const designField = $("#priceDesign");

      if (designField && designField.value === "") {
        designField.value = "none";
        calculatePrice();
      }
    });
  });
}


/* =========================================================
   21. NAIL QUIZ
   ========================================================= */

function renderQuizQuestion() {
  const container = $("#quizQuestions");
  const progressText = $("#quizProgressText");
  const progressBar = $("#quizProgressBar");
  const backButton = $("#quizBack");
  const nextButton = $("#quizNext");

  if (!container || !QUIZ[quizIndex]) return;

  const current = QUIZ[quizIndex];

  if (progressText) {
    progressText.textContent =
      `${quizIndex + 1} / ${QUIZ.length}`;
  }

  if (progressBar) {
    progressBar.style.width =
      `${((quizIndex + 1) / QUIZ.length) * 100}%`;
  }

  container.innerHTML = `
<div class="quiz-question active">
      <span class="quiz-question-number">
        0${quizIndex + 1}
      </span>

      <h3>${escapeHTML(current.question)}</h3>

      <div class="quiz-options">
        ${current.options.map((option, index) => `
          <button
            type="button"
            class="quiz-option ${
              quizAnswers[quizIndex] === option.result
                ? "selected"
                : ""
            }"
            data-answer="${escapeHTML(option.result)}"
          >
            <span>${escapeHTML(option.label)}</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        `).join("")}
      </div>
    </div>
  `;

  if (backButton) {
    backButton.disabled = quizIndex === 0;
  }

  if (nextButton) {
  nextButton.disabled = false;
  nextButton.textContent =
    quizIndex === QUIZ.length - 1
      ? "See my result"
      : "Next";
   }

  $$(".quiz-option").forEach(button => {
    button.addEventListener("click", () => {
      quizAnswers[quizIndex] = button.dataset.answer;

      $$(".quiz-option").forEach(option => {
        option.classList.remove("selected");
      });

      button.classList.add("selected");

      if (nextButton) {
        nextButton.disabled = false;
      }
    });
  });
}

function showQuizResult() {
  const resultBox = $("#quizResult");
  const title = $("#quizResultTitle");
  const text = $("#quizResultText");

  if (!resultBox || !title || !text) return;

  const answers = quizAnswers.filter(Boolean);

  if (!answers.length) return;

  const resultKey = answers[answers.length - 1];
  const result = QUIZ_RESULTS[resultKey] || QUIZ_RESULTS.clean;

  title.textContent = result.title;
  text.textContent = result.text;

  resultBox.classList.add("is-visible");
}

function setupQuiz() {
  if (!$("#quizQuestions")) return;

  renderQuizQuestion();

  $("#quizNext")?.addEventListener("click", () => {
    if (!quizAnswers[quizIndex]) return;

    if (quizIndex < QUIZ.length - 1) {
      quizIndex++;
      renderQuizQuestion();
    } else {
      showQuizResult();
    }
  });

  $("#quizBack")?.addEventListener("click", () => {
    if (quizIndex > 0) {
      quizIndex--;
      renderQuizQuestion();
    }
  });
}


/* =========================================================
   22. GALLERY
   ========================================================= */

function renderGallery() {
  const container = $("#galleryGrid");

  if (!container) return;

  container.innerHTML = GALLERY.map((item, index) => `
    <button
      type="button"
      class="gallery-item"
      data-gallery-index="${index}"
      aria-label="View ${escapeHTML(item.title)}"
    >
      <img
        src="${escapeHTML(item.image)}"
        alt="${escapeHTML(item.title)}"
        loading="lazy"
      >

      <span class="gallery-overlay">
        <span>${escapeHTML(item.title)}</span>
        <i class="fa-solid fa-expand"></i>
      </span>
    </button>
  `).join("");

  $$(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      openLightbox(Number(item.dataset.galleryIndex));
    });
  });
}


/* =========================================================
   23. LIGHTBOX
   ========================================================= */

function openLightbox(index) {
  const lightbox = $("#galleryLightbox");
  const image = $("#lightboxImage");
  const count = $("#lightboxCount");
  const title = $("#lightboxTitle");

  if (!lightbox || !image || !GALLERY[index]) return;

  galleryIndex = index;

  const item = GALLERY[galleryIndex];

  image.src = item.image;
  image.alt = item.title;

  if (count) {
    count.textContent =
      `${galleryIndex + 1} / ${GALLERY.length}`;
  }

  if (title) {
    title.textContent = item.title;
  }

  lightbox.classList.add("is-open");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  $("#galleryLightbox")?.classList.remove("is-open");
  document.body.classList.remove("lightbox-open");
}

function changeGallery(direction) {
  let nextIndex = galleryIndex + direction;

  if (nextIndex < 0) {
    nextIndex = GALLERY.length - 1;
  }

  if (nextIndex >= GALLERY.length) {
    nextIndex = 0;
  }

  openLightbox(nextIndex);
}

function setupLightbox() {
  $("#lightboxClose")?.addEventListener("click", closeLightbox);

  $("#lightboxPrev")?.addEventListener("click", () => {
    changeGallery(-1);
  });

  $("#lightboxNext")?.addEventListener("click", () => {
    changeGallery(1);
  });

  $("#galleryLightbox")?.addEventListener("click", event => {
    if (event.target.id === "galleryLightbox") {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", event => {
    const lightbox = $("#galleryLightbox");

    if (!lightbox?.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      changeGallery(-1);
    }

    if (event.key === "ArrowRight") {
      changeGallery(1);
    }
  });
}


/* =========================================================
   24. INSTAGRAM
   ========================================================= */

function renderInstagram() {
  const container = $("#instagramGrid");

  if (!container) return;

  container.innerHTML = INSTAGRAM_POSTS.map(post => {
    const content = `
      <div class="social-card-image">
        <img
          src="${escapeHTML(post.image)}"
          alt="${escapeHTML(post.caption)}"
          loading="lazy"
        >

        <span class="social-card-icon">
          <i class="fa-brands fa-instagram"></i>
        </span>
      </div>

      <div class="social-card-caption">
        ${escapeHTML(post.caption)}
      </div>
    `;

    if (post.link) {
      return `
        <a
          class="social-card"
          href="${escapeHTML(post.link)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${content}
        </a>
      `;
    }

    return `
      <article class="social-card">
        ${content}
      </article>
    `;
  }).join("");
}


/* =========================================================
   25. TIKTOK
   ========================================================= */

function renderTikTok() {
  const container = $("#tiktokGrid");

  if (!container) return;

  container.innerHTML = TIKTOK_POSTS.map(post => {
    const content = `
      <div class="tiktok-card-image">
        <img
          src="${escapeHTML(post.image)}"
          alt="${escapeHTML(post.title)}"
          loading="lazy"
        >

        <span class="tiktok-play">
          <i class="fa-solid fa-play"></i>
        </span>

        <span class="tiktok-icon">
          <i class="fa-brands fa-tiktok"></i>
        </span>
      </div>

      <div class="tiktok-card-title">
        ${escapeHTML(post.title)}
      </div>
    `;

    if (post.link) {
      return `
        <a
          class="tiktok-card"
          href="${escapeHTML(post.link)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${content}
        </a>
      `;
    }

    return `
      <article class="tiktok-card">
        ${content}
      </article>
    `;
  }).join("");
}


/* =========================================================
   26. REVIEWS
   ========================================================= */

function renderReviews() {
  const track = $("#reviewTrack");
  const dots = $("#reviewDots");

  if (!track) return;

  track.innerHTML = REVIEWS.map(review => `
    <article class="review-card">
      <div class="review-stars">
        ${Array.from({ length: review.rating }, () =>
          `<i class="fa-solid fa-star"></i>`
        ).join("")}
      </div>

      <blockquote>
        “${escapeHTML(review.text)}”
      </blockquote>

      <div class="review-author">
        ${escapeHTML(review.name)}
      </div>
    </article>
  `).join("");

  if (dots) {
    dots.innerHTML = REVIEWS.map((_, index) => `
      <button
        type="button"
        class="review-dot ${index === 0 ? "active" : ""}"
        data-review="${index}"
        aria-label="Review ${index + 1}"
      ></button>
    `).join("");

    $$(".review-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        reviewIndex = Number(dot.dataset.review);
        updateReviews();
      });
    });
  }

  updateReviews();
}

function updateReviews() {
  const track = $("#reviewTrack");

  if (!track || !REVIEWS.length) return;

  track.style.transform =
    `translateX(-${reviewIndex * 100}%)`;

  $$(".review-dot").forEach((dot, index) => {
    dot.classList.toggle(
      "active",
      index === reviewIndex
    );
  });
}

function setupReviews() {
  $("#reviewPrev")?.addEventListener("click", () => {
    reviewIndex--;

    if (reviewIndex < 0) {
      reviewIndex = REVIEWS.length - 1;
    }

    updateReviews();
  });

  $("#reviewNext")?.addEventListener("click", () => {
    reviewIndex++;

    if (reviewIndex >= REVIEWS.length) {
      reviewIndex = 0;
    }

    updateReviews();
  });

  setInterval(() => {
    if (!REVIEWS.length) return;

    reviewIndex++;

    if (reviewIndex >= REVIEWS.length) {
      reviewIndex = 0;
    }

    updateReviews();
  }, 6500);
}


/* =========================================================
   27. FAQ
   ========================================================= */

function renderFAQs() {
  const container = $("#faqList");

  if (!container) return;

  container.innerHTML = FAQS.map((faq, index) => `
    <article class="faq-item">
      <button
        type="button"
        class="faq-question"
        aria-expanded="false"
        aria-controls="faq-answer-${index}"
      >
        <span>${escapeHTML(faq.question)}</span>

        <i class="fa-solid fa-plus"></i>
      </button>

      <div
        class="faq-answer"
        id="faq-answer-${index}"
      >
        <p>${escapeHTML(faq.answer)}</p>
      </div>
    </article>
  `).join("");

  $$(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.contains("is-open");

      $$(".faq-item").forEach(other => {
        other.classList.remove("is-open");

        other
          .querySelector(".faq-question")
          ?.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}


/* =========================================================
   28. OPENING HOURS
   ========================================================= */

function renderOpeningHours() {
  const container = $("#openingHoursList");

  if (!container) return;

  container.innerHTML = OPENING_HOURS.map(hours => `
    <div class="hours-row">
      <span>${escapeHTML(hours.day)}</span>
      <span>${escapeHTML(hours.open)} – ${escapeHTML(hours.close)}</span>
    </div>
  `).join("");
}


/* =========================================================
   29. POLICIES
   ========================================================= */

function renderPolicies() {
  const container = $("#policiesGrid");

  if (!container) return;

  container.innerHTML = POLICIES.map(policy => `
    <article class="policy-card">
      <div class="policy-icon">
        <i class="fa-solid ${escapeHTML(policy.icon)}"></i>
      </div>

      <h3>${escapeHTML(policy.title)}</h3>

      <p>${escapeHTML(policy.text)}</p>
    </article>
  `).join("");
}


/* =========================================================
   30. BOOKING TIME SLOTS
   ========================================================= */

function generateTimeSlots() {
  const bookingTime = $("#bookingTime");

  if (!bookingTime) return;

  const slots = [];

  for (let hour = 9; hour <= 19; hour++) {
    slots.push(
      `${String(hour).padStart(2, "0")}:00`
    );
  }

  bookingTime.innerHTML = `
    <option value="">Select a time</option>
    ${slots.map(time => `
      <option value="${time}">${time}</option>
    `).join("")}
  `;
}


/* =========================================================
   31. BOOKING DATE
   ========================================================= */

function setupBookingDate() {
  const dateInput = $("#bookingDate");

  if (!dateInput) return;

  const today = new Date();

  const year = today.getFullYear();
  const month = String(
    today.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    today.getDate()
  ).padStart(2, "0");

  dateInput.min = `${year}-${month}-${day}`;
}


/* =========================================================
   32. BOOKING → WHATSAPP
   ========================================================= */

function setupBooking() {
  const form = $("#bookingForm");

  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const name = $("#bookingName")?.value.trim();
    const phone = $("#bookingPhone")?.value.trim();
    const serviceId = $("#bookingService")?.value;
    const date = $("#bookingDate")?.value;
    const time = $("#bookingTime")?.value;
    const design = $("#bookingDesign")?.value.trim();
    const consent = $("#bookingConsent")?.checked;
    const messageBox = $("#bookingMessage");

    if (!name || !phone || !serviceId || !date || !time) {
      showBookingMessage(
        "Please complete all required fields."
      );
      return;
    }

    if (!consent) {
      showBookingMessage(
        "Please confirm that your details are correct."
      );
      return;
    }

    const service = getService(serviceId);

    if (!service) return;

    const readableDate = new Date(
      `${date}T00:00:00`
    ).toLocaleDateString("en-ZA", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    const whatsappText = `
Hi Slayed by Fay, I'd like to request an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service.name}
Date: ${readableDate}
Time: ${time}
Design: ${design || "No specific design"}

Please let me know if this appointment is available.
`.trim();

    const whatsappURL =
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
        whatsappText
      )}`;

    showBookingMessage(
      "Your booking request is ready. Opening WhatsApp..."
    );

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  });

  function showBookingMessage(message) {
    const box = $("#bookingMessage");

    if (!box) return;

    box.textContent = message;
    box.classList.add("is-visible");
  }
}


/* =========================================================
   33. CURRENT YEAR
   ========================================================= */

function setupYear() {
  const year = $("#currentYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}


/* =========================================================
   34. BACK TO TOP
   ========================================================= */

function setupBackToTop() {
  const button = $("#backToTop");

  if (!button) return;

  window.addEventListener("scroll", () => {
    button.classList.toggle(
      "is-visible",
      window.scrollY > 500
    );
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* =========================================================
   35. SCROLL REVEAL ANIMATIONS
   ========================================================= */

function setupRevealAnimations() {
 const elements=$$(".section, .service-card, .gallery-item, .social-card, .tiktok-card, .review-card, .faq-item, .policy-card");
 if(!elements.length)return;

 elements.forEach(element=>element.classList.add("reveal"));

 if(!("IntersectionObserver" in window)){
   elements.forEach(element=>element.classList.add("revealed"));
   return;
 }

 const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
     if(entry.isIntersecting){
       entry.target.classList.add("revealed");
       observer.unobserve(entry.target);
     }
   });
 },{threshold:0.08});

 elements.forEach(element=>observer.observe(element));
}


/* =========================================================
   36. IMAGE ERROR HANDLING
   Prevents ugly broken-image icons.
   ========================================================= */

function setupImageFallbacks() {
  document.addEventListener(
    "error",
    event => {
      const image = event.target;

      if (!(image instanceof HTMLImageElement)) {
        return;
      }

      image.classList.add("image-error");
    },
    true
  );
}


/* =========================================================
   37. ACTIVE NAVIGATION
   ========================================================= */

function setupActiveNavigation() {
  const sections = $$(
    "main section[id]"
  );

  const links = $$(
    'a[href^="#"]'
  );

  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        links.forEach(link => {
          link.classList.remove("active");

          if (
            link.getAttribute("href") ===
            `#${entry.target.id}`
          ) {
            link.classList.add("active");
          }
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });
}


/* =========================================================
   38. PREVENT EMPTY SOCIAL LINKS
   ========================================================= */

function setupSocialButtons() {
  $$("[data-social]").forEach(link => {
    if (!SITE.socials[link.dataset.social]) {
      link.classList.add("is-unavailable");
      link.title = "Social link coming soon";
    }
  });
}


/* =========================================================
   39. INITIALISE EVERYTHING
   ========================================================= */

document.addEventListener("DOMContentLoaded",()=>{
 alert("SLAYED JS IS RUNNING");

 


console.log("SLAYED BY FAY JS IS RUNNING");

  setupBusinessInfo();

  setupMobileMenu();

  populateServiceSelects();

  renderServices();

  setupPriceCalculator();

  renderPolishPalette();

  setupQuiz();

  renderGallery();

  setupLightbox();

  renderInstagram();

  renderTikTok();

  renderReviews();

  setupReviews();

  renderFAQs();

  renderOpeningHours();

  renderPolicies();

  generateTimeSlots();

  setupBookingDate();

  setupBooking();

  setupYear();

  setupBackToTop();

  setupRevealAnimations();

  setupImageFallbacks();

  setupActiveNavigation();

  setupSocialButtons();

});
