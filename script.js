// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
    this.classList.toggle("active");
});

// Dropdown Menu Logic
const otherMenu = document.getElementById("other-menu");
const dropdownList = document.getElementById("dropdownList");

const dietMenu = document.getElementById("diet-menu");
const dietDropdown = document.getElementById("dietDropdown");

// Toggle Other Dropdown
otherMenu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropdownList.classList.toggle("show-dropdown");
    dietDropdown.classList.remove("show-dropdown");
});

// Toggle Diet Dropdown
dietMenu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dietDropdown.classList.toggle("show-dropdown");
    dropdownList.classList.remove("show-dropdown");
});

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
    if (!dropdownList.contains(event.target) && !otherMenu.contains(event.target)) {
        dropdownList.classList.remove("show-dropdown");
    }
    if (!dietDropdown.contains(event.target) && !dietMenu.contains(event.target)) {
        dietDropdown.classList.remove("show-dropdown");
    }
});

// ✅ Close dropdowns when a link inside them is clicked (MOBILE FIX)
const dropdownLinks = document.querySelectorAll("#dropdownList a, #dietDropdown a");
dropdownLinks.forEach(link => {
    link.addEventListener("click", () => {
        dropdownList.classList.remove("show-dropdown");
        dietDropdown.classList.remove("show-dropdown");
        navLinks.classList.remove("nav-active"); // optional: close the mobile menu too
        hamburger.classList.remove("active");    // optional: deactivate hamburger icon
    });
});

// Auto-close mobile menu when a nav link is clicked
const navLinksList = document.querySelectorAll(".nav-links a");

navLinksList.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("nav-active"); // close the nav
        hamburger.classList.remove("active");    // remove hamburger animation
    });
});

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll Animations
    const sections = document.querySelectorAll(".scroll-section");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check when the page loads
;

// Hero Button Click Action
function startNow() {
    alert("Let's get started with your fitness journey!");
}
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
    const dropdowns = document.querySelectorAll(".dropdown"); // Get all dropdown menus
    const menuItems = document.querySelectorAll(".menu-item"); // Get all menu items

    // Toggle menu on hamburger click
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("nav-active");
        hamburger.classList.toggle("active");
    });

    // Dropdown logic
    menuItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevent click from bubbling up

            // Close all dropdowns first
            dropdowns.forEach((dropdown) => {
                if (dropdown !== this.nextElementSibling) {
                    dropdown.classList.remove("show-dropdown");
                }
            });

            // Toggle current dropdown
            let dropdownMenu = this.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.classList.toggle("show-dropdown");
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target)) {
            dropdowns.forEach((dropdown) => dropdown.classList.remove("show-dropdown"));
        }
    });
});
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// Detect Scroll and Add/Remove 'scrolled' Class
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

  