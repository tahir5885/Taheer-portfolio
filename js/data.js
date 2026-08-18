/* ==========================================================================
   TAHEER JAHAN PORTFOLIO — CORE DATA STORE
   ========================================================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: "Taheer Jahan",
    handle: "@taheer_jahan",
    tagline: "Light. Story. Emotion.",
    bio: "I am Taheer Jahan — a photographer, filmmaker, and visual artist based between India and the UAE. Having explored 4+ countries and numerous cities, I capture moments from candid emotion to crafted cinematic stories, handling everything from direction and camera operation to color grading and Photoshop retouching.",
    location: "India & UAE (Worldwide Available)",
    experience: "5+ Years",
    projectsCount: "50+",
    countriesCount: "4",
    socials: {
      instagram: "https://www.instagram.com/taheer_jahan/",
      linkedin: "https://www.linkedin.com/in/tahir-mohammad/",
      youtube: "https://www.youtube.com/@Tahirtion",
      email: "thr5885@email.com",
      whatsapp: "+971586212277"
    }
  },

  hero: {
    title: "Capturing Light, Space & Emotion.",
    subtitle: "Fine art architectural photography, cinematic vertical reels, and advanced digital retouching across Dubai, India, Malaysia, Saudi Arabia & Singapore.",
    bgImage: "images/main/81.jpg"
  },

  photos: [
    { id: 1, src: "images/main/1.jpg", cat: "landscape", title: "Golden Hour Over Dubai", loc: "Dubai, UAE", camera: "Sony A7IV • 35mm • 1/1000s • ISO 100" },
    { id: 2, src: "images/main/2.jpeg", cat: "landscape", title: "Stillness of the Waters", loc: "Jharkhand, India", camera: "Sony A7IV • 24mm • 1/500s • ISO 100" },
    { id: 3, src: "images/main/3.jpg", cat: "landscape", title: "Neon Wheel at Dusk", loc: "Dubai, UAE", camera: "Sony A7IV • 50mm • 1/250s • ISO 200" },
    { id: 4, src: "images/main/4.jpg", cat: "architecture", title: "Echoes of the Mughal Era", loc: "Delhi, India", camera: "Sony A7IV • 16mm • 1/800s • ISO 100" },
    { id: 5, src: "images/main/5.jpg", cat: "nature", title: "Floating Flock", loc: "India", camera: "Sony A7IV • 85mm • 1/2000s • ISO 100" },
    { id: 6, src: "images/main/6.jpg", cat: "landscape", title: "The Road Less Traveled", loc: "Jharkhand, India", camera: "Sony A7IV • 35mm • 1/640s • ISO 100" },
    { id: 7, src: "images/main/7.jpg", cat: "landscape", title: "City of Lions Skyline", loc: "Singapore", camera: "Sony A7IV • 24mm • 1/400s • ISO 100" },
    { id: 8, src: "images/main/8.jpg", cat: "landscape", title: "Marina Sunset Glow", loc: "Singapore", camera: "Sony A7IV • 35mm • 1/1000s • ISO 100" },
    { id: 9, src: "images/main/9.jpg", cat: "nature", title: "Lanterns of the Wild", loc: "Jharkhand, India", camera: "Sony A7IV • 50mm • 1/125s • ISO 400" },
    { id: 10, src: "images/main/10.jpg", cat: "street", title: "Morning Solitude", loc: "Jharkhand, India", camera: "Sony A7IV • 35mm • 1/500s • ISO 100" },
    { id: 11, src: "images/main/11.jpg", cat: "architecture", title: "The Forgotten Fountain", loc: "India", camera: "Sony A7IV • 24mm • 1/320s • ISO 100" },
    { id: 12, src: "images/main/12.jpg", cat: "architecture", title: "Into the Void", loc: "Singapore", camera: "Sony A7IV • 16mm • 1/1000s • ISO 100" },
    { id: 13, src: "images/main/13.jpg", cat: "architecture", title: "Sentinel at Dusk", loc: "India", camera: "Sony A7IV • 50mm • 1/400s • ISO 200" },
    { id: 14, src: "images/main/14.jpg", cat: "landscape", title: "The Evening Walk", loc: "India", camera: "Sony A7IV • 35mm • 1/800s • ISO 100" },
    { id: 15, src: "images/main/15.jpg", cat: "nature", title: "Perched", loc: "India", camera: "Sony A7IV • 200mm • 1/1600s • ISO 200" },
    { id: 16, src: "images/main/16.JPG", cat: "landscape", title: "The Lone Tree", loc: "Jharkhand, India", camera: "Sony A7IV • 35mm • 1/500s • ISO 100" },
    { id: 17, src: "images/main/17.jpg", cat: "street", title: "Shores of Solitude", loc: "Puri, India", camera: "Sony A7IV • 50mm • 1/1000s • ISO 100" },
    { id: 18, src: "images/main/18.jpg", cat: "landscape", title: "Purple Wings at Dusk", loc: "India", camera: "Sony A7IV • 35mm • 1/640s • ISO 100" },
    { id: 19, src: "images/main/19.jpg", cat: "nature", title: "Cathedral of Trees", loc: "Jharkhand, India", camera: "Sony A7IV • 24mm • 1/250s • ISO 100" },
    { id: 20, src: "images/main/20.jpg", cat: "nature", title: "Born of Fire", loc: "Jharkhand, India", camera: "Sony A7IV • 50mm • 1/400s • ISO 100" },
    { id: 21, src: "images/main/21.jpg", cat: "nature", title: "Forest Pillars", loc: "Jharkhand, India", camera: "Sony A7IV • 35mm • 1/500s • ISO 100" },
    { id: 22, src: "images/main/22.jpg", cat: "nature", title: "Dancing Flames", loc: "Jharkhand, India", camera: "Sony A7IV • 85mm • 1/1000s • ISO 100" },
    { id: 23, src: "images/main/23.jpg", cat: "landscape", title: "Golden Path", loc: "Jharkhand, India", camera: "Sony A7IV • 35mm • 1/640s • ISO 100" },
    { id: 24, src: "images/main/24.jpg", cat: "nature", title: "The Gentle Giant", loc: "Jharkhand, India", camera: "Sony A7IV • 135mm • 1/1250s • ISO 200" },
    { id: 25, src: "images/main/25.jpg", cat: "landscape", title: "Forest Mirror", loc: "Jharkhand, India", camera: "Sony A7IV • 24mm • 1/320s • ISO 100" },
    { id: 26, src: "images/main/26.jpg", cat: "nature", title: "Feeding Time", loc: "Jharkhand, India", camera: "Sony A7IV • 70mm • 1/1000s • ISO 100" },
    { id: 27, src: "images/main/27.jpg", cat: "architecture", title: "The Solitary Figure", loc: "Delhi, India", camera: "Sony A7IV • 35mm • 1/500s • ISO 100" },
    { id: 28, src: "images/main/28.jpg", cat: "architecture", title: "Reaching for the Sky", loc: "Madinah, Saudi Arabia", camera: "Sony A7IV • 16mm • 1/1600s • ISO 100" },
    { id: 29, src: "images/main/29.jpg", cat: "architecture", title: "Ain Dubai Up Close", loc: "Dubai, UAE", camera: "Sony A7IV • 70mm • 1/1000s • ISO 100" },
    { id: 30, src: "images/main/30.jpg", cat: "architecture", title: "Sentinels at Sunset", loc: "Madinah, Saudi Arabia", camera: "Sony A7IV • 35mm • 1/800s • ISO 100" },
    { id: 38, src: "images/main/38.jpg", cat: "architecture", title: "Twin Towers Reflection", loc: "Kuala Lumpur, Malaysia", camera: "Sony A7IV • 16mm • 1/400s • ISO 100" },
    { id: 39, src: "images/main/39.jpg", cat: "portrait", title: "Above the City", loc: "Kuala Lumpur, Malaysia", camera: "Sony A7IV • 85mm f/1.4 • 1/2000s • ISO 100" },
    { id: 41, src: "images/main/41.jpg", cat: "architecture", title: "Petronas Spire in Blue", loc: "Kuala Lumpur, Malaysia", camera: "Sony A7IV • 24mm • 1/500s • ISO 100" },
    { id: 43, src: "images/main/43.jpg", cat: "architecture", title: "Lord Murugan's Steps", loc: "Kuala Lumpur, Malaysia", camera: "Sony A7IV • 16mm • 1/1250s • ISO 100" },
    { id: 48, src: "images/main/48.jpg", cat: "street", title: "Gulls Over Dubai Creek", loc: "Dubai, UAE", camera: "Sony A7IV • 50mm • 1/1600s • ISO 100" },
    { id: 64, src: "images/main/64.jpg", cat: "landscape", title: "Twilight Over Dal Lake", loc: "Srinagar, Kashmir", camera: "Sony A7IV • 35mm • 1/400s • ISO 100" },
    { id: 65, src: "images/main/65.jpg", cat: "landscape", title: "Mountain Road to Pahalgam", loc: "Anantnag, Kashmir", camera: "Sony A7IV • 24mm • 1/800s • ISO 100" },
    { id: 69, src: "images/main/69.jpg", cat: "landscape", title: "Shikaras on Dal Lake", loc: "Srinagar, Kashmir", camera: "Sony A7IV • 50mm • 1/1000s • ISO 100" },
    { id: 73, src: "images/main/73.jpg", cat: "architecture", title: "Grand Mosque Minarets", loc: "Abu Dhabi, UAE", camera: "Sony A7IV • 16mm • 1/2000s • ISO 100" },
    { id: 79, src: "images/main/79.jpg", cat: "architecture", title: "Iconic White Domes", loc: "Abu Dhabi, UAE", camera: "Sony A7IV • 24mm • 1/1600s • ISO 100" },
    { id: 81, src: "images/main/81.jpg", cat: "architecture", title: "Sunset at Grand Mosque", loc: "Abu Dhabi, UAE", camera: "Sony A7IV • 16mm • 1/1000s • ISO 100" }
  ],

  portraits: [
    { id: 101, src: "images/main/101.jpg", title: "The Contemplative Mind", loc: "Studio Session" },
    { id: 102, src: "images/main/102.jpg", title: "Urban Gaze", loc: "Kuala Lumpur" },
    { id: 103, src: "images/main/103.jpg", title: "Light & shadow", loc: "Delhi" },
    { id: 104, src: "images/main/104.jpg", title: "Soulful Expressions", loc: "Jharkhand" },
    { id: 105, src: "images/main/105.jpg", title: "Golden Glow", loc: "Dubai" },
    { id: 106, src: "images/main/106.jpg", title: "The Artisan", loc: "Kashmir" },
    { id: 107, src: "images/main/107.jpg", title: "Serenity", loc: "Abu Dhabi" },
    { id: 108, src: "images/main/108.jpg", title: "Youth", loc: "India" },
    { id: 113, src: "images/main/113.jpg", title: "Monochrome Emotion", loc: "Studio" },
    { id: 115, src: "images/main/115.jpg", title: "Visual Artist Portrait", loc: "India" }
  ],

  videos: [
    { id: 1, src: "videos/1.mp4", title: "56 Photos of My Photography", desc: "A fast-paced visual reel documenting 56 of my flagship frames across 4 countries.", duration: "0:45", category: "Showcase Reel", gear: "Sony A7IV • 4K", aspect: "9:16", thumb: "images/main/1.jpg" },
    { id: 2, src: "videos/2.mp4", title: "Dubai Rain Reel", desc: "Capturing rare raindrops reflecting neon lights across Downtown Dubai skyline.", duration: "0:30", category: "Cinematic Reel", gear: "Sony A7IV • DaVinci Resolve", aspect: "9:16", thumb: "images/main/3.jpg" },
    { id: 3, src: "videos/3.mp4", title: "Visual Storytelling Instagram Reel", desc: "Editorial storytelling cuts highlighting light, motion, and street culture.", duration: "0:25", category: "Instagram Reel", gear: "Sony A7IV", aspect: "9:16", thumb: "images/main/10.jpg" },
    { id: 4, src: "videos/4.mp4", title: "October Dubai Cinematic Journey", desc: "Exploring Dubai Creek, Marina skyline, and golden desert hour in motion.", duration: "0:40", category: "Travel Film", gear: "Sony A7IV • Gimbal", aspect: "9:16", thumb: "images/main/29.jpg" },
    { id: 5, src: "videos/5.mp4", title: "Photoshop & Editing Process Reel", desc: "Behind-the-scenes breakdown of photo retouching, compositing, and color nodes.", duration: "0:35", category: "Photoshop Process", gear: "Adobe Photoshop • Premiere Pro", aspect: "9:16", thumb: "images/main/38.jpg" },
    { id: 6, src: "videos/6.mp4", title: "Saudi Arabia Travel Reel", desc: "Documenting the sacred architecture of Madinah and ancient desert landscapes.", duration: "0:50", category: "Documentary Film", gear: "Sony A7IV • 4K 60fps", aspect: "9:16", thumb: "images/main/28.jpg" },
    { id: 7, src: "videos/7.mp4", title: "Subtitle & Editing Mastery", desc: "High-impact subtitle typography, beat sync, and commercial video editing showcase.", duration: "0:30", category: "Post-Production", gear: "Adobe Premiere Pro", aspect: "9:16", thumb: "images/main/7.jpg" },
    { id: 8, src: "videos/Lovely professional university videos/Embracing the bliss of rain is a surreal experience at our #BeautifulLPUCampus!Rain binds our he.mp4", title: "Rain at LPU Campus", desc: "Surreal campus monsoon coverage — rain, emotions, and community bonding at LPU.", duration: "1:00", category: "Campus Reel", gear: "Sony A7III", aspect: "9:16", thumb: "images/main/19.jpg" },
    { id: 9, src: "videos/Lovely professional university videos/Let's embrace the misty mornings, glaring sunrays, and a lifetime of memories at the #BeautifulL.mp4", title: "Misty Mornings at LPU", desc: "Capturing the ethereal early morning light and golden campus life at LPU.", duration: "1:00", category: "Campus Reel", gear: "Sony A7III", aspect: "9:16", thumb: "images/main/25.jpg" },
    { id: 10, src: "videos/Lovely professional university videos/Our #HappyVertos are back to embrace their love for the #BeautifulLPUCampus, recharged and ready.mp4", title: "Happy Vertos Back at LPU", desc: "Student energy and campus spirit as the new semester begins at LPU.", duration: "1:00", category: "Campus Reel", gear: "Sony A7III", aspect: "9:16", thumb: "images/main/23.jpg" },
    { id: 11, src: "videos/Lovely professional university videos/Our brightest minds came together and innovated to solve real-world challenges with their skills.mp4", title: "LPU Hackathon Innovation", desc: "Students innovating together at LPU's annual technology hackathon event.", duration: "1:00", category: "Event Reel", gear: "Sony A7III", aspect: "9:16", thumb: "images/main/13.jpg" },
    { id: 12, src: "videos/Lovely professional university videos/Ready for some delightful culinary action Tune in to watch our Alumnus (currently working at the.mp4", title: "LPU Alumni Culinary Story", desc: "A proud alumnus shares their journey from campus to a professional kitchen.", duration: "1:00", category: "Documentary Reel", gear: "Sony A7III", aspect: "9:16", thumb: "images/main/17.jpg" },
    { id: 13, src: "videos/Lovely professional university videos/This #IndependenceDay, our #LPUFamily strives to bring continuous pride to our #IncredibleIndia .mp4", title: "Independence Day at LPU", desc: "Patriotic spirit and community pride captured on Independence Day at LPU campus.", duration: "1:00", category: "Event Reel", gear: "Sony A7III", aspect: "9:16", thumb: "images/main/4.jpg" },
    { id: 14, src: "videos/Lovely professional university videos/While days at our #BeautufulLPUCampus may be busy and happening, #NightsAtLPU are as amazing, fu.mp4", title: "Nights at LPU Campus", desc: "The magic of LPU after dark — lights, celebrations, and late-night campus life.", duration: "1:00", category: "Campus Reel", gear: "Sony A7III", aspect: "9:16", thumb: "images/main/8.jpg" }
  ],

  photoshopItems: [
    {
      id: 1,
      tag: "Sky Replacement & Golden Hour",
      title: "Grand Mosque — Sky Replacement & Golden Hour Composite",
      type: "Landscape & Sky Composite",
      beforeSrc: "images/ps_before.jpg",
      afterSrc: "images/ps_after.jpg",
      beforeLabel: "RAW Capture",
      afterLabel: "Photoshop Final",
      tools: ["Adobe Photoshop 2026", "Sky Replacement", "Luminosity Masking", "Color Nodes"],
      desc: "Transformed flat, overcast daylight into a dramatic golden-hour sky with warm specular reflections, atmospheric haze removal, and architectural edge blending."
    },
    {
      id: 2,
      tag: "Real Estate HDR Exposure Blend",
      title: "Luxury Interior — Window Pull & HDR Exposure Blend",
      type: "Commercial Interior Retouching",
      beforeSrc: "images/ps2_before.jpg",
      afterSrc: "images/ps2_after.jpg",
      beforeLabel: "Overexposed RAW",
      afterLabel: "Balanced HDR Blend",
      tools: ["Photoshop Exposure Blend", "Window Pull Masking", "Curves & Levels", "Color Cast Removal"],
      desc: "Recovered completely blown-out window view showing crisp blue sky and skyline, balanced ambient room fill lighting, and lifted warm hardwood floor textures."
    },
    {
      id: 3,
      tag: "Night Neon & Reflection Mastery",
      title: "Metropolitan Night — Neon Glow & Wet Reflection Composite",
      type: "Night Cityscape Composite",
      beforeSrc: "images/ps3_before.jpg",
      afterSrc: "images/ps3_after.jpg",
      beforeLabel: "Flat Night Sensor",
      afterLabel: "Cinematic Neon Grade",
      tools: ["Frequency Separation", "Glow Diffusion", "Perspective Nodes", "Anamorphic Flares"],
      desc: "Added vibrant glowing cyan & magenta neon signs, vivid ground water puddle reflections, anamorphic light streaks, and deep cinematic teal-and-orange contrast."
    },
    {
      id: 4,
      tag: "Heritage Architecture & Color Science",
      title: "Fine Art Architecture — Dynamic Range & Color Grading",
      type: "Fine Art Architectural Retouch",
      beforeSrc: "images/ps4_before.jpg",
      afterSrc: "images/ps4_after.jpg",
      beforeLabel: "Flat Raw Sensor",
      afterLabel: "Color Graded Master",
      tools: ["Camera RAW Calibration", "Tone Curve Separation", "Luminance Contrast", "Selective Color"],
      desc: "Calibrated flat camera sensor capture into high-impact gallery grade with rich marble textures, dramatic sky depth, and precision highlight roll-off."
    }
  ],

  travelCountries: [
    {
      id: "malaysia",
      flag: "🇲🇾",
      name: "Malaysia",
      tagline: "Rainforests, twin towers & rich heritage",
      cover: "images/malaysia/1.jpg",
      count: 16,
      desc: "Explored Kuala Lumpur skyline, Petronas Twin Towers, Batu Caves rainbow steps, and historic colonial streets."
    },
    {
      id: "uae",
      flag: "🇦🇪",
      name: "United Arab Emirates",
      tagline: "Desert gold, city glass & mosque marble",
      cover: "images/uae/1.jpg",
      count: 31,
      desc: "Documenting the grandeur of Sheikh Zayed Grand Mosque in Abu Dhabi and the modern cityscape of Dubai."
    },
    {
      id: "saudi",
      flag: "🇸🇦",
      name: "Saudi Arabia",
      tagline: "Ancient lands, modern vision & holy light",
      cover: "images/saudi/1.jpg",
      count: 23,
      desc: "Capturing Madinah Al-Masjid an-Nabawi minarets, sunset arches, and desert heritage."
    },
    {
      id: "singapore",
      flag: "🇸🇬",
      name: "Singapore",
      tagline: "Neon gardens, skyline nights & street soul",
      cover: "images/singapore/1.png",
      count: 10,
      desc: "Atmospheric cityscape and modern architectural geometry around Marina Bay."
    }
  ],

  realEstatePhotos: [
    { src: "videos/real state/property 1/08c0fdd5c3f74ecba0423ca2dc8db451-.webp", title: "Discovery Gardens — Living Room Staging", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/0ad37951a29b4743b8511ad499b686dc-.webp", title: "Discovery Gardens — Dining & Lounge", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/13419bb2cb974340942d911d11ce1bf4-.webp", title: "Discovery Gardens — Bedroom Suite", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/16e093aa45ec49c18e23242efe4fb627-.webp", title: "Discovery Gardens — Master Bedroom", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/21d3b705d91c4fc8b17999a4dfa2ed40-.webp", title: "Discovery Gardens — Modern Interior", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/40587a30a17646669da4edde481e3faa-.webp", title: "Discovery Gardens — Living Space", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/445f16ef429f4a87b9ed9f76e306106e-.webp", title: "Discovery Gardens — Kitchen Design", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/4c4bac0f6a3e4678b633d59d118150ea-.webp", title: "Discovery Gardens — Interior Symmetry", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/511223fbd17b42328ce802767342a3da-.webp", title: "Discovery Gardens — Ambient Living Area", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/59f79e468b8e4454a004e4798b0fcc67-.webp", title: "Discovery Gardens — Balcony View Lounge", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/63ed951849f44883995ae85393986f65-.webp", title: "Discovery Gardens — Contemporary Decor", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/7077e8c5421d4a2098ed10990b62622e-.webp", title: "Discovery Gardens — Hallway & Accents", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/7f261237efb5455191b50c717abbca4a-.webp", title: "Discovery Gardens — Premium Finishes", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/8eb8ba492e1b466f8f897aefbb860e49-.webp", title: "Discovery Gardens — Guest Suite", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/a8d98793045b4e5fb8a1b58fde6622a4-.webp", title: "Discovery Gardens — Luxury Suite", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/b552461dd0384d82baa473223365a529-.webp", title: "Discovery Gardens — Architectural Lines", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/bd07f04517a34d56804cce7fefe52b4d-.webp", title: "Discovery Gardens — Open Concept Layout", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/d6beeb53ac1447c7b7e9ea5b3dbeb24a-.webp", title: "Discovery Gardens — Designer Lounge", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/d6ff5114ad214fa68bdd895580c00a50-.webp", title: "Discovery Gardens — Light & Shadows", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/d772440a98454b7b8c7865b5fff7a7c5-.webp", title: "Discovery Gardens — Studio Layout", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/d950c52b631f41b78f89ecbe46729f45-.webp", title: "Discovery Gardens — Dining Area", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/e6d0262a68bf47ec805d0f94c5f45783-.webp", title: "Discovery Gardens — Master Suite", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/ecdf8009a76a4974b214761d23263ac9-.webp", title: "Discovery Gardens — Architectural Staging", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 1/fa8987e54a4648ddbde3bc37b9f75620-.webp", title: "Discovery Gardens — Contemporary Residence", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/0b87d41b214c4ea781f911602688d066-.webp", title: "Discovery Gardens — Luxury Residence 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/0be97c148bf6432e89498f7b86fb3144-.webp", title: "Discovery Gardens — Modern Living 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/1022266476294653b45dd4d1e12be1de-.webp", title: "Discovery Gardens — Premium Bedroom 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/42831cfaccf542909a90163badf2c269-.webp", title: "Discovery Gardens — Interior Decor 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/520659e014364b1192c768628b9896b5-.webp", title: "Discovery Gardens — Lounge Area 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/6935a959590b497eaa10fd0febeab831-.webp", title: "Discovery Gardens — Kitchen Finishes 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/70362450c7074d3eadbb38803c562ba6-.webp", title: "Discovery Gardens — Dining Concept 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/76b71c361dde42af90026620411273ff-.webp", title: "Discovery Gardens — Wall Art & Design 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/7ff2ed9aa30d4c79989888a7c53db85c-.webp", title: "Discovery Gardens — Ambient Suite 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/b25e736e4cee46ccb3041ab0572daf36-.webp", title: "Discovery Gardens — Bedroom Staging 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/bf32e62f868449bd8646a85f21cd49e6-.webp", title: "Discovery Gardens — Modern Interior 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/c0434502c7f54a148fd184fdc9d30d57-.webp", title: "Discovery Gardens — Spatial Design 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/ced66351148749c1a86dd80340db4624-.webp", title: "Discovery Gardens — Hallway Design 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/e338dad7bb6c4089bd34da8f926c91ed-.webp", title: "Discovery Gardens — Master Suite 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/e87e0b63da7744eeb47e4602913ad7e2-.webp", title: "Discovery Gardens — Daylight Interior 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/fa911d3ccb264905a7a06e5fbc850f63-.webp", title: "Discovery Gardens — Luxury Decor 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" },
    { src: "videos/real state/property 2/fb204e7edc47466fa503e425f140a4bd-.webp", title: "Discovery Gardens — Architecture Staging 2", cat: "Dubai Discovery Gardens", loc: "Discovery Gardens, Dubai" }
  ],

  realEstateVideos: [
    {
      id: 1,
      src: "videos/real state/real state video/beverly project discovery garden.mp4",
      title: "Beverly Project — Discovery Gardens",
      desc: "Commercial architectural cinematography and walkthrough of Beverly Project residences in Discovery Gardens, Dubai.",
      location: "Discovery Gardens, Dubai",
      region: "Dubai, UAE",
      category: "Dubai Real Estate",
      duration: "1:00",
      aspect: "16:9",
      gear: "Sony A7IV • DJI Ronin RS3 • 4K"
    },
    {
      id: 2,
      src: "videos/real state/real state video/move in discover garden.mp4",
      title: "Move-In Ready — Discovery Gardens",
      desc: "Cinematic interior showcase of modern, ready-to-move residential living spaces in Discovery Gardens, Dubai.",
      location: "Discovery Gardens, Dubai",
      region: "Dubai, UAE",
      category: "Dubai Real Estate",
      duration: "1:00",
      aspect: "16:9",
      gear: "Sony A7IV • Wide Angle 16-35mm"
    },
    {
      id: 3,
      src: "videos/real state/indian real state videos/airbnb kolkata.mp4",
      title: "Luxury Urban Airbnb — Kolkata",
      desc: "Hospitality & premium rental interior tour highlighting boutique design and modern aesthetics in Kolkata.",
      location: "Kolkata, India",
      region: "India",
      category: "Indian Real Estate Reel",
      duration: "1:00",
      aspect: "9:16",
      gear: "Sony A7IV • Gimbal • Natural Light"
    },
    {
      id: 4,
      src: "videos/real state/indian real state videos/akash skyline.mp4",
      title: "Akash Skyline Residential Towers",
      desc: "High-rise architectural tour and modern residential living space cinematography at Akash Skyline.",
      location: "India",
      region: "India",
      category: "Indian Real Estate",
      duration: "1:00",
      aspect: "16:9",
      gear: "Sony A7IV • 4K 60fps • Color Graded"
    },
    {
      id: 5,
      src: "videos/real state/indian real state videos/ashiana amaya.mp4",
      title: "Ashiana Amaya Community Living",
      desc: "Premium housing project walkthrough highlighting landscaped gardens, architecture, and interior flow.",
      location: "India",
      region: "India",
      category: "Indian Real Estate Reel",
      duration: "1:00",
      aspect: "9:16",
      gear: "Sony A7IV • Ultra-Wide Lens"
    },
    {
      id: 6,
      src: "videos/real state/indian real state videos/ashiana shaher.mp4",
      title: "Ashiana Shaher Premium Residences",
      desc: "Expansive luxury property tour capturing architectural proportions, daylighting, and tranquil living spaces.",
      location: "India",
      region: "India",
      category: "Indian Real Estate",
      duration: "1:00",
      aspect: "16:9",
      gear: "Sony A7IV • Ronin Stabilizer"
    },
    {
      id: 7,
      src: "videos/real state/indian real state videos/jaiswal home tour.mp4",
      title: "Jaiswal Residence Interior Walkthrough",
      desc: "Custom bespoke residence interior cinematography emphasizing handcrafted woodwork, lighting, and finishes.",
      location: "India",
      region: "India",
      category: "Indian Real Estate",
      duration: "1:00",
      aspect: "16:9",
      gear: "Sony A7IV • 24-70mm GM • 4K"
    },
    {
      id: 8,
      src: "videos/real state/indian real state videos/pace layout interior.mp4",
      title: "Pace Layout Spatial Architecture",
      desc: "Modern interior spatial layout walkthrough focusing on structural elegance and ambient lighting design.",
      location: "India",
      region: "India",
      category: "Indian Real Estate Reel",
      duration: "1:00",
      aspect: "9:16",
      gear: "Sony A7IV • DaVinci Resolve Studio"
    }
  ],

  collegeVideos: []

};
