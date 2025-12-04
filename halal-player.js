;(() => {
  // ==================== QURAN DATA ====================
  const quranSurahs = [
    { number: 1, name: "Al-Fatihah", translation: "The Opening", verses: 7, revelation: "Meccan" },
    { number: 2, name: "Al-Baqarah", translation: "The Cow", verses: 286, revelation: "Medinan" },
    { number: 3, name: "Ali 'Imran", translation: "Family of Imran", verses: 200, revelation: "Medinan" },
    { number: 4, name: "An-Nisa'", translation: "Women", verses: 176, revelation: "Medinan" },
    { number: 5, name: "Al-Ma'idah", translation: "The Table", verses: 120, revelation: "Medinan" },
    { number: 6, name: "Al-An'am", translation: "The Cattle", verses: 165, revelation: "Meccan" },
    { number: 7, name: "Al-A'raf", translation: "The Heights", verses: 206, revelation: "Meccan" },
    { number: 8, name: "Al-Anfal", translation: "The Spoils of War", verses: 75, revelation: "Medinan" },
    { number: 9, name: "At-Taubah", translation: "Repentance", verses: 129, revelation: "Medinan" },
    { number: 10, name: "Yunus", translation: "Jonah", verses: 109, revelation: "Meccan" },
    { number: 11, name: "Hud", translation: "Hud", verses: 123, revelation: "Meccan" },
    { number: 12, name: "Yusuf", translation: "Joseph", verses: 111, revelation: "Meccan" },
    { number: 13, name: "Ar-Ra'd", translation: "The Thunder", verses: 43, revelation: "Medinan" },
    { number: 14, name: "Ibrahim", translation: "Abraham", verses: 52, revelation: "Meccan" },
    { number: 15, name: "Al-Hijr", translation: "The Rocky Tract", verses: 99, revelation: "Meccan" },
    { number: 16, name: "An-Nahl", translation: "The Bee", verses: 128, revelation: "Meccan" },
    { number: 17, name: "Al-Isra'", translation: "The Night Journey", verses: 111, revelation: "Meccan" },
    { number: 18, name: "Al-Kahf", translation: "The Cave", verses: 110, revelation: "Meccan" },
    { number: 19, name: "Maryam", translation: "Mary", verses: 98, revelation: "Meccan" },
    { number: 20, name: "Ta-Ha", translation: "Ta-Ha", verses: 135, revelation: "Meccan" },
    { number: 21, name: "Al-Anbiya'", translation: "The Prophets", verses: 112, revelation: "Meccan" },
    { number: 22, name: "Al-Hajj", translation: "The Pilgrimage", verses: 78, revelation: "Medinan" },
    { number: 23, name: "Al-Mu'minun", translation: "The Believers", verses: 118, revelation: "Meccan" },
    { number: 24, name: "An-Nur", translation: "The Light", verses: 64, revelation: "Medinan" },
    { number: 25, name: "Al-Furqan", translation: "The Criterion", verses: 77, revelation: "Meccan" },
    { number: 26, name: "Ash-Shu'ara'", translation: "The Poets", verses: 227, revelation: "Meccan" },
    { number: 27, name: "An-Naml", translation: "The Ants", verses: 93, revelation: "Meccan" },
    { number: 28, name: "Al-Qasas", translation: "The Stories", verses: 88, revelation: "Meccan" },
    { number: 29, name: "Al-'Ankabut", translation: "The Spider", verses: 69, revelation: "Meccan" },
    { number: 30, name: "Ar-Rum", translation: "The Romans", verses: 60, revelation: "Meccan" },
    { number: 31, name: "Luqman", translation: "Luqman", verses: 34, revelation: "Meccan" },
    { number: 32, name: "As-Sajdah", translation: "The Prostration", verses: 30, revelation: "Meccan" },
    { number: 33, name: "Al-Ahzab", translation: "The Confederates", verses: 73, revelation: "Medinan" },
    { number: 34, name: "Saba'", translation: "Sheba", verses: 54, revelation: "Meccan" },
    { number: 35, name: "Fatir", translation: "The Creator", verses: 45, revelation: "Meccan" },
    { number: 36, name: "Ya-Sin", translation: "Ya-Sin", verses: 83, revelation: "Meccan" },
    { number: 37, name: "As-Saffat", translation: "Those Who Set the Ranks", verses: 182, revelation: "Meccan" },
    { number: 38, name: "Sad", translation: "The Letter Sad", verses: 88, revelation: "Meccan" },
    { number: 39, name: "Az-Zumar", translation: "The Groups", verses: 75, revelation: "Meccan" },
    { number: 40, name: "Ghafir", translation: "The Pardoner", verses: 85, revelation: "Meccan" },
    { number: 41, name: "Fussilat", translation: "Expounded in Detail", verses: 54, revelation: "Meccan" },
    { number: 42, name: "Ash-Shura", translation: "Consultation", verses: 53, revelation: "Meccan" },
    { number: 43, name: "Az-Zukhruf", translation: "The Ornaments of Gold", verses: 89, revelation: "Meccan" },
    { number: 44, name: "Ad-Dukhan", translation: "The Smoke", verses: 59, revelation: "Meccan" },
    { number: 45, name: "Al-Jathiyah", translation: "The Crouching", verses: 37, revelation: "Meccan" },
    { number: 46, name: "Al-Ahqaf", translation: "The Winding Sand-tracts", verses: 35, revelation: "Meccan" },
    { number: 47, name: "Muhammad", translation: "Muhammad", verses: 38, revelation: "Medinan" },
    { number: 48, name: "Al-Fath", translation: "The Victory", verses: 29, revelation: "Medinan" },
    { number: 49, name: "Al-Hujurat", translation: "The Chambers", verses: 18, revelation: "Medinan" },
    { number: 50, name: "Qaf", translation: "The Letter Qaf", verses: 45, revelation: "Meccan" },
    { number: 51, name: "Adh-Dhariyat", translation: "The Scatterers", verses: 60, revelation: "Meccan" },
    { number: 52, name: "At-Tur", translation: "The Mount", verses: 49, revelation: "Meccan" },
    { number: 53, name: "An-Najm", translation: "The Star", verses: 62, revelation: "Meccan" },
    { number: 54, name: "Al-Qamar", translation: "The Moon", verses: 55, revelation: "Meccan" },
    { number: 55, name: "Ar-Rahman", translation: "The Compassionate", verses: 78, revelation: "Medinan" },
    { number: 56, name: "Al-Waqi'ah", translation: "The Inevitable Event", verses: 96, revelation: "Meccan" },
    { number: 57, name: "Al-Hadid", translation: "The Iron", verses: 29, revelation: "Medinan" },
    { number: 58, name: "Al-Mujadilah", translation: "The Disputer", verses: 22, revelation: "Medinan" },
    { number: 59, name: "Al-Hashr", translation: "The Exile", verses: 24, revelation: "Medinan" },
    { number: 60, name: "Al-Mumtahanah", translation: "The Woman to be Examined", verses: 13, revelation: "Medinan" },
    { number: 61, name: "As-Saff", translation: "The Battle Array", verses: 14, revelation: "Medinan" },
    { number: 62, name: "Al-Jumu'ah", translation: "The Congregation", verses: 11, revelation: "Medinan" },
    { number: 63, name: "Al-Munafiqun", translation: "The Hypocrites", verses: 11, revelation: "Medinan" },
    { number: 64, name: "At-Taghabun", translation: "The Mutual Deception", verses: 18, revelation: "Medinan" },
    { number: 65, name: "At-Talaq", translation: "The Divorce", verses: 12, revelation: "Medinan" },
    { number: 66, name: "At-Tahrim", translation: "The Prohibition", verses: 12, revelation: "Medinan" },
    { number: 67, name: "Al-Mulk", translation: "The Sovereignty", verses: 30, revelation: "Meccan" },
    { number: 68, name: "Al-Qalam", translation: "The Pen", verses: 52, revelation: "Meccan" },
    { number: 69, name: "Al-Haqqah", translation: "The Inevitable Reality", verses: 52, revelation: "Meccan" },
    { number: 70, name: "Al-Ma'arij", translation: "The Ascending Stairways", verses: 44, revelation: "Meccan" },
    { number: 71, name: "Nuh", translation: "Noah", verses: 28, revelation: "Meccan" },
    { number: 72, name: "Al-Jinn", translation: "The Jinn", verses: 28, revelation: "Meccan" },
    { number: 73, name: "Al-Muzzammil", translation: "The One Wrapped Up", verses: 20, revelation: "Meccan" },
    { number: 74, name: "Al-Muddaththir", translation: "The One Cloaked", verses: 56, revelation: "Meccan" },
    { number: 75, name: "Al-Qiyamah", translation: "The Resurrection", verses: 40, revelation: "Meccan" },
    { number: 76, name: "Al-Insan", translation: "The Man", verses: 31, revelation: "Medinan" },
    { number: 77, name: "Al-Mursalat", translation: "Those Sent Forth", verses: 50, revelation: "Meccan" },
    { number: 78, name: "An-Naba'", translation: "The News", verses: 40, revelation: "Meccan" },
    { number: 79, name: "An-Nazi'at", translation: "Those Who Drag Forth", verses: 46, revelation: "Meccan" },
    { number: 80, name: "Abasa", translation: "He Frowned", verses: 42, revelation: "Meccan" },
    { number: 81, name: "At-Takwir", translation: "The Overthrowing", verses: 29, revelation: "Meccan" },
    { number: 82, name: "Al-Infitar", translation: "The Cleaving", verses: 19, revelation: "Meccan" },
    { number: 83, name: "Al-Mutaffifin", translation: "The Dealers in Fraud", verses: 36, revelation: "Meccan" },
    { number: 84, name: "Al-Inshiqaq", translation: "The Splitting", verses: 25, revelation: "Meccan" },
    { number: 85, name: "Al-Buruj", translation: "The Constellations", verses: 22, revelation: "Meccan" },
    { number: 86, name: "At-Tariq", translation: "The Night-Comer", verses: 17, revelation: "Meccan" },
    { number: 87, name: "Al-A'la", translation: "The Most High", verses: 19, revelation: "Meccan" },
    { number: 88, name: "Al-Ghashiyah", translation: "The Overwhelming", verses: 26, revelation: "Meccan" },
    { number: 89, name: "Al-Fajr", translation: "The Daybreak", verses: 30, revelation: "Meccan" },
    { number: 90, name: "Al-Balad", translation: "The City", verses: 20, revelation: "Meccan" },
    { number: 91, name: "Ash-Shams", translation: "The Sun", verses: 15, revelation: "Meccan" },
    { number: 92, name: "Al-Layl", translation: "The Night", verses: 21, revelation: "Meccan" },
    { number: 93, name: "Ad-Duha", translation: "The Forenoon", verses: 11, revelation: "Meccan" },
    { number: 94, name: "Ash-Sharh", translation: "The Expansion", verses: 8, revelation: "Meccan" },
    { number: 95, name: "At-Tin", translation: "The Fig", verses: 8, revelation: "Meccan" },
    { number: 96, name: "Al-'Alaq", translation: "The Clinging Form", verses: 19, revelation: "Meccan" },
    { number: 97, name: "Al-Qadr", translation: "The Power", verses: 5, revelation: "Meccan" },
    { number: 98, name: "Al-Bayinah", translation: "The Clear Proof", verses: 8, revelation: "Medinan" },
    { number: 99, name: "Az-Zilzal", translation: "The Earthquake", verses: 8, revelation: "Medinan" },
    { number: 100, name: "Al-'Adiyat", translation: "The Courser", verses: 11, revelation: "Meccan" },
    { number: 101, name: "Al-Qari'ah", translation: "The Calamity", verses: 11, revelation: "Meccan" },
    { number: 102, name: "At-Takathur", translation: "The Rivalry", verses: 8, revelation: "Meccan" },
    { number: 103, name: "Al-'Asr", translation: "The Declining Day", verses: 3, revelation: "Meccan" },
    { number: 104, name: "Al-Humazah", translation: "The Traducer", verses: 9, revelation: "Meccan" },
    { number: 105, name: "Al-Fil", translation: "The Elephant", verses: 5, revelation: "Meccan" },
    { number: 106, name: "Quraysh", translation: "Quraysh", verses: 4, revelation: "Meccan" },
    { number: 107, name: "Al-Ma'un", translation: "The Small Kindnesses", verses: 7, revelation: "Meccan" },
    { number: 108, name: "Al-Kawthar", translation: "The Abundance", verses: 3, revelation: "Meccan" },
    { number: 109, name: "Al-Kafirun", translation: "The Disbelievers", verses: 6, revelation: "Meccan" },
    { number: 110, name: "An-Nasr", translation: "The Divine Support", verses: 3, revelation: "Medinan" },
    { number: 111, name: "Al-Masad", translation: "The Palm Fiber", verses: 5, revelation: "Meccan" },
    { number: 112, name: "Al-Ikhlas", translation: "The Sincerity", verses: 4, revelation: "Meccan" },
    { number: 113, name: "Al-Falaq", translation: "The Daybreak", verses: 5, revelation: "Meccan" },
    { number: 114, name: "An-Nas", translation: "Mankind", verses: 6, revelation: "Meccan" },
  ]

  // ==================== PLAYLIST ====================
  let playlist = [
    {
      title: "Surah Ar-Rahman - Mishary Alafasy",
      artist: "Qur'an Recitation • 15:42",
      src: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/055.mp3",
      thumb: "https://i.ibb.co/4NP1JxV/surah-arrahman.jpg",
      index: 0,
      category: "quran",
    },
    {
      title: "Surah Yasin - Qari Abdul Basit",
      artist: "Qur'an Recitation • 12:10",
      src: "https://download.quranicaudio.com/quran/abdul_basit_murattal/036.mp3",
      thumb: "https://i.ibb.co/tJgMSY5/surah-yasin.jpg",
      index: 1,
      category: "quran",
    },
    {
      title: "Surah Al-Baqarah (selected) - Saad Al-Ghamdi",
      artist: "Qur'an Recitation • 1:02:12",
      src: "https://download.quranicaudio.com/quran/saad_al_ghamidi/002.mp3",
      thumb: "https://i.ibb.co/Bs38m6M/tafsir-albaqarah.jpg",
      index: 2,
      category: "quran",
    },
    {
      title: "Surah Al-Mulk - Mishary Alafasy",
      artist: "Qur'an Recitation • 10:30",
      src: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/067.mp3",
      thumb: "https://i.ibb.co/4NP1JxV/surah-arrahman.jpg",
      index: 3,
      category: "quran",
    },
  ]

  // ==================== DOM ELEMENTS ====================
  const halalAudio = document.getElementById("halalAudio")
  const playPauseBtn = document.getElementById("playPause")
  const nextBtn = document.getElementById("nextTrack")
  const prevBtn = document.getElementById("prevTrack")
  const audioSeek = document.getElementById("audioSeek")
  const audioVolume = document.getElementById("audioVolume")
  const playerTitle = document.getElementById("playerTitle")
  const playerArtist = document.getElementById("playerArtist")
  const playerThumb = document.getElementById("playerThumbnail")
  const currentTimeEl = document.getElementById("currentTime")
  const totalTimeEl = document.getElementById("totalTime")
  const miniPlayer = document.getElementById("miniPlayer")
  const miniPlay = document.getElementById("miniPlay")
  const miniPrev = document.getElementById("miniPrev")
  const miniNext = document.getElementById("miniNext")
  const miniThumb = document.getElementById("miniThumb")
  const miniTitle = document.getElementById("miniTitle")
  const toggleMini = document.getElementById("toggleMini")

  // ==================== STATE ====================
  let currentIndex = Number.parseInt(localStorage.getItem("halalIndex")) || 0
  let isPlaying = localStorage.getItem("halalPlaying") === "true"
  const savedTime = Number.parseFloat(localStorage.getItem("halalTime")) || 0
  const savedVolume = Number.parseFloat(localStorage.getItem("halalVolume")) || 1

  // ==================== HIGHLIGHT ACTIVE TRACK ====================
  function highlightActiveTrack() {
    document.querySelectorAll("#quranList .track").forEach((trackEl) => {
      const idx = Number.parseInt(trackEl.getAttribute("data-index"))
      if (idx === currentIndex) {
        trackEl.classList.add("active-track")
        trackEl.scrollIntoView({ behavior: "smooth", block: "center" })
      } else {
        trackEl.classList.remove("active-track")
      }
    })
  }

  // ==================== POPULATE QURAN LIST ====================
  function populateQuranList() {
    const quranList = document.getElementById("quranList")
    if (!quranList) return
    quranList.innerHTML = ""

    const savedPlaylist = localStorage.getItem("halalPlaylist")
    if (savedPlaylist) {
      playlist = JSON.parse(savedPlaylist).filter((t) => t.category === "quran")
    }

    quranSurahs.forEach((surah, i) => {
      const padded = String(surah.number).padStart(3, "0")
      let track = playlist.find((t) => t.title.includes(` ${surah.name} `) || t.title.includes(`-${surah.name}`))

      if (!track) {
        track = {
          title: `Surah ${surah.name} - Mishary Alafasy`,
          artist: `Qur'an Recitation • ${surah.verses} verses`,
          src: `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${padded}.mp3`,
          thumb: "https://i.ibb.co/CPskm0N/quran-icon.png",
          index: playlist.length,
          category: "quran",
        }
        playlist.push(track)
      }

      const trackEl = document.createElement("div")
      trackEl.className = "track"
      trackEl.setAttribute("data-index", track.index)
      trackEl.innerHTML = `
        <img class="track-thumb" src="${track.thumb}" alt="${surah.name}">
        <div class="track-meta">
          <p class="track-title">${surah.number}. ${surah.name} - ${surah.translation}</p>
          <p class="track-sub">${track.artist}</p>
        </div>
        <div class="track-actions">
          <button class="btn btn-success play-track"><i class="fas fa-play"></i></button>
        </div>
      `
      quranList.appendChild(trackEl)
    })

    localStorage.setItem("halalPlaylist", JSON.stringify(playlist))
    attachTrackListeners()
    highlightActiveTrack()
  }

  function attachTrackListeners() {
    document.querySelectorAll(".play-track").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation()
        const trackEl = e.target.closest(".track")
        const idx = Number.parseInt(trackEl.getAttribute("data-index"))
        loadTrack(idx, true)
      })
    })

    document.querySelectorAll(".track").forEach((card) => {
      card.addEventListener("click", () => {
        const idx = Number.parseInt(card.getAttribute("data-index"))
        loadTrack(idx, true)
      })
    })
  }

  // ==================== LOAD TRACK ====================
  function loadTrack(index, autoplay = false) {
    if (index < 0 || index >= playlist.length) index = 0
    currentIndex = index
    const t = playlist[index]

    halalAudio.src = t.src
    playerThumb.src = t.thumb
    miniThumb.src = t.thumb
    playerTitle.textContent = t.title
    playerArtist.textContent = t.artist
    miniTitle.textContent = t.title

    localStorage.setItem("halalIndex", currentIndex)
    halalAudio.volume = savedVolume
    audioVolume.value = savedVolume

    // Always show players
    document.getElementById("halalPlayer").style.transform = "translateY(0)"
    miniPlayer.style.display = "block"

    highlightActiveTrack()

    if (autoplay) attemptPlay()
  }

  // ==================== PLAY/PAUSE ====================
  function attemptPlay() {
    return halalAudio.play().then(() => {
      isPlaying = true
      updatePlayButtons()
    }).catch((err) => {
      isPlaying = false
      updatePlayButtons()
      console.error("Play failed:", err)
    })
  }

  function togglePlay() {
    if (halalAudio.paused) attemptPlay()
    else {
      halalAudio.pause()
      isPlaying = false
      updatePlayButtons()
    }
    saveState()
  }

  function updatePlayButtons() {
    const icon = isPlaying ? "fa-pause" : "fa-play"
    playPauseBtn.innerHTML = `<i class="fas ${icon}"></i>`
    miniPlay.innerHTML = `<i class="fas ${icon}"></i>`
    miniPlayer.style.display = "block" // Always visible when track exists
  }

  // ==================== NEXT / PREV ====================
  function nextTrackFunc() {
    currentIndex = (currentIndex + 1) % playlist.length
    loadTrack(currentIndex, true)
    saveState()
  }

  function prevTrackFunc() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length
    loadTrack(currentIndex, true)
    saveState()
  }

  // ==================== SAVE STATE ====================
  function saveState() {
    localStorage.setItem("halalIndex", currentIndex)
    localStorage.setItem("halalPlaying", isPlaying)
    localStorage.setItem("halalTime", halalAudio.currentTime || 0)
    localStorage.setItem("halalVolume", halalAudio.volume || 1)
    localStorage.setItem("halalPlaylist", JSON.stringify(playlist))
  }

  // ==================== AUDIO EVENTS ====================
  halalAudio.addEventListener("timeupdate", () => {
    if (!halalAudio.duration) return
    const progress = (halalAudio.currentTime / halalAudio.duration) * 100
    audioSeek.value = progress
    currentTimeEl.textContent = formatTime(halalAudio.currentTime)
    totalTimeEl.textContent = formatTime(halalAudio.duration)
    localStorage.setItem("halalTime", halalAudio.currentTime)
  })

  halalAudio.addEventListener("loadedmetadata", () => {
    totalTimeEl.textContent = formatTime(halalAudio.duration)
  })

  halalAudio.addEventListener("ended", nextTrackFunc)

  audioSeek.addEventListener("input", () => {
    if (halalAudio.duration) {
      halalAudio.currentTime = (audioSeek.value / 100) * halalAudio.duration
    }
  })

  audioVolume.addEventListener("input", () => {
    halalAudio.volume = audioVolume.value
    localStorage.setItem("halalVolume", halalAudio.volume)
  })

  function formatTime(sec) {
    if (!sec || isNaN(sec)) return "0:00"
    const m = Math.floor(sec / 60)
    const s = Math.floor(sec % 60)
    return `${m}:${s < 10 ? "0" + s : s}`
  }

  // ==================== CONTROLS ====================
  playPauseBtn?.addEventListener("click", togglePlay)
  nextBtn?.addEventListener("click", nextTrackFunc)
  prevBtn?.addEventListener("click", prevTrackFunc)
  miniPlay?.addEventListener("click", togglePlay)
  miniPrev?.addEventListener("click", prevTrackFunc)
  miniNext?.addEventListener("click", nextTrackFunc)

  // Mini Player Toggle
  toggleMini?.addEventListener("click", () => {
    document.getElementById("halalPlayer").style.transform = "translateY(110%)"
    miniPlayer.style.display = "block"
  })

  miniPlayer?.addEventListener("click", (e) => {
    if (e.target.closest("button")) return
    document.getElementById("halalPlayer").style.transform = "translateY(0)"
  })

  // ==================== DRAGGABLE MINI PLAYER ====================
  let isDragging = false, currentX, currentY, initialX, initialY, xOffset = 0, yOffset = 0

  function setTranslate(x, y, el) {
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  function constrainPosition(x, y, el) {
    const rect = el.getBoundingClientRect()
    const maxX = window.innerWidth - rect.width
    const maxY = window.innerHeight - rect.height
    return { x: Math.max(0, Math.min(x, maxX)), y: Math.max(0, Math.min(y, maxY)) }
  }

  miniPlayer?.addEventListener("mousedown", (e) => {
    if (e.target.closest("button") || e.target.tagName === "IMG") return
    initialX = e.clientX - xOffset
    initialY = e.clientY - yOffset
    isDragging = true
  })

  miniPlayer?.addEventListener("mousemove", (e) => {
    if (isDragging) {
      e.preventDefault()
      currentX = e.clientX - initialX
      currentY = e.clientY - initialY
      const pos = constrainPosition(currentX, currentY, miniPlayer)
      xOffset = pos.x
      yOffset = pos.y
      setTranslate(xOffset, yOffset, miniPlayer)
    }
  })

  ;["mouseup", "mouseleave"].forEach(evt => {
    miniPlayer?.addEventListener(evt, () => {
      if (isDragging) {
        isDragging = false
        localStorage.setItem("miniPlayerX", xOffset)
        localStorage.setItem("miniPlayerY", yOffset)
      }
    })
  })

  // Touch support
  miniPlayer?.addEventListener("touchstart", (e) => {
    if (e.target.closest("button") || e.target.tagName === "IMG") return
    const touch = e.touches[0]
    initialX = touch.clientX - xOffset
    initialY = touch.clientY - yOffset
    isDragging = true
  })

  miniPlayer?.addEventListener("touchmove", (e) => {
    if (isDragging) {
      e.preventDefault()
      const touch = e.touches[0]
      currentX = touch.clientX - initialX
      currentY = touch.clientY - initialY
      const pos = constrainPosition(currentX, currentY, miniPlayer)
      xOffset = pos.x
      yOffset = pos.y
      setTranslate(xOffset, yOffset, miniPlayer)
    }
  })

  miniPlayer?.addEventListener("touchend", () => {
    if (isDragging) {
      isDragging = false
      localStorage.setItem("miniPlayerX", xOffset)
      localStorage.setItem("miniPlayerY", yOffset)
    }
  })

  // ==================== SHUFFLE & SEARCH ====================
  document.getElementById("quranShuffle")?.addEventListener("click", () => {
    const randomIdx = Math.floor(Math.random() * playlist.length)
    loadTrack(randomIdx, true)
  })

  const searchInput = document.getElementById("searchInput")
  const searchBtn = document.getElementById("searchBtn")
  searchBtn?.addEventListener("click", () => {
    const q = searchInput.value.trim().toLowerCase()
    document.querySelectorAll("#quranList .track").forEach((t) => {
      const text = t.textContent.toLowerCase()
      t.style.display = q && !text.includes(q) ? "none" : ""
    })
  })

  // ==================== INIT ====================
  window.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("quranList")) {
      populateQuranList()
    }

    const savedPlaylist = localStorage.getItem("halalPlaylist")
    if (savedPlaylist) {
      playlist = JSON.parse(savedPlaylist)
    }

    const savedIndex = Number.parseInt(localStorage.getItem("halalIndex"))
    if (!isNaN(savedIndex) && savedIndex < playlist.length) {
      loadTrack(savedIndex, false)
      if (savedTime > 0) halalAudio.currentTime = savedTime
      if (localStorage.getItem("halalPlaying") === "true") attemptPlay()
    } else {
      loadTrack(0, false)
    }

    // Restore volume
    const v = Number.parseFloat(localStorage.getItem("halalVolume"))
    if (!isNaN(v)) {
      halalAudio.volume = v
      audioVolume.value = v
    }

    // Restore mini player position
    const sx = localStorage.getItem("miniPlayerX")
    const sy = localStorage.getItem("miniPlayerY")
    if (sx && sy) {
      xOffset = parseFloat(sx)
      yOffset = parseFloat(sy)
      setTranslate(xOffset, yOffset, miniPlayer)
    }

    updatePlayButtons()
    setTimeout(highlightActiveTrack, 600)
  })

  window.addEventListener("beforeunload", saveState)

  // Global API
  window.globalHalalPlayer = {
    playTrack: (obj) => {
      if (!obj || !obj.src || obj.category !== "quran") return
      playlist.push(obj)
      loadTrack(playlist.length - 1, true)
      saveState()
    },
    playIndex: (i) => typeof i === "number" && loadTrack(i, true),
    togglePlay,
    next: nextTrackFunc,
    prev: prevTrackFunc,
  }
})()