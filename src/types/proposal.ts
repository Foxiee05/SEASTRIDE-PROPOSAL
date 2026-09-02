export interface ReferenceItem {
  id: string;
  author: string;
  date: string;
  title: string;
  publication: string;
  accessed: string;
  url: string;
}

export interface UserJourneyStep {
  stage: 'AWARENESS' | 'CONSIDERATION' | 'PLAY' | 'RETENTION' | 'SHARE';
  customerActions: string;
  touchpoints: string;
  customerExperience: string;
  iconName: string;
}

export interface ShipTier {
  tier: number;
  name: string;
  subtitle: string;
  hp: number;
  cannonSlots: number;
  unlockedAtSteps: number;
  goldCost: number;
  description: string;
  imageIcon: string;
}

export interface BossMonster {
  id: string;
  name: string;
  title: string;
  maxHp: number;
  currentHp: number;
  rewards: string;
  description: string;
  accentColor: string;
}

export interface TreasureChest {
  id: string;
  tier: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  distanceMeters: number;
  coins: number;
  gems: number;
  relic: string;
  coords: { x: number; y: number };
  opened: boolean;
}
