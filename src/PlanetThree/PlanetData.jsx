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
    description: 'Mercury is the smallest and innermost planet in the Solar System.',
    weather: 'Extreme temperatures, ranging from -173°C to 427°C.',
    distance: 77.3,
    travelTime: 146,
    size: 4,
    texture: mercuryTexture,
  },
  {
    name: 'Venus',
    description: 'Venus is often called Earth\'s "sister planet" because of their similar size, mass, proximity to the Sun, and bulk composition.',
    weather: 'Extremely hot and has sulfuric acid rain.',
    distance: 41.4, // million kilometers
    travelTime: 225, // days (approximate)
    size: 5,
    texture: venusTexture,
  },
  {
    name: 'Earth',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
    weather: 'Varies greatly depending on location.',
    distance: 0, // million kilometers (Earth's distance from itself is 0)
    travelTime: 0, // days (no travel needed)
    size: 5.56,
    texture: earthTexture,
  },
  {
    name: 'Mars',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury.',
    weather: 'Cold and dry with a thin atmosphere.',
    distance: 78.3, // million kilometers
    travelTime: 225, // days (approximate)
    size: 5,
    texture: marsTexture,
  },
  {
    name: 'Jupiter',
    description: 'Jupiter is the largest planet in the Solar System and is primarily composed of hydrogen and helium.',
    weather: 'Highly turbulent with powerful storms, including the Great Red Spot.',
    distance: 628.7, // million kilometers
    travelTime: 600, // days (approximate)
    size: 6,
    texture: jupiterTexture,
  },
  {
    name: 'Saturn',
    description: 'Saturn is known for its extensive ring system, which consists of nine continuous main rings and three discontinuous arcs.',
    weather: 'Consists mostly of hydrogen and helium, with traces of ammonia, methane, and water vapor.',
    distance: 1276, // million kilometers
    travelTime: 1100, // days (approximate)
    size: 8,
    texture: saturnTexture,
    ringTexture: saturnRingTexture,
  },
  {
    name: 'Uranus',
    description: 'Uranus is the seventh planet from the Sun and has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
    weather: 'Mainly consists of hydrogen, helium, and methane.',
    distance: 2722, // million kilometers
    travelTime: 2500, // days (approximate)
    size: 8.2,
    texture: uranusTexture,
    ringTexture: uranusRingTexture,
  },
  {
    name: 'Neptune',
    description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System.',
    weather: 'Atmosphere composed primarily of hydrogen and helium, with traces of methane.',
    distance: 4345, // million kilometers
    travelTime: 4500, // days (approximate)
    size: 5,
    texture: neptuneTexture,
  },
];

export default planetData;
