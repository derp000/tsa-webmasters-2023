export { cta, bodyIntro, bodySite, bodyMission, bodyTrain, bodyRundown };

const cta = "We're gonna get YOU to space.";

const bodyIntro = `
  Helios is an international, English-speaking astronaut training 
  program that includes vetting candidates, two-year long formal astronaut 
  training, and a crewed Mars mission in partnership with NASA and ESA.`;

const bodySite = `
  Helios is based out of Huntsville, Alabama, a world-renowned hub for aerospace. 
  At Space Camp in Huntsville Alabama, where many youth and adults do mock astronaut training, 
  Helios will construct their own building. Space Camp, which is internationally funded by space 
  programs, already has many advanced features including a neutral buoyancy pool, three duplicate 
  spacecraft for stimulations, and a newly built mars habitat stimulator. These will be shared by 
  Space Camp and Helios for training purposes. In its own building, Helios will build a g-force 
  accelerator, physical and mental testing rooms, and offices.
`;

const bodyMission = `To make space training more accessible to an international 
  audience thus uniting nations through space and to further scientific research in spaceflight.`;

const bodyTrain = (
  <>
    <p>
      Astronauts will take classes in shuttle systems, basic science,
      technology, and mathematics. Astronauts trainees will also specialize in
      at least one field to compliment other astronaut's strengths in our group
      missions. These include:
    </p>
    <ul className="list-disc ml-5">
      <li>Orbital dynamics</li>
      <li>Astrology and astrophysics</li>
      <li>Meteorology and geology</li>
      <li>Medical and health sciences</li>
    </ul>
  </>
);

const bodyRundown = (
  <>
    <p>
      The Mars Exploration mission will launch using a balloon hybrid with the
      rocket powered by a VASIMR engine (Variable Specific Impulse Magnetoplasma
      Rocket). The rocket will launch from Kennedy Space Center,{" "}
      <p className="italic inline">the</p> hub for NASA rocket launches.
    </p>
    <p>
      The rocket's crew capsule will separate from the rest of the rocket during
      reentry. The rest of the rocket will return to Kennedy Space Center and
      redock itself on a platform for reusability. The crew capsule will land in
      a predetermined location near Newfoundland in the Atlantic Ocean. The
      specific landing sight will be determined two weeks before landing
      recovery based on the position of the spacecraft, weather conditions at
      splashdown sight, and availability of nearby rescue teams. A prepositioned
      crew will be at the projected launch sight trained in normal and emergency
      splash down scenarios. The mission team will establish a safety zone
      around the landing sight to protect the boating public and aircraft.
      Immediately after splashdown, two fast boats with personnel deploy from
      the main recovery ship. One of these boats checks for capsule integrity
      and tests the area around the ship for dangerous vapors. Then this boat
      prepares the spaceship for the main recovery ship. The second fast boat is
      responsible for recovering the capsule's parachutes which were earlier
      deployed from the capsule. Once the main recovery vessel is in position,
      it hoists the capsule on deck for the hatch to be opened. Medical
      professionals will be present to assist the crew if needed.
    </p>
  </>
);
