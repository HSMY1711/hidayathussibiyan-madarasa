/* =========================================
   HIDAYATHUSSIBIYAN MADARASA
   HOME PAGE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MOBILE NAVIGATION
  ========================================= */

  const menuButton = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");
  const menuIcon = menuButton
    ? menuButton.querySelector(".menu-icon")
    : null;

  if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

      const isOpen = navMenu.classList.toggle("active");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );

      if (menuIcon) {
        menuIcon.textContent = isOpen
          ? "✕"
          : "☰";
      }

    });


    /* Close mobile menu after clicking a link */

    const navLinks =
      navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

        if (menuIcon) {
          menuIcon.textContent = "☰";
        }

      });

    });

  }


  /* =========================================
     CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
  ========================================= */

  document.addEventListener("click", (event) => {

    if (!menuButton || !navMenu) return;

    const clickedInsideMenu =
      navMenu.contains(event.target);

    const clickedMenuButton =
      menuButton.contains(event.target);

    if (
      navMenu.classList.contains("active") &&
      !clickedInsideMenu &&
      !clickedMenuButton
    ) {

      navMenu.classList.remove("active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      if (menuIcon) {
        menuIcon.textContent = "☰";
      }

    }

  });


  /* =========================================
     CLOSE MOBILE MENU WITH ESCAPE KEY
  ========================================= */

  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      navMenu &&
      navMenu.classList.contains("active")
    ) {

      navMenu.classList.remove("active");

      if (menuButton) {

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

      }

      if (menuIcon) {
  menuIcon.textContent = "☰";
}

if (menuButton) {
  menuButton.focus();
}

  });


  /* =========================================
     SMOOTH SCROLL FOR SAME-PAGE LINKS
  ========================================= */

  const internalLinks =
    document.querySelectorAll(
      'a[href^="#"]'
    );

  internalLinks.forEach((link) => {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          this.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }
    );

  });


  /* =========================================
     CURRENT YEAR IN FOOTER
  ========================================= */

  const currentYear =
    document.getElementById("currentYear");

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }


  /* =========================================
     VIEW ALL ANNOUNCEMENTS
     PREPARED FOR FUTURE ANNOUNCEMENTS PAGE
  ========================================= */

  const viewAllAnnouncements =
    document.getElementById(
      "viewAllAnnouncements"
    );

  if (viewAllAnnouncements) {

    viewAllAnnouncements.addEventListener(
      "click",
      () => {

        /*
          FUTURE:
          Change this when we create
          the announcements page.
        */

        alert(
          "All announcements will be available here soon."
        );

      }
    );

  }


  /* =========================================
     LANGUAGE SELECTOR
     PREPARED FOR FUTURE MULTILINGUAL SYSTEM
  ========================================= */

  const languageSelector =
    document.getElementById(
      "languageSelector"
    );

  if (languageSelector) {

    languageSelector.addEventListener(
      "change",
      (event) => {

        const selectedLanguage =
          event.target.value;

        /*
          FUTURE:
          Connect English, Kannada
          and Malayalam translations here.
        */

        console.log(
          "Selected language:",
          selectedLanguage
        );

      }
    );

  }


  /* =========================================
     ADMIN LOGIN
     PREPARED FOR FUTURE ADMIN PANEL
  ========================================= */

  const adminLogin =
    document.getElementById("adminLogin");

  if (adminLogin) {

    adminLogin.addEventListener(
      "click",
      (event) => {

        event.preventDefault();

        /*
          FUTURE:
          Redirect to the real
          admin login page.
        */

        alert(
          "Admin login will be added soon."
        );

      }
    );

  }


});
