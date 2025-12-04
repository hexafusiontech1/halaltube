// START: DOM Element Selection - Grabs elements for JavaScript manipulation
const searchIcon = document.querySelector(".yt-search-icon")
const mobileSearch = document.getElementById("mobileSearch")
const closeSearch = document.getElementById("closeSearch")
const tooltip = document.getElementById("ytTooltip")
const sidebarItems = document.querySelectorAll(".yt-sidebar-item")
const slidingMenuToggle = document.getElementById("slidingMenuToggle")
const slidingMenuToggleSidebar = document.getElementById("slidingMenuToggleSidebar")
const slidingSidebar = document.getElementById("slidingSidebar")
const overlay = document.getElementById("overlay")
const subcategoryContainer = document.getElementById("subcategories")
const subcategorySlider = document.querySelector(".yt-subcategory-slider")
const categoryItems = document.querySelectorAll(".yt-category-item")
const categorySlider = document.querySelector(".yt-category-slider")
const categoryPrev = document.querySelector(".category-prev")
const categoryNext = document.querySelector(".category-next")
const subcategoryPrev = document.querySelector(".subcategory-prev")
const subcategoryNext = document.querySelector(".subcategory-next")
const themeToggle = document.getElementById("themeToggle")
const adhanReminder = document.getElementById("adhanReminder")
const prayerNotification = document.getElementById("prayerNotification")
const notificationIcon = document.getElementById("notificationIcon")
const notificationPrayerName = document.getElementById("notificationPrayerName")
const notificationVerse = document.getElementById("notificationVerse")
const notificationEncouragement = document.getElementById("notificationEncouragement")
const adhanPlayer = document.getElementById("adhanPlayer")
// END: DOM Element Selection

// START: Prayer Notification Data - Defines data for each prayer (verses, icons, etc.)
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
}
// END: Prayer Notification Data

// START: Show Prayer Notification - Displays themed pop-up with prayer details and audio
function showPrayerNotification(prayer) {
  const data = prayerNotifications[prayer]
  if (!data) return

  prayerNotification.classList.remove("fajr", "dhuhr", "asr", "maghrib", "isha")
  prayerNotification.classList.add(prayer.toLowerCase())

  notificationIcon.innerHTML = `<i class="fas ${data.icon}"></i>`
  notificationPrayerName.innerHTML = `<span class="arabic" dir="rtl">${data.arabic}</span> - <span class="english">${data.english}</span>`
  notificationVerse.innerHTML = `<span class="arabic" dir="rtl">${data.verseArabic}</span><br>${data.verseEnglish}`
  notificationEncouragement.textContent = data.encouragement

  prayerNotification.style.display = "block"
  setTimeout(() => prayerNotification.classList.add("active"), 10)

  adhanPlayer.play().catch((error) => {
    console.error("Error playing adhan:", error)
    alert("Unable to play adhan audio. Please ensure your browser allows audio playback.")
  })

  setTimeout(() => {
    prayerNotification.classList.remove("active")
    setTimeout(() => {
      prayerNotification.style.display = "none"
      adhanPlayer.pause()
      adhanPlayer.currentTime = 0
    }, 300)
  }, 10000)
}
// END: Show Prayer Notification

// START: Close Prayer Notification - Manually closes notification and stops audio
function closePrayerNotification() {
  prayerNotification.classList.remove("active")
  setTimeout(() => {
    prayerNotification.style.display = "none"
    adhanPlayer.pause()
    adhanPlayer.currentTime = 0
  }, 300)
}
// END: Close Prayer Notification

// START: Adhan Reminder Toggle - Toggles prayer reminders and saves state
let prayerTimes = {}
let remindersEnabled = true

function toggleAdhanReminder() {
  remindersEnabled = !remindersEnabled
  adhanReminder.classList.toggle("active", remindersEnabled)

  // Update the text content
  const spanElement = adhanReminder.querySelector("span")
  if (spanElement) {
    spanElement.textContent = remindersEnabled ? "Adhan: ON" : "Adhan: OFF"
  }

  localStorage.setItem("adhanReminders", remindersEnabled ? "on" : "off")
  adhanReminder.style.transform = "scale(1.05)"
  setTimeout(() => (adhanReminder.style.transform = "scale(1)"), 300)

  if (remindersEnabled) {
    updatePrayerCountdown()
  } else {
    const countdownElement = document.getElementById("countdownTimer")
    if (countdownElement) countdownElement.style.display = "none"
  }
}

adhanReminder.addEventListener("click", toggleAdhanReminder)
// END: Adhan Reminder Toggle

// START: Fetch Prayer Times - Fetches prayer times from Aladhan API
async function fetchPrayerTimes(latitude, longitude) {
  try {
    const response = await fetch(
      `http://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`,
    )
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    prayerTimes = data.data.timings
    schedulePrayerNotifications()
    updatePrayerCountdown()
  } catch (error) {
    console.error("Error fetching prayer times:", error)
    alert("Failed to fetch prayer times. Defaulting to Mecca timings.")
    prayerTimes = {
      Fajr: "04:30",
      Dhuhr: "12:00",
      Asr: "15:30",
      Maghrib: "18:00",
      Isha: "19:30",
    }
    schedulePrayerNotifications()
    updatePrayerCountdown()
  }
}
// END: Fetch Prayer Times

// START: Schedule Prayer Notifications - Schedules notifications for upcoming prayers
const scheduledPrayers = new Set()

function schedulePrayerNotifications() {
  if (!remindersEnabled) return
  const now = new Date()
  const today = now.toISOString().split("T")[0]
  const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"]

  prayerNames.forEach((prayer) => {
    const time = prayerTimes[prayer]
    if (!time) return
    const [hours, minutes] = time.split(":")
    const prayerDate = new Date(`${today}T${hours}:${minutes}:00`)
    const timeDiff = prayerDate - now

    const prayerKey = `${prayer}-${today}`
    if (timeDiff > 0 && timeDiff <= 5 * 60 * 1000 && !scheduledPrayers.has(prayerKey)) {
      scheduledPrayers.add(prayerKey)
      setTimeout(() => {
        if (remindersEnabled) {
          showPrayerNotification(prayer)
        }
        setTimeout(() => scheduledPrayers.delete(prayerKey), 300000)
      }, timeDiff)
    }
  })
}
// END: Schedule Prayer Notifications

// START: Get Location and Fetch Prayer Times - Uses geolocation or defaults to Mecca
function getLocationAndFetchPrayerTimes() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        console.log(`Geolocation success: Latitude ${latitude}, Longitude ${longitude}`)
        fetchPrayerTimes(latitude, longitude)
      },
      (error) => {
        let errorMessage
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for geolocation."
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable."
            break
          case error.TIMEOUT:
            errorMessage = "The request to get user location timed out."
            break
          default:
            errorMessage = "An unknown geolocation error occurred."
            break
        }
        console.error(`Geolocation error: ${errorMessage} (Code: ${error.code})`)
        alert(`Unable to access your location: ${errorMessage} Defaulting to Mecca prayer times.`)
        fetchPrayerTimes(21.4225, 39.8262) // Default to Mecca
      },
      { timeout: 10000, maximumAge: 60000 }, // Timeout after 10s, accept cached position up to 1min old
    )
  } else {
    console.warn("Geolocation is not supported by this browser.")
    alert("Geolocation is not supported by your browser. Defaulting to Mecca prayer times.")
    fetchPrayerTimes(21.4225, 39.8262) // Default to Mecca
  }
}

if (localStorage.getItem("adhanReminders") === "off") {
  remindersEnabled = false
  adhanReminder.classList.remove("active")
  const spanElement = adhanReminder.querySelector("span")
  if (spanElement) {
    spanElement.textContent = "Adhan: OFF"
  }
}
// END: Get Location and Fetch Prayer Times

// START: Theme Toggle - Cycles between dark, light, and sepia themes
function toggleTheme() {
  const body = document.body
  const currentTheme = body.classList.contains("light-theme")
    ? "light"
    : body.classList.contains("sepia-theme")
      ? "sepia"
      : "dark"
  let newTheme

  if (currentTheme === "dark") {
    newTheme = "light"
    body.classList.remove("sepia-theme")
    body.classList.add("light-theme")
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
  } else if (currentTheme === "light") {
    newTheme = "sepia"
    body.classList.remove("light-theme")
    body.classList.add("sepia-theme")
    themeToggle.innerHTML = '<i class="fas fa-palette"></i>'
  } else {
    newTheme = "dark"
    body.classList.remove("sepia-theme")
    body.classList.remove("light-theme")
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
  }

  localStorage.setItem("theme", newTheme)
}

const savedTheme = localStorage.getItem("theme")
if (savedTheme === "light") {
  document.body.classList.add("light-theme")
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
} else if (savedTheme === "sepia") {
  document.body.classList.add("sepia-theme")
  themeToggle.innerHTML = '<i class="fas fa-palette"></i>'
} else {
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
}

themeToggle.addEventListener("click", toggleTheme)
// END: Theme Toggle

// START: Mobile Search Toggle - Shows/hides searchbar on small screens
if (searchIcon) {
  searchIcon.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      mobileSearch.classList.toggle("show")
      mobileSearch.style.display = mobileSearch.classList.contains("show") ? "flex" : "none"
    }
  })
}
closeSearch.addEventListener("click", () => {
  mobileSearch.classList.remove("show")
  mobileSearch.style.display = "none"
})
// END: Mobile Search Toggle

// START: Tooltip Positioning - Positions hover tooltips for sidebar/buttons
function positionTooltip(element) {
  const rect = element.getBoundingClientRect()
  const tooltipWidth = tooltip.offsetWidth
  const tooltipHeight = tooltip.offsetHeight
  const offsetY = 5
  tooltip.style.left = `${rect.left + (rect.width - tooltipWidth) / 2}px`
  tooltip.style.top = `${rect.bottom + offsetY + window.scrollY}px`
  tooltip.classList.add("active")
}

sidebarItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    tooltip.textContent = item.querySelector("span").textContent
    positionTooltip(item)
  })
  item.addEventListener("mouseleave", () => {
    tooltip.classList.remove("active")
  })
})
;[adhanReminder, themeToggle].forEach((item) => {
  item.addEventListener("mouseenter", () => {
    let tooltipText = ""
    if (item === adhanReminder) {
      tooltipText = "Toggle Adhan/Prayer Reminders"
    } else if (item === themeToggle) {
      tooltipText = "Cycle Theme (Dark → Light → Sepia)"
    }
    tooltip.textContent = tooltipText
    positionTooltip(item)
  })
  item.addEventListener("mouseleave", () => {
    tooltip.classList.remove("active")
  })
})
// END: Tooltip Positioning

// START: Sliding Sidebar Toggle - Opens/closes sliding sidebar with overlay
function toggleSidebar() {
  slidingSidebar.classList.toggle("active")
  overlay.classList.toggle("active")
}
slidingMenuToggle.addEventListener("click", toggleSidebar)
slidingMenuToggleSidebar.addEventListener("click", toggleSidebar)
overlay.addEventListener("click", toggleSidebar)
// END: Sliding Sidebar Toggle

// START: Subcategory Data and Display - Defines subcategory data and populates the subcategory slider based on selected category
const subcategories = {
  "quran-tafsir": [
    { name: "Full Qur’an Recitations", href: "/category/quran-tafsir/recitations" },
    { name: "Short Surahs", href: "/category/quran-tafsir/short-surahs" },
    { name: "Tafsir Series", href: "/category/quran-tafsir/tafsir" },
    { name: "Daily Qur’an Clips", href: "/category/quran-tafsir/daily-clips" },
    { name: "Qur’an Reflections", href: "/category/quran-tafsir/reflections" },
  ],
  "lectures-khutbahs": [
    { name: "Friday Khutbahs", href: "/category/lectures-khutbahs/friday-khutbahs" },
    { name: "General Lectures", href: "/category/lectures-khutbahs/general" },
    { name: "Fiqh & Aqeedah", href: "/category/lectures-khutbahs/fiqh-aqeedah" },
    { name: "Seerah & History", href: "/category/lectures-khutbahs/seerah-history" },
    { name: "Question & Answer", href: "/category/lectures-khutbahs/qa" },
  ],
  "kids-corner": [
    { name: "Islamic Cartoons", href: "/category/kids-corner/cartoons" },
    { name: "Stories of Prophets", href: "/category/kids-corner/prophets" },
    { name: "Manners & Etiquette", href: "/category/kids-corner/manners" },
    { name: "Dua & Dhikr Lessons", href: "/category/kids-corner/dua" },
    { name: "Islamic Nasheeds", href: "/category/kids-corner/nasheeds" },
  ],
  "motivation-reminders": [
    { name: "Short Islamic Reminders", href: "/category/motivation-reminders/reminders" },
    { name: "Motivation for Youth", href: "/category/motivation-reminders/youth" },
    { name: "Daily Hadith & Wisdom", href: "/category/motivation-reminders/hadith" },
    { name: "Life Lessons", href: "/category/motivation-reminders/life-lessons" },
    { name: "Repentance & Hope", href: "/category/motivation-reminders/repentance" },
  ],
}

function showSubcategories(category) {
  subcategorySlider.innerHTML = ""
  if (category === "all") {
    subcategoryContainer.style.display = "none"
    subcategoryPrev.classList.add("hidden")
    subcategoryNext.classList.add("hidden")
    return
  }
  const subs = subcategories[category] || []
  if (subs.length > 0) {
    subs.forEach((sub) => {
      const subItem = document.createElement("a")
      subItem.className = "yt-subcategory-item"
      subItem.href = sub.href
      subItem.textContent = sub.name
      subcategorySlider.appendChild(subItem)
    })
    subcategoryContainer.style.display = "flex"
    updateSubcategoryNavButtons()
  } else {
    subcategoryContainer.style.display = "none"
    subcategoryPrev.classList.add("hidden")
    subcategoryNext.classList.add("hidden")
  }
}
// END: Subcategory Data and Display

// START: Category Click Handler - Activates selected category and shows its subcategories
categoryItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault()
    categoryItems.forEach((i) => i.classList.remove("active"))
    item.classList.add("active")
    const category = item.getAttribute("href").split("/").pop()
    showSubcategories(category)
  })
})
// END: Category Click Handler

// START: Category Slider Navigation - Manages visibility and scrolling of category slider
function updateCategoryNavButtons() {
  const scrollLeft = categorySlider.scrollLeft
  const maxScroll = categorySlider.scrollWidth - categorySlider.clientWidth
  if (maxScroll <= 0) {
    categoryPrev.classList.add("hidden")
    categoryNext.classList.add("hidden")
  } else {
    categoryPrev.classList.toggle("hidden", scrollLeft <= 0)
    categoryNext.classList.toggle("hidden", scrollLeft >= maxScroll - 1)
  }
}

categoryNext.addEventListener("click", () => {
  categorySlider.scrollBy({ left: 150, behavior: "smooth" })
})

categoryPrev.addEventListener("click", () => {
  categorySlider.scrollBy({ left: -150, behavior: "smooth" })
})

categorySlider.addEventListener("scroll", updateCategoryNavButtons)
window.addEventListener("resize", updateCategoryNavButtons)
// END: Category Slider Navigation

// START: Subcategory Slider Navigation - Manages visibility and scrolling of subcategory slider
function updateSubcategoryNavButtons() {
  const scrollLeft = subcategorySlider.scrollLeft
  const maxScroll = subcategorySlider.scrollWidth - subcategorySlider.clientWidth
  if (maxScroll <= 0) {
    subcategoryPrev.classList.add("hidden")
    subcategoryNext.classList.add("hidden")
  } else {
    subcategoryPrev.classList.toggle("hidden", scrollLeft <= 0)
    subcategoryNext.classList.toggle("hidden", scrollLeft >= maxScroll - 1)
  }
}

subcategoryNext.addEventListener("click", () => {
  subcategorySlider.scrollBy({ left: 150, behavior: "smooth" })
})

subcategoryPrev.addEventListener("click", () => {
  subcategorySlider.scrollBy({ left: -150, behavior: "smooth" })
})

subcategorySlider.addEventListener("scroll", updateSubcategoryNavButtons)
// END: Subcategory Slider Navigation

// START: Initialization - Sets up initial state and schedules recurring tasks
showSubcategories("all")
updateCategoryNavButtons()
getLocationAndFetchPrayerTimes()
setInterval(schedulePrayerNotifications, 60 * 1000)
// END: Initialization

/* ──────────────── START: Prayer Countdown Timer ──────────────── */
function getNextPrayer() {
  const now = new Date()
  const today = now.toISOString().split("T")[0]
  const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"]

  for (const prayer of prayerNames) {
    const time = prayerTimes[prayer]
    if (!time) continue

    const [hours, minutes] = time.split(":")
    const prayerDate = new Date(`${today}T${hours}:${minutes}:00`)

    if (prayerDate > now) {
      return { name: prayer, time: prayerDate }
    }
  }

  // If no prayer found today, return Fajr for tomorrow
  const fajrTime = prayerTimes["Fajr"]
  if (fajrTime) {
    const [hours, minutes] = fajrTime.split(":")
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowStr = tomorrow.toISOString().split("T")[0]
    const fajrDate = new Date(`${tomorrowStr}T${hours}:${minutes}:00`)
    return { name: "Fajr", time: fajrDate }
  }

  return null
}

function updatePrayerCountdown() {
  const countdownElement = document.getElementById("countdownTimer")
  if (!countdownElement) return

  if (!remindersEnabled || Object.keys(prayerTimes).length === 0) {
    countdownElement.style.display = "none"
    return
  }

  const nextPrayer = getNextPrayer()
  if (!nextPrayer) {
    countdownElement.innerHTML = "Loading..."
    return
  }

  countdownElement.style.display = "inline-block"

  const now = new Date()
  const diff = nextPrayer.time - now

  if (diff <= 0) {
    // Prayer time has passed, recalculate
    updatePrayerCountdown()
    return
  }

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  countdownElement.innerHTML = `
                <span style="font-weight: bold;">${nextPrayer.name}:</span> 
                <span>${String(hours).padStart(2, "0")}h</span> 
                <span>${String(minutes).padStart(2, "0")}m</span> 
                <span>${String(seconds).padStart(2, "0")}s</span>
            `
}

setInterval(updatePrayerCountdown, 1000)
/* ──────────────── END: Prayer Countdown Timer ──────────────── */

/* ──────────────── START: Countdown Timer ──────────────── */
function startCountdown(targetDateTime, elementId) {
  const countdownElement = document.getElementById(elementId)

  function updateCountdown() {
    const now = new Date()
    const target = new Date(targetDateTime)
    const diff = target - now

    if (diff <= 0) {
      countdownElement.innerHTML = "Time's up!"
      clearInterval(countdownInterval)
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    countdownElement.innerHTML = `
            <span>${String(days).padStart(2, "0")}d</span> 
            <span>${String(hours).padStart(2, "0")}h</span> 
            <span>${String(minutes).padStart(2, "0")}m</span> 
            <span>${String(seconds).padStart(2, "0")}s</span>
        `
  }

  updateCountdown()
  const countdownInterval = setInterval(updateCountdown, 1000)
}
/* ──────────────── END: Countdown Timer ──────────────── */

/* ──────────────── START: Initialize Countdown ──────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // Example: Set countdown to a specific date and time (e.g., next Eid al-Fitr, estimated April 10, 2026)
  const targetDateTime = "2026-04-10T00:00:00"
  startCountdown(targetDateTime, "countdownTimer")
})
/* ──────────────── END: Initialize Countdown ──────────────── */

document.addEventListener("fullscreenchange", () => {
  // Ensure navbar and controls remain visible in fullscreen
  const navbar = document.querySelector(".yt-navbar")
  if (document.fullscreenElement) {
    navbar.style.zIndex = "9999"
  } else {
    navbar.style.zIndex = "1050"
  }
})
