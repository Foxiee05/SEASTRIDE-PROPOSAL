import React from 'react';
import { 
  ExternalLink, 
  ShieldAlert 
} from 'lucide-react';
import {
  SECTION_1_PAIN_POINT,
  SECTION_2_TARGET_AUDIENCE,
  SECTION_3_PROPOSED_SOLUTION,
  SECTION_4_USER_JOURNEY,
  SECTION_5_TECHNICAL_OPERATION,
  SECTION_6_VALIDATION_PLAN,
  SECTION_9_REFERENCES
} from '../data/proposalData';

interface ProposalViewerProps {
  searchQuery: string;
  fontSize: 'normal' | 'large';
}

export const ProposalViewer: React.FC<ProposalViewerProps> = ({ searchQuery, fontSize }) => {
  // Helper to highlight search matches
  const highlightText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? (
        <mark key={i} className="bg-[#facc15] text-[#1a0f0a] font-bold px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const bodyTextClass = fontSize === 'large' 
    ? 'text-lg sm:text-xl leading-relaxed' 
    : 'text-base sm:text-lg leading-relaxed';

  const subTextClass = fontSize === 'large'
    ? 'text-base sm:text-lg leading-relaxed'
    : 'text-sm sm:text-base leading-relaxed';

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      
      {/* Proposal Header Banner */}
      <div className="wood-panel p-6 sm:p-8 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-[#facc15] tracking-tight drop-shadow-md font-heading">
            SeaStride Proposal
          </h1>

          <p className="text-[#f4e4bc] font-serif text-lg sm:text-xl leading-relaxed">
            Gamified Fitness RPG where real-world physical activity translates directly into in-game nautical power.
          </p>

          <div className="text-xs text-[#a68a64] uppercase font-semibold tracking-wider pt-2 border-t border-[#3d2b1f]">
            Specification Document • Sections 1 to 9
          </div>
        </div>
      </div>

      {/* SECTION 1: PAIN POINT */}
      <section id="sec-1" className="parchment-card rounded p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between border-b-2 border-[#c2a67e] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#3d2b1f] text-[#facc15] flex items-center justify-center font-black text-lg border-2 border-[#1a0f0a] shadow-md">
              1
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2d1e15]">
              {SECTION_1_PAIN_POINT.sectionNumber} {SECTION_1_PAIN_POINT.title}
            </h2>
          </div>
        </div>

        <ul className={`space-y-3.5 text-[#2d1e15] font-serif ${bodyTextClass} pl-1`}>
          {SECTION_1_PAIN_POINT.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[#8c5024] font-bold text-xl leading-none mt-0.5">•</span>
              <span>{highlightText(bullet)}</span>
            </li>
          ))}
        </ul>

        {/* Conclusion Box */}
        <div className="mt-4 p-4 rounded bg-[#e8d5b5] border-2 border-[#b89569] text-[#2d1e15]">
          <div className={`font-bold font-serif ${bodyTextClass}`}>
            {highlightText(SECTION_1_PAIN_POINT.conclusion)}
          </div>
        </div>
      </section>

      {/* SECTION 2: TARGET AUDIENCE */}
      <section id="sec-2" className="parchment-card rounded p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between border-b-2 border-[#c2a67e] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#3d2b1f] text-[#facc15] flex items-center justify-center font-black text-lg border-2 border-[#1a0f0a] shadow-md">
              2
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2d1e15]">
              {SECTION_2_TARGET_AUDIENCE.sectionNumber} {SECTION_2_TARGET_AUDIENCE.title}
            </h2>
          </div>
        </div>

        <ul className={`space-y-3.5 text-[#2d1e15] font-serif ${bodyTextClass} pl-1`}>
          {SECTION_2_TARGET_AUDIENCE.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[#8c5024] font-bold text-xl leading-none mt-0.5">•</span>
              <span>{highlightText(bullet)}</span>
            </li>
          ))}
        </ul>

        {/* Structured Summary Blocks for Audience Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 bg-[#e8d5b5] rounded border border-[#b89569]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#8c5024]">Age & Gender</div>
            <div className="font-bold text-[#2d1e15] text-base mt-0.5">Young people 18–26, all genders</div>
          </div>
          <div className="p-3.5 bg-[#e8d5b5] rounded border border-[#b89569]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#8c5024]">Geographics</div>
            <div className="font-bold text-[#2d1e15] text-base mt-0.5">Major urban centers and big cities</div>
          </div>
          <div className="p-3.5 bg-[#e8d5b5] rounded border border-[#b89569]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#8c5024]">Psychographics</div>
            <div className="font-bold text-[#2d1e15] text-base mt-0.5">Interest towards gaming and entertainment</div>
          </div>
          <div className="p-3.5 bg-[#e8d5b5] rounded border border-[#b89569]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#8c5024]">Behavioral Pattern</div>
            <div className="font-bold text-[#2d1e15] text-base mt-0.5">Inactive in exercise, tech-savvy device users</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROPOSED SOLUTION */}
      <section id="sec-3" className="parchment-card rounded p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b-2 border-[#c2a67e] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#3d2b1f] text-[#facc15] flex items-center justify-center font-black text-lg border-2 border-[#1a0f0a] shadow-md">
              3
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2d1e15]">
              {SECTION_3_PROPOSED_SOLUTION.sectionNumber} {SECTION_3_PROPOSED_SOLUTION.title}
            </h2>
          </div>
        </div>

        {/* 3.1/ MVP IDEA: */}
        <div className="space-y-2 bg-[#e8d5b5] p-4 sm:p-5 rounded border border-[#b89569]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15]">
            {SECTION_3_PROPOSED_SOLUTION.mvpIdea.title}
          </h3>
          <p className={`text-[#2d1e15] font-serif ${bodyTextClass}`}>
            {highlightText(SECTION_3_PROPOSED_SOLUTION.mvpIdea.content)}
          </p>
        </div>

        {/* 3.2/ KEY VALUE: */}
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15] border-b border-[#c2a67e] pb-1">
            {SECTION_3_PROPOSED_SOLUTION.keyValue.title}
          </h3>
          <ul className={`space-y-3 text-[#2d1e15] font-serif ${bodyTextClass} pl-1`}>
            {SECTION_3_PROPOSED_SOLUTION.keyValue.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#8c5024] font-bold text-xl leading-none mt-0.5">•</span>
                <span>{highlightText(bullet)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3.3/ CORE FEATURES: */}
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15] border-b border-[#c2a67e] pb-1">
            {SECTION_3_PROPOSED_SOLUTION.coreFeatures.title}
          </h3>

          <div className="space-y-2.5">
            {SECTION_3_PROPOSED_SOLUTION.coreFeatures.items.map((feature) => (
              <div 
                key={feature.id}
                className="flex items-start gap-3 p-3.5 rounded bg-[#e8d5b5] border border-[#b89569]"
              >
                <div className="w-7 h-7 rounded bg-[#3d2b1f] text-[#facc15] font-bold flex items-center justify-center text-sm shrink-0 border border-[#1a0f0a]">
                  {feature.id}
                </div>
                <div className={`text-[#2d1e15] font-serif ${bodyTextClass}`}>
                  {highlightText(feature.text)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3.5/ OUTSIDE SCOPE: */}
        <div className="space-y-2 pt-2 border-t border-[#c2a67e]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15]">
            {SECTION_3_PROPOSED_SOLUTION.outsideScope.title}
          </h3>
        </div>
      </section>

      {/* SECTION 4: USER JOURNEY TABLE */}
      <section id="sec-4" className="parchment-card rounded p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between border-b-2 border-[#c2a67e] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#3d2b1f] text-[#facc15] flex items-center justify-center font-black text-lg border-2 border-[#1a0f0a] shadow-md">
              4
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2d1e15]">
              4. USER JOURNEY:
            </h2>
          </div>
        </div>

        <p className={`text-[#3d2b1f] font-serif ${subTextClass}`}>
          Exact verbatim 3-column table from the proposal document:
        </p>

        {/* Verbatim Matrix Table */}
        <div className="overflow-x-auto rounded border-2 border-[#3d2b1f] shadow-lg bg-[#241711]">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-[#3d2b1f] border-b-2 border-[#1a0f0a] text-[#facc15] font-black text-xs uppercase tracking-wider">
                <th className="p-3.5 border-r border-[#1a0f0a] w-36">STAGE</th>
                <th className="p-3.5 border-r border-[#1a0f0a]">CUSTOMER ACTIONS</th>
                <th className="p-3.5 border-r border-[#1a0f0a]">TOUCHPOINTS</th>
                <th className="p-3.5 text-rose-300">CUSTOMER EXPERIENCE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3d2b1f] font-serif text-sm sm:text-base text-[#f4e4bc]">
              {SECTION_4_USER_JOURNEY.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#241711]' : 'bg-[#1a0f0a]'}>
                  <td className="p-3.5 font-bold uppercase text-[#facc15] border-r border-[#3d2b1f] align-top text-xs tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#b91c1c]"></span>
                      <span>{row.stage}</span>
                    </div>
                  </td>
                  <td className="p-3.5 border-r border-[#3d2b1f] align-top leading-relaxed text-[#f4e4bc]">
                    {highlightText(row.customerActions)}
                  </td>
                  <td className="p-3.5 border-r border-[#3d2b1f] align-top leading-relaxed text-[#a68a64]">
                    {highlightText(row.touchpoints)}
                  </td>
                  <td className="p-3.5 text-rose-200/90 align-top leading-relaxed italic bg-[#4a1d1d]/20">
                    {highlightText(row.customerExperience)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5: TECHNICAL OPERATION */}
      <section id="sec-5" className="parchment-card rounded p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b-2 border-[#c2a67e] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#3d2b1f] text-[#facc15] flex items-center justify-center font-black text-lg border-2 border-[#1a0f0a] shadow-md">
              5
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2d1e15]">
                {SECTION_5_TECHNICAL_OPERATION.sectionNumber} {SECTION_5_TECHNICAL_OPERATION.title}
              </h2>
              <div className="text-sm font-bold uppercase tracking-wider text-[#8c5024]">
                {SECTION_5_TECHNICAL_OPERATION.functionalityTitle}
              </div>
            </div>
          </div>
        </div>

        {/* 1. Step Tracking & Fitness Engine */}
        <div className="space-y-3 bg-[#e8d5b5] p-4 sm:p-5 rounded border border-[#b89569]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15]">
            1. Step Tracking & Fitness Engine
          </h3>

          <div className={`space-y-3 pl-2 text-[#2d1e15] font-serif ${bodyTextClass}`}>
            <div>
              <span className="font-bold">● Hardware Step Detection:</span>{' '}
              <span>Reads the device’s motion sensors (accelerometer & gyroscope) to count physical steps in real time.</span>
            </div>

            <div>
              <span className="font-bold">● Economy Conversion:</span>
              <ul className="pl-6 space-y-1.5 mt-1 text-[#2d1e15]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Every 100 steps automatically generates 1 Gold Coin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Walking progress is tracked towards daily step goals (for example: 10,000 steps), awarding bonus Gems, XP, and milestone rewards.</span>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold">● GPS & Compass Navigation:</span>
              <ul className="pl-6 space-y-1.5 mt-1 text-[#2d1e15]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Tracks live GPS coordinates and compass orientation to display a nautical map centered on the player's real-world location.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Ship Building & Fleet Management */}
        <div className="space-y-3 bg-[#e8d5b5] p-4 sm:p-5 rounded border border-[#b89569]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15]">
            2. Ship Building & Fleet Management
          </h3>

          <div className={`space-y-3 pl-2 text-[#2d1e15] font-serif ${bodyTextClass}`}>
            <div>
              <span className="font-bold">● 10 Ship Tiers (possible to add more):</span>{' '}
              <span>Progression spans from a humble Raft and Sloop up to a mighty Dreadnought and Ghost Ship.</span>
            </div>

            <div>
              <span className="font-bold">● Hull Condition & Repair Mechanics:</span>
              <ul className="pl-6 space-y-1.5 mt-1 text-[#2d1e15]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Ships have persistent maximum HP. During combat, taking damage decreases hull health.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Players can perform emergency field repairs with coins or restore the ship.</span>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold">● Armory & Cannons (possible to add more):</span>
              <ul className="pl-6 space-y-1.5 mt-1 text-[#2d1e15]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Equip, merge, and upgrade up to 10 cannon slots with varying damage tiers (Level 1–10).</span>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold">● Shield (possible to add more):</span>
              <ul className="pl-6 space-y-1.5 mt-1 text-[#2d1e15]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Defensive shields (Levels 1–3) that mitigate or completely absorb incoming enemy fire during battles.</span>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold">● Cosmetics & Customization (possible to add more):</span>
              <ul className="pl-6 space-y-1.5 mt-1 text-[#2d1e15]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Customize ship flags, figureheads, lanterns, and special aura effects purchased from the Shop.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. "The Sea" Game Modes */}
        <div className="space-y-4 bg-[#e8d5b5] p-4 sm:p-5 rounded border border-[#b89569]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15]">
            3. "The Sea" Game Modes
          </h3>

          {/* A. Bombing / PvP Naval Battles */}
          <div className="pl-2 space-y-2">
            <h4 className="font-black text-base text-[#8c5024] uppercase">
              A. Bombing / PvP Naval Battles
            </h4>
            <ul className={`pl-4 space-y-1.5 text-[#2d1e15] font-serif ${subTextClass}`}>
              <li>● Engage rival pirate captains operating on the same server.</li>
              <li>● Fire equipped cannons to damage enemy ships and plunder a percentage of their Gold Coins.</li>
              <li>● Defending ships utilize their active shields to block or deflect attacks.</li>
              <li>● Winning battles can occasionally capture rival cannons as plunder.</li>
            </ul>
          </div>

          {/* B. World Boss Raids */}
          <div className="pl-2 space-y-2 border-t border-[#c2a67e] pt-3">
            <h4 className="font-black text-base text-[#8c5024] uppercase">
              B. World Boss Raids
            </h4>
            <ul className={`pl-4 space-y-1.5 text-[#2d1e15] font-serif ${subTextClass}`}>
              <li>● Co-op boss encounters featuring four mythical sea monsters (possible to add more):</li>
              <li className="pl-4 font-bold text-[#8c5024]">○ Megalodon (Fierce Apex Predator)</li>
              <li className="pl-4 font-bold text-[#8c5024]">○ Siren Queen (Alluring Deep Sea Sorceress)</li>
              <li className="pl-4 font-bold text-[#8c5024]">○ Scylla (Multi-headed Sea Fiend)</li>
              <li className="pl-4 font-bold text-[#8c5024]">○ The Kraken (Legendary Colossus)</li>
              <li>● Every footstep deals 1HP damage to the boss and earns the user a share of the bounty.</li>
              <li>● Features shared boss health bars, critical strike mechanics, and a real-time combat action feed.</li>
              <li>● Defeating a boss awards damage-tiered reward chests containing Rare/Epic cannons, Gems, and relic fragments.</li>
            </ul>
          </div>

          {/* C. GPS Treasure Hunt */}
          <div className="pl-2 space-y-2 border-t border-[#c2a67e] pt-3">
            <h4 className="font-black text-base text-[#8c5024] uppercase">
              C. GPS Treasure Hunt
            </h4>
            <ul className={`pl-4 space-y-1.5 text-[#2d1e15] font-serif ${subTextClass}`}>
              <li>● Geocaches virtual treasure chests in real-world proximity around the player's GPS coordinates.</li>
              <li>● Chests span 4 rarity tiers (Common, Rare, Epic, Legendary).</li>
              <li>● Players must physically walk within a detection radius to open chests and claim coins, gems, and secret relics.</li>
            </ul>
          </div>
        </div>

        {/* 4. Multiplayer, Servers & Social */}
        <div className="space-y-3 bg-[#e8d5b5] p-4 sm:p-5 rounded border border-[#b89569]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15]">
            4. Multiplayer, Servers & Social
          </h3>

          <div className={`space-y-3 pl-2 text-[#2d1e15] font-serif ${bodyTextClass}`}>
            <div>
              <span className="font-bold">● Server Selection:</span>
              <ul className="pl-6 space-y-1.5 mt-1 text-[#2d1e15]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Global Servers: Public hubs with large player populations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Private Room Servers: Custom password-protected or invite-code rooms to play with friends or local walking groups.</span>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold">● Leaderboards:</span>
              <ul className="pl-6 space-y-1.5 mt-1 text-[#2d1e15]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>Real-time ranking categorized by Ship Power Rating, Daily / Weekly Steps Walked, and Total Plunder Stolen.</span>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold">● Player Profiles & Ship Inspection:</span>
              <ul className="pl-6 space-y-1.5 mt-1 text-[#2d1e15]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8c5024]">○</span>
                  <span>View detailed stats (Total Steps, Victories, Bosses Slain) and inspect other captains' ship loadouts.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5.5/ MONETIZATION OPTIONS */}
        <div className="space-y-2 bg-[#e8d5b5] p-4 sm:p-5 rounded border border-[#b89569]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15]">
            5.5/ MONETIZATION OPTIONS
          </h3>
          <ul className={`space-y-1.5 text-[#2d1e15] font-serif ${bodyTextClass} pl-2`}>
            <li>- In-app purchase</li>
            <li>- Advertising</li>
          </ul>
        </div>

        {/* 5.6/ SOURCE CONTROL */}
        <div className="space-y-3 bg-[#e8d5b5] p-4 sm:p-5 rounded border border-[#b89569]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15]">
            5.6/ SOURCE CONTROL
          </h3>
          <div className={`space-y-3 text-[#2d1e15] font-serif ${bodyTextClass}`}>
            <p>1. Collaborative Git method: there will be a joint Github repository for the whole team. We will use Git to track and push code from our personal computer to the repository.</p>
            <p>2. Github branch workflow for each member:</p>
            <ul className="pl-6 space-y-2 text-[#2d1e15]">
              <li>- Step 1: Copy the main code into an isolated branch</li>
              <li>- Step 2: Use AI to generate the code and save the milestone locally</li>
              <li>- Step 3: Push the code to their isolated branch in the joint repository</li>
              <li>- Step 4: Team reviews the code on Github. When approved, injects the code from the prior branch into main using “Merge”. Then, that branch will be deleted</li>
            </ul>
          </div>
        </div>

        {/* 5.7/ RISKS */}
        <div className="space-y-2 bg-[#fbe7e7] p-4 sm:p-5 rounded border-2 border-[#e08b8b]">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-[#b91c1c]" />
            <h3 className="text-lg sm:text-xl font-black uppercase text-[#7f1d1d]">
              5.7/ RISKS
            </h3>
          </div>
          <ul className={`space-y-2 text-[#2d1e15] font-serif ${bodyTextClass} pl-2`}>
            <li>- GPS inaccuracy</li>
            <li>- Battery & Device Drain: Continuous GPS polling, motion sensor listeners, and Web Audio synthesis cause high battery and CPU consumption.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 6: VALIDATION PLAN */}
      <section id="sec-6" className="parchment-card rounded p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b-2 border-[#c2a67e] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#3d2b1f] text-[#facc15] flex items-center justify-center font-black text-lg border-2 border-[#1a0f0a] shadow-md">
              6
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2d1e15]">
              6. VALIDATION PLAN
            </h2>
          </div>
        </div>

        {/* 6.1/ USER TESTING & CLIENT FEEDBACK */}
        <div className="space-y-3 bg-[#e8d5b5] p-4 sm:p-5 rounded border border-[#b89569]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15]">
            6.1/ USER TESTING & CLIENT FEEDBACK
          </h3>
          <ul className={`space-y-2.5 text-[#2d1e15] font-serif ${bodyTextClass} pl-2`}>
            {SECTION_6_VALIDATION_PLAN.userTesting.bullets.map((bullet, idx) => (
              <li key={idx}>- {highlightText(bullet)}</li>
            ))}
          </ul>
        </div>

        {/* 6.2/ ANALYTICS AND BEHAVIORAL TRACKING */}
        <div className="space-y-3 bg-[#e8d5b5] p-4 sm:p-5 rounded border border-[#b89569]">
          <h3 className="text-lg sm:text-xl font-black uppercase text-[#2d1e15]">
            6.2/ ANALYTICS AND BEHAVIORAL TRACKING
          </h3>
          <ul className={`space-y-2.5 text-[#2d1e15] font-serif ${bodyTextClass} pl-2`}>
            {SECTION_6_VALIDATION_PLAN.analytics.bullets.map((bullet, idx) => (
              <li key={idx}>- {highlightText(bullet)}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 9: REFERENCE LIST */}
      <section id="sec-9" className="parchment-card rounded p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b-2 border-[#c2a67e] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#3d2b1f] text-[#facc15] flex items-center justify-center font-black text-lg border-2 border-[#1a0f0a] shadow-md">
              9
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2d1e15]">
              9. REFERENCE LIST
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {SECTION_9_REFERENCES.map((ref) => (
            <div 
              key={ref.id}
              className="p-4 sm:p-5 rounded bg-[#e8d5b5] border border-[#b89569] space-y-2"
            >
              <div className={`text-[#2d1e15] font-serif ${bodyTextClass}`}>
                <span className="font-bold">{ref.author}</span> {ref.date} {ref.title}, <span className="italic">{ref.publication}</span>, {ref.accessed}.
              </div>
              <div>
                <a 
                  href={ref.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#8c5024] hover:text-[#2d1e15] font-semibold underline break-all inline-flex items-center gap-1.5 text-sm sm:text-base"
                >
                  <span>{ref.url}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
