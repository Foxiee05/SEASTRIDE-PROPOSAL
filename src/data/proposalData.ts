import { ReferenceItem, UserJourneyStep, ShipTier, BossMonster, TreasureChest } from '../types/proposal';

export const PROPOSAL_META = {
  title: "SeaStride Proposal",
  subtitle: "Gamified Fitness RPG Proposal",
  summary: "A gamified fitness RPG where real-world physical activity translates directly into in-game nautical power.",
};

export const SECTION_1_PAIN_POINT = {
  sectionNumber: "1.",
  title: "PAIN POINT:",
  bullets: [
    "Many young adults in Vietnam are facing the problem of low physical activity, increasing the risk of non-communicable diseases (Xuân Quý 2026).",
    "Aside from sports, simple physical activities such as walking or climbing stairs can also benefit health (Quỳnh Quỳnh 2026; Xuân Quý 2026)",
    "Although these youngsters understand the risk of lacking exercise, they prioritise work and studying, while spending time on electronic devices remains as their source of entertainment (Quỳnh Quỳnh 2026; Diệp Chi)."
  ],
  conclusion: "Conclusion: Low physical activity among young adults is the result of low motivation and priority"
};

export const SECTION_2_TARGET_AUDIENCE = {
  sectionNumber: "2.",
  title: "TARGET AUDIENCE:",
  bullets: [
    "Young people from 18-26, all genders",
    "Geographics: Major urban centers and big cities",
    "Psychographic: Have an interest towards gaming and entertaining content",
    "Behavior: Inactive in physical activity and exercise, tech-savvy, and highly active in using electronic devices"
  ]
};

export const SECTION_3_PROPOSED_SOLUTION = {
  sectionNumber: "3.",
  title: "PROPOSED SOLUTION:",
  mvpIdea: {
    title: "3.1/ MVP IDEA:",
    content: "SeaStride is a gamified fitness RPG where real-world physical activity translates directly into in-game nautical power. As you walk in real life, your steps generate in-game currency, level up your captain, and fuel naval warfare against other players and mythical sea monsters."
  },
  keyValue: {
    title: "3.2/ KEY VALUE:",
    bullets: [
      "A step-tracking system that transforms daily step counts into valuable health and habit insights.",
      "Gamify content to create recreational appeals that take away the boredom in walking, spark competitive value, and drive users to take action",
      "A multiplayer online game that eliminates the need for local play, enabling participants to engage with others seamlessly from any location at any time, fostering consistent engagement and habit formation."
    ]
  },
  coreFeatures: {
    title: "3.3/ CORE FEATURES:",
    items: [
      { id: 1, text: "Step-to-Gold Conversion: Physical steps earn Gold, Gems, and XP (1 Coin / 100 steps)." },
      { id: 2, text: "Ship Building & Armory: Upgrade through ship tiers, equip cannon slots, and install shield generators." },
      { id: 3, text: "PvP Combat: Raid rival players on your server to plunder gold and seize cannons." },
      { id: 4, text: "Co-op Boss Raids: Team up to defeat mythical sea monsters (Kraken, Megalodon) for epic rewards." },
      { id: 5, text: "GPS Treasure Hunt: Walk in real life to discover and unlock nearby geocached loot chests." }
    ]
  },
  outsideScope: {
    title: "3.5/ OUTSIDE SCOPE:",
    note: "(As declared in proposal document)"
  }
};

export const SECTION_4_USER_JOURNEY: UserJourneyStep[] = [
  {
    stage: 'AWARENESS',
    customerActions: 'See social media posts, hear recommendations from others, see other people using the app',
    touchpoints: 'Social media posts (Facebook, TikTok, Threads, Instagram), WoM, observation',
    customerExperience: 'Curious about the app but hesitate to download',
    iconName: 'Compass'
  },
  {
    stage: 'CONSIDERATION',
    customerActions: 'Search for the app, look for gameplay/reviews, compare with other health apps',
    touchpoints: 'Social media, YouTube, WoM',
    customerExperience: 'Uncertain about the app, look up information to solve that uncertainty',
    iconName: 'Search'
  },
  {
    stage: 'PLAY',
    customerActions: 'Decide to download the app, experience the app',
    touchpoints: 'Application',
    customerExperience: 'Excited to play the game, curious about all the features of the game',
    iconName: 'Gamepad2'
  },
  {
    stage: 'RETENTION',
    customerActions: 'Explore the app’s entertainment features and the benefits it offers',
    touchpoints: 'Community website, new features, in-game rewards',
    customerExperience: 'Reflecting on the app, feel confident about continuing to play the game',
    iconName: 'Anchor'
  },
  {
    stage: 'SHARE',
    customerActions: 'Share the experience and recommend the app to other people',
    touchpoints: 'Community website, social media, WoM',
    customerExperience: 'Excited to share with other people, happy with the choice made',
    iconName: 'Share2'
  }
];

export const SECTION_5_TECHNICAL_OPERATION = {
  sectionNumber: "5.",
  title: "TECHNICAL OPERATION",
  functionalityTitle: "5.1/ FUNCTIONALITY",
  functionalities: [
    {
      num: "1.",
      heading: "Step Tracking & Fitness Engine",
      subItems: [
        {
          bold: "Hardware Step Detection",
          text: "Reads the device’s motion sensors (accelerometer & gyroscope) to count physical steps in real time."
        },
        {
          bold: "Economy Conversion",
          nested: [
            "Every 100 steps automatically generates 1 Gold Coin.",
            "Walking progress is tracked towards daily step goals (for example: 10,000 steps), awarding bonus Gems, XP, and milestone rewards."
          ]
        },
        {
          bold: "GPS & Compass Navigation",
          nested: [
            "Tracks live GPS coordinates and compass orientation to display a nautical map centered on the player's real-world location."
          ]
        }
      ]
    },
    {
      num: "2.",
      heading: "Ship Building & Fleet Management",
      subItems: [
        {
          bold: "10 Ship Tiers (possible to add more)",
          text: "Progression spans from a humble Raft and Sloop up to a mighty Dreadnought and Ghost Ship."
        },
        {
          bold: "Hull Condition & Repair Mechanics",
          nested: [
            "Ships have persistent maximum HP. During combat, taking damage decreases hull health.",
            "Players can perform emergency field repairs with coins or restore the ship."
          ]
        },
        {
          bold: "Armory & Cannons (possible to add more)",
          nested: [
            "Equip, merge, and upgrade up to 10 cannon slots with varying damage tiers (Level 1–10)."
          ]
        },
        {
          bold: "Shield (possible to add more)",
          nested: [
            "Defensive shields (Levels 1–3) that mitigate or completely absorb incoming enemy fire during battles."
          ]
        },
        {
          bold: "Cosmetics & Customization (possible to add more)",
          nested: [
            "Customize ship flags, figureheads, lanterns, and special aura effects purchased from the Shop."
          ]
        }
      ]
    },
    {
      num: "3.",
      heading: "\"The Sea\" Game Modes",
      modes: [
        {
          letter: "A.",
          name: "Bombing / PvP Naval Battles",
          bullets: [
            "Engage rival pirate captains operating on the same server.",
            "Fire equipped cannons to damage enemy ships and plunder a percentage of their Gold Coins.",
            "Defending ships utilize their active shields to block or deflect attacks.",
            "Winning battles can occasionally capture rival cannons as plunder."
          ]
        },
        {
          letter: "B.",
          name: "World Boss Raids",
          bullets: [
            "Co-op boss encounters featuring four mythical sea monsters (possible to add more):",
            "Megalodon (Fierce Apex Predator)",
            "Siren Queen (Alluring Deep Sea Sorceress)",
            "Scylla (Multi-headed Sea Fiend)",
            "The Kraken (Legendary Colossus)",
            "Every footstep deals 1HP damage to the boss and earns the user a share of the bounty.",
            "Features shared boss health bars, critical strike mechanics, and a real-time combat action feed.",
            "Defeating a boss awards damage-tiered reward chests containing Rare/Epic cannons, Gems, and relic fragments."
          ]
        },
        {
          letter: "C.",
          name: "GPS Treasure Hunt",
          bullets: [
            "Geocaches virtual treasure chests in real-world proximity around the player's GPS coordinates.",
            "Chests span 4 rarity tiers (Common, Rare, Epic, Legendary).",
            "Players must physically walk within a detection radius to open chests and claim coins, gems, and secret relics."
          ]
        }
      ]
    },
    {
      num: "4.",
      heading: "Multiplayer, Servers & Social",
      subItems: [
        {
          bold: "Server Selection",
          nested: [
            "Global Servers: Public hubs with large player populations.",
            "Private Room Servers: Custom password-protected or invite-code rooms to play with friends or local walking groups."
          ]
        },
        {
          bold: "Leaderboards",
          nested: [
            "Real-time ranking categorized by Ship Power Rating, Daily / Weekly Steps Walked, and Total Plunder Stolen."
          ]
        },
        {
          bold: "Player Profiles & Ship Inspection",
          nested: [
            "View detailed stats (Total Steps, Victories, Bosses Slain) and inspect other captains' ship loadouts."
          ]
        }
      ]
    }
  ],
  monetization: {
    title: "5.5/ MONETIZATION OPTIONS",
    bullets: [
      "In-app purchase",
      "Advertising"
    ]
  },
  sourceControl: {
    title: "5.6/ SOURCE CONTROL",
    items: [
      {
        num: "1.",
        text: "Collaborative Git method: there will be a joint Github repository for the whole team. We will use Git to track and push code from our personal computer to the repository."
      },
      {
        num: "2.",
        text: "Github branch workflow for each member:",
        steps: [
          "Step 1: Copy the main code into an isolated branch",
          "Step 2: Use AI to generate the code and save the milestone locally",
          "Step 3: Push the code to their isolated branch in the joint repository",
          "Step 4: Team reviews the code on Github. When approved, injects the code from the prior branch into main using “Merge”. Then, that branch will be deleted"
        ]
      }
    ]
  },
  risks: {
    title: "5.7/ RISKS",
    bullets: [
      "GPS inaccuracy",
      "Battery & Device Drain: Continuous GPS polling, motion sensor listeners, and Web Audio synthesis cause high battery and CPU consumption."
    ]
  }
};

export const SECTION_6_VALIDATION_PLAN = {
  sectionNumber: "6.",
  title: "VALIDATION PLAN",
  userTesting: {
    title: "6.1/ USER TESTING & CLIENT FEEDBACK",
    bullets: [
      "Quick Google Forms: Create a short public survey with simple, direct questions so testers can fill it out quickly without getting bored.",
      "Facebook Outreach: Post our MVP link and survey in relevant Facebook groups to collect real thoughts and feedback from everyday users.",
      "Audience & Idea Check: Use the responses to see if we reached the right people, find what needs fixing, and measure how interested people are in our project."
    ]
  },
  analytics: {
    title: "6.2/ ANALYTICS AND BEHAVIORAL TRACKING",
    bullets: [
      "Google Analytics: Set up Google Analytics to watch how visitors navigate and interact with our app in real time.",
      "Engagement Check: Watch average time spent on site and bounce rates to make sure people coming from Facebook actually tested the app instead of closing it right away.",
      "Retention Tracking: Check for returning users to see if people like the app enough to come back and use it again."
    ]
  }
};

export const SECTION_9_REFERENCES: ReferenceItem[] = [
  {
    id: "diep-chi-2026",
    author: "Diệp Chi",
    date: "(22 June 2026)",
    title: "‘Nhìn từ khoảng trống vận động của giới trẻ’",
    publication: "Nhân Dân",
    accessed: "accessed 3 September 2026",
    url: "https://nhandan.vn/nhin-tu-khoang-trong-van-dong-cua-gioi-tre-post970689.html"
  },
  {
    id: "quynh-quynh-2026",
    author: "Quỳnh Quỳnh",
    date: "(7 August 2026)",
    title: "‘Người trẻ đang cạn dần vốn sức khỏe?’",
    publication: "Thanh Niên",
    accessed: "accessed 3 September 2026",
    url: "https://thanhnien.vn/nguoi-tre-dang-can-dan-von-suc-khoe-185260806181240014.htm"
  },
  {
    id: "xuan-quy-2026",
    author: "Xuân Quý",
    date: "(24 July 2026)",
    title: "‘Cảnh báo lối sống ngồi nhiều, ít vận động đang âm thầm gia tăng bệnh tật’",
    publication: "Đại Biểu Nhân Dân",
    accessed: "accessed 3 September 2026",
    url: "https://daibieunhandan.vn/canh-bao-loi-song-ngoi-nhieu-it-van-dong-dang-am-tham-gia-tang-benh-tat-10424732.html"
  }
];

export const SHIP_TIERS: ShipTier[] = [
  {
    tier: 1,
    name: "Drift Raft",
    subtitle: "Humble Timber Float",
    hp: 150,
    cannonSlots: 1,
    unlockedAtSteps: 0,
    goldCost: 0,
    description: "Tied together logs and a torn sail. Where every pirate apprentice begins their walking journey.",
    imageIcon: "🪵"
  },
  {
    tier: 2,
    name: "Cutter Skiff",
    subtitle: "Light Coastal Scout",
    hp: 350,
    cannonSlots: 2,
    unlockedAtSteps: 5000,
    goldCost: 50,
    description: "Nimble single-mast sailboat with reinforced gunwales for river and bay skirmishes.",
    imageIcon: "🛶"
  },
  {
    tier: 3,
    name: "Reef Sloop",
    subtitle: "Quick Raider",
    hp: 600,
    cannonSlots: 3,
    unlockedAtSteps: 15000,
    goldCost: 150,
    description: "Armed with dual swivel cannons and crisp lateen sails to chase merchant ships.",
    imageIcon: "⛵"
  },
  {
    tier: 4,
    name: "Corsair Schooner",
    subtitle: "Twin-Mast Plunderer",
    hp: 950,
    cannonSlots: 4,
    unlockedAtSteps: 30000,
    goldCost: 300,
    description: "Fast multi-sail design capable of outrunning imperial patrols in stormy archipelagos.",
    imageIcon: "🛥️"
  },
  {
    tier: 5,
    name: "Iron Brigantine",
    subtitle: "Heavy Boarding Vessel",
    hp: 1400,
    cannonSlots: 5,
    unlockedAtSteps: 50000,
    goldCost: 500,
    description: "Reinforced oak ribs with iron armor plates. Can withstand direct cannon broadsides.",
    imageIcon: "🚢"
  },
  {
    tier: 6,
    name: "Sea Viper Frigate",
    subtitle: "High-Caliber Warship",
    hp: 2000,
    cannonSlots: 6,
    unlockedAtSteps: 75000,
    goldCost: 750,
    description: "Fitted with double cannon tiers and spiked ram bow for crushing rival hulls.",
    imageIcon: "⚓"
  },
  {
    tier: 7,
    name: "Galleon Sovereign",
    subtitle: "Three-Deck Fortress",
    hp: 2800,
    cannonSlots: 7,
    unlockedAtSteps: 110000,
    goldCost: 1100,
    description: "Gilded stern galleries and heavy bronze carronades capable of ruling open seas.",
    imageIcon: "🏰"
  },
  {
    tier: 8,
    name: "Abyssal Man-o'-War",
    subtitle: "Imperial Fleet Destroyer",
    hp: 3800,
    cannonSlots: 8,
    unlockedAtSteps: 150000,
    goldCost: 1500,
    description: "Massive battleship with 4 masts and blast-proof shields that terrorize world bosses.",
    imageIcon: "🔱"
  },
  {
    tier: 9,
    name: "Titan Dreadnought",
    subtitle: "Armored Behemoth",
    hp: 5000,
    cannonSlots: 9,
    unlockedAtSteps: 200000,
    goldCost: 2000,
    description: "Steaming steel-plated flagship armed with devastating mortar turrets and shield emitters.",
    imageIcon: "🛡️"
  },
  {
    tier: 10,
    name: "Cursed Ghost Ship",
    subtitle: "Legendary Phantom Leviathan",
    hp: 6666,
    cannonSlots: 10,
    unlockedAtSteps: 300000,
    goldCost: 3000,
    description: "Spectral green hull wrapped in cursed fog. Fires ghostly cannonballs that bypass normal shields.",
    imageIcon: "👻"
  }
];

export const BOSS_ROSTER: BossMonster[] = [
  {
    id: "megalodon",
    name: "Megalodon",
    title: "Fierce Apex Predator",
    maxHp: 10000,
    currentHp: 7420,
    rewards: "Rare Cannons (Lv.3-5), 250 Gold, 15 Gems",
    description: "A prehistoric titan shark with razor teeth capable of splintering galleon hulls in a single bite.",
    accentColor: "from-blue-600 to-cyan-500"
  },
  {
    id: "siren-queen",
    name: "Siren Queen",
    title: "Alluring Deep Sea Sorceress",
    maxHp: 25000,
    currentHp: 18900,
    rewards: "Epic Shield Cores, 600 Gold, 35 Gems, Mystic Pearl",
    description: "Mistress of whirlpools who hypnotizes crews and summons crushing storm squalls.",
    accentColor: "from-purple-600 to-pink-500"
  },
  {
    id: "scylla",
    name: "Scylla",
    title: "Multi-headed Sea Fiend",
    maxHp: 50000,
    currentHp: 38200,
    rewards: "Epic Cannons (Lv.6-8), 1,200 Gold, 75 Gems, Serpent Relic",
    description: "A monstrous six-headed abomination dwelling in rocky straits, snatching sailors from their decks.",
    accentColor: "from-emerald-600 to-teal-500"
  },
  {
    id: "kraken",
    name: "The Kraken",
    title: "Legendary Colossus",
    maxHp: 100000,
    currentHp: 64150,
    rewards: "Legendary Ghost Cannons (Lv.10), 3,000 Gold, 200 Gems, Abyssal Heart",
    description: "The ancient scourge of the oceans whose colossal tentacles can drag an entire armada into the abyss.",
    accentColor: "from-rose-600 to-amber-600"
  }
];

export const MOCK_CHESTS: TreasureChest[] = [
  {
    id: "c-1",
    tier: "Common",
    distanceMeters: 45,
    coins: 50,
    gems: 2,
    relic: "Bronze Compass Shard",
    coords: { x: 30, y: 40 },
    opened: false
  },
  {
    id: "c-2",
    tier: "Rare",
    distanceMeters: 120,
    coins: 180,
    gems: 8,
    relic: "Silver Spyglass",
    coords: { x: 65, y: 25 },
    opened: false
  },
  {
    id: "c-3",
    tier: "Epic",
    distanceMeters: 280,
    coins: 450,
    gems: 20,
    relic: "Golden Astrolabe",
    coords: { x: 80, y: 70 },
    opened: false
  },
  {
    id: "c-4",
    tier: "Legendary",
    distanceMeters: 550,
    coins: 1200,
    gems: 60,
    relic: "Blackbeard's Cursed Doubloon",
    coords: { x: 20, y: 85 },
    opened: false
  }
];
