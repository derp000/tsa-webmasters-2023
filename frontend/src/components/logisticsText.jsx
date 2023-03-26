export {
  bodyLaunch,
  bodyRecoverFirst,
  bodyRecoverMid,
  bodyRecoverLast,
  bodyCharon,
  bodyOtv,
};

const bodyLaunch = (
  <p>
    The Mars Exploration mission will launch using a balloon hybrid with the
    rocket powered by a VASIMR engine (Variable Specific Impulse Magnetoplasma
    Rocket). The rocket will launch from Kennedy Space Center,{" "}
    <p className="italic inline">the</p> hub for NASA rocket launches.
  </p>
);

const bodyRecoverFirst = (
  <>
    The rocket's crew capsule will separate from the rest of the rocket during
    reentry. The rest of the rocket will return to Kennedy Space Center and
    redock itself on a platform for reusability. The crew capsule will land in a
    predetermined location near Newfoundland in the Atlantic Ocean. The specific
    landing sight will be determined two weeks before landing recovery based on
    the position of the spacecraft, weather conditions at splashdown sight, and
    availability of nearby rescue teams.
  </>
);

const bodyRecoverMid = (
  <>
    A prepositioned crew will be at the projected launch sight trained in normal
    and emergency splash down scenarios. The mission team will establish a
    safety zone around the landing sight to protect the boating public and
    aircraft. Immediately after splashdown, two fast boats with personnel deploy
    from the main recovery ship. One of these boats checks for capsule integrity
    and tests the area around the ship for dangerous vapors. Then this boat
    prepares the spaceship for the main recovery ship.
  </>
);

const bodyRecoverLast = (
  <>
    The second fast boat is responsible for recovering the capsule’s parachutes
    which were earlier deployed from the capsule. Once the main recovery vessel
    is in position, it hoists the capsule on deck for the hatch to be opened.
    Medical professionals will be present to assist the crew if needed.
  </>
);

const bodyCharon = (
  <div className="leading-[4rem]">
    The Charon is everything you've dreamed for. This reusable and sustainable
    vehicle will get you to and from Mars. It carries 6 people and sports 33 RCS
    thrusters, 6 hypergolic engines, and 9 LOX-CH4 engines providing 310 kN of
    thurst each.
  </div>
);

const bodyOtv = (
  <div className="leading-[4rem] lg:my-16">
    Our Orbit Transition Vehicle can reach mars in just a month, 6 to 10 times
    faster than the competition thanks to our cutting-edge VASIMR engine.
  </div>
);
