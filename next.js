const database = {
  shark: {
    text: `
🦈 Shark

Description:
Sharks are powerful predators that help maintain the balance of marine ecosystems. They have existed for over 400 million years and are among the oldest animals on Earth.

Habitat:
All major oceans, from shallow coastal waters to the deep sea.

Diet:
Fish, squid, seals, crustaceans, and other marine animals.

Interesting Fact:
Sharks can detect tiny electrical signals produced by other animals.

Conservation Status:
Many shark species are endangered because of overfishing.
    `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mPT3cd6x5EkciZ3G1r8sDNjHKVRmhHzsvtrPngnaBA&s=10"
  },

  whale: {
    text: `
🐋 Whale

Description:
Whales are the largest animals on Earth. Despite their enormous size, many species are gentle giants that travel thousands of kilometers every year.

Habitat:
Oceans around the world.

Diet:
Krill, plankton, fish, or squid depending on the species.

Interesting Fact:
The blue whale is the largest animal ever known to have lived on Earth.

Conservation Status:
Several whale species are protected, but some remain endangered.
    `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgAP3WPiGamjcGNK9AkZLIxkW_A-8mpy5lqWqVnn8mw&s=10"
  },

  dolphin: {
    text: `
🐬 Dolphin

Description:
The dolphin is one of the most intelligent and friendly marine animals. It lives in groups called pods and communicates using clicks, whistles, and body movements. Dolphins are known for their playful behavior and strong social bonds.

Habitat:
Warm and temperate oceans and seas around the world.

Diet:
Fish, squid, octopus, and other small marine animals.

Interesting Fact:
Each dolphin has its own unique whistle, which works like a personal name.

Conservation Status:
Some species are threatened by pollution, fishing nets, and habitat loss.
    `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Almb8tLV9-3wniP51p4pw3SpSwTNXN9dU37OZ89cA&s=10"
  },

  jellyfish: {
    text: `
🪼 Jellyfish

Description:
Jellyfish are soft-bodied animals that drift with ocean currents. Their transparent bodies make them one of the most fascinating sea creatures.

Habitat:
Nearly all oceans, from the surface to the deep sea.

Diet:
Plankton, fish eggs, and small fish.

Interesting Fact:
Some jellyfish can glow in the dark through a process called bioluminescence.

Conservation Status:
Most species have stable populations.
    `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCNZ-82Ze1vYJG5VwtGNUx0ImwkVCdv6kTryRWFl6r0g&s=10"
  },

  octopus: {
    text: `
🐙 Octopus

Description:
The octopus is one of the smartest invertebrates in the ocean. It has eight flexible arms and can solve simple puzzles and escape from tight spaces.

Habitat:
Coral reefs, rocky coasts, and the ocean floor.

Diet:
Crabs, shrimp, fish, and shellfish.

Interesting Fact:
An octopus can change both its color and skin texture to blend into its surroundings.

Conservation Status:
Most species are currently stable.
    `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBN6hQ2-iQXl6O8faCBqEJQJWhH0LNaSXH-Jh2oye-qA&s=10"
  },

  turtle: {
    text: `
🐢 Sea Turtle

Description:
Sea turtles are ancient reptiles that have lived in the oceans for more than 100 million years. They spend most of their lives in the sea and return to beaches to lay eggs.

Habitat:
Tropical and subtropical oceans.

Diet:
Seagrass, jellyfish, algae, crabs, and other small marine creatures.

Interesting Fact:
Female sea turtles often return to the same beach where they were born to lay their eggs.

Conservation Status:
Most species are classified as threatened or endangered.
    `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrhGWjCfc39rO221hnvDAD6lLw_C2AFNAgkfc9n80Iw&s=10"
  },

  crab: {
    text: `
🦀 Crab

Description:
Crabs are crustaceans with hard shells and strong claws. They are important scavengers that help keep the ocean clean.
Habitat:
Beaches, coral reefs, mangroves, and the ocean floor.
[7/29/2026 7:37 PM] Fazliddin: Diet:
Algae, small fish, mollusks, and dead organic matter.

Interesting Fact:
Crabs shed their shells as they grow, a process called molting.

Conservation Status:
Most species are common, though some are affected by habitat destruction.
    `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSaaFhE0jglXnJh8v45I38BhS9flLZcnE-bl4frV-yA&s=10"
  },

  seahorse: {
    text: `
🐴 Seahorse

Description:
The seahorse is a small and fascinating marine animal known for its horse-like head and upright swimming posture. Unlike most fish, seahorses move slowly and use their curled tails to hold onto seagrass and coral. They are gentle creatures with unique behaviors.

Habitat:
Shallow tropical and temperate oceans, especially in coral reefs, seagrass beds, and mangrove forests.

Diet:
Tiny shrimp, plankton, and other small crustaceans.

Interesting Fact:
Male seahorses are the only animals in the world where the male becomes pregnant. They carry the eggs in a special pouch until the babies are ready to be born.

Conservation Status:
Many seahorse species are vulnerable due to habitat destruction, pollution, and overfishing. Several species are protected under international conservation agreements.
    `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhsEGHRhdMBfLEr_u6WzCfO3O-GcLKOPjO9u6gcGiqQ&s=10"
  },

  starfish: {
    text: `
⭐️ Starfish (Sea Star)

Description:
Starfish are beautiful marine animals with five or more arms. They move slowly across the ocean floor and play an important role in marine ecosystems.

Habitat:
Coral reefs, rocky shores, and sandy seabeds.

Diet:
Mollusks, clams, oysters, and organic matter.

Interesting Fact:
Many starfish can regenerate lost arms.

Conservation Status:
Most species are not endangered, although habitat damage affects some populations.
    `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvHQANvqbez2-Ds5Q61k1uis_Kaq-kLlb_0ekH5UsHA&s=10"
  },

  stingray: {
    text: `
🛸 Stingray

Description:
The stingray is a graceful marine animal with a flat, diamond-shaped body and long, whip-like tail. It glides smoothly across the ocean floor and is usually calm and non-aggressive. Most stingrays avoid humans unless they feel threatened.

Habitat:
Tropical and temperate oceans, especially along sandy beaches, coral reefs, lagoons, and coastal waters.

Diet:
Crabs, shrimp, clams, worms, and other small animals that live on the seabed.

Interesting Fact:
Many stingrays have venomous barbs on their tails that they use only for self-defense. Some species can even bury themselves in the sand to hide from predators.

Conservation Status:
Several stingray species are vulnerable or endangered due to overfishing, habitat loss, and pollution. Conservation efforts are helping to protect their populations.
    `,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lEncaC7NtOijU4QTnNebv-x6wCMFhwI5Yq4fWJj1fA&s=10"
  }
  
};

function searchAnimal(){
  let input = document.getElementById("animalInput").value.toLowerCase();

  let title = document.getElementById("resultTitle");
  let text = document.getElementById("resultText");
  let img = document.getElementById("resultImg");

  if(database[input]){
    title.innerText = input.toUpperCase();
    text.innerText = database[input].text;
    img.src = database[input].img;
    img.style.display = "block";
  } else {
    title.innerText = "Not Found ❌";
    text.innerText = "Try: shark, whale, jellyfish, dolphin, octopus";
    img.style.display = "none";
  }
  title.innerHTML="Searching...";
  setTimeout(()=>{


},1000)
}


// sun and light
 const starsWrap = document.getElementById('stars');
  for (let i = 0; i < 18; i++) {
    const s = document.createElement('span');
    s.style.top = Math.random() * 90 + '%';
    s.style.left = Math.random() * 90 + '%';
    s.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
    starsWrap.appendChild(s);
  }
  const btn = document.getElementById('toggleBtn');
  const label = document.getElementById('stateLabel');
  const body = document.body;
  let isDay = false;
 btn.addEventListener('click', () => {
    isDay = !isDay;
    btn.classList.toggle('day', isDay);
    body.classList.toggle('day', isDay);
    btn.setAttribute('aria-pressed', String(isDay));
    label.textContent = isDay ? 'Kun' : 'Tun';
  });