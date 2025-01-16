import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "About us",
  },
  {
    id: "experience",
    title: "About game",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "A Journey into the Unknown",
    company_name: "Survive. Discover. Overcome.",
    date: " search",
    details: [
      "The Search, players are thrust into a world ravaged by <span style='color: white;'>chaos and decay</span>, where survival demands more than brute force—it requires wit, exploration, and the mastery of powerful magical abilities. Step into the shoes of a lone seeker navigating the ruins of humanity, battling adversaries, and uncovering  <span style='color: white;'>ancient secrets.</span> ",
     
    ],
  },
  {
    title: "Weapons and Magic: The Perfect Blend",
    company_name: "Gunpowder Meets Spellcraft.",
    date: " search",
    details: [
      "The post-apocalyptic world of The Search is as beautiful as it is deadly. From sprawling desolate landscapes to eerie urban ruins, every location tells a story. Traverse this hauntingly detailed environment, where every corner holds new challenges, hidden treasures, and untold dangers.",
    ],
  },
  {
    title: "The Mystery Behind the Apocalypse",
    company_name: "What Happened to Humanity?",
    date: "search",
    details: [
      "As you progress in The Search, uncover the chilling truth about the world’s downfall. Engage in a deeply immersive narrative that blends science fiction and fantasy, unraveling the events that led to the apocalypse. The choices you make will determine the fate of your character—and the future of this shattered world.",
    ],
  },
  {
    title: "Dynamic Gameplay for Every Player",
    company_name: "Play Your Way.",
    date: "search",
    details: [
      "The Search adapts to your style, whether you’re a stealthy strategist or a guns-blazing warrior. With a dynamic combat system, customizable abilities, and a plethora of weapons and magic at your disposal, no two playthroughs will ever be the same.",
    ],
  },
];

const portfolio = [
  {
    name: "Universe 21: Gaming Beyond Boundaries",
    description:
      "At Universe 21, we specialize in creating games that push the boundaries of storytelling, gameplay, and technology. We are passionate about delivering high-quality, innovative games that resonate with players worldwide. We aim to redefine the gaming landscape one project at a time.",
    image: oscs,
  },
  {
    name: "Our Mission",
    description:
      "To create games that captivate, challenge, and inspire.",
    image: devnotes,
  },
  {
    name: "Our Vision",
    description:
      "To be a leader in the gaming and VR industry, crafting experiences that stand the test of time.",
    image: algorithms,
  },
];

export { experiences, portfolio };

