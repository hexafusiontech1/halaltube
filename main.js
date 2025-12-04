  // ───────────────────────────────
  // START: DOM Element Selection
  // ───────────────────────────────
  const searchIcon = document.querySelector(".yt-search-icon");
  const mobileSearch = document.getElementById("mobileSearch");
  const closeSearch = document.getElementById("closeSearch");
  const tooltip = document.getElementById("ytTooltip");
  const sidebarItems = document.querySelectorAll(".yt-sidebar-item");
  const slidingMenuToggle = document.getElementById("slidingMenuToggle");
  const slidingMenuToggleSidebar = document.getElementById("slidingMenuToggleSidebar");
  const slidingSidebar = document.getElementById("slidingSidebar");
  const overlay = document.getElementById("overlay");
  const categoryItems = document.querySelectorAll(".yt-category-item");
  const categorySlider = document.querySelector(".yt-category-slider");
  const categoryPrev = document.querySelector(".category-prev");
  const categoryNext = document.querySelector(".category-next");
  const themeToggle = document.getElementById("themeToggle");
  const adhanReminder = document.getElementById("adhanReminder");
  const prayerNotification = document.getElementById("prayerNotification");
  const notificationIcon = document.getElementById("notificationIcon");
  const notificationPrayerName = document.getElementById("notificationPrayerName");
  const notificationVerse = document.getElementById("notificationVerse");
  const notificationEncouragement = document.getElementById("notificationEncouragement");
  const adhanPlayer = document.getElementById("adhanPlayer");
  // ───────────────────────────────
  // END: DOM Element Selection
  // ───────────────────────────────

  // ───────────────────────────────
  // START: Prayer Notification Data
  // ───────────────────────────────
  const prayerNotifications = {
    Fajr: {
      arabic: "فجر",
      english: "Fajr Prayer",
      verseArabic: "أَقِمِ ٱلصَّلَوٰةَ لِدُلُوكِ ٱلشَّمْسِ إِلَىٰ غَسَقِ ٱلَّيْلِ وَقُرْآنَ ٱلْفَجْرِ",
      verseEnglish:
        "Establish prayer at the decline of the sun until the darkness of the night and the Qur’an of dawn. (17:78)",
      icon: "fa-mosque",
      encouragement: "Rise for Fajr and start your day with Allah’s remembrance!",
    },
    Dhuhr: {
      arabic: "ظهر",
      english: "Dhuhr Prayer",
      verseArabic: "إِنَّ ٱلصَّلَوٰةَ كَانَتْ عَلَى ٱلْمُؤْمِنِينَ كِتَٰبًا مَّوْقُوتًا",
      verseEnglish: "Indeed, prayer has been decreed upon the believers a decree of specified times. (4:103)",
      icon: "fa-sun",
      encouragement: "Pause your day and turn to Allah in Dhuhr prayer!",
    },
    Asr: {
      arabic: "عصر",
      english: "Asr Prayer",
      verseArabic: "فَوَيْلٌ لِّلْمُصَلِّينَ ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
      verseEnglish: "So woe to those who pray but are heedless of their prayer. (107:4-5)",
      icon: "fa-clock",
      encouragement: "Guard your Asr prayer, a time to reconnect with Allah!",
    },
    Maghrib: {
      arabic: "مغرب",
      english: "Maghrib Prayer",
      verseArabic: "وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَاةَ وَٱرْكَعُوا۟ مَعَ ٱلرَّٰكِعِينَ",
      verseEnglish: "And establish prayer and give zakah and bow with those who bow. (2:43)",
      icon: "fa-sunset",
      encouragement: "Break your day’s fast with Maghrib prayer to Allah!",
    },
    Isha: {
      arabic: "عشاء",
      english: "Isha Prayer",
      verseArabic: "حَـٰفِظُوا۟ عَلَى ٱلصَّلَوَٰتِ وَٱلصَّلَوٰةِ ٱلْوُسْطَىٰ وَقُومُوا۟ لِلَّهِ قَـٰنِتِينَ",
      verseEnglish: "Maintain with care the [obligatory] prayers and [in particular] the middle prayer. (2:238)",
      icon: "fa-moon",
      encouragement: "End your day with Isha, seeking Allah’s peace!",
    },
  };
  // ───────────────────────────────
  // END: Prayer Notification Data
  // ───────────────────────────────

  // ───────────────────────────────
  // START: Theme Toggle
  // ───────────────────────────────
  function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains("light-theme")
      ? "light"
      : body.classList.contains("sepia-theme")
      ? "sepia"
      : "dark";
    let newTheme;

    if (currentTheme === "dark") {
      newTheme = "light";
      body.classList.remove("sepia-theme");
      body.classList.add("light-theme");
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else if (currentTheme === "light") {
      newTheme = "sepia";
      body.classList.remove("light-theme");
      body.classList.add("sepia-theme");
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-palette"></i>';
    } else {
      newTheme = "dark";
      body.classList.remove("sepia-theme");
      body.classList.remove("light-theme");
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    localStorage.setItem("theme", newTheme);
  }

  // ───────────────────────────────
  // END: Theme Toggle
  // ───────────────────────────────

  // ───────────────────────────────
  // START: Tooltip + Sidebar
  // ───────────────────────────────
  function positionTooltip(element) {
    if (!tooltip || !element) return;
    const rect = element.getBoundingClientRect();
    const offsetY = 5;
    tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
    tooltip.style.top = `${rect.bottom + offsetY + window.scrollY}px`;
    tooltip.classList.add("active");
  }

  if (sidebarItems.length) {
    sidebarItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const span = item.querySelector("span");
        if (span && tooltip) {
          tooltip.textContent = span.textContent;
          positionTooltip(item);
        }
      });
      item.addEventListener("mouseleave", () => {
        if (tooltip) tooltip.classList.remove("active");
      });
    });
  }

  [adhanReminder, themeToggle].forEach((item) => {
    if (item) {
      item.addEventListener("mouseenter", () => {
        if (tooltip) {
          tooltip.textContent =
            item === adhanReminder ? "Toggle Adhan/Prayer Reminders" : "Cycle Theme (Dark → Light → Sepia)";
          positionTooltip(item);
        }
      });
      item.addEventListener("mouseleave", () => {
        if (tooltip) tooltip.classList.remove("active");
      });
    }
  });

  function toggleSidebar() {
    if (slidingSidebar && overlay) {
      slidingSidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  }

  if (slidingMenuToggle) slidingMenuToggle.addEventListener("click", toggleSidebar);
  if (slidingMenuToggleSidebar) slidingMenuToggleSidebar.addEventListener("click", toggleSidebar);
  if (overlay) overlay.addEventListener("click", toggleSidebar);
  // ───────────────────────────────
  // END: Tooltip + Sidebar
  // ───────────────────────────────

// ───────────────────────────────
// START: Category Slider
// ───────────────────────────────

// Handle active state
if (categoryItems.length) {
  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      categoryItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      // Let the link work normally
      window.location.href = item.getAttribute("href");
    });
  });
}

// Handle category scroll buttons
function updateCategoryNavButtons() {
  if (!categorySlider || !categoryPrev || !categoryNext) return;
  const scrollLeft = categorySlider.scrollLeft;
  const maxScroll = categorySlider.scrollWidth - categorySlider.clientWidth;

  if (maxScroll <= 0) {
    categoryPrev.classList.add("hidden");
    categoryNext.classList.add("hidden");
  } else {
    categoryPrev.classList.toggle("hidden", scrollLeft <= 0);
    categoryNext.classList.toggle("hidden", scrollLeft >= maxScroll - 1);
  }
}

if (categoryNext) {
  categoryNext.addEventListener("click", () => {
    if (categorySlider) categorySlider.scrollBy({ left: 150, behavior: "smooth" });
  });
}

if (categoryPrev) {
  categoryPrev.addEventListener("click", () => {
    if (categorySlider) categorySlider.scrollBy({ left: -150, behavior: "smooth" });
  });
}

if (categorySlider) categorySlider.addEventListener("scroll", updateCategoryNavButtons);
window.addEventListener("resize", updateCategoryNavButtons);

// Initialize buttons visibility on load
updateCategoryNavButtons();
// ───────────────────────────────
// END: Category Slider 
// ───────────────────────────────

  // ───────────────────────────────
  // START: Prayer Notification
  // ───────────────────────────────
  function showPrayerNotification(prayer) {
    const data = prayerNotifications[prayer];
    if (!data || !prayerNotification || !notificationIcon || !notificationPrayerName || !notificationVerse || !notificationEncouragement) return;

    prayerNotification.classList.remove("fajr", "dhuhr", "asr", "maghrib", "isha");
    prayerNotification.classList.add(prayer.toLowerCase());

    notificationIcon.innerHTML = `<i class="fas ${data.icon}"></i>`;
    notificationPrayerName.innerHTML = `<span class="arabic" dir="rtl">${data.arabic}</span> - <span class="english">${data.english}</span>`;
    notificationVerse.innerHTML = `<span class="arabic" dir="rtl">${data.verseArabic}</span><br>${data.verseEnglish}`;
    notificationEncouragement.textContent = data.encouragement;

    prayerNotification.style.display = "block";
    setTimeout(() => prayerNotification.classList.add("active"), 10);

    if (adhanPlayer) {
      adhanPlayer.play().catch((error) => {
        console.error("Error playing adhan:", error);
        alert("Unable to play adhan audio. Please ensure your browser allows audio playback.");
      });
    }

    setTimeout(() => {
      if (prayerNotification) prayerNotification.classList.remove("active");
      setTimeout(() => {
        if (prayerNotification) prayerNotification.style.display = "none";
        if (adhanPlayer) {
          adhanPlayer.pause();
          adhanPlayer.currentTime = 0;
        }
      }, 300);
    }, 10000);
  }

  function closePrayerNotification() {
    if (!prayerNotification || !adhanPlayer) return;
    prayerNotification.classList.remove("active");
    setTimeout(() => {
      prayerNotification.style.display = "none";
      adhanPlayer.pause();
      adhanPlayer.currentTime = 0;
    }, 300);
  }
  // ───────────────────────────────
  // END: Prayer Notification
  // ───────────────────────────────

  // ───────────────────────────────
  // START: Adhan Reminder Toggle
  // ───────────────────────────────
  let prayerTimes = {};
  let remindersEnabled = true;

  function toggleAdhanReminder() {
    if (!adhanReminder) return;
    remindersEnabled = !remindersEnabled;
    adhanReminder.classList.toggle("active", remindersEnabled);

    const spanElement = adhanReminder.querySelector("span");
    if (spanElement) spanElement.textContent = remindersEnabled ? "Adhan: ON" : "Adhan: OFF";

    localStorage.setItem("adhanReminders", remindersEnabled ? "on" : "off");

    adhanReminder.style.transform = "scale(1.05)";
    setTimeout(() => (adhanReminder.style.transform = "scale(1)"), 300);

    const countdownElement = document.getElementById("countdownTimer");
    if (!countdownElement) return;

    if (remindersEnabled) {
      countdownElement.classList.remove("hidden");
      countdownElement.style.display = "inline-block";
      updatePrayerCountdown();
    } else {
      countdownElement.classList.add("hidden");
      setTimeout(() => {
        if (!remindersEnabled) countdownElement.style.display = "none";
      }, 600);
    }
  }

  if (adhanReminder) adhanReminder.addEventListener("click", toggleAdhanReminder);
  // ───────────────────────────────
  // END: Adhan Reminder Toggle
  // ───────────────────────────────

  // ───────────────────────────────
  // START: Fetch Prayer Times
  // ───────────────────────────────
  async function fetchPrayerTimes(latitude, longitude) {
    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
      );
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      prayerTimes = data.data.timings;
      schedulePrayerNotifications();
      updatePrayerCountdown();
    } catch (error) {
      console.error("Error fetching prayer times:", error);
      alert("Failed to fetch prayer times. Defaulting to Mecca timings.");
      prayerTimes = {
        Fajr: "04:30",
        Dhuhr: "12:00",
        Asr: "15:30",
        Maghrib: "18:00",
        Isha: "19:30",
      };
      schedulePrayerNotifications();
      updatePrayerCountdown();
    }
  }
  // ───────────────────────────────
  // END: Fetch Prayer Times
  // ───────────────────────────────

  // ───────────────────────────────
  // START: Schedule Prayer Notifications
  // ───────────────────────────────
  const scheduledPrayers = new Set();

  function schedulePrayerNotifications() {
    if (!remindersEnabled) return;
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

    prayerNames.forEach((prayer) => {
      const time = prayerTimes[prayer];
      if (!time) return;
      const [hours, minutes] = time.split(":");
      const prayerDate = new Date(`${today}T${hours}:${minutes}:00`);
      const timeDiff = prayerDate - now;

      const prayerKey = `${prayer}-${today}`;
      if (timeDiff > 0 && timeDiff <= 5 * 60 * 1000 && !scheduledPrayers.has(prayerKey)) {
        scheduledPrayers.add(prayerKey);
        setTimeout(() => {
          if (remindersEnabled) showPrayerNotification(prayer);
          setTimeout(() => scheduledPrayers.delete(prayerKey), 300000);
        }, timeDiff);
      }
    });
  }
  // ───────────────────────────────
  // END: Schedule Prayer Notifications
  // ───────────────────────────────

  // ───────────────────────────────
  // START: Prayer Countdown Timer
  // ───────────────────────────────
  function getNextPrayer() {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

    for (const prayer of prayerNames) {
      const time = prayerTimes[prayer];
      if (!time) continue;
      const [hours, minutes] = time.split(":");
      const prayerDate = new Date(`${today}T${hours}:${minutes}:00`);
      if (prayerDate > now) return { name: prayer, time: prayerDate };
    }

    const fajrTime = prayerTimes["Fajr"];
    if (fajrTime) {
      const [hours, minutes] = fajrTime.split(":");
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const fajrDate = new Date(`${tomorrow.toISOString().split("T")[0]}T${hours}:${minutes}:00`);
      return { name: "Fajr", time: fajrDate };
    }
    return null;
  }

  function updatePrayerCountdown() {
    const countdownElement = document.getElementById("countdownTimer");
    if (!countdownElement) return;

    if (!remindersEnabled || Object.keys(prayerTimes).length === 0) {
      countdownElement.style.display = "none";
      return;
    }

    const nextPrayer = getNextPrayer();
    if (!nextPrayer) {
      countdownElement.innerHTML = "Loading...";
      return;
    }

    countdownElement.style.display = "inline-block";
    const now = new Date();
    const diff = nextPrayer.time - now;

    if (diff <= 0) {
      setTimeout(updatePrayerCountdown, 1000);
      return;
    }

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    countdownElement.innerHTML = `
      Next: <b>${nextPrayer.name}</b> in 
      ${String(hours).padStart(2, "0")}h 
      ${String(minutes).padStart(2, "0")}m 
      ${String(seconds).padStart(2, "0")}s
    `;
  }

  setInterval(updatePrayerCountdown, 1000);
  // ───────────────────────────────
  // END: Prayer Countdown Timer
  // ───────────────────────────────

  // ───────────────────────────────
  // START: Location & Initialization
  // ───────────────────────────────
  function getLocationAndFetchPrayerTimes() {
    const savedLatitude = localStorage.getItem("latitude");
    const savedLongitude = localStorage.getItem("longitude");

    if (savedLatitude && savedLongitude) {
      fetchPrayerTimes(parseFloat(savedLatitude), parseFloat(savedLongitude));
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          localStorage.setItem("latitude", latitude);
          localStorage.setItem("longitude", longitude);
          fetchPrayerTimes(latitude, longitude);
        },
        () => {
          localStorage.setItem("latitude", 21.4225);
          localStorage.setItem("longitude", 39.8262);
          fetchPrayerTimes(21.4225, 39.8262);
        },
        { timeout: 10000, maximumAge: 60000 }
      );
    } else {
      localStorage.setItem("latitude", 21.4225);
      localStorage.setItem("longitude", 39.8262);
      fetchPrayerTimes(21.4225, 39.8262);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else if (savedTheme === "sepia") {
      document.body.classList.add("sepia-theme");
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-palette"></i>';
    } else {
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    // Add theme toggle listener
    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
    } else {
      console.error("themeToggle element not found in the DOM.");
    }

    // Initialize adhan reminder state
    if (localStorage.getItem("adhanReminders") === "off") {
      remindersEnabled = false;
      if (adhanReminder) {
        adhanReminder.classList.remove("active");
        const spanElement = adhanReminder.querySelector("span");
        if (spanElement) spanElement.textContent = "Adhan: OFF";
      }
    }

    // Fetch prayer times
    getLocationAndFetchPrayerTimes();

    // Add video play logic
    const videoCards = document.querySelectorAll(".video-card");
    videoCards.forEach((card) => {
      card.addEventListener("click", () => {
        if (card.classList.contains("playing")) return; // Prevent multiple clicks
        card.classList.add("playing");
        const thumbnail = card.querySelector(".thumbnail");
        const videoId = card.getAttribute("data-video-id");
        if (thumbnail && videoId) {
          thumbnail.innerHTML = `
            <iframe
              width="100%"
              height="202"
              src="https://vid.puffyan.us/embed/${videoId}?local=true&autoplay=1&controls=1&iv_load_policy=3&related_videos=false&comments=false&player_style=invidious"
              frameborder="0"
              allowfullscreen
              sandbox="allow-same-origin allow-scripts allow-popups"
            ></iframe>
          `;
        }
      });
    });
  });
  // ───────────────────────────────
  // END: Location & Initialization
  // ───────────────────────────────

