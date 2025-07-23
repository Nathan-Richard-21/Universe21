import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "About Us",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "experience",
    title: "The Game",
  },
  {
    id: "ancestors",
    title: "Ancestors",
  },
  {
    id: "technology",
    title: "Technology",
  },
  {
    id: "screenshots",
    title: "Screenshots",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Game Features
export const gameFeatures = [
  {
    title: "Post-Apocalyptic World",
    description: "Explore a visually stunning, immersive world where civilization has fallen and nature reclaims what was once human territory.",
    icon: "models/sci-fi_panels.glb",
    modelScale: [0.03,0.04, 0.05],
    modelPosition: [0, 0, -0.5],
    modelRotation: [0, 0, 0]
  },
  {
    title: "Advanced Weapons System",
    description: "Unleash devastating firepower with a diverse arsenal of customizable weapons, from classic firearms to futuristic energy weapons.",
    icon: "models/sci-fi_concept_gun.glb",
    modelScale: [2.0, 3.0, 3.0],
    modelPosition: [1, -0.8, 1],
    modelRotation: [0, Math.PI / 4, 0]
  },
  {
    title: "Dynamic Combat",
    description: "Experience fluid, responsive combat with realistic physics and enemy AI that adapts to your playstyle.",
    icon: "models/stylized_sci-fi_helmet.glb",
    modelScale: [300, 300, 250],
    modelPosition: [0, 0, 0],
    modelRotation: [0, 0, 0]
  },
  {
    title: "Captivating Storyline",
    description: "Immerse yourself in a rich narrative with branching storylines where your choices determine the outcome of your journey.",
    icon: "models/scifi_drone.glb",
    modelScale: [25.0, 25.0, 25.0],
    modelPosition: [0, -0.5, 0],
    modelRotation: [0, 0, 0]
  },
];

// Game Screenshots
export const gameScreenshots = [
  {
    title: "Dark Corridor",
    description: "Navigate through eerie, abandoned corridors where danger lurks around every corner.",
    image: "/Images/Screenshot 2025-01-03 235850.png",
  },
  {
    title: "Wasteland Exploration",
    description: "Venture into the vast, desolate landscapes that once thrived with life.",
    image: "/Images/Screenshot 2025-06-18 132526.png",
  },
  {
    title: "Combat Sequence",
    description: "Engage in intense firefights against formidable enemies testing your skills and reflexes.",
    image: "/Images/Screenshot 2025-06-18 132614.png",
  },
  {
    title: "Hidden Sanctuary",
    description: "Discover safe havens amidst the chaos, where you can rest, upgrade, and prepare for the challenges ahead.",
    image: "/Images/Screenshot 2025-06-18 133342.png",
  },
  {
    title: "Boss Encounter",
    description: "Face off against massive, terrifying creatures that guard the secrets of the world.",
    image: "/Images/Screenshot 2025-06-18 133838.png",
  },
];

const experiences = [
  {
    title: "A Journey into the Unknown",
    company_name: "Survive. Discover. Overcome.",
    date: "RELEASING OCTOBER 21, 2025",
    details: [
      "In <span style='color: white;'>The Search</span>, players are thrust into a world ravaged by <span style='color: white;'>chaos and decay</span>, where survival demands more than brute force—it requires wit, exploration, and the mastery of powerful magical abilities. Step into the shoes of a lone seeker navigating the ruins of humanity, battling adversaries, and uncovering <span style='color: white;'>ancient secrets</span> that could change the fate of what remains.",
    ],
  },
  {
    title: "Weapons and Magic: The Perfect Blend",
    company_name: "Gunpowder Meets Spellcraft.",
    date: "INNOVATIVE COMBAT SYSTEM",
    details: [
      "The post-apocalyptic world of <span style='color: white;'>The Search</span> is as beautiful as it is deadly. From sprawling desolate landscapes to eerie urban ruins, every location tells a story. Traverse this hauntingly detailed environment, where every corner holds new challenges, hidden treasures, and <span style='color: white;'>untold dangers</span> that will test your combat skills and magical abilities.",
    ],
  },
  {
    title: "The Mystery Behind the Apocalypse",
    company_name: "What Happened to Humanity?",
    date: "UNCOVER THE TRUTH",
    details: [
      "As you progress in <span style='color: white;'>The Search</span>, uncover the chilling truth about the world's downfall. Engage in a deeply immersive narrative that blends science fiction and fantasy, unraveling the events that led to the apocalypse. The <span style='color: white;'>choices you make</span> will determine the fate of your character—and the future of this shattered world.",
    ],
  },
  {
    title: "Dynamic Gameplay for Every Player",
    company_name: "Play Your Way.",
    date: "ENDLESS POSSIBILITIES",
    details: [
      "<span style='color: white;'>The Search</span> adapts to your style, whether you're a stealthy strategist or a guns-blazing warrior. With a dynamic combat system, customizable abilities, and a plethora of weapons and magic at your disposal, no two playthroughs will ever be the same. <span style='color: white;'>Craft your own legend</span> in this broken world.",
    ],
  },
];

const portfolio = [
  {
    name: "Universe 21: Gaming Beyond Boundaries",
    description:
      "At Universe 21, we specialize in creating games that push the boundaries of storytelling, gameplay, and technology. We are passionate about delivering high-quality, innovative games that resonate with players worldwide. Our team of veteran developers brings decades of combined experience from AAA studios to create unforgettable gaming experiences.",
    image: oscs,
  },
  {
    name: "The Search: Our Magnum Opus",
    description:
      "The Search represents everything we stand for as a studio - innovation, immersion, and incredible gameplay. Five years in development, this game combines cutting-edge technology with masterful storytelling to create an experience that will stay with you long after you put down the controller.",
    image: devnotes,
  },
  {
    name: "Our Vision",
    description:
      "To be a leader in the gaming industry, crafting experiences that stand the test of time. We believe that games can be more than entertainment—they can be art, they can tell stories that matter, and they can bring people together in meaningful ways. With The Search, we're taking our first major step toward realizing that vision.",
    image: algorithms,
  },
];

// Store links
export const storeLinks = [
  {
    name: "Steam",
    url: "https://store.steampowered.com/app/3291770/The_Search/",
    icon: "steam"
  },
  {
    name: "Epic Games Store",
    url: "https://store.epicgames.com/en-US/p/the-search-18e65a",
    icon: "epic"
  }
];

export { experiences, portfolio };

