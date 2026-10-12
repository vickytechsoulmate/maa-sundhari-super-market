
console.log("FreshMart website loaded successfully!");



function updateStoreStatus() {
    const status = document.getElementById("store-status");

    if (!status) return;

    const timeParts = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
    }).formatToParts(new Date());

    const hour = Number(
        timeParts.find(part => part.type === "hour").value
    );

    const minute = Number(
        timeParts.find(part => part.type === "minute").value
    );

    const currentMinutes = hour * 60 + minute;
    const isOpen = currentMinutes >= 420 && currentMinutes < 1260;

    const statusCard = status.closest(".visit-card");

    if (statusCard) {
        statusCard.classList.toggle("store-open", isOpen);
        statusCard.classList.toggle("store-closed", !isOpen);
    }

    if (isOpen) {
        status.textContent = "🟢 Open Now · Closes at 9:00 PM";
    } else {
        status.textContent = "🔴 Closed Now · Opens at 7:00 AM";
    }
}

updateStoreStatus();
setInterval(updateStoreStatus, 60000);

updateStoreStatus();
setInterval(updateStoreStatus, 60000);


const enquiryForm = document.getElementById("quickEnquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("enquiryName").value.trim();
        const message = document.getElementById("enquiryMessage").value.trim();

        if (!name || !message) return;

        const whatsappMessage =
`Hello Maa Sundhari Super Market!\nMy name is ${name}.\nMy enquiry: ${message}`;
        const whatsappURL =
            "https://wa.me/919724630180?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}

const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
    window.addEventListener("scroll", function () {
        backToTopButton.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}



const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("is-open");

        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.textContent = isOpen ? "✕ Close Menu" : "☰ Menu";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.textContent = "☰ Menu";
        });
    });
}

const isOpen = currentMinutes >= 420 && currentMinutes < 1260;



const statusCard = status.closest(".visit-card");

if (statusCard) {
    statusCard.classList.toggle("store-open", isOpen);
    statusCard.classList.toggle("store-closed", !isOpen);
}
