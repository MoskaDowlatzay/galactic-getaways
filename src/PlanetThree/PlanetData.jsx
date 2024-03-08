import mercuryTexture from '../assets/planetimg/mercury.jpg';
import venusTexture from '../assets/planetimg/venus.jpg';
import earthTexture from '../assets/planetimg/earth.jpg';
import marsTexture from '../assets/planetimg/mars.jpg';
import jupiterTexture from '../assets/planetimg/jupiter.jpg';
import saturnTexture from '../assets/planetimg/saturn.jpg';
import saturnRingTexture from '../assets/planetimg/saturnRing.png'; // Adjusted filename
import uranusTexture from '../assets/planetimg/uranus.jpg';
import uranusRingTexture from '../assets/planetimg/uranusRing.png'; // Adjusted filename
import neptuneTexture from '../assets/planetimg/neptune.jpg';

const planetData = [
  {
    name: 'Mercury',
    description: 'Mercury, the smallest planet, is a scorched world where temperatures swing dramatically between day and night.',
    weather: 'Extremes abound, with blistering highs of 427°C and bone-chilling lows of -173°C.',
    distance: 77.3,
    travelTime: 146,
    size: 4,
    texture: mercuryTexture,
  },
  {
    name: 'Venus',
    description: 'Venus, cloaked in thick clouds of sulfuric acid, boasts a surface hotter than an oven and shrouded in perpetual darkness.',
    weather: 'Its turbulent atmosphere hosts blistering temperatures and acid rain, making it a true hellish landscape.',
    distance: 41.4, // million kilometers
    travelTime: 225, // days (approximate)
    size: 5,
    texture: venusTexture,
  },
  {
    name: 'Earth',
    description: 'Earth, our beloved blue planet, is a haven of life and diversity, teeming with wonders from pole to pole.',
    weather: 'From scorching deserts to icy tundras, its ever-changing climate offers a tapestry of conditions.',
    distance: 0, // million kilometers (Earth's distance from itself is 0)
    travelTime: 0, // days (no travel needed)
    size: 5.56,
    texture: earthTexture,
  },
  {
    name: 'Mars',
    description: 'Mars, the red planet, beckons with its rusty landscape and ancient riverbeds, hinting at a watery past.',
    weather: 'With thin air and fierce dust storms, its surface is a desolate yet intriguing frontier for exploration.',
    distance: 78.3, // million kilometers
    travelTime: 225, // days (approximate)
    size: 5,
    texture: marsTexture,
  },
  {
    name: 'Jupiter',
    description: 'Jupiter, the gas giant, reigns supreme as the largest world in the Solar System, boasting swirling clouds and colossal storms.',
    weather: 'Its tumultuous atmosphere hosts the iconic Great Red Spot and a menagerie of swirling vortices.',
    distance: 628.7, // million kilometers
    travelTime: 600, // days (approximate)
    size: 6,
    texture: jupiterTexture,
  },
  {
    name: 'Saturn',
    description: 'Saturn, adorned with majestic rings, is a jewel of the night sky, captivating with its golden hues and swirling storms.',
    weather: 'Its gaseous atmosphere teems with mesmerizing cloud patterns and ferocious winds, while its rings dance with icy particles.',
    distance: 1276, // million kilometers
    travelTime: 1100, // days (approximate)
    size: 8,
    texture: saturnTexture,
    ringTexture: saturnRingTexture,
  },
  {
    name: 'Uranus',
    description: 'Uranus, the enigmatic ice giant, rolls on its side as it orbits the Sun, presenting a peculiar orientation that intrigues astronomers.',
    weather: 'Its frigid atmosphere, laced with methane, gives rise to brilliant blue-green hues and fierce winds.',
    distance: 2722, // million kilometers
    travelTime: 2500, // days (approximate)
    size: 8.2,
    texture: uranusTexture,
    ringTexture: uranusRingTexture,
  },
  {
    name: 'Neptune',
    description: 'Neptune, the distant ice giant, exudes an ethereal beauty with its sapphire-blue hue and swirling clouds, inviting exploration.',
    weather: 'Its turbulent atmosphere harbors supersonic winds and elusive storms that roam its icy domain.',
    distance: 4345, // million kilometers
    travelTime: 4500, // days (approximate)
    size: 5,
    texture: neptuneTexture,
  },
];

export default planetData;
