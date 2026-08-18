var MAIN_PHOTOS = [
  { src: "images/main/1.jpg",  cat: "landscape",     title: "Golden Hour Over Dubai",      loc: "Dubai, UAE"         },
{ src: "images/main/2.jpeg", cat: "landscape",     title: "Stillness",                   loc: "Jharkhand, India"   },
{ src: "images/main/3.jpg",  cat: "landscape",     title: "Neon Wheel",                  loc: "Dubai, UAE"         },
{ src: "images/main/4.jpg",  cat: "architecture",  title: "Echoes of the Mughal Era",    loc: "Delhi, India"       },
{ src: "images/main/5.jpg",  cat: "nature",        title: "Floating Flock",              loc: "India"              },
{ src: "images/main/6.jpg",  cat: "landscape",     title: "The Road Less Traveled",      loc: "Jharkhand, India"   },
{ src: "images/main/7.jpg",  cat: "landscape",     title: "City of Lions",               loc: "Singapore"          },
{ src: "images/main/8.jpg",  cat: "landscape",     title: "City of Lions",               loc: "Singapore"          },
{ src: "images/main/9.jpg",  cat: "nature",        title: "Lanterns of the Wild",        loc: "Jharkhand, India"   },
{ src: "images/main/10.jpg", cat: "street",        title: "Morning Solitude",            loc: "Jharkhand, India"   },
{ src: "images/main/11.jpg", cat: "architecture",  title: "The Forgotten Fountain",      loc: "India"              },
{ src: "images/main/12.jpg", cat: "architecture",  title: "Into the Void",               loc: "Singapore"          },
{ src: "images/main/13.jpg", cat: "architecture",  title: "Sentinel",                    loc: "India"              },
{ src: "images/main/14.jpg", cat: "landscape",     title: "The Evening Walk",            loc: "India"              },
{ src: "images/main/15.jpg", cat: "nature",        title: "Perched",                     loc: "India"              },
{ src: "images/main/16.jpg", cat: "landscape",    title: "The Lone Tree",              loc: "Jharkhand, India"  },
{ src: "images/main/17.jpg", cat: "street",       title: "Shores of Solitude",         loc: "Puri, India"       },
{ src: "images/main/18.jpg", cat: "landscape",    title: "Purple Wings at Dusk",       loc: "India"             },
{ src: "images/main/19.jpg", cat: "nature",       title: "Cathedral of Trees",         loc: "Jharkhand, India"  },
{ src: "images/main/20.jpg", cat: "nature",       title: "Born of Fire",               loc: "Jharkhand, India"  },
{ src: "images/main/21.jpg", cat: "nature",       title: "Forest Pillars",             loc: "Jharkhand, India"  },
{ src: "images/main/22.jpg", cat: "nature",       title: "Dancing Flames",             loc: "Jharkhand, India"  },
{ src: "images/main/23.jpg", cat: "landscape",    title: "Golden Path",                loc: "Jharkhand, India"  },
{ src: "images/main/24.jpg", cat: "nature",       title: "The Gentle Giant",           loc: "Jharkhand, India"  },
{ src: "images/main/25.jpg", cat: "landscape",    title: "Forest Mirror",              loc: "Jharkhand, India"  },
{ src: "images/main/26.jpg", cat: "nature",       title: "Feeding Time",               loc: "Jharkhand, India"  },
{ src: "images/main/27.jpg", cat: "architecture", title: "The Solitary Figure",        loc: "Delhi, India"      },
{ src: "images/main/28.jpg", cat: "architecture", title: "Reaching for the Sky",       loc: "Madinah, Saudi Arabia" },
{ src: "images/main/29.jpg", cat: "architecture", title: "Ain Dubai Up Close",         loc: "Dubai, UAE"        },
{ src: "images/main/30.jpg", cat: "architecture", title: "Sentinels at Sunset",        loc: "Madinah, Saudi Arabia" },
{ src: "images/main/31.jpg", cat: "architecture", title: "Floors of Life",             loc: "India"             },
{ src: "images/main/32.jpg", cat: "street",       title: "Sunset by the Minaret",       loc: "Madinah, Saudi Arabia" },
{ src: "images/main/33.jpg", cat: "landscape",    title: "Walkers in the Mist",         loc: "Jharkhand, India"      },
{ src: "images/main/34.jpg", cat: "architecture", title: "Light & Shadow",              loc: "India"                 },
{ src: "images/main/35.jpg", cat: "architecture", title: "Columns of Light",            loc: "India"                 },
{ src: "images/main/36.jpg", cat: "landscape",    title: "Blazing Horizon",             loc: "Jharkhand, India"      },
{ src: "images/main/37.jpg", cat: "nature",       title: "Lotus at Sunset",             loc: "Jharkhand, India"      },
{ src: "images/main/38.jpg", cat: "architecture", title: "Twin Towers Reflection",      loc: "Kuala Lumpur, Malaysia"},
{ src: "images/main/39.jpg", cat: "portrait",     title: "Above the City",              loc: "Kuala Lumpur, Malaysia"},
{ src: "images/main/40.jpg", cat: "architecture", title: "KL from Above",               loc: "Kuala Lumpur, Malaysia"},
{ src: "images/main/41.jpg", cat: "architecture", title: "Petronas Spire",              loc: "Kuala Lumpur, Malaysia"},
{ src: "images/main/42.jpg", cat: "architecture", title: "Twin Spire",                  loc: "Kuala Lumpur, Malaysia"},
{ src: "images/main/43.jpg", cat: "architecture", title: "Lord Murugan's Steps",        loc: "Kuala Lumpur, Malaysia"},
{ src: "images/main/44.jpg", cat: "landscape",    title: "Eye of the Cave",             loc: "Kuala Lumpur, Malaysia"},
{ src: "images/main/45.jpg", cat: "landscape",    title: "Lakeside Serenity",           loc: "Singapore"             },
{ src: "images/main/46.jpg", cat: "landscape",    title: "Minaret at Dusk",             loc: "Jharkhand, India"      },
{ src: "images/main/47.jpg", cat: "street",       title: "Dubai Creek at Dusk",         loc: "Dubai, UAE"            },
{ src: "images/main/48.jpg", cat: "street",       title: "Gulls Over the Creek",        loc: "Dubai, UAE"        },
{ src: "images/main/49.jpg", cat: "landscape",    title: "Dhow at Dusk",                loc: "Dubai, UAE"        },
{ src: "images/main/50.jpg", cat: "nature",       title: "Garden Cascade",              loc: "India"             },
{ src: "images/main/51.jpg", cat: "landscape",    title: "Golden Dhow at Night",        loc: "Dubai, UAE"        },
{ src: "images/main/52.jpg", cat: "architecture", title: "Arched in Gold",              loc: "Dubai, UAE"        },
{ src: "images/main/53.jpg", cat: "architecture", title: "Arabian Nights Facade",       loc: "Dubai, UAE"        },
{ src: "images/main/54.jpg", cat: "street",       title: "Creek Palace Glow",           loc: "Dubai, UAE"        },
{ src: "images/main/55.jpg", cat: "architecture", title: "Creek Palace Panorama",       loc: "Dubai, UAE"        },
{ src: "images/main/56.jpg", cat: "architecture", title: "Spiral Staircase",            loc: "Dubai, UAE"        },
{ src: "images/main/57.jpg", cat: "nature",       title: "The Thinker",                 loc: "India"             },
{ src: "images/main/58.jpg", cat: "architecture", title: "Celestial Dome",              loc: "Dubai, UAE"        },
{ src: "images/main/59.jpg", cat: "architecture", title: "Dubai Fountain Show I",       loc: "Dubai, UAE"        },
{ src: "images/main/60.jpg", cat: "architecture", title: "Dubai Fountain Show II",      loc: "Dubai, UAE"        },
{ src: "images/main/61.jpg", cat: "architecture", title: "The Dubai Fountain Show", loc: "Downtown Dubai, UAE" },
{ src: "images/main/62.jpg", cat: "architecture", title: "Emaar Towers and Fountains", loc: "Downtown Dubai, UAE" },
{ src: "images/main/63.jpg", cat: "landscape", title: "Footprints on the Shore", loc: "Beachside" },
{ src: "images/main/64.jpg", cat: "landscape", title: "Twilight Over the Lake", loc: "Srinagar, Kashmir" },
{ src: "images/main/65.jpg", cat: "landscape", title: "Mountain Road to Pahalgam", loc: "Anantnag, Kashmir" },
{ src: "images/main/66.jpg", cat: "street", title: "Traditional Mud Houses", loc: "Rural Kashmir" },
{ src: "images/main/67.jpg", cat: "nature", title: "Ripening Apple Orchard", loc: "Shopian, Kashmir" },
{ src: "images/main/68.jpg", cat: "landscape", title: "The Meadows of Gulmarg", loc: "Gulmarg, Kashmir" },
{ src: "images/main/69.jpg", cat: "landscape", title: "Shikaras on Dal Lake", loc: "Srinagar, Kashmir" },
{ src: "images/main/70.jpg", cat: "landscape", title: "Sunset at Dal Lake", loc: "Srinagar, Kashmir" },
{ src: "images/main/71.jpg", cat: "nature", title: "Floral Marble Inlay", loc: "Sheikh Zayed Grand Mosque, Abu Dhabi" },
{ src: "images/main/72.jpg", cat: "nature", title: "Courtyard Mosaic Detail", loc: "Sheikh Zayed Grand Mosque, Abu Dhabi" },
{ src: "images/main/73.jpg", cat: "architecture", title: "Grand Mosque Minarets", loc: "Sheikh Zayed Grand Mosque, Abu Dhabi" },
{ src: "images/main/74.jpg", cat: "architecture", title: "The Main Prayer Hall", loc: "Sheikh Zayed Grand Mosque, Abu Dhabi" },
{ src: "images/main/75.jpg", cat: "street", title: "City Skyline View", loc: "Abu Dhabi, UAE" },
{ src: "images/main/76.jpg", cat: "nature", title: "Garden Pathways", loc: "Abu Dhabi, UAE" },
{ src: "images/main/77.jpg", cat: "landscape", title: "Reflective Pools", loc: "Sheikh Zayed Grand Mosque, Abu Dhabi" },
{ src: "images/main/78.jpg", cat: "architecture", title: "Arches and Columns", loc: "Sheikh Zayed Grand Mosque, Abu Dhabi" },
{ src: "images/main/79.jpg", cat: "architecture", title: "Iconic White Domes", loc: "Sheikh Zayed Grand Mosque, Abu Dhabi" },
{ src: "images/main/80.jpg", cat: "architecture", title: "Ornate Chandelier Detail", loc: "Sheikh Zayed Grand Mosque, Abu Dhabi" },
{ src: "images/main/81.jpg", cat: "architecture", title: "Sunset at Sheikh Zayed Grand Mosque", loc: "Abu Dhabi, UAE" },
{ src: "images/main/82.jpg", cat: "landscape", title: "Clouds over Dal Lake", loc: "Srinagar, Kashmir" },
{ src: "images/main/83.jpg", cat: "architecture", title: "Nakhoda Masjid Courtyard", loc: "Kolkata, India" },
{ src: "images/main/84.jpg", cat: "architecture", title: "Reflective Pools and Columns", loc: "Abu Dhabi, UAE" },
{ src: "images/main/85.jpg", cat: "architecture", title: "Grand Mosque Floral Courtyard", loc: "Abu Dhabi, UAE" },


];  

var HERO = {
  bg:     "images/main/1.jpg",
  thumb1: "images/main/3.jpg",
  thumb2: "images/main/5.jpg",
  thumb3: "images/main/7.jpg",
  thumb4: "images/main/10.jpg",
};

var PORTRAITS = [
  { src: "images/main/101.jpg", title: "Portrait 1" },
  { src: "images/main/102.jpg", title: "Portrait 2" },
  { src: "images/main/103.jpg", title: "Portrait 3" },
  { src: "images/main/104.jpg", title: "Portrait 4" },
  { src: "images/main/105.jpg", title: "Portrait 5" },
  { src: "images/main/106.jpg", title: "Portrait 6" },
  { src: "images/main/107.jpg", title: "Portrait 7" },
  { src: "images/main/108.jpg", title: "Portrait 8" },
  { src: "images/main/109.jpg", title: "Portrait 9" },
  { src: "images/main/110.jpg", title: "Portrait 9" },
  { src: "images/main/111.jpg", title: "Portrait 9" }, 
  { src: "images/main/112.jpg", title: "Portrait 9" }, 
  { src: "images/main/113.jpg", title: "Portrait 9" }, 
  { src: "images/main/114.jpg", title: "Portrait 9" }, 
  { src: "images/main/115.jpg", title: "Portrait 9" }, 




 
 
];

var VIDEOS = [
  /* ── HOW TO ADD VIDEOS ──────────────────────────────────
     LOCAL FILE (from your videos/ folder):
       src: "videos/my-video.mp4"
       Supported formats: .mp4  .mov  .webm

     YOUTUBE VIDEO:
       Go to youtube.com/watch?v=ABCD1234
       src: "https://www.youtube.com/embed/ABCD1234"

     The player automatically respects the video's original
     orientation — horizontal stays horizontal, vertical
     (phone recordings) stays vertical. No cropping.
  ────────────────────────────────────────────────────── */

  /* ── Video 1 — YouTube example (already working) ── */
  {
    src:   "videos/1.mp4",
    title: "56 photos of my photography",
    desc:  "A visual journey through my best shots"
  },
  {
    src:   "videos/2.mp4",
    title: "dubai rain reel",
    desc:  "A visual journey through my best shots"
  },
  {
    src:   "videos/3.mp4",
    title: "Instagram Reel",
    desc:  "A visual journey through my best shots"
  },
  {
    src:   "videos/4.mp4",
    title: "October dubai Reel",
    desc:  "A visual journey through my best shots"
  },
  {
    src:   "videos/4.mp4",
    title: "photography reel",
    desc:  "A visual journey through my best shots"
  },
  {
    src:   "videos/5.mp4",
    title: "Photoshop reel",
    desc:  "A visual journey through my best shots"
  },
  {
    src:   "videos/6.mp4",
    title: "saudi trip reel",
    desc:  "A visual journey through my best shots"
  },
  {
    src:   "videos/7.mp4",
    title: "Subtitle editing",
    desc:  "A visual journey through my best shots"
  },




  /* ── Video 2 — Local file example ──────────────────
  {
    src:   "videos/1.mp4",
    title: "Your Video Title",
    desc:  "Short description"
  },
  ────────────────────────────────────────────────────── */

  /* ── Video 3 — Add more videos below ───────────────
  {
    src:   "videos/2.mp4",
    title: "Video Title",
    desc:  "Description"
  },
  ────────────────────────────────────────────────────── */
];

var CONTACT = {
  instagram: "https://www.instagram.com/taheer_jahan/",
  handle:    "@taheer_jahan",
  email:     "thr5885@email.com",
  phone:     "+971 586212277",
  whatsapp:  "971586212277",      /* no + or spaces for wa.me link */
  Whatsapp:  "971586212277",      /* kept for backward compat */
  linkedin:  "https://www.linkedin.com/in/tahir-mohammad/",
  Linkedin:  "https://www.linkedin.com/in/tahir-mohammad/",
  youtube:   "https://www.youtube.com/@Tahirtion",
};
var MALAYSIA = {
  cover:  "images/malaysia/1.jpg",
  photos: [
    { src: "images/malaysia/1.jpg",  cat: "architecture", title: "Petronas Twin Towers at Night", loc: "Kuala Lumpur, Malaysia" },
    { src: "images/malaysia/2.jpg",  cat: "nature",       title: "Batu Caves Limestone Cliffs", loc: "Selangor, Malaysia" },
    { src: "images/malaysia/3.jpg",  cat: "street",       title: "Vibrant Rainbow Stairs", loc: "Batu Caves, Malaysia" },
    { src: "images/malaysia/4.jpg",  cat: "architecture", title: "Lord Murugan Statue", loc: "Batu Caves, Malaysia" },
    { src: "images/malaysia/5.jpg",  cat: "architecture", title: "Sultan Abdul Samad Building", loc: "Merdeka Square, KL" },
    { src: "images/malaysia/6.jpg",  cat: "architecture", title: "The National Palace (Istana Negara)", loc: "Kuala Lumpur, Malaysia" },
    { src: "images/malaysia/7.jpg",  cat: "architecture", title: "St. Mary's Cathedral", loc: "Kuala Lumpur, Malaysia" },
    { src: "images/malaysia/8.jpg",  cat: "architecture", title: "KL Tower (Menara Kuala Lumpur)", loc: "Kuala Lumpur, Malaysia" },
    { src: "images/malaysia/9.jpg",  cat: "architecture", title: "Petronas Towers Perspective", loc: "Kuala Lumpur, Malaysia" },
    { src: "images/malaysia/10.jpg", cat: "architecture", title: "The Royal Entrance Gates", loc: "Istana Negara, KL" },
    { src: "images/malaysia/11.jpg", cat: "architecture", title: "Sultan Abdul Samad Facade", loc: "Kuala Lumpur, Malaysia" },
    { src: "images/malaysia/12.jpg", cat: "architecture", title: "Merdeka Square Architecture", loc: "Kuala Lumpur, Malaysia" },
    { src: "images/malaysia/13.jpg", cat: "architecture", title: "Masjid Jamek Lookout", loc: "Kuala Lumpur, Malaysia" },
    { src: "images/malaysia/14.jpg", cat: "architecture", title: "River of Life Waterfront", loc: "Kuala Lumpur, Malaysia" },
    { src: "images/malaysia/15.jpg", cat: "architecture", title: "Petronas Twin Towers Perspective", loc: "Kuala Lumpur, Malaysia" },
    { src: "images/malaysia/16.jpg", cat: "architecture", title: "KLCC Park Skyline", loc: "Kuala Lumpur, Malaysia" },


  ]
};

var UAE = {
  cover:  "images/uae/1.jpg",
  photos: [
    { src: "images/uae/1.jpg",  cat: "architecture", title: "Photo 1", loc: "Dubai"     },
    { src: "images/uae/2.jpg",  cat: "architecture", title: "Photo 2", loc: "Abu Dhabi" },
    { src: "images/uae/3.jpg",  cat: "street",       title: "Photo 3", loc: "Dubai"     },
    { src: "images/uae/4.jpg",  cat: "landscape",    title: "Photo 4", loc: "Dubai"     },
    { src: "images/uae/5.jpg",  cat: "architecture", title: "Photo 5", loc: "Dubai"     },
    { src: "images/uae/6.jpg",  cat: "architecture", title: "Photo 6", loc: "Dubai"     },
    { src: "images/uae/7.jpg",  cat: "architecture", title: "Photo 7", loc: "Dubai"     },
    { src: "images/uae/8.jpg",  cat: "architecture", title: "Photo 8", loc: "Dubai"     },
    { src: "images/uae/9.jpg",  cat: "architecture", title: "Photo 9", loc: "Dubai"     },
    { src: "images/uae/10.jpg", cat: "architecture", title: "Photo 10", loc: "Dubai"     },
    { src: "images/uae/11.jpg", cat: "architecture", title: "Photo 11", loc: "Dubai"     },
    { src: "images/uae/12.jpg", cat: "architecture", title: "Photo 12", loc: "Dubai"     },
    { src: "images/uae/13.jpg", cat: "architecture", title: "Photo 13", loc: "Dubai"     },
    { src: "images/uae/14.jpg", cat: "architecture", title: "Photo 14", loc: "Dubai"     },
    { src: "images/uae/15.jpg", cat: "architecture", title: "Photo 15", loc: "Dubai"     },
    { src: "images/uae/16.jpg", cat: "architecture", title: "Photo 16", loc: "Dubai"     },
    { src: "images/uae/17.jpg", cat: "architecture", title: "Photo 17", loc: "Dubai"     },
    { src: "images/uae/18.jpg", cat: "architecture", title: "Photo 18", loc: "Dubai"     },
    { src: "images/uae/19.jpg", cat: "architecture", title: "Photo 19", loc: "Dubai"     },
    { src: "images/uae/20.jpg", cat: "architecture", title: "Photo 20", loc: "Dubai"     },
    { src: "images/uae/21.jpg", cat: "architecture", title: "Photo 21", loc: "Dubai"     },
    { src: "images/uae/22.jpg", cat: "architecture", title: "Photo 22", loc: "Dubai"     },
    { src: "images/uae/23.jpg", cat: "architecture", title: "Photo 23", loc: "Dubai"     },
    { src: "images/uae/24.jpg", cat: "architecture", title: "Photo 24", loc: "Dubai"     },
    { src: "images/uae/25.jpg", cat: "architecture", title: "Photo 25", loc: "Dubai"     },
    { src: "images/uae/26.jpg", cat: "architecture", title: "Photo 26", loc: "Dubai"     },
    { src: "images/uae/27.jpg", cat: "architecture", title: "Photo 27", loc: "Dubai"     },
    { src: "images/uae/28.jpg", cat: "architecture", title: "Photo 28", loc: "Dubai"     },
    { src: "images/uae/29.jpg", cat: "architecture", title: "Photo 29", loc: "Dubai"     },
    { src: "images/uae/30.jpg", cat: "architecture", title: "Photo 30", loc: "Dubai"     },
    { src: "images/uae/31.jpg", cat: "architecture", title: "Photo 31", loc: "Dubai"     },
  ]
};

var SAUDI = {
  cover:  "images/saudi/1.jpg",
  photos: [
    { src: "images/saudi/1.jpg",  cat: "architecture", title: "Photo 1", loc: "Saudi Arabia" },
    { src: "images/saudi/2.jpg",  cat: "landscape",    title: "Photo 2", loc: "Saudi Arabia" },
    { src: "images/saudi/3.jpg",  cat: "street",       title: "Photo 3", loc: "Saudi Arabia" },
    { src: "images/saudi/4.jpg",  cat: "architecture", title: "Photo 4", loc: "Saudi Arabia" },
    { src: "images/saudi/5.jpg",  cat: "architecture", title: "Photo 5", loc: "Saudi Arabia" },
    { src: "images/saudi/6.jpg",  cat: "architecture", title: "Photo 6", loc: "Saudi Arabia" },
    { src: "images/saudi/7.jpg",  cat: "architecture", title: "Photo 7", loc: "Saudi Arabia" },
    { src: "images/saudi/8.jpg",  cat: "architecture", title: "Photo 8", loc: "Saudi Arabia" },
    { src: "images/saudi/9.jpg",  cat: "architecture", title: "Photo 9", loc: "Saudi Arabia" },
    { src: "images/saudi/10.jpg", cat: "architecture", title: "Photo 10", loc: "Saudi Arabia" },
    { src: "images/saudi/11.jpg", cat: "architecture", title: "Photo 11", loc: "Saudi Arabia" },
    { src: "images/saudi/12.jpg", cat: "architecture", title: "Photo 12", loc: "Saudi Arabia" },
    { src: "images/saudi/13.jpg", cat: "architecture", title: "Photo 13", loc: "Saudi Arabia" },
    { src: "images/saudi/14.jpg", cat: "architecture", title: "Photo 14", loc: "Saudi Arabia" },
    { src: "images/saudi/15.jpg", cat: "architecture", title: "Photo 15", loc: "Saudi Arabia" },
    { src: "images/saudi/16.jpg", cat: "architecture", title: "Photo 16", loc: "Saudi Arabia" },
    { src: "images/saudi/17.jpg", cat: "architecture", title: "Photo 17", loc: "Saudi Arabia" },
    { src: "images/saudi/18.jpg", cat: "architecture", title: "Photo 18", loc: "Saudi Arabia" },
    { src: "images/saudi/19.jpg", cat: "architecture", title: "Photo 19", loc: "Saudi Arabia" },
    { src: "images/saudi/20.jpg", cat: "architecture", title: "Photo 20", loc: "Saudi Arabia" },
    { src: "images/saudi/21.jpg", cat: "architecture", title: "Photo 21", loc: "Saudi Arabia" },
    { src: "images/saudi/22.jpg", cat: "architecture", title: "Photo 22", loc: "Saudi Arabia" },
    { src: "images/saudi/23.jpg", cat: "architecture", title: "Photo 23", loc: "Saudi Arabia" },
    { src: "images/saudi/24.jpg", cat: "architecture", title: "Photo 24", loc: "Saudi Arabia" },
    { src: "images/saudi/25.jpg", cat: "architecture", title: "Photo 25", loc: "Saudi Arabia" },
    { src: "images/saudi/26.jpg", cat: "architecture", title: "Photo 26", loc: "Saudi Arabia" },
    { src: "images/saudi/27.jpg", cat: "architecture", title: "Photo 27", loc: "Saudi Arabia" },
    { src: "images/saudi/28.jpg", cat: "architecture", title: "Photo 28", loc: "Saudi Arabia" },
    { src: "images/saudi/29.jpg", cat: "architecture", title: "Photo 29", loc: "Saudi Arabia" },
    { src: "images/saudi/30.jpg", cat: "architecture", title: "Photo 30", loc: "Saudi Arabia" },
    { src: "images/saudi/31.jpg", cat: "architecture", title: "Photo 31", loc: "Saudi Arabia" },
  ]
};

var SINGAPORE = {
  cover:  "images/singapore/1.jpg",
  photos: [
    { src: "images/singapore/1.png",  cat: "cityscape", title: "Photo 1", loc: "Singapore" },
    { src: "images/singapore/2.png",  cat: "street",    title: "Photo 2", loc: "Singapore" },
    { src: "images/singapore/3.png",  cat: "nature",    title: "Photo 3", loc: "Singapore" },
    { src: "images/singapore/4.png",  cat: "architecture", title: "Photo 4", loc: "Singapore" },
    { src: "images/singapore/5.png",  cat: "architecture", title: "Photo 5", loc: "Singapore" },
    { src: "images/singapore/6.png",  cat: "architecture", title: "Photo 6", loc: "Singapore" },
    { src: "images/singapore/7.png",  cat: "architecture", title: "Photo 7", loc: "Singapore" },
    { src: "images/singapore/8.png",  cat: "architecture", title: "Photo 8", loc: "Singapore" },
    { src: "images/singapore/9.png",  cat: "architecture", title: "Photo 9", loc: "Singapore" },
    { src: "images/singapore/10.png", cat: "architecture", title: "Photo 10", loc: "Singapore" },
  ]
};
