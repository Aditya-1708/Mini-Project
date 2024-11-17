export const jeeQuestions = {
  Physics: {
    AlternatingCurrent: {
      JEE2024: [
        {
          question:
            "Primary	side	of	a	transformer	is	connected	to	230	V,	50Hz	supply.	Turns ratio	of	primary	to	secondary	winding	is	10:1.	Load	resistance connected	to	secondary	side	is	46Ω.	The	power	consumed	in	it	is	:",
          options: [
            {
              text: "12.5W",
            },
            {
              text: "10.0W",
            },
            {
              text: "11.5W",
              correct: true,
            },
            {
              text: "12.0W",
            },
          ],
          explanation:
            "Given: Primary voltage V_p = 230 V, frequency = 50 Hz, turns ratio (primary to secondary) = 10:1, load resistance R_L = 46 Ω. Secondary voltage V_s = V_p / 10 = 230 / 10 = 23 V. Secondary current I_s = V_s / R_L = 23 / 46 = 0.5 A. Power consumed in load = V_s * I_s = 23 * 0.5 = 11.5 W.",
        },
        {
          question:
            "A	series	LCR	circuit	with	L	=	100/π	mH,	C	=	10-3/π	F	and	R	=	10Ω,	is connected	across	an	ac	source	of	220V,	50Hz	supply.	The	power	factor of	the	circuit	would	be___",
          options: [
            {
              text: "1",
              correct: true,
            },
            {
              text: "2",
            },
            {
              text: "5",
            },
            {
              text: "9",
            },
          ],
          explanation:
            "Given: A series LCR circuit with L = 100/π mH, C = 10^-3/π F, R = 10 Ω, AC supply voltage = 220 V, frequency = 50 Hz. Solution steps: 1. Convert inductance and capacitance to standard units: L = 100/π × 10^(-3) H = 0.1/π H, C = 10^-3/π F. 2. Angular frequency ω = 2πf = 2π × 50 = 100π rad/s. 3. Inductive reactance X_L = ωL = 100π × (0.1/π) = 10 Ω. 4. Capacitive reactance X_C = 1 / (ωC) = 1 / (100π × 10^(-3)/π) = 10 Ω. 5. Since X_L = X_C, the circuit is at resonance, so the impedance Z = R = 10 Ω. 6. Power factor (cos ϕ) = R / Z = 10 / 10 = 1. Answer: The power factor of the circuit is 1.",
        },
        {
          question:
            "A	series	L,R	circuit	connected	with	an	ac	source	E	=	(25sin	1000t)V	has a	power	factor	of	1/√2.	If	the	source	of	emf	is	changed	to	E=(20sin2000 t)V,	the	new	power	factor	of	the	circuit	will	be	:",
          options: [
            {
              text: "1/√2",
            },
            {
              text: "1/√3",
            },
            {
              text: "1/√5",
              correct: true,
            },
            {
              text: "1/√7",
            },
          ],
          explanation:
            "Given: A series L-R circuit connected with an AC source E = (25sin 1000t) V has a power factor of 1/√2. The source of emf is changed to E = (20sin 2000t) V. Solution steps: 1. Initial angular frequency ω₁ = 1000 rad/s, and initial power factor = 1/√2. 2. New angular frequency ω₂ = 2000 rad/s. 3. In an L-R circuit, the power factor depends on the ratio of resistance (R) to inductive reactance (X_L = ωL). 4. Doubling the frequency (from ω₁ to ω₂) doubles the inductive reactance (X_L ∝ ω). 5. Since X_L increases, the power factor decreases due to the increased reactance. Answer: The new power factor of the circuit will be 1/√5.",
        },
        {
          question:
            "An	alternating	voltage	V(t)	=	220sin	100πt	volt	is	applied	to	a	purely resistive	load	of	50Ω.	The	time	taken	for	the	current	to	rise	from	half	of the	peak	value	to	the	peak	value	is:",
          options: [
            {
              text: "5	ms",
            },
            {
              text: "3.3	ms",
              correct: true,
            },
            {
              text: "7.2	ms",
            },
            {
              text: "2.2	ms",
            },
          ],
          explanation:
            "Given: An alternating voltage V(t) = 220sin(100πt) volts is applied to a purely resistive load of 50 Ω. Solution steps: 1. Peak voltage V_peak = 220 V. 2. Peak current I_peak = V_peak / R = 220 / 50 = 4.4 A. 3. Time period T = 2π / ω = 2π / 100π = 0.02 s (where ω = 100π). 4. The time to rise from half of the peak current (2.2 A) to the peak (4.4 A) is a quarter of the period for a sine function, so time taken = T / 6 = 0.02 / 6 = 0.003 s. Answer: The time taken for the current to rise from half of the peak value to the peak value is 0.003 s.",
        },
        {
          question:
            "A	power	transmission	line	feeds	input	power	at	2.3	kV	to	a	step	down transformer	with	its	primary	winding	having	3000	turns.	The	output power	is	delivered	at	230V	by	the	transformer.	The	current	in	the primary	of	the	transformer	is	5A	and	its	efficiency	is	90%.	The	winding of	transformer	is	made	of	copper.	The	output	current	of	transformer is_____A.",
          options: [
            {
              text: "50 A",
            },
            {
              text: "65 A",
            },
            {
              text: "97 A",
            },
            {
              text: "45 A",
              correct: true,
            },
          ],
          explanation:
            "Given: Input voltage V_p = 2.3 kV, primary turns = 3000, output voltage V_s = 230 V, primary current I_p = 5 A, efficiency = 90%. Solution steps: 1. Input power P_in = V_p × I_p = 2.3 kV × 5 A = 11.5 kW. 2. Efficiency η = (P_out / P_in) × 100, so P_out = η × P_in = 0.9 × 11.5 kW = 10.35 kW. 3. Output power P_out = V_s × I_s, so I_s = P_out / V_s = 10.35 kW / 230 V. 4. I_s = 10350 W / 230 V = 45 A. Answer: The output current of the transformer is 45 A.",
        },
      ],
      JEE2023: [
        {
          question:
            "In	an	LC	oscillator,	if	values	of	inductance	and	capacitance	become twice	and	eight	times,	respectively,	then	the	resonant	frequency	of oscillator	becomes	x	times	its	initial	resonant	frequency	ω0.	The	value of	x	is:",
          options: [
            {
              text: "1 ∕ 4",
              correct: true,
            },
            {
              text: "16",
            },
            {
              text: "1 ∕ 16",
            },
            {
              text: "4",
            },
          ],
          explanation:
            "Given: In an LC oscillator, inductance L becomes twice its initial value, and capacitance C becomes eight times its initial value. Solution steps: 1. The resonant frequency ω₀ of an LC oscillator is given by: ω₀ = 1 / √(LC). 2. If L becomes 2L and C becomes 8C, the new resonant frequency ω' becomes: ω' = 1 / √(2L × 8C) = 1 / √(16LC) = ω₀ / 4. 3. Therefore, the resonant frequency becomes 1/4 of its initial value. Answer: The value of x is 1/4.",
        },
        {
          question:
            "An	LCR	series	circuit	of	capacitance	62.5nF	and	resistance	of	50Ω.	is connected	to	an	A.C.	source	of	frequency	2.0kHz.	For	maximum	value	of amplitude	of	current	in	circuit,	the	value	of	inductance	is	________	mH. (take	π2=10	)",
          options: [
            {
              text: "100mH",
              correct: true,
            },
            {
              text: "150mH",
            },
            {
              text: "175mH",
            },
            {
              text: "225mH",
            },
          ],
          explanation:
            "Given: Capacitance C = 62.5 nF, resistance R = 50 Ω, frequency f = 2.0 kHz, π² = 10. Solution steps: 1. For maximum current in an LCR circuit, the condition of resonance is X_L = X_C, where X_L = ωL and X_C = 1 / (ωC), and ω = 2πf. 2. At resonance, ωL = 1 / (ωC), so L = 1 / (ω² C). 3. Using ω = 2πf, and ω² = 4π²f², we get: L = 1 / (4π²f²C). 4. Substituting the given values: L = 1 / (4 × 10 × (2.0 × 10³)² × 62.5 × 10⁻⁹). 5. Simplifying: L = 1 / (10⁸ × 62.5 × 10⁻⁹) = 0.1 H = 100 mH. Answer: The value of inductance is 100 mH.",
        },
        {
          question:
            "A	sinusoidal	carrier	voltage	is	amplitude	modulated.	The	resultant amplitude	modulated	wave	has	maximum	and	minimum	amplitude	of 120V	and	80V	respectively.	The	amplitude	of	each	sideband	is	:",
          options: [
            {
              text: "15V",
            },
            {
              text: "10V",
              correct: true,
            },
            {
              text: "20V",
            },
            {
              text: "5V",
            },
          ],
          explanation:
            "Given: Maximum amplitude of AM wave = 120 V, minimum amplitude of AM wave = 80 V. Solution steps: 1. In an amplitude modulated wave, the maximum amplitude A_max is given by A_max = A_c + A_m, and the minimum amplitude A_min is given by A_min = A_c - A_m, where A_c is the carrier amplitude and A_m is the amplitude of the modulation. 2. Given: A_max = 120 V, A_min = 80 V. 3. Solving for the carrier amplitude A_c and the modulation amplitude A_m: A_c + A_m = 120, A_c - A_m = 80. 4. Adding both equations: 2A_c = 200, so A_c = 100 V. 5. Subtracting the second equation from the first: 2A_m = 40, so A_m = 20 V. 6. The amplitude of each sideband is A_c, which is 100*(20/100*2). Answer: The amplitude of each sideband is 10 V.",
        },
        {
          question:
            "In	a	series	LR	circuit	with	XL = R.	power	factor	is	P1.	If	a	capacitor	of capacitance	C	with	XC = XL	is	added	to	the	circuit	the	power	factor becomes	P2.	The	ratio	of	P1	to	P2	will	be	:",
          options: [
            {
              text: "1 : 3",
            },
            {
              text: "1 : √ 2",
              correct: true,
            },
            {
              text: "1 : 1",
            },
            {
              text: "1 : 2",
            },
          ],
          explanation:
            "Given: In a series LR circuit, X_L = R, the power factor is P1. A capacitor of capacitance C with X_C = X_L is added to the circuit, and the power factor becomes P2. Solution steps: 1. In a series LR circuit, the power factor P1 is given by cos φ₁ = R / √(R² + X_L²). Since X_L = R, the power factor P1 becomes: P1 = R / √(R² + R²) = R / √(2R²) = 1 / √2. 2. When a capacitor is added such that X_C = X_L = R, the total reactance of the circuit becomes zero, and the impedance becomes purely resistive (Z = R), so the power factor P2 becomes: P2 = R / Z = R / R = 1. 3. The ratio of P1 to P2 is: P1 / P2 = (1 / √2) / 1 = 1 / √2. Answer: The ratio of P1 to P2 is 1 / √2.",
        },
        {
          question:
            "An	alternating	voltage	source	V=260sin(628t)	is	connected	across	a pure	inductor	of	5mH.	Inductive	reactance	in	the	circuit	is:",
          options: [
            {
              text: "3.14Ω",
              correct: true,
            },
            {
              text: "6.28Ω",
            },
            {
              text: "0.5Ω",
            },
            {
              text: "0.318Ω",
            },
          ],
          explanation:
            "Given: Voltage source V = 260 sin(628t), inductance L = 5 mH. Solution steps: 1. The inductive reactance X_L is given by the formula: X_L = ωL, where ω is the angular frequency and L is the inductance. 2. The angular frequency ω is given by: ω = 628 rad/s (from the equation sin(628t)). 3. Substituting the values of ω and L: X_L = 628 × 5 × 10⁻³. 4. Simplifying: X_L = 628 × 0.005 = 3.14 Ω. Answer: The inductive reactance in the circuit is 3.14 Ω.",
        },
      ],
    },
    WorkEnergyAndPower: {
      JEE2024: [
        {
          question:
            "A	spherical	body	of	mass	2kg	starting	from	rest	acquires	a	kinetic energy	of	10000J	at	the	end	of	5th		second.	The	force	acted	on	the	body is	___N.",
          options: [
            {
              text: "35 N",
            },
            {
              text: "55 N",
            },
            {
              text: "40 N",
              correct: true,
            },
            {
              text: "10 N",
            },
          ],
          explanation:
            "Given: Mass of the spherical body m = 2 kg, kinetic energy at the end of 5th second K = 10000 J, initial velocity u = 0 m/s (starting from rest), time t = 5 seconds. Solution steps: 1. Kinetic energy is given by the formula: K = (1/2) m v², where v is the velocity at the end of 5th second. 2. From the given kinetic energy K = 10000 J: 10000 = (1/2) × 2 × v², 10000 = v², v = √10000 = 100 m/s. 3. The velocity at any time t for uniformly accelerated motion is given by: v = u + at. Since u = 0, v = at. Substituting v = 100 m/s and t = 5 seconds: 100 = a × 5, a = 100/5 = 20 m/s². 4. The force F is given by Newton's second law: F = ma. Substituting m = 2 kg and a = 20 m/s²: F = 2 × 20 = 40 N. Answer: The force acting on the body is 40 N.",
        },
        {
          question:
            "An electron rotates in a circle around a nucleus having positive charge Ze. Correct relation between total energy (E) of electron to its potential energy (U) is:",
          options: [
            {
              text: "E = 2U",
            },
            {
              text: "2E = 3U",
            },
            {
              text: "E = U",
            },
            {
              text: "2E = U",
              correct: true,
            },
          ],
          explanation:
            "Given: Electron rotating in a circle around a nucleus with charge Ze. Solution steps: 1. The total energy E of an electron in orbit is the sum of its kinetic energy (K) and potential energy (U). 2. The kinetic energy K of the electron is given by: K = (1/2)mv², where v is the velocity of the electron. 3. The potential energy U is given by: U = - (Ze²) / (4πε₀r), where r is the radius of the orbit. 4. By Coulomb's law, the force between the electron and nucleus provides the centripetal force, so the centripetal force is equal to the Coulomb force: (mv²) / r = (Ze²) / (4πε₀r²). 5. Using the above relationship, it can be shown that the total energy E is related to the potential energy U as: E = (U / 2). Answer: The correct relation between the total energy (E) and potential energy (U) of the electron is E = (U / 2) or 2E = U.",
        },
        {
          question:
            "The magnetic moment of a bar magnet is 0.5 Am2. It is suspended in a uniform magnetic field of  8 × 10–2 T. The work done in rotating it from its most stable to most unstable position is : ",
          options: [
            {
              text: "16 × 10–2 J",
            },
            {
              text: "8 × 10–2 J",
            },
            {
              text: "4 × 10–2 J",
              correct: true,
            },
            {
              text: "Zero",
            },
          ],
          explanation:
            "Given: Magnetic moment of bar magnet M = 0.5 Am², magnetic field strength B = 8 × 10⁻² T. Solution steps: 1. The work done in rotating a magnetic dipole from the most stable to the most unstable position is given by the formula: W = M × B × (cosθ₁ - cosθ₂), where θ₁ and θ₂ are the angles in the most stable and most unstable positions respectively. 2. In the most stable position, θ₁ = 0° and cos(0°) = 1. 3. In the most unstable position, θ₂ = 180° and cos(180°) = -1. 4. Substituting values: W = 0.5 × 8 × 10⁻² × (1 - (-1)) = 0.5 × 8 × 10⁻² × 2 = 8 × 10⁻² J. Answer: The work done in rotating the bar magnet is 8 × 10⁻² J.",
        },
        {
          question:
            "A body of mass 0.5 kg travels on straight line path with velocity v = (3x2 + 4) m/s. The network done by the force during its displacement from x = 0 to x = 2 m is",
          options: [
            {
              text: "64 J",
            },
            {
              text: "60 J",
              correct: true,
            },
            {
              text: "120 J",
            },
            {
              text: "128 J",
            },
          ],
          explanation:
            "Given: Mass of body m = 0.5 kg, velocity v = (3x² + 4) m/s, initial position x₁ = 0 m, final position x₂ = 2 m. Solution steps: 1. Kinetic energy K is given by K = (1/2)mv². Substitute for v to get K in terms of x. 2. Substitute v = (3x² + 4) into K to get K = (1/2) * 0.5 * (3x² + 4)² = (1/4)(3x² + 4)². 3. The work done W is the change in kinetic energy from x = 0 to x = 2, so W = K(x=2) - K(x=0). 4. Calculate K(x=2): K(x=2) = (1/4)(3(2)² + 4)² = (1/4)(12 + 4)² = (1/4)(16)² = (1/4)(256) = 64 J. 5. Calculate K(x=0): K(x=0) = (1/4)(3(0)² + 4)² = (1/4)(4)² = (1/4)(16) = 4 J. 6. Therefore, W = K(x=2) - K(x=0) = 64 - 4 = 60 J. Answer: The network done by the force during the displacement is 60 J.",
        },
        {
          question:
            "If a rubber ball falls from a height h and rebounds upto the height of h/2. The percentage loss of total energy of the initial system as well as velocity ball before it strikes the ground, respectively, are :",
          options: [
            {
              text: "28 J",
            },
            {
              text: "58 J",
              correct: true,
            },
            {
              text: "128 J",
            },
            {
              text: "75 J",
            },
          ],
          explanation:
            "Given: Force F(x) = 3x² + 2x - 5 N, displacement from x₁ = 2 m to x₂ = 4 m. Solution steps: 1. Work done by the force is given by the integral of the force over the displacement: W = ∫(F(x)) dx from x₁ to x₂. 2. The expression for the force is F(x) = 3x² + 2x - 5. 3. The work done is W = ∫(3x² + 2x - 5) dx from x = 2 to x = 4. 4. Integrating the function: ∫(3x² + 2x - 5) dx = x³ + x² - 5x. 5. Evaluating the integral from x = 2 to x = 4: W = [(4³ + 4² - 5×4) - (2³ + 2² - 5×2)] = [(64 + 16 - 20) - (8 + 4 - 10)] = [60 - 2] = 58 J. Answer: The work done by the force is 58 J.",
        },
      ],
      JEE2023: [
        {
          question:
            "A	0.4kg	mass	takes	8	s	to	reach	ground	when	dropped	from	a	certain height	'	P	'	above	surface	of	earth.	The	loss	of	potential	energy	in	the last	second	of	fall	is	J.	[Take	g = 10m ∕	s2	]",
          options: [
            {
              text: "125 J",
            },
            {
              text: "200 J",
            },
            {
              text: "300 J",
              correct: true,
            },
            {
              text: "400 J",
            },
          ],
          explanation:
            "Given: Mass m = 0.4 kg, time to reach the ground t = 8 s, gravitational acceleration g = 10 m/s². Solution steps: 1. The total height 'P' from which the mass is dropped can be found using the equation for free fall: P = (1/2) g t². Substituting the values: P = (1/2) × 10 × (8)² = 5 × 64 = 320 m. 2. To find the loss of potential energy in the last second, we need the distance covered in the 8th second. The distance Sₙ covered in the nth second is given by: Sₙ = u + (1/2) g (2n - 1). Since initial velocity u = 0, for the 8th second: S₈ = (1/2) × 10 × (2 × 8 - 1) = 5 × 15 = 75 m. 3. The loss of potential energy in the last second of fall is: ΔPE = m × g × S₈. Substituting the values: ΔPE = 0.4 × 10 × 75 = 300 J. Answer: The loss of potential energy in the last second of fall is 300 J.",
        },
        {
          question:
            "Identify	the	correct	statements	from	the	following: (A)	Work	done	by	a	man	in	lifting	a	bucket	out	of	a	well	by	means	of	a rope	tied	to	the	bucket	is	negative. (B)	Work	done	by	gravitational	force	in	lifting	a	bucket	out	of	a	well	by a	rope	tied	to	the	bucket	is	negative. (C)	Work	done	by	friction	on	a	body	sliding	down	an	inclined	plane	is positive. (D)	Work	done	by	an	applied	force	on	a	body	moving	on	a	rough horizontal	plane	with	uniform	velocity	in	zero. (E)	Work	done	by	the	air	resistance	on	an	oscillating	pendulum	in negative. Choose	the	correct	answer	from	the	options	given	below:",
          options: [
            {
              text: "B	and	E	only",
              correct: true,
            },
            {
              text: "A	and	C	only",
            },
            {
              text: "B,	D	and	E	only",
            },
            {
              text: "B	and	D	only",
            },
          ],
          explanation:
            "The correct statements are B and E.so the correct option is A",
        },
        {
          question:
            "A	body	of	mass	2kg	is	initially	at	rest.	It	starts	moving	unidirectionally under	the	influence	of	a	source	of	constant	power	P.	Its	displacement	in 4	s	is	1/3 α2√Pm.	The	value	of	α	will	be	_______",
          options: [
            {
              text: "5.4",
            },
            {
              text: "2.4",
            },
            {
              text: "4",
              correct: true,
            },
            {
              text: "3",
            },
          ],
          explanation:
            "Given: Mass m = 2 kg, initial velocity u = 0 (initially at rest), time t = 4 s, constant power P, displacement in 4 s = (1/3) * (α²) * (√(P * m)). Solution steps: 1. For a body moving under constant power, displacement s in time t is given by: s = (2/3) * (P / m)^(1/2) * t^(3/2). 2. Equating given displacement and derived displacement formula: (1/3) * (α²) * (√(P * m)) = (2/3) * (P / m)^(1/2) * t^(3/2). 3. Substitute m = 2 kg and t = 4 s, then solve for α. Answer: The value of α will be 4.",
        },
        {
          question:
            "A	ball	of	mass	200g	rests	on	a	vertical	post	of	height	20m.	A	bullet	of mass	10g,	travelling	in	horizontal	direction,	hits	the	centre	of	the	ball. After	collision	both	travels	independently.	The	ball	hits	the	ground	at	a distance	30m	and	the	bullet	at	a	distance	of	120m	from	the	foot	of	the 1 x ( ) 3 3 post.	The	value	of	initial	velocity	of	the	bullet	will	be	(if	g = 10m ∕	s2	)	:",
          options: [
            {
              text: "120m ∕	s",
            },
            {
              text: "60m ∕	s",
            },
            {
              text: "400m ∕	s",
            },
            {
              text: "360m ∕	s",
              correct: true,
            },
          ],
          explanation:
            "Given: Mass of ball m₁ = 200 g = 0.2 kg, height of post h = 20 m, mass of bullet m₂ = 10 g = 0.01 kg, horizontal distance traveled by the ball after collision = 30 m, horizontal distance traveled by the bullet after collision = 120 m, gravitational acceleration g = 10 m/s². Solution steps: 1. Time taken for the ball to fall from a height h is given by: t = √(2h / g). Substituting the values: t = √(2 × 20 / 10) = √4 = 2 s. 2. The horizontal velocity of the ball (v₁) after the collision is: v₁ = horizontal distance of ball / t = 30 / 2 = 15 m/s. 3. The horizontal velocity of the bullet (v₂) after the collision is: v₂ = horizontal distance of bullet / t = 120 / 2 = 60 m/s. 4. Using conservation of momentum, the initial velocity of the bullet (u) is: u = (m₁ * v₁ + m₂ * v₂) / m₂. Substituting the values: u = ((0.2 * 15) + (0.01 * 60)) / 0.01 = (3 + 0.6) / 0.01 = 360 m/s. Answer: The initial velocity of the bullet is 360 m/s.",
        },
        {
          question:
            "A	machine	gun	of	mass	10kg	fires	20g	bullets	at	the	rate	of	180	bullets per	minute	with	a	speed	of	100m	s−1	each.	The	recoil	velocity	of	the	gun is	:",
          options: [
            {
              text: "0.02m ∕	s",
            },
            {
              text: "2.5m ∕	s",
            },
            {
              text: "1.5m ∕	s",
            },
            {
              text: "0.6m ∕	s",
              correct: true,
            },
          ],
          explanation:
            "Given: Mass of gun M = 10 kg, mass of each bullet m = 20 g = 0.02 kg, rate of firing = 180 bullets per minute, speed of each bullet v = 100 m/s. Solution steps: 1. First, convert the firing rate to bullets per second: 180 bullets per minute = 180 / 60 = 3 bullets per second. 2. Total momentum imparted by bullets per second = number of bullets per second * mass of each bullet * velocity of each bullet. Substituting values: momentum = 3 * 0.02 * 100 = 6 kg·m/s. 3. By conservation of momentum, the recoil momentum of the gun must equal the momentum of the bullets per second. Let V be the recoil velocity of the gun. Then, M * V = 6. Rearranging for V: V = 6 / 10 = 0.6 m/s. Answer: The recoil velocity of the gun is 0.6 m/s.",
        },
      ],
    },
    Gravitation: {
      JEE2024: [
        {
          question:
            "The	acceleration	due	to	gravity	on	the	surface	of	earth	is	g.	If	the diameter	of	earth	reduces	to	half	of	its	original	value	and	mass	remains constant,	then	acceleration	due	to	gravity	on	the	surface	of	earth	would be	:",
          options: [
            {
              text: "g∕4",
            },
            {
              text: "2g",
            },
            {
              text: "g∕2",
            },
            {
              text: "4g",
              correct: true,
            },
          ],
          explanation:
            "Given: Acceleration due to gravity on the surface of Earth is g, and the diameter of Earth reduces to half of its original value while the mass remains constant. Solution steps: 1. The formula for acceleration due to gravity g is given by: g = G * M / R², where G is the gravitational constant, M is the mass of Earth, and R is the radius of Earth. 2. If the diameter of Earth is halved, the radius R becomes half of its original value, so R' = R/2. 3. Substituting the new radius into the formula for gravity: g' = G * M / (R/2)² = G * M / (R² / 4) = 4 * (G * M / R²) = 4 * g. 4. Therefore, the new acceleration due to gravity will be 4g. Answer: The acceleration due to gravity on the surface of Earth would be 4g.",
        },
        {
          question:
            "A	planet	takes	200	days	to	complete	one	revolution	around	the	Sun.	If the	distance	of	the	planet	from	Sun	is	reduced	to	one	fourth	of	the original	distance,	how	many	days	will	it	take	to	complete	one revolution?",
          options: [
            {
              text: "25",
              correct: true,
            },
            {
              text: "50",
            },
            {
              text: "100",
            },
            {
              text: "20",
            },
          ],
          explanation:
            "Given: Time taken for one revolution by the planet T₁ = 200 days, distance from Sun r₁, new distance r₂ = (1/4)r₁. Solution steps: 1. According to Kepler's third law, the square of the time period T is directly proportional to the cube of the distance from the Sun, i.e., T² ∝ r³. 2. Using the relationship T₁² / T₂² = r₁³ / r₂³, and substituting r₂ = (1/4)r₁: (T₁² / T₂²) = (r₁³ / (1/4)³r₁³) = 4³ = 64. 3. Therefore, T₂ = T₁ / 8. Substituting T₁ = 200 days: T₂ = 200 / 8 = 25 days. Answer: The planet will take 25 days to complete one revolution.",
        },
        {
          question:
            "The	gravitational	potential	at	a	point	above	the	surface	of	earth	is	−5.12 ×	107J∕kg	and	the	acceleration	due	to	gravity	at	that	point	is	6.4m∕	s2. Assume	that	the	mean	radius	of	earth	to	be	6400km.	The	height	of	this point	above	the	earth's	surface	is	:",
          options: [
            {
              text: "540	km",
            },
            {
              text: "1200	km",
            },
            {
              text: "1000	km",
            },
            {
              text: "1600	km",
              correct: true,
            },
          ],
          explanation:
            "Given: Gravitational potential at a point above the Earth's surface = −5.12 × 10⁷ J/kg, acceleration due to gravity at that point = 6.4 m/s², mean radius of Earth = 6400 km = 6.4 × 10⁶ m. Solution steps: 1. The gravitational potential at a height h above the Earth's surface is given by the formula: V = -GM / (R + h), where G is the gravitational constant, M is the mass of the Earth, R is the radius of the Earth, and h is the height above the surface. 2. The acceleration due to gravity at height h is given by: g = GM / (R + h)². 3. From the equation for g, we can solve for GM: GM = g(R + h)². Substituting the given values: GM = 6.4 × (6.4 × 10⁶ + h)². 4. Now, using the formula for gravitational potential, V = -GM / (R + h), we substitute GM from the previous step: -5.12 × 10⁷ = -6.4 × (6.4 × 10⁶ + h)² / (6.4 × 10⁶ + h). 5. Solving for h, we find: h = 1.6 × 10⁶ m = 1600 km. Answer: The height of the point above the Earth's surface is 1600 km.",
        },
        {
          question:
            "Escape	velocity	of	a	body	from	earth	is	11.2km∕	s.	If	the	radius	of	a planet	be	one-third	the	radius	of	earth	and	mass	be	one-sixth	that	of earth,	the	escape	velocity	from	the	plate	is:",
          options: [
            {
              text: "11.2km∕	s",
            },
            {
              text: "8.4km∕	s",
            },
            {
              text: "4.2km∕	s",
            },
            {
              text: "7.9km∕	s",
              correct: true,
            },
          ],
          explanation:
            "Given: Escape velocity of a body from Earth = 11.2 km/s, radius of planet = (1/3) radius of Earth, mass of planet = (1/6) mass of Earth. Solution steps: 1. Escape velocity (v) is given by the formula: v = √(2GM / R), where G is the gravitational constant, M is the mass of the planet, and R is the radius of the planet. 2. Let escape velocity from Earth be vₑ, then: vₑ = √(2GMₑ / Rₑ), where Mₑ and Rₑ are the mass and radius of Earth. 3. For the new planet, the escape velocity vₚ is: vₚ = √(2G(Mₑ/6) / (Rₑ/3)). 4. Simplifying: vₚ = √(2GMₑ / Rₑ) × √(1/2) = vₑ / √2. 5. Substituting the value of vₑ = 11.2 km/s: vₚ = 11.2 / √2 ≈ 7.92 km/s. Answer: The escape velocity from the planet is approximately 7.92 km/s.",
        },
        {
          question:
            "The	mass	of	the	moon	is	1/144	times	the	mass	of	a	planet	and	its diameter	1/16	times	the	diameter	of	a	planet.	If	the	escape	velocity	on the	planet	is	v,	the	escape	velocity	on	the	moon	will	be:",
          options: [
            {
              text: "V/3",
              correct: true,
            },
            {
              text: "V/4",
            },
            {
              text: "V/12",
            },
            {
              text: "V/6",
            },
          ],
          explanation:
            "Given: Mass of moon = (1/144) × mass of planet, Diameter of moon = (1/16) × diameter of planet. Escape velocity on the planet = v. Solution steps: 1. The escape velocity (vₑ) is given by the formula: vₑ = √(2GM/R), where G is the gravitational constant, M is the mass, and R is the radius of the body. 2. For the planet, escape velocity is vₑₚ = √(2GMₚ/Rₚ), where Mₚ and Rₚ are the mass and radius of the planet. 3. For the moon, escape velocity is vₑₘ = √(2GMₘ/Rₘ), where Mₘ and Rₘ are the mass and radius of the moon. 4. The mass of the moon is (1/144) of the mass of the planet, and the radius of the moon is (1/16) of the radius of the planet (since radius is half of the diameter). 5. Substituting these values into the formula for escape velocity: vₑₘ = √(2G × (Mₚ/144) / (Rₚ/16)) = √(16/144) × √(2GMₚ/Rₚ) = (4/12) × v = (1/3) × v. Answer: The escape velocity on the moon is (1/3) times the escape velocity on the planet.",
        },
      ],
      JEE2023: [
        {
          question:
            "The	weight	of	a	body	at	the	surface	of	earth	is	18	N.	The	weight	of	the body	at	an	altitude	of	3200	km	above	the	earth's	surface	is	(given, radius	of	earth	Re = 6400km	)",
          options: [
            {
              text: "9.8N",
            },
            {
              text: "8N",
              correct: true,
            },
            {
              text: "4.9N",
            },
            {
              text: "19.6N",
            },
          ],
          explanation:
            "Given: Weight of body at the surface of Earth W₁ = 18 N, radius of Earth Re = 6400 km, altitude above Earth's surface h = 3200 km. Solution steps: 1. The weight of a body at a height above Earth's surface is given by the formula: W₂ = W₁ × (Re / (Re + h))². 2. Substituting values: W₂ = 18 × (6400 / (6400 + 3200))² = 18 × (6400 / 9600)² = 18 × (2/3)² = 18 × 4/9 = 8 N. Answer: The weight of the body at an altitude of 3200 km above the Earth's surface is 8 N.",
        },
        {
          question:
            "Given	below	are	two	statements: Statement	I:	Acceleration	due	to	earth's	gravity	decreases	as	you	go	'up' or	'down'	from	earth's	surface. Statement	II:	Acceleration	due	to	earth's	gravity	is	same	at	a	height	'	h	' and	depth	'	d	'	from	earth's	surface,	if	h = d. In	the	light	of	above	statements,	choose	the	most	appropriate	answer form	the	options	given	below",
          options: [
            {
              text: "Statement	I	is	incorrect	but	statement	II	is	correct",
            },
            {
              text: "Both	Statement	I	and	Statement	II	are	incorrect",
            },
            {
              text: "Statement	I	is	correct	but	statement	II	is	incorrect",
              correct: true,
            },
            {
              text: "Both	Statement	I	and	II	are	correct",
            },
          ],
          explanation:
            "Given: Two statements regarding acceleration due to Earth's gravity. Statement I: Acceleration due to Earth's gravity decreases as you go 'up' or 'down' from Earth's surface. Statement II: Acceleration due to Earth's gravity is the same at a height 'h' and depth 'd' from Earth's surface, if h = d. Solution steps: 1. Analyze Statement I: - As you ascend above Earth's surface (increase height), the acceleration due to gravity decreases. - As you descend below Earth's surface (increase depth), the acceleration due to gravity also decreases. - Therefore, Statement I is correct. 2. Analyze Statement II: - At a height 'h' above the surface, the acceleration due to gravity (gₕ) is given by: gₕ ≈ g(1 - 2h/R), where R is Earth's radius. - At a depth 'd' below the surface, the acceleration due to gravity (gd) is given by: gd ≈ g(1 - d/R). - For h = d, gₕ ≠ gd; thus, the acceleration due to gravity is not the same at height 'h' and depth 'd' when h = d. - Therefore, Statement II is incorrect. Answer: Statement I is correct, but Statement II is incorrect.",
        },
        {
          question:
            "If	the	distance	of	the	earth	from	Sun	is	1.5×106	km.	Then	the	distance of	an	imaginary	planet	from	Sun,	if	its	period	of	revolution	is	2.83	years is:",
          options: [
            {
              text: "6×10^7 km",
            },
            {
              text: "6×10^6 km",
            },
            {
              text: "3×10^6 km",
              correct: true,
            },
            {
              text: "3×10^7 km",
            },
          ],
          explanation:
            "Given: Distance of Earth from the Sun ( R_e = 1.5 \times 10^6 , \text{km} ), period of revolution of Earth ( T_e = 1 , \text{year} ), period of revolution of the imaginary planet ( T_p = 2.83 , \text{years} ). Solution steps: 1. According to Kepler's third law, the ratio of the squares of the periods of revolution of two planets is equal to the ratio of the cubes of their distances from the Sun: ( left(\frac{T_p}{T_e}\right)^2 = left(\frac{R_p}{R_e}\right)^3 ), where ( R_p ) is the distance of the imaginary planet from the Sun. 2. Rearranging for ( R_p ): ( R_p = R_e \times left(\frac{T_p}{T_e}\right)^{2/3} ). 3. Substitute values: ( R_p = 1.5 \times 10^6 \times left(\frac{2.83}{1}\right)^{2/3} , \text{km} ). 4. Calculate ( R_p ): ( R_p approx 1.5 \times 10^6 \times 2.0 approx 3.0 \times 10^6 , \text{km} ). Answer: The distance of the imaginary planet from the Sun is approximately ( 3.0 \times 10^6 , \text{km} ).",
        },
        {
          question:
            "T	is	the	time	period	of	simple	pendulum	on	the	earth's	surface.	Its	time period	becomes	x	T	when	taken	to	a	height	R	(equal	to	earth's	radius) above	the	earth's	surface.	Then,	the	value	of	x	will	be:",
          options: [
            {
              text: "4",
            },
            {
              text: "2",
              correct: true,
            },
            {
              text: "1/2",
            },
            {
              text: "1/4",
            },
          ],
          explanation:
            "Given: Time period of simple pendulum on Earth's surface = T, height above Earth's surface = R (where R is Earth's radius). Solution steps: 1. The time period of a simple pendulum is given by T = 2π√(L/g), where L is the length of the pendulum and g is the gravitational acceleration. 2. At height h = R above Earth's surface, the gravitational acceleration g' is given by g' = g / (1 + h/R)² = g / (1 + R/R)² = g / 4. 3. The new time period T' at height h = R is T' = 2π√(L/g'). 4. Substitute g' = g / 4: T' = 2π√(L / (g / 4)) = 2π√(4L/g) = 2 × T = xT. 5. Therefore, x = 2. Answer: The value of x is 2.",
        },
        {
          question:
            "A	body	of	mass	is	taken	from	earth	surface	to	the	height	h	equal	to twice	the	radius	of	earth	(Re),	the	increase	in	potential	energy	will	be	:	( g =	acceleration	due	to	gravity	on	the	surface	of	Earth)",
          options: [
            {
              text: "3mgRe",
            },
            {
              text: "(1/3)*mge",
            },
            {
              text: "(2/3)*mgRe",
              correct: true,
            },
            {
              text: "(1/2)*mgRe",
            },
          ],
          explanation:
            "Given: Mass of the body = m, height h = 2 * Rₑ (where Rₑ is the radius of Earth), gravitational acceleration on the surface of Earth = g. Solution steps: 1. The gravitational potential energy at a distance r from the center of Earth is given by U = - (G * M * m) / r, where G is the gravitational constant, and M is the mass of Earth. 2. Initial potential energy at the surface of Earth (r = Rₑ) is U₁ = - (G * M * m) / Rₑ. 3. Final potential energy at height h = 2 * Rₑ (r = Rₑ + h = 3 * Rₑ) is U₂ = - (G * M * m) / (3 * Rₑ). 4. The increase in potential energy ΔU = U₂ - U₁ = - (G * M * m) / (3 * Rₑ) + (G * M * m) / Rₑ. 5. Simplifying, ΔU = (2/3) * (G * M * m) / Rₑ. 6. Using g = (G * M) / Rₑ², we can rewrite ΔU as ΔU = (2/3) * m * g * Rₑ. Answer: The increase in potential energy is (2/3) * m * g * Rₑ.",
        },
      ],
    },
    ElectromagneticInduction: {
      JEE2024: [
        {
          question:
            "A	rectangular	loop	of	length	2.5m	and	width	2m	is	placed	at	60∘	to	a magnetic	field	of	4T.	The	loop	is	removed	from	the	field	in	10	sec.	The average	emf	induced	in	the	loop	during	this	time	is",
          options: [
            {
              text: "-2V",
            },
            {
              text: "-1V",
            },
            {
              text: "1V",
              correct: true,
            },
            {
              text: "+2V",
            },
          ],
          explanation:
            "Given: Length of loop L = 2.5 m, width of loop W = 2 m, magnetic field B = 4 T, angle θ = 60°, time Δt = 10 s. Solution steps: 1. The area of the loop A = L × W = 2.5 × 2 = 5 m². 2. The magnetic flux Φ through the loop when it is in the field is Φ = B × A × cos(θ). 3. Substituting values: Φ = 4 × 5 × cos(60°) = 4 × 5 × 0.5 = 10 Wb. 4. When the loop is removed from the field, the final flux Φ₂ = 0 Wb. 5. The change in magnetic flux ΔΦ = Φ₁ - Φ₂ = 10 - 0 = 10 Wb. 6. The average induced emf ε is given by Faraday's law as ε = ΔΦ / Δt. 7. Substituting values: ε = 10 / 10 = 1 V. Answer: The average emf induced in the loop during this time is 1 V.",
        },
        {
          question:
            "A	horizontal	straight	wire	5m	long	extending	from	east	to	west	falling freely	at	right	angle	to	horizontal	component	of	earth's	magnetic	field 0.60	×	10−4Wbm−2.	The	instantaneous	value	of	emf	induced	in	the	wire when	its	velocity	is	10ms−1	is	______×	10−3V",
          options: [
            {
              text: "3",
              correct: true,
            },
            {
              text: "5",
            },
            {
              text: "10",
            },
            {
              text: "7",
            },
          ],
          explanation:
            "Given: Length of the wire L = 5 m, horizontal component of Earth's magnetic field B = 0.60 × 10⁻⁴ Wb/m², velocity of the wire v = 10 m/s. Solution steps: 1. The emf (E) induced in a wire moving perpendicular to a magnetic field is given by the formula: E = B * L * v. 2. Substituting the values: E = (0.60 × 10⁻⁴) * 5 * 10 = 3 × 10⁻³ V. Answer: The instantaneous value of emf induced in the wire is 3 × 10⁻³ V.",
        },
        {
          question:
            "The	magnetic	flux	φ	(in	weber)	linked	with	a	closed	circuit	of	resistance 8Ω	varies	with	time	(in	seconds)	as	φ	=	5t2	−	36t	+	1.	The	induced current	in	the	circuit	at	t	=	2	s	is	_____A.",
          options: [
            {
              text: "1A",
            },
            {
              text: "3A",
            },
            {
              text: "4A",
            },
            {
              text: "2A",
              correct: true,
            },
          ],
          explanation:
            "Given: Magnetic flux φ (in weber) as a function of time t: φ = 5t² − 36t + 1, resistance of the circuit R = 8 Ω, time t = 2 s. Solution steps: 1. The induced emf (E) in the circuit is given by Faraday's law: E = -dφ/dt. 2. Differentiate φ with respect to t to find dφ/dt: dφ/dt = d(5t² - 36t + 1)/dt = 10t - 36. 3. Substitute t = 2 s to find the emf at that instant: E = -(10(2) - 36) = -(20 - 36) = 16 V. 4. Using Ohm's law, the induced current I = E / R. Substitute E = 16 V and R = 8 Ω: I = 16 / 8 = 2 A. Answer: The induced current in the circuit at t = 2 s is 2 A.",
        },
        {
          question:
            "A	coil	of	200	turns	and	area	0.20m2	is	rotated	at	half	a	revolution	per second	and	is	placed	in	uniform	magnetic	field	of	0.01T	perpendicular to	axis	of	rotation	of	the	coil.	The	maximum	voltage	generated	in	the coil	is	2π/β	volt.	The	value	of	β	is____	.",
          options: [
            {
              text: "10",
            },
            {
              text: "7",
            },
            {
              text: "5",
              correcr: true,
            },
            {
              text: "3",
            },
          ],
          explanation:
            "Given: Number of turns N = 200, area of the coil A = 0.20 m², angular speed ω = 0.5 revolutions per second = π radians per second (since 1 revolution = 2π radians), magnetic field B = 0.01 T, maximum voltage V_max = 2π / β volts. Solution steps: 1. The maximum voltage generated in a rotating coil is given by V_max = N * A * B * ω. 2. Substitute the values: V_max = 200 * 0.20 * 0.01 * π = 0.4π volts. 3. According to the problem, V_max = 2π / β. Set the two expressions equal: 0.4π = 2π / β. 4. Solve for β: β = 2 / 0.4 = 5. Answer: The value of β is 5.",
        },
        {
          question:
            "Two	coils	have	mutual	inductance	0.002H.	The	current	changes	in	the first	coil	according	to	the	relation	i	=	i0sin	ωt,	where	i0	=	5A	and	ω	= 50π	rad∕	s.	The	maximum	value	of	emf	in	the	second	coil	is	π/α	V.	The value	of	α	is____",
          options: [
            {
              text: "6",
            },
            {
              text: "2",
              correct: true,
            },
            {
              text: "8",
            },
            {
              text: "10",
            },
          ],
          explanation:
            "Given: Mutual inductance M = 0.002 H, current in the first coil i = i₀sin(ωt) where i₀ = 5 A and ω = 50π rad/s, emf in the second coil e₂ = π/α V. Solution steps: 1. The induced emf in the second coil is given by e₂ = M * (di/dt), where di/dt is the rate of change of current in the first coil. 2. Differentiate i = i₀sin(ωt) with respect to t to get di/dt = i₀ * ω * cos(ωt). 3. The maximum value of di/dt occurs when cos(ωt) = 1, so max(di/dt) = i₀ * ω. 4. Substituting values, max(di/dt) = 5 * 50π = 250π A/s. 5. Thus, the maximum emf e₂ = M * max(di/dt) = 0.002 * 250π = 0.5π V. 6. Given e₂ = π/α, equate to find α: π/α = 0.5π, so α = 2. Answer: The value of α is 2.",
        },
      ],
      JEE2023: [
        {
          question:
            "A	certain	elastic	conducting	material	is	stretched	into	a	circular	loop.	It is	placed	with	its	plane	perpendicular	to	a	uniform	magnetic	field B=0.8T.	When	released	the	radius	of	the	loop	starts	shrinking	at	a constant	rate	of	2cm−1.	The	induced	emf	in	the	loop	at	an	instant	when the	radius	of	the	loop	is	10cm	will	_______be	mV.",
          options: [
            {
              text: "5",
            },
            {
              text: "25",
            },
            {
              text: "17",
            },
            {
              text: "10",
              correct: true,
            },
          ],
          explanation:
            "Given: Magnetic field B = 0.8 T, rate of change of radius dr/dt = -2 cm/s = -0.02 m/s (since 1 cm/s = 0.01 m/s), radius of loop r = 10 cm = 0.1 m. Solution steps: 1. The induced emf (ε) in a loop due to a changing area in a magnetic field is given by Faraday's law: ε = -dΦ/dt, where Φ is the magnetic flux. 2. Magnetic flux Φ = B * A, where A is the area of the loop. For a circular loop, A = π * r², so Φ = B * π * r². 3. Differentiate Φ with respect to time t to find dΦ/dt: dΦ/dt = B * d(π * r²)/dt = B * π * 2r * (dr/dt). 4. Substitute values: ε = - B * π * 2 * r * (dr/dt) = - (0.8) * π * 2 * (0.1) * (-0.02) = 0.0032π V. 5. Converting to mV: ε ≈ 3.2π mV ≈ 10.05 mV. Answer: The induced emf in the loop is approximately 10 mV.",
        },
        {
          question:
            "The	induced	emf	can	be	produced	in	a	coil	by A.	moving	the	coil	with	uniform	speed	inside	uniform	magnetic	field B.	moving	the	coil	with	non	uniform	speed	inside	uniform	magnetic field C.	rotating	the	coil	inside	the	uniform	magnetic	field D.	changing	the	area	of	the	coil	inside	the	uniform	magnetic	field Choose	the	correct	answer	from	the	options	given	below	:",
          options: [
            {
              text: "B	and	D	only",
            },
            {
              text: "C	and	D	only",
              correct: true,
            },
            {
              text: "B	and	C	only",
            },
            {
              text: "A	and	C	only",
            },
          ],
          explanation:
            "Induced emf can be induced in a coil by changing magnetic flux. The magnetic flux φ is given by φ = B ⋅ dA, where B is the magnetic field and dA is the area element. By rotating the coil, the angle between the coil and the magnetic field changes, and hence the flux changes. By changing the area of the coil, the magnetic flux also changes.",
        },
        {
          question:
            "An	emf	of	0.08V	is	induced	in	a	metal	rod	of	length	10cm	held	normal to	a	uniform	magnetic	field	of	0.4T,	when	moves	with	a	velocity	of:",
          options: [
            {
              text: "2m/s",
              correct: true,
            },
            {
              text: "20m/s",
            },
            {
              text: "3.2m/s",
            },
            {
              text: "0.5m/s",
            },
          ],
          explanation:
            "Given: Induced emf = 0.08 V, length of metal rod L = 10 cm = 0.1 m, magnetic field strength B = 0.4 T. Solution steps: 1. The induced emf (ε) in a moving conductor is given by the formula: ε = B * L * v, where v is the velocity of the rod. 2. Rearranging for v: v = ε / (B * L). 3. Substituting the values: v = 0.08 / (0.4 * 0.1) = 0.08 / 0.04 = 2 m/s. Answer: The velocity of the rod is 2 m/s.",
        },
        {
          question:
            "The	energy	of	an	electromagnetic	wave	contained	in	a	small	volume oscillates	with",
          options: [
            {
              text: "double	the	frequency	of	the	wave",
              correct: true,
            },
            {
              text: "the	frequency	of	the	wave",
            },
            {
              text: "zero	frequency",
            },
            {
              text: "half	the	frequency	of	the	wave",
            },
          ],
          explanation:
            "Given: The energy of an electromagnetic wave contained in a small volume oscillates with. Solution steps: 1. The energy density of an electromagnetic wave is given by u = (ε₀ * E²) / 2, where ε₀ is the permittivity of free space, and E is the electric field amplitude of the wave. 2. The energy stored in a small volume V is then U = u * V = (ε₀ * E² * V) / 2. 3. This energy oscillates with the frequency of the electromagnetic wave. 4. Therefore, the energy contained in the small volume oscillates with the frequency of the wave, as it is directly proportional to the square of the electric field amplitude and the volume. Answer: The energy of an electromagnetic wave contained in a small volume oscillates with the frequency of the wave.",
        },
        {
          question:
            "A	conducting	circular	loop	is	placed	in	a	uniform	magnetic	field	of	0.4T with	its	plane	perpendicular	to	the	field.	Somehow,	the	radius	of	the loop	starts	expending	at	a	constant	rate	of	1mm ∕	s.	The	magnitude	of induced	emf	in	the	loop	at	an	instant	when	the	radius	of	the	lop	is	2cm will	be	________	µV.",
          options: [
            {
              text: "100 µV",
            },
            {
              text: "45 µV",
            },
            {
              text: "20 µV",
            },
            {
              text: "50 µV",
              correct: true,
            },
          ],
          explanation:
            "Given: Magnetic field B = 0.4 T, rate of change of radius of loop dr/dt = 1 mm/s = 0.001 m/s, radius of the loop at the instant r = 2 cm = 0.02 m. Solution steps: 1. The induced emf (ε) in a conducting loop is given by Faraday's law of induction: ε = -dΦ/dt, where Φ is the magnetic flux. 2. Magnetic flux Φ = B * A, where A is the area of the loop. For a circular loop, A = π * r². 3. The rate of change of flux is dΦ/dt = B * dA/dt, where dA/dt = 2π * r * (dr/dt). 4. Substituting values: dA/dt = 2π * 0.02 * 0.001 = 0.0001256 m²/s. 5. Therefore, the induced emf is ε = B * 0.0001256 = 0.4 * 0.0001256 = 0.00005024 V = 50.24 µV. Answer: The magnitude of the induced emf in the loop is 50.24 µV.",
        },
      ],
    },
    AtomsAndNuclei: {
      JEE2024: [
        {
          question:
            "The	radius	of	third	stationary	orbit	of	electron	for	Bohr's	atom	is	R.	The radius	of	fourth	stationary	orbit	will	be:",
          options: [
            {
              text: "(4/3)*R",
            },
            {
              text: "(16/9)*R",
              correct: true,
            },
            {
              text: "(3/4)*R",
            },
            {
              text: "(9/16)*R",
            },
          ],
          explanation:
            "Given: Radius of the third stationary orbit R₃ = R. Solution steps: 1. The radius of the nth stationary orbit in Bohr's atom is given by: Rₙ ∝ n², where n is the orbit number. 2. For the third orbit (n = 3), R₃ = k * (3²) = 9k, where k is a proportionality constant. 3. For the fourth orbit (n = 4), R₄ = k * (4²) = 16k. 4. Taking the ratio of R₄ to R₃: R₄ / R₃ = 16k / 9k = 16 / 9. 5. Therefore, R₄ = (16 / 9) * R. Answer: The radius of the fourth stationary orbit is (16 / 9) * R.",
        },
        {
          question:
            "If	Rydberg's	constant	is	R,	the	longest	wavelength	of	radiation	in Paschen	series	will	be	7R ,	where	α = ____",
          options: [
            {
              text: "144",
              correct: true,
            },
            {
              text: "144/7",
            },
            {
              text: "144/5",
            },
            {
              text: "124",
            },
          ],
          explanation:
            "Given: Rydberg's constant = R, Paschen series corresponds to transitions to n₁ = 3. Solution steps: 1. The wavelength of radiation in the hydrogen spectrum is given by the Rydberg formula: 1/λ = R * [(1/n₁²) - (1/n₂²)], where n₁ = 3 for Paschen series and n₂ > n₁. 2. For the longest wavelength, the transition occurs from the nearest energy level, i.e., n₂ = 4. 3. Substituting n₁ = 3 and n₂ = 4 into the formula: 1/λ = R * [(1/3²) - (1/4²)] = R * [(1/9) - (1/16)]. 4. Simplify the terms: 1/λ = R * [(16 - 9) / 144] = R * (7/144). 5. Therefore, λ = 144 / (7R). 6. The longest wavelength in the Paschen series is λ = α / 7R, where α = 144. Answer: α = 144.",
        },
        {
          question:
            "Given	below	are	two	statements: Statement	I:	Fluorine	has	most	negative	electron	gain	enthalpy	in	its group. Statement	II:	Oxygen	has	least	negative	electron	gain	enthalpy	in	its group. In	the	light	of	the	above	statements,	choose	the	most	appropriate	from",
          options: [
            {
              text: "Both	Statement	I	and	Statement	II	are	true",
            },
            {
              text: "Statement	I	is	true	but	Statement	II	is	false",
            },
            {
              text: "Both	Statement	I	and	Statement	II	are	false",
            },
            {
              text: "Statement	I	is	false	but	Statement	II	is	true",
              correct: true,
            },
          ],
          explanation:
            "Statement I is	false	because	chlorine	has	most	negative	electron	gain	enthalpy	in	its	group.",
        },
        {
          question:
            "The	ratio	of	the	magnitude	of	the	kinetic	energy	to	the	potential	energy of	an	electron	in	the	5th		excited	state	of	a	hydrogen	atom	is	:",
          options: [
            {
              text: "4",
            },
            {
              text: "1/4",
            },
            {
              text: "1/2",
              correct: true,
            },
            {
              text: "1",
            },
          ],
          explanation:
            "Given: The electron is in the 5th excited state of a hydrogen atom. Solution steps: 1. The energy levels of an electron in a hydrogen atom are given by the formula: Eₙ = -13.6 eV / n², where n is the principal quantum number. 2. For the 5th excited state, n = 6 (since the ground state corresponds to n = 1). 3. The total energy Eₙ is the sum of kinetic energy (K) and potential energy (U), where K = - (1/2) * U. 4. The kinetic energy K is half the magnitude of the potential energy U, but with opposite signs. Thus, K = -U/2. 5. The ratio of kinetic energy to potential energy is: K/U = -1/2. Answer: The ratio of the magnitude of kinetic energy to potential energy is 1/2.",
        },
        {
          question:
            "A	electron	of	hydrogen	atom	on	an	excited	state	is	having	energy En = −0.85eV.	The	maximum	number	of	allowed	transitions	to	lower energy	level	is",
          options: [
            {
              text: "4",
            },
            {
              text: "3",
            },
            {
              text: "6",
              correct: true,
            },
            {
              text: "5",
            },
          ],
          explanation:
            "Given: Energy of electron in excited state En = -0.85 eV. Solution steps: 1. The energy levels of the hydrogen atom are given by the formula: Eₙ = -13.6 eV / n², where n is the principal quantum number. 2. For the excited state with En = -0.85 eV, we solve for n: -0.85 = -13.6 / n² → n² = 13.6 / 0.85 ≈ 16 → n ≈ 4. 3. The electron is in the n = 4 energy level. 4.Number of Transition = (n(n-1))/2 = (4(4-1))/2 = 6.",
        },
      ],
      JEE2023: [
        {
          question:
            "The	energy	released	per	fission	of	nucleus	of	240X	is	200MeV.	The energy	released	if	all	the	atoms	in	120g	of	pure	240X	undergo	fission	is ____×10^25 MeV.",
          options: [
            {
              text: "6.022 × 10²⁵ MeV",
              correct: true,
            },
            {
              text: "5.023 × 10²⁵ MeV",
            },
            {
              text: "6.75 × 10²⁵ MeV",
            },
            {
              text: "7.022 × 10²⁵ MeV",
            },
          ],
          explanation:
            "Given: Energy released per fission of nucleus of 240X = 200 MeV, mass of 240X = 120 g. Solution steps: 1. The number of atoms in 1 mole of any substance is given by Avogadro's number, Nₐ = 6.022 × 10²³ atoms/mol. 2. The molar mass of 240X is 240 g/mol. 3. Number of moles of 240X in 120 g = 120 / 240 = 0.5 mol. 4. Number of atoms in 0.5 mol of 240X = 0.5 × Nₐ = 0.5 × 6.022 × 10²³ = 3.011 × 10²³ atoms. 5. Energy released by all atoms if they undergo fission = (energy per fission) × (number of atoms) = 200 MeV × 3.011 × 10²³ = 6.022 × 10²⁵ MeV. Answer: The energy released is 6.022 × 10²⁵ MeV.",
        },
        {
          question:
            "If	a	radioactive	element	having	half-life	of	30min	is	undergoing	beta decay,	the	fraction	of	radioactive	element	remains	undecayed	after 90min.	will	be	:",
          options: [
            {
              text: "1/16",
            },
            {
              text: "1/8",
              correct: true,
            },
            {
              text: "1/4",
            },
            {
              text: "1/2",
            },
          ],
          explanation:
            "Given: Half-life of the radioactive element = 30 min, time elapsed = 90 min. Solution steps: 1. The fraction of a radioactive element that remains undecayed after time t is given by the formula: N(t) / N₀ = (1/2)^(t / T), where T is the half-life and t is the elapsed time. 2. Substituting values: N(t) / N₀ = (1/2)^(90 / 30) = (1/2)³. 3. Simplifying: N(t) / N₀ = 1/8. Answer: The fraction of the radioactive element that remains undecayed after 90 minutes is 1/8.",
        },
        {
          question:
            "A	free	neutron	decays	into	a	proton	but	a	free	proton	does	not	decay into	neutron.	This	is	because",
          options: [
            {
              text: "neutron	is	an	uncharged	particle",
            },
            {
              text: "proton	is	a	charged	particle",
            },
            {
              text: "neutron	is	a	composite	particle	made	of	a	proton	and	an	electron",
            },
            {
              text: "neutron	has	larger	rest	mass	than	proton",
              correct: true,
            },
          ],
          explanation:
            "As	neutron	has	more	rest	mass	than	proton	it	will	require	energy	to	decay	proton	into	neutron.",
        },
        {
          question:
            "Speed	of	an	electron	in	Bohr's	7th		orbit	for	Hydrogen	atom	is 3.6×106m∕	s.	The	corresponding	speed	of	the	electron	in	3rd		orbit,	in m∕	s	is	:",
          options: [
            {
              text: "1.8×10^6",
            },
            {
              text: "7.5×10^6",
            },
            {
              text: "8.4×10^6",
              correct: true,
            },
            {
              text: "3.6×10^6",
            },
          ],
          explanation:
            "Given: Speed of electron in 7th orbit for Hydrogen atom v₇ = 3.6 × 10⁶ m/s, and the formula for the speed of an electron in nth orbit is vₙ = v₁ * (1/n), where v₁ is the speed in the first orbit. Solution steps: 1. The speed of an electron in the nth orbit is inversely proportional to n. 2. Using the relation vₙ = v₁ * (1/n), we know that v₁ is the speed in the first orbit, and vₙ is proportional to 1/n. 3. The ratio of the speed of electron in the 3rd orbit to the 7th orbit is v₃ / v₇ = (n₇ / n₃) = 7 / 3. 4. Therefore, v₃ = v₇ * (7 / 3) = 3.6 × 10⁶ * (7 / 3). 5. v₃ = 8.4 × 10⁶ m/s. Answer: The speed of the electron in the 3rd orbit is 8.4 × 10⁶ m/s.",
        },
        {
          question:
            "The	radius	of	electron's	second	stationary	orbit	in	Bohr's	atom	is	R.	The radius	of	3	rd	orbit	will	be",
          options: [
            {
              text: "3R",
            },
            {
              text: "2.25R",
              correct: true,
            },
            {
              text: "(8/3)*R",
            },
            {
              text: "9R",
            },
          ],
          explanation:
            "Given: Radius of electron's second stationary orbit in Bohr's atom = R. Solution steps: 1. The radius of the nth orbit in Bohr's atom is given by the formula: rₙ = n² * r₁, where r₁ is the radius of the first orbit and n is the principal quantum number. 2. For the second orbit, n = 2, so r₂ = 2² * r₁ = 4 * r₁. 3. For the third orbit, n = 3, so r₃ = 3² * r₁ = 9 * r₁. 4. From the given information, r₂ = R, which means r₁ = R / 4. 5. Substituting this value of r₁ into the expression for r₃: r₃ = 9 * (R / 4) = 9R / 4. Answer: The radius of the 3rd orbit is 9R / 4 = 2.25R.",
        },
      ],
    },
  },
  Chemistry: {
    StructureOfAtom: {
      JEE2024: [
        {
          question:
            "The	correct	set	of	four	quantum	numbers	for	the	valence	electron	of rubidium	atom	(Z	=	37)	is:",
          options: [
            {
              text: "5,	0,	0,	+	1/2",
              correct: true,
            },
            {
              text: "5,	0,	1,	+	1/2",
            },
            {
              text: "5,	1,	0,	+	1/2",
            },
            {
              text: "5,	1,	1,	+	1/2",
            },
          ],
          explanation:
            "Given: Rubidium atom (Z = 37), valence electron in the 5th energy level. Explanation: Electron configuration is [Kr] 5s¹. The quantum numbers for the valence electron are: n = 5, l = 0 (s-orbital), m_l = 0, m_s = ±1/2. Final result: The correct set of quantum numbers is (n = 5, l = 0, m_l = 0, m_s = ±1/2).",
        },
        {
          question:
            "The	four	quantum	numbers	for	the	electron	in	the	outer	most	orbital	of potassium	(atomic	no.	19)	are",
          options: [
            {
              text: "n	=	4,	l	=	2,	m	=	−1,	s	=	+	1/2",
            },
            {
              text: "n	=	4,	l	=	0,	m	=	0,	s	=	+	1/2",
              correct: true,
            },
            {
              text: "n	=	3,	l	=	0,	m	=	1,	s	=	+	1/2",
            },
            {
              text: "n	=	2,	l	=	0,	m	=	0,	s	=	+	1/2",
            },
          ],
          explanation:
            "Given: Potassium atom (Z = 19), electron in the outermost orbital. Explanation: The electron configuration of potassium is [Ar] 4s¹. The quantum numbers for the outermost electron are: n = 4, l = 0 (s-orbital), m_l = 0, m_s = ±1/2. Final result: The correct set of quantum numbers is (n = 4, l = 0, m_l = 0, m_s = ±1/2).",
        },
        {
          question: "The	number	of	radial	node/s	for	3p	orbital	is:",
          options: [
            {
              text: "1",
              correct: true,
            },
            {
              text: "4",
            },
            {
              text: "2",
            },
            {
              text: "3",
            },
          ],
          explanation:
            "Given: 3p orbital. Explanation: The number of radial nodes for an orbital is given by the formula: Radial nodes = n - l - 1, where n is the principal quantum number and l is the azimuthal quantum number. For 3p orbital, n = 3 and l = 1. Thus, radial nodes = 3 - 1 - 1 = 1. Final result: The number of radial nodes for 3p orbital is 1.",
        },
      ],
      JEE2023: [
        {
          question:
            "The	number	of	s-electrons	present	in	an	ion	with	55	protons	in	its unipositive	state	is",
          options: [
            {
              text: "8",
            },
            {
              text: "9",
            },
            {
              text: "10",
            },
            {
              text: "12",
              correct: true,
            },
          ],
          explanation:
            "Given: Ion with 55 protons in its unipositive state. Explanation: The atomic number (Z) of the element is 55, corresponding to cesium (Cs). In the unipositive state (Cs⁺), it loses one electron. The electron configuration of neutral Cs is [Xe] 6s¹. After losing one electron, the Cs⁺ ion has the configuration [Xe], meaning the 6s orbital loses its single electron, but the 6s orbital initially had one electron. Therefore, the number of s-electrons in the neutral Cs atom before ionization is 1. Final result: The number of s-electrons in the ion (Cs⁺) is 1.",
        },
        {
          question:
            "The	shortest	wavelength	of	hydrogen	atom	in	Lyman	series	is	λ.	The longest	wavelength	in	Balmer	series	of	He+ is",
          options: [
            {
              text: "5/9λ",
            },
            {
              text: "9λ/5",
              correct: true,
            },
            {
              text: "36λ/5",
            },
            {
              text: "5λ/9",
            },
          ],
          explanation:
            "Given: Shortest wavelength of hydrogen atom in Lyman series is λ. Explanation: The longest wavelength in the Balmer series of He⁺ corresponds to the transition from n = 2 to n = 3. For He⁺, the Rydberg constant is four times that of hydrogen. Using the Rydberg formula and adjusting for He⁺, the longest wavelength in the Balmer series of He⁺ is 9λ/5. Final result: The longest wavelength in the Balmer series of He⁺ is 9λ/5.",
        },
        {
          question:
            "Maximum	number	of	electrons	that	can	be	accommodated	in	shell	with n =4	are:",
          options: [
            {
              text: "16",
            },
            {
              text: "32",
              correct: true,
            },
            {
              text: "50",
            },
            {
              text: "72",
            },
          ],
          explanation:
            "Given: Shell with n = 4. Explanation: The maximum number of electrons that can be accommodated in a shell is given by the formula 2n², where n is the principal quantum number. For n = 4, the maximum number of electrons is 2 * (4)² = 2 * 16 = 32. Final result: The maximum number of electrons that can be accommodated in the shell with n = 4 is 32.",
        },
        {
          question:
            "Which	transition	in	the	hydrogen	spectrum	would	have	the	same wavelength	as	the	Balmer	type	transition	from	n=4	to	n=2	of He+spectrum",
          options: [
            {
              text: "n=2	to	n=1",
              correct: true,
            },
            {
              text: "n=1 to n=3",
            },
            {
              text: "n=1 to n=2",
            },
            {
              text: "n=3 to n=4",
            },
          ],
          explanation:
            "Given: Balmer-type transition from n = 4 to n = 2 of He⁺ spectrum. Explanation: The wavelength for the transition from n = 4 to n = 2 of He⁺ is given by the Rydberg formula: λ = R_He * (1 / 2² - 1 / 4²), where R_He is four times the Rydberg constant for hydrogen. For hydrogen, the transition from n = 2 to n = 1 (Lyman series) has a wavelength that is equal to the wavelength of the transition from n = 4 to n = 2 in He⁺, because the energies and wavelengths involved match when adjusted for the Z² factor. Final result: The transition from n = 2 to n = 1 in the hydrogen spectrum has the same wavelength as the Balmer-type transition from n = 4 to n = 2 in the He⁺ spectrum.",
        },
        {
          question: "The	number	of	following	statements	which	is/are	incorrect	is",
          options: [
            {
              text: "Line	emission	spectra	are	used	to	study	the	electronic	structure",
              correct: true,
            },
            {
              text: "The	emission	spectra	of	atoms	in	the	gas	phase	show	a	continuous	spread	of	wavelength from	red	to	violet",
            },
            {
              text: "An	absorption	spectrum	is	like	the	photographic	negative	of	an	emission	spectrum",
            },
            {
              text: "The	element	helium	was	discovered	in	the	sun	by	spectroscopic	method",
            },
          ],
          explanation: "Fact",
        },
      ],
    },
    EnvironmentalChemistry: {
      JEE2024: [],
      JEE2023: [
        {
          question: "Which	of	the	following	is	true	about	freons?",
          options: [
            {
              text: "These	are	chlorofluorocarbon	compounds",
              correct: true,
            },
            {
              text: "These	are	chemicals	causing	skin	cancer",
            },
            {
              text: "These	are	radicals	of	chlorine	and	chlorine	monoxide",
            },
            {
              text: "All	radicals	are	called	freons",
            },
          ],
          explanation: "fact",
        },
        {
          question: "Correct	statement	is :",
          options: [
            {
              text: "An	average	human	being	consumes	more	food	than	air",
            },
            {
              text: "An	average	human	being	consumes	nearly	15	times	more	air	than	food",
              correct: true,
            },
            {
              text: "An	average	human	being	consumes	equal	amount	of	food	and	air",
            },
            {
              text: "An	average	human	being	consumes	100	times	more	air	than	food",
            },
          ],
          explanation: "Theoretical",
        },
        {
          question:
            "The	water	quality	of	a	pond	was	analysed	and	its	BOD	was	found	to	be	4 .	The	pond	has",
          options: [
            {
              text: "Highly	polluted	water",
            },
            {
              text: "Water	has	high	amount	of	fluoride	compounds",
            },
            {
              text: "Very	clean	water",
              correct: true,
            },
            {
              text: "Slightly	polluted	water",
            },
          ],
          explanation:
            "Clean water as BOD value of <5 while polluted water has BOD of 15 or more",
        },
        {
          question: "How	can	photochemical	smog	be	controlled?",
          options: [
            {
              text: "By	using	tall	chimneys",
            },
            {
              text: "By	complete	combustion	of	fuel",
            },
            {
              text: "By	using	catalytic	converters	in	the	automobiles/industry",
              correct: true,
            },
            {
              text: "By	using	catalyst",
            },
          ],
          explanation: "NCERT",
        },
        {
          question:
            "The	industrial	activity	held	least	responsible	for	global	warming	is	:",
          options: [
            {
              text: "manufacturing	of	cement",
            },
            {
              text: "	steel	manufacturing",
            },
            {
              text: "Electricity	generation	in	thermal	power	plants.",
            },
            {
              text: "Industrial	production	of	urea",
              correct: true,
            },
          ],
          explanation:
            "In	urea	production	NH3	and	CO2	consumed	so	least	responsible	for	global	warming.",
        },
      ],
    },
    Thermodynamics: {
      JEE2024: [
        {
          question: "Which	of	the	following	is	not	correct?",
          options: [
            {
              text: "∆G	is	negative	for	a	spontaneous	reaction",
            },
            {
              text: "∆G	is	positive	for	a	spontaneous	reaction",
              correct: true,
            },
            {
              text: "∆G	is	zero	for	a	reversible	reaction",
            },
            {
              text: "∆G	is	positive	for	a	non-spontaneous	reaction",
            },
          ],
          explanation: "(∆G)P,	T	=	(+)ve	for	non-spontaneous	process",
        },
        {
          question:
            "Choose	the	correct	option	for	free	expansion	of	an	ideal	gas	under adiabatic	condition	from	the	following	",
          options: [
            {
              text: "q	=	0,	∆T	≠	0,	w	=	0",
            },
            {
              text: "q	=	0,	∆T	<	0,	w	≠	0",
            },
            {
              text: "q	≠	0,	∆T	=	0,	w	=	0",
            },
            {
              text: "q	=	0,	∆T	=	0,	w	=	0",
              correct: true,
            },
          ],
          explanation:
            "During	free	expansion	of	an	ideal	gas	under	adiabatic	condition	q	=	0,	∆T	=	0,	w	=	0.",
        },
        {
          question:
            "For	a	certain	reaction	at	300K,	K	=	10,	then	∆G∘	for	the	same	reaction is______	×	10^−1	kJmol^−1.	(Given	R	=	8.314JK^−1mol^−1)",
          options: [],
          answer: "57",
          explanation:
            "Given: For a reaction at 300 K, K = 10, R = 8.314 J K⁻¹ mol⁻¹. Explanation: The relationship between the Gibbs free energy change (∆G°) and the equilibrium constant (K) is ∆G° = -RT ln(K). Substituting the values: ∆G° = - (8.314 J K⁻¹ mol⁻¹) * (300 K) * ln(10). Calculating: ∆G° = - 8.314 * 300 * 2.3026 ≈ -5747.6 J/mol = -5.748 kJ/mol. Final result: ∆G° ≈ -5.748 × 10⁻¹ kJ/mol.",
        },
        {
          question:
            "If	three	moles	of	an	ideal	gas	at	300K	expand	isotherrnally from	30dm^3	to	45dm^3	against	a	constant	opposing	pressure	of	80kPa, then	the	amount	of	heat	transferred	is ____J",
          options: [],
          answer: "1200",
          explanation:
            "Given: Three moles of an ideal gas at 300 K, expanding isothermally from 30 dm³ to 45 dm³ against a constant opposing pressure of 80 kPa. Explanation: For an isothermal expansion, the work done by the gas is W = P * ΔV, where P is the constant opposing pressure and ΔV is the change in volume. ΔV = 45 dm³ - 30 dm³ = 15 dm³ = 15 × 10⁻³ m³. The work done is: W = 80 × 10³ Pa * 15 × 10⁻³ m³ = 1200 J. Since the process is isothermal, the heat transferred (Q) is equal to the work done by the gas, which is 1200 J. Final result: The amount of heat transferred is 1200 J.",
        },
        {
          question:
            "Standard	enthalpy	of	vapourisation	for	CCl4	is	30.5kJmol^−1.	Heat required	for	vapourisation	of	284g	of	CCl4	at	constant	temperature is____	kJ.	(Given	molar	mass	in	gmol^−1	;	C	=	12,	Cl	=	35.5)",
          options: [],
          answer: "56",
          explanation:
            "Given: Standard enthalpy of vaporization for CCl₄ is 30.5 kJ/mol, mass of CCl₄ = 284 g, molar mass of CCl₄ = 12 + 4(35.5) = 153.5 g/mol. Explanation: First, calculate the number of moles of CCl₄: Moles of CCl₄ = mass / molar mass = 284 g / 153.5 g/mol = 1.85 mol. The heat required for vaporization is: Heat = moles × enthalpy of vaporization = 1.85 mol × 30.5 kJ/mol = 56.375 kJ. Final result: The heat required for vaporization of 284 g of CCl₄ is 56.375 kJ.",
        },
      ],
      JEE2023: [
        {
          question:
            "The	enthalpy	change	for	the	adsorption	process	and	micelle	formation respectively	are",
          options: [
            {
              text: "∆Hads < 0	and	∆Hmic	< 0",
            },
            {
              text: "∆Hads > 0	and	∆Hmic < 0",
            },
            {
              text: "	∆Hads < 0	and	∆Hmic > 0",
              correct: true,
            },
            {
              text: "∆Hads > 0	and	∆Hmic	> 0",
            },
          ],
          explanation:
            "Adsorption	→	Exothermic	(∆Hads = −ve) Micelle	formation	→	Endothermic	(∆Hmic	= +ve) ∆Hads	< O	and	∆Hmic	>O",
        },
        {
          question:
            "When	2	litre	of	ideal	gas	expands	isothermally	into	vacuum	to	a	total volume	of	6	litre,	the	change	in	internal	energy	is	______	J.	(Nearest integer)",
          options: [],
          answer: "0",
          explanation: "For	ideal	gas	U = f(T) and	for	isothermal	process,	∆U = 0",
        },
        {
          question:
            "1	mole	of	ideal	gas	is	allowed	to	expand	reversibly	and	adiabatically from	a	temperature	of	27∘C.	The	work	done	is	3kJmol^−1.	The	final temperature	of	the	gas	is	_______	K	(Nearest	integer).	Given Cv = 20Jmol^−1K^−1.",
          options: [],
          answer: "150",
          explanation:
            "q =0 ∆ U=W 1×20×[T2 −300] = −3000, T2 −300 = −150 ,T2 = 150K",
        },
        {
          question:
            "0.3g	of	ethane	undergoes	combustion	at	27∘C	in	a	bomb	calorimeter. The	temperature	of	calorimeter	system	(including	the	water)	is	found	to rise	by	0.5∘C.	The	heat	evolved	during	combustion	of	ethane	at	constant pressure	is	_______	kJmol^−1. (Nearest	integer) [Given:	The	heat	capacity	of	the	calorimeter	system	is 20kJK^−1, R = 8.3JK^−1mol^−1. Assume	ideal	gas	behaviour. Atomic	mass	of	C	and	H	are	12	and	1gmol^−1	respectively]",
          options: [],
          answer: "1006",
          explanation:
            "Given: Mass of ethane = 0.3 g, temperature rise = 0.5°C, heat capacity of the calorimeter system = 20 kJ/K, R = 8.3 J/K·mol, atomic mass of C = 12 g/mol, atomic mass of H = 1 g/mol. Explanation: The heat evolved during combustion of ethane is given by the formula:Heat evolved = Heat capacity × Temperature rise = 20 kJ/K × 0.5°C = 10 kJ. Now, calculate the moles of ethane (C₂H₆):Molar mass of ethane = (2 × 12) + (6 × 1) = 30 g/mol.Moles of ethane = 0.3 g / 30 g/mol = 0.01 mol.The heat evolved per mole of ethane is:Heat evolved per mole = 10 kJ / 0.01 mol = 1000 kJ/mol.Final result: The heat evolved during combustion of ethane at constant pressure is 1000 kJ/mol.",
        },
        {
          question:
            "The	value	of	logK	for	the	reaction	A ⇋ B	at	298K	is___ (Nearest	integer) Given:	∆H0 = −54.07kJmol^−1 ∆S∘ = 10JK^−1mol^−1 (	Take	2.303×8.314×298 = 5705)",
          options: [],
          answer: "10",
          explanation:
            "Given: ∆H° = −54.07 kJ/mol, ∆S° = 10 J/K·mol, T = 298 K, 2.303 × 8.314 × 298 = 5705. Explanation: The relationship between the equilibrium constant (K) and Gibbs free energy change (∆G°) is given by the equation:∆G° = ∆H° - T∆S°.Substituting the values:∆G° = −54.07 kJ/mol - (298 K × 10 J/K·mol)= −54.07 kJ/mol - 2.98 kJ/mol= −57.05 kJ/mol.Now, the equation for log K is:∆G° = −RT log K.Substitute values:−57.05 kJ/mol = −(8.314 J/K·mol × 298 K) × log K= −5705 J/mol × log K.Solving for log K:log K = 57.05 kJ/mol / 5.705 kJ/mol = 10. Final result: The value of log K for the reaction at 298 K is 10.",
        },
      ],
    },
    PBlock: {
      JEE2024: [
        {
          question:
            "Given	below	are	two	statements	:	one	is	labelled	as	Assertion	(A)	and the	other	is	labelled	as	Reason	(R). Assertion	(A)	:	Melting	point	of	Boron	(2453	K)	is	unusually	high	in group	13	elements. Reason	(R)	:	Solid	Boron	has	very	strong	crystalline	lattice. In	the	light	of	the	above	statements,	choose	the	most	appropriate answer	from	the	options	given	below",
          options: [
            {
              text: "Both	(A)	and	(R)	are	correct	but	(R)	Is	not	the	correct	explanation	of	(A)",
            },
            {
              text: "Both	(A)	and	(R)	are	correct	and	(R)	is	the	correct	explanation	of	(A)",
              correct: true,
            },
            {
              text: "(A)	is	true	but	(R)	is	false",
            },
            {
              text: "(A)	is	false	but	(R)	is	true",
            },
          ],
          explanation:
            "Solid	Boron	has	very	strong	crystalline	lattice	so	its	melting	point	unusually	high	in	group	13	elements",
        },
        {
          question: "Element	not	showing	variable	oxidation	state	is	:",
          options: [
            {
              text: "Bromine",
            },
            {
              text: "Iodine",
            },
            {
              text: "Chlorine",
            },
            {
              text: "Fluorine",
              correct: true,
            },
          ],
          explanation: "Fact",
        },
        {
          question:
            "Given	below	are	two	statements: Statement	(I)	:	SiO2	and	GeO2	are	acidic	while	SnO	and	PbO	are amphoteric	in	nature. Statement	(II)	:	Allotropic	forms	of	carbon	are	due	to	property	of catenation	and	pπ	−	dπ	bond	formation. In	the	light	of	the	above	statements,	choose	the	most	appropriate answer	from	the	options	given	below:",
          options: [
            {
              text: "Both	Statement	I	and	Statement	II	are	false",
            },
            {
              text: "Both	Statement	I	and	Statement	II	are	true",
            },
            {
              text: "Statement	I	is	false	but	Statement	II	is	true",
            },
            {
              text: "Statement	I	is	true	but	Statement	II	is	false",
              correct: true,
            },
          ],
          explanation:
            "SiO2	and	GeO2	are	acidic	and	SnO,	PbO	are	amphoteric. Carbon	does	not	have	d-orbitals	so	can	not	form	pπ−dπ	Bond	with	itself.	Due	to	properties	of	catenation	and	pπ	− pπ	bond	formation.	carbon	is	able	to	show	allotropic	forms.",
        },
        {
          question:
            "Consider	the	oxides	of	group	14	elements	SiO2,	GeO2,	SnO2,	PbO2, CO	and	GeO.	The	amphoteric	oxides	are",
          options: [
            {
              text: "GeO,	GeO2",
            },
            {
              text: "SiO2,	GeO2",
            },
            {
              text: "SnO2,	PbO2",
            },
            {
              text: "SnO2,	CO",
            },
          ],
          explanation: "SnO2	and	PbO2	are	amphoteric",
        },
        {
          question:
            "Give	below	are	two	statements: Statement-I	:	Noble	gases	have	very	high	boiling	points. Statement-II:	Noble	gases	are	monoatomic	gases.	They	are	held together	by	strong	dispersion	forces.	Because	of	this	they	are	liquefied at	very	low	temperature.	Hence,	they	have	very	high	boiling	points.	In the	light	of	the	above	statements.	choose	the	correct	answer	from	the options	given	below:",
          options: [
            {
              text: "Statement	I	is	false	but	Statement	II	is	true",
            },
            {
              text: "Both	Statement	I	and	Statement	II	are	true.",
            },
            {
              text: "Statement	I	is	true	but	Statement	II	is	false.",
            },
            {
              text: "Both	Statement	I	and	Statement	II	are	false.",
              correct: true,
            },
          ],
          explanation:
            "Statement	I	and	II	are	False, Noble	gases	have	low	boiling	points, Noble	gases	are	held	together	by	weak	dispersion	forces.",
        },
      ],
      JEE2023: [
        {
          question:
            "A.	Ammonium	salts	produce	haze	in	atmosphere. B.	Ozone	gets	produced	when	atmospheric	oxygen	reacts	with	chlorine radicals. C.	Polychlorinated	biphenyls	act	as	cleansing	solvents. D.	'Blue	baby'	syndrome	occurs	due	to	the	presence	of	excess	of sulphate	ions	in	water. Choose	the	correct	answer	from	the	options	given	below",
          options: [
            {
              text: "A,	B	and	C	only",
            },
            {
              text: "B	and	C	only",
            },
            {
              text: "A	and	D	only",
            },
            {
              text: "A	and	C	only",
              correct: true,
            },
          ],
          explanation:
            "'Blue	baby'	syndrome	occurs	due	to	the	presence	of	excess	of	nitrate	ions	in	water.",
        },
        {
          question:
            "Bond	dissociation	energy	of	E−H	bond	of	the	'H₂E' hydrides	of	group 16	elements	(given	below),	follows	order. (A)	O (B)	S (C)	Se (D)	Te",
          options: [
            {
              text: "AB >C>D",
              correct: true,
            },
            {
              text: "A >B>D>C",
            },
            {
              text: "B >A>C>D",
            },
            {
              text: "D >C>B>A",
            },
          ],
          explanation:
            "Bond	dissociation	energy	of	E-H	bond	in	hydrides	of	group	16	follows	the	order H₂O >H₂S>H₂Se>H₂Te",
        },
        {
          question:
            "Given	below	are	two	statements: Statement	I:	Chlorine	can	easily	combine	with	oxygen	to	from	oxides: and	the	product	has	a	tendency	to	explode. Statement	II:	Chemical	reactivity	of	an	element	can	be	determined	by its	reaction	with	oxygen	and	halogens. In	the	light	of	the	above	statements,	choose	the	correct	answer	from	the options	given	below.",
          options: [
            {
              text: "Both	the	statements	I	and	II	are	true",
              correct: true,
            },
            {
              text: "Statement	I	is	true	but	Statement	II	is	false",
            },
            {
              text: "Statement	I	is	false	but	Statement	II	is	true",
            },
            {
              text: "Both	the	Statements	I	and	II	are	false",
            },
          ],
          explanation:
            "Given: Statement I: Chlorine can easily combine with oxygen to form oxides, and the product has a tendency to explode. Statement II: Chemical reactivity of an element can be determined by its reaction with oxygen and halogens. Explanation: Statement I is correct as chlorine forms reactive oxides that can explode. Statement II is correct because reactivity is assessed based on reactions with oxygen and halogens. Final result: Both statements I and II are correct.",
        },
        {
          question:
            "The	difference	between	electron	gain	enthalpies	will	be	maximum between:",
          options: [
            {
              text: "Ne	and	F",
            },
            {
              text: "Ne	and	Cl",
              correct: true,
            },
            {
              text: "Ar	and	Cl",
            },
            {
              text: "	Ar	and	F",
            },
          ],
          explanation:
            "Cl	has	the	most	negative	∆Heg	among	all	the	elements	and	Ne	has	the	most	positive	∆Heg",
        },
        {
          question:
            "Given	below	are	two	statements,	one	is	labelled	as	Assertion	A	and	the other	is	labelled	as	Reason	R. Assertion	A	:	A	solution	of	the	product	obtained	by	heating	a	mole	of glycine	with	a	mole	of	chlorine	in	presence	of	red	phosphorous generates	chiral	carbon	atom. Reason	R	:	A	molecule	with	2	chiral	carbons	is	always	optically	active. In	the	light	of	the	above	statements,	choose	the	correct	answer	from	the options	given	below:",
          options: [
            {
              text: "A	is	false	but	R	is	true",
            },
            {
              text: "Both	A	and	R	are	true	but	R	is	NOT	the	correct	explanation	of	A",
            },
            {
              text: "A	is	true	but	R	is	false",
              correct: true,
            },
            {
              text: "Both	A	and	R	are	true	and	R	is	the	correct	explanation	of	A",
            },
          ],
          explanation:
            "Given: Assertion A: The product of heating glycine with chlorine generates a chiral carbon. Reason R: A molecule with 2 chiral carbons is always optically active. Explanation: Assertion A is correct, but Reason R is incorrect because two chiral centers don’t guarantee optical activity (meso compounds can be optically inactive). Final result: Assertion A is correct, Reason R is incorrect.",
        },
      ],
    },
  },
  // Maths: {
  //   ComplexNumberAndQuadraticEquations: {
  //     JEE2024: [
  //       [
  //         {
  //           question:
  //             "If S = {z ∈ C : |z − i| = |z + i| = |z − 1|}, then, n(S) is:",
  //           options: [
  //             { text: "1", correct: true },
  //             { text: "0" },
  //             { text: "3" },
  //             { text: "2" },
  //           ],
  //           explanation:
  //             "The points form a triangle ABC with equal distances from each vertex to the circumcenter, so n(S) = 1.",
  //         },
  //         {
  //           question:
  //             "If α satisfies the equation x^2 + x + 1 = 0 and (1 + α)^7 = A + Bα + Cα^2, where A, B, C ≥ 0, then 5(3A − 2B − C) is equal to",
  //           options: [],
  //           explanation:
  //             "Solving for α yields values for A, B, and C, giving the answer as 5.",
  //         },
  //         {
  //           question:
  //             "Let the complex numbers α and 1/α lie on two circles with center z0 = 1 + i. Then, the value of 100 |α|^2 is ___",
  //           options: [],
  //           explanation:
  //             "Using modulus properties, we find |α|^2 and thus 100 |α|^2 = 20.",
  //         },
  //         {
  //           question:
  //             "If α, β are the roots of the equation x^2 − x − 1 = 0 and Sn = 2023α^n + 2024β^n, then",
  //           options: [
  //             { text: "2S12 = S11 + S10" },
  //             { text: "S12 = S11 + S10", correct: true },
  //             { text: "2S11 = S12 + S10" },
  //             { text: "S11 = S10 + S12" },
  //           ],
  //           explanation:
  //             "Using the recurrence relation for roots of x^2 − x − 1 = 0, we find S12 = S11 + S10.",
  //         },
  //         {
  //           question:
  //             "If α, β be the roots of the equation x^2 − x + 2 = 0 with Im(α) > Im(β), then α^6 + α^4 + β^4 − 5α^2 is equal to",
  //           options: [],
  //           explanation:
  //             "Evaluating each term with complex roots yields the result as 13.",
  //         },
  //         {
  //           question:
  //             "Let r and θ respectively be the modulus and amplitude of the complex number z = 2 − i (2 tan 5π/8), then (r, θ) is equal to",
  //           options: [
  //             { text: "(2.5, -π/4)" },
  //             { text: "(2.7, -π/4)" },
  //             { text: "(3, -π/4)" },
  //             { text: "(2.6, -π/4)", correct: true },
  //           ],
  //           explanation:
  //             "Calculating modulus and argument for z = 2 - i(2 tan 5π/8) yields (2.6, -π/4).",
  //         },
  //         {
  //           question:
  //             "If z is a complex number, then the number of common roots of the equation z^1985 + z^100 + 1 = 0 and z^3 + 2z^2 + 2z + 1 = 0 is equal to:",
  //           options: [
  //             { text: "1" },
  //             { text: "2", correct: true },
  //             { text: "0" },
  //             { text: "3" },
  //           ],
  //           explanation:
  //             "Analyzing the roots of both polynomials, we find there are 2 common roots.",
  //         },
  //         {
  //           question:
  //             "The number of real solutions of the equation x(|x| + 3|x| + 5x − 1| + 6x − 2|) = 0 is",
  //           options: [],
  //           explanation:
  //             "Evaluating the absolute terms, we find there is 1 real solution.",
  //         },
  //         {
  //           question:
  //             "For 0 < c < b < a, let (a + b − 2c)x^2 + (b + c − 2a)x + (c + a − 2b) = 0, and α ≠ 1 be one of its roots. Then among the two statements (I) If α ∈ (−1, 0), then b cannot be the geometric mean of a and c (II) If α ∈ (0, 1), then b may be the geometric mean of a and c",
  //           options: [
  //             { text: "Both (I) and (II) are true", correct: true },
  //             { text: "Neither (I) nor (II) is true" },
  //             { text: "Only (II) is true" },
  //             { text: "Only (I) is true" },
  //           ],
  //           explanation: "Based on the conditions, both statements hold true.",
  //         },
  //         {
  //           question:
  //             "If z is a complex number such that |z| ≥ 1, then the minimum value of |z + (1/2)(3+4i)| is",
  //           options: [
  //             { text: "5/2" },
  //             { text: "2" },
  //             { text: "3/2" },
  //             { text: "None of the above", correct: true },
  //           ],
  //           explanation:
  //             "Calculating for |z + (1/2)(3+4i)| shows no real minimum among options, so 'None of the above' is correct.",
  //         },
  //         {
  //           question:
  //             "If α and β are the roots of the equation px^2 + qx − r = 0, where p, q, and r are consecutive terms of a non-constant G.P. and 1/α + 1/β = 3/4, then the value of (α − β)^2 is",
  //           options: [
  //             { text: "80/9", correct: true },
  //             { text: "9" },
  //             { text: "20/3" },
  //             { text: "8" },
  //           ],
  //           explanation:
  //             "By solving with the given G.P. condition, we find (α − β)^2 = 80/9.",
  //         },
  //       ],
  //     ],
  //     JEE2023: [
  //       {
  //         question:
  //           "Let z1 = 2 + 3i and z2 = 3 + 4i. The set S = {z ∈ C : |z − z1|^2 − |z − z2|^2 = |z1 − z2|^2} represents a:",
  //         options: [
  //           {
  //             text: "A. Straight line with sum of its intercepts on the coordinate axes equal to 14",
  //           },
  //           { text: "B. Hyperbola with the length of the transverse axis 7" },
  //           {
  //             text: "C. Straight line with the sum of its intercepts on the coordinate axes equal to -18",
  //           },
  //           { text: "D. Hyperbola with eccentricity 2", correct: true },
  //         ],
  //         explanation:
  //           "The given equation represents a hyperbola with the specified eccentricity, based on the conditions provided for complex points z1 and z2 and their distances.",
  //       },
  //       {
  //         question:
  //           "Let z be a complex number such that (z − 2i)/(z + i) = 2, z ≠ −i. Then, z lies on the circle of radius 2 and center:",
  //         options: [
  //           { text: "A. (2, 0)" },
  //           { text: "B. (0, 0)" },
  //           { text: "C. (0, 2)" },
  //           { text: "D. (0, -2)", correct: true },
  //         ],
  //         explanation:
  //           "The transformation equation suggests z lies on a circle of radius 2 centered at (0, -2), fulfilling the given modulus constraint.",
  //       },
  //       {
  //         question:
  //           "For two non-zero complex numbers z1 and z2, if Re(z1 z2) = 0 and Re(z1 + z2) = 0, then which of the following are possible?",
  //         options: [
  //           { text: "A. Im(z1) > 0 and Im(z2) > 0" },
  //           { text: "B. Im(z1) < 0 and Im(z2) > 0", correct: true },
  //           { text: "C. Im(z1) > 0 and Im(z2) < 0", correct: true },
  //           { text: "D. Im(z1) < 0 and Im(z2) < 0" },
  //         ],
  //         explanation:
  //           "Given conditions imply that real parts of z1 and z2 cancel out, and their imaginary parts are either opposite or the same, satisfying options B and C.",
  //       },
  //       {
  //         question:
  //           "Let z = 1 + i and z1 = (1 + i z)/(z'(1 - z) + 1/z). Then (12/π)arg(z1) is equal to ____",
  //         options: [],
  //         explanation:
  //           "Argument calculation shows the result by evaluating the transformation and applying angle arguments, leading to the correct numeric answer based on complex logarithmic identities.",
  //       },
  //       {
  //         question:
  //           "Let λ ∈ ℝ and let the equation E be |x|^2 − 2 |x| + |λ − 3| = 0. Then the largest element in the set S = {x + λ : x is an integer solution of E} is",
  //         options: [],
  //         explanation:
  //           "By solving for integer values of x satisfying the equation, the maximum x + λ is 5.",
  //       },
  //       {
  //         question:
  //           "For all z ∈ C on the curve C1: |z| = 4, let the locus of the point z + 1/z be the curve C2. Then",
  //         options: [
  //           {
  //             text: "the curves C1 and C2 intersect at 4 points",
  //             correct: true,
  //           },
  //           { text: "the curve C1 lies inside C2" },
  //           { text: "the curves C1 and C2 intersect at 2 points" },
  //           { text: "the curve C2 lies inside C1" },
  //         ],
  //         explanation:
  //           "Loci calculations show that C1 and C2 intersect at 4 points.",
  //       },
  //       {
  //         question:
  //           "The complex number z = (i − 1)/(cos(π/3) + i sin(π/3)) is equal to:",
  //         options: [
  //           { text: "√2 cos(5π/12) + i sin(5π/12)", correct: true },
  //           { text: "cos(π/12) − i sin(π/12)" },
  //           { text: "√2 cos(π/12) + i sin(π/12)" },
  //           { text: "√2 i cos(5π/12) − i sin(5π/12)" },
  //         ],
  //         explanation:
  //           "Using polar form, the expression simplifies to √2 cos(5π/12) + i sin(5π/12).",
  //       },
  //       {
  //         question:
  //           "Let α be a root of the equation (a − c)x^2 + (b − a)x + (c − b) = 0 where a, b, c are distinct real numbers such that the matrix [α^2 α 1; 1 1 1; a b c] is singular. Then the value of (a − c)^2/(b − a)(c − b) + (b − a)^2/(a − c)(c − b) + (c − b)^2/(a − c)(b − a) is",
  //         options: [
  //           { text: "6" },
  //           { text: "3", correct: true },
  //           { text: "9" },
  //           { text: "12" },
  //         ],
  //         explanation:
  //           "The singular condition of the matrix leads to (a − c)^2/(b − a)(c − b) + ... = 3.",
  //       },
  //       {
  //         question:
  //           "Let \\( \\lambda \\in \\mathbb{R} \\) and let the equation \\( E = |x|^2 - 2 |x| + | \\lambda - 3 | = 0 \\). Then the largest element in the set \\( S = \\{ x + \\lambda : x \\text{ is an integer solution of } E \\} \\) is:",
  //         options: [
  //           { text: "5", correct: true },
  //           { text: "4" },
  //           { text: "3" },
  //           { text: "6" },
  //         ],
  //         explanation:
  //           "Setting \\( |x| - 1 = \\pm 1 \\) and solving for integer values of \\( x \\) shows that the maximum value of \\( x + \\lambda = 5 \\).",
  //       },
  //       {
  //         question:
  //           "The number of real solutions of the equation \\( 3x^2 + \\frac{1}{x^2} - 2x + \\frac{1}{x} + 5 = 0 \\) is:",
  //         options: [
  //           { text: "4" },
  //           { text: "0", correct: true },
  //           { text: "3" },
  //           { text: "2" },
  //         ],
  //         explanation:
  //           "Using substitution \\( t = x + \\frac{1}{x} \\), the resulting equation has no real solutions.",
  //       },
  //       {
  //         question:
  //           "Let \\( S = \\{ \\alpha : \\log_2(9\\alpha^2 + 13) - \\log_2(5 \\cdot 3\\alpha^2 + 1) = 2 \\} \\). Then the maximum value of \\( \\beta \\) for which the equation \\( x^2 - 2 \\sum_{\\alpha \\in S} \\alpha^2 x + \\sum_{\\alpha \\in S} (\\alpha + 1)^2 \\beta = 0 \\) has real roots, is ____.",
  //         options: [{ text: "25", correct: true }],
  //         explanation:
  //           "Solving the maximum value condition for \\( \\beta \\) results in 25.",
  //       },
  //       {
  //         question:
  //           "Let \\( \\alpha \\in \\mathbb{R} \\) and let \\( \\alpha, \\beta \\) be the roots of the equation \\( x^2 + \\frac{60}{4}x + a = 0 \\). If \\( \\alpha^4 + \\beta^4 = -30 \\), then the product of all possible values of \\( a \\) is ____.",
  //         options: [{ text: "45", correct: true }],
  //         explanation:
  //           "Using the sum of powers and product conditions yields that the product of all values of \\( a \\) is 45.",
  //       },
  //       {
  //         question:
  //           "Let \\( \\lambda \\neq 0 \\) be a real number. Let \\( \\alpha, \\beta \\) be the roots of the equation \\( 14x^2 - 31x + 3\\lambda = 0 \\) and \\( \\alpha, \\gamma \\) be the roots of the equation \\( 35x^2 - 53x + 4\\lambda = 0 \\). Then \\( 3\\alpha / \\beta \\) and \\( 4\\alpha / \\gamma \\) are the roots of the equation:",
  //         options: [
  //           { text: "7x^2 + 245x - 250 = 0" },
  //           { text: "7x^2 - 245x + 250 = 0" },
  //           { text: "49x^2 - 245x + 250 = 0", correct: true },
  //           { text: "49x^2 + 245x + 250 = 0" },
  //         ],
  //         explanation:
  //           "Solving using the product and sum of roots from the transformed equations gives \\( 49x^2 - 245x + 250 = 0 \\).",
  //       },
  //       {
  //         question:
  //           "Let a ∈ ℝ and let α, β be the roots of the equation x^2 + 60^1/4 x + a = 0. If α^4 + β^4 = -30, then the product of all possible values of a is ____.",
  //         options: [{ text: "45", correct: true }],
  //         explanation:
  //           "Using the sum and product of roots to find α^4 + β^4 gives a product of 45.",
  //       },
  //       {
  //         question:
  //           "Let λ ≠ 0 be a real number. Let α, β be the roots of the equation 14x^2 - 31x + 3λ = 0 and α, γ be the roots of the equation 35x^2 - 53x + 4λ = 0. Then 3α/β and 4α/γ are the roots of the equation:",
  //         options: [
  //           { text: "7x^2 + 245x - 250 = 0" },
  //           { text: "7x^2 - 245x + 250 = 0" },
  //           { text: "49x^2 - 245x + 250 = 0", correct: true },
  //           { text: "49x^2 + 245x + 250 = 0" },
  //         ],
  //         explanation:
  //           "The roots simplify to yield the equation 49x^2 - 245x + 250 = 0.",
  //       },
  //       {
  //         question:
  //           "The number of real solutions of the equation 3x^2 + (1/x^2) - 2x + (1/x) + 5 = 0 is:",
  //         options: [
  //           { text: "4" },
  //           { text: "0", correct: true },
  //           { text: "3" },
  //           { text: "2" },
  //         ],
  //         explanation:
  //           "Using substitution, we find that there are no real solutions to this equation.",
  //       },
  //       {
  //         question:
  //           "The number of integral solutions x of log((x + 7)/2) + log((x - 7)/2x - 3) ≥ 0 is:",
  //         options: [
  //           { text: "5" },
  //           { text: "7" },
  //           { text: "8" },
  //           { text: "6", correct: true },
  //         ],
  //         explanation:
  //           "Applying logarithmic properties and solving for x yields 6 integral solutions.",
  //       },
  //       {
  //         question:
  //           "If the sum of all the roots of the equation e^(2x) − 11e^x − 45e^(−x) + 81/2 = 0 is log_e(p), then p is equal to ____.",
  //         options: [{ text: "45", correct: true }],
  //         explanation:
  //           "Letting e^x = t, solving reduces to a polynomial with product of roots yielding p = 45.",
  //       },
  //       {
  //         question:
  //           "Consider the quadratic equation (c - 5)x^2 - 2cx + (c - 4) = 0 where c ≠ 5. Let S be the set of all integral values of c for which one root of the equation lies in the interval (0,2) and the other root lies in the interval (2,3). Then the number of elements in S is:",
  //         options: [
  //           { text: "18" },
  //           { text: "12" },
  //           { text: "10" },
  //           { text: "8", correct: true },
  //         ],
  //         explanation:
  //           "The interval condition for the roots provides 8 valid integral values for c.",
  //       },
  //       {
  //         question:
  //           "The number of real roots of the equation x |x| − 5 |x + 2| + 6 = 0 is:",
  //         options: [
  //           { text: "5" },
  //           { text: "6" },
  //           { text: "4" },
  //           { text: "3", correct: true },
  //         ],
  //         explanation:
  //           "Analyzing intervals for absolute terms shows 3 real roots.",
  //       },
  //       {
  //         question:
  //           "If one real root of the quadratic equation 81x^2 + kx + 256 = 0 is the cube of the other root, then a value of k is:",
  //         options: [
  //           { text: "-81" },
  //           { text: "100" },
  //           { text: "144" },
  //           { text: "-300", correct: true },
  //         ],
  //         explanation:
  //           "Properties of cubic roots in a quadratic equation yield k = -300.",
  //       },
  //       {
  //         question:
  //           "Let α and β be roots of the equation x^2 − √6x + 3 = 0. Then, α^23 + β^23 + α^14 + β^14 is equal to:",
  //         options: [
  //           { text: "9" },
  //           { text: "729" },
  //           { text: "72" },
  //           { text: "81", correct: true },
  //         ],
  //         explanation:
  //           "Calculations yield a result of 81 based on high powers of the roots.",
  //       },
  //       {
  //         question: "The roots of the equation x^2 - 8x + 20 = 0 are:",
  //         options: [
  //           { text: "Real and equal" },
  //           { text: "Real and unequal" },
  //           { text: "Complex and unequal", correct: true },
  //           { text: "None of the above" },
  //         ],
  //         explanation:
  //           "The discriminant (b^2 - 4ac) for the equation is negative, indicating complex and unequal roots.",
  //       },
  //       {
  //         question:
  //           "Let α and β be the roots of the equation x^2 + px + q = 0. If α + β = 5 and αβ = 6, then the value of p and q is:",
  //         options: [
  //           { text: "p = -5, q = 6", correct: true },
  //           { text: "p = 5, q = 6" },
  //           { text: "p = -6, q = 5" },
  //           { text: "p = 6, q = -5" },
  //         ],
  //         explanation:
  //           "Using the sum and product of roots, we find p = -5 and q = 6.",
  //       },
  //       {
  //         question:
  //           "If the quadratic equation x^2 + bx + c = 0 has roots that are equal in magnitude but opposite in sign, then which of the following is true?",
  //         options: [
  //           { text: "b = 0", correct: true },
  //           { text: "c = 0" },
  //           { text: "b^2 = 4c" },
  //           { text: "c < 0" },
  //         ],
  //         explanation:
  //           "For roots equal in magnitude and opposite in sign, the sum of the roots must be zero, so b = 0.",
  //       },
  //       {
  //         question:
  //           "In a quadratic equation ax^2 + bx + c = 0, if the roots are imaginary and c > 0, then which of the following is true?",
  //         options: [
  //           { text: "b^2 < 4ac", correct: true },
  //           { text: "b^2 > 4ac" },
  //           { text: "b^2 = 4ac" },
  //           { text: "b = 0" },
  //         ],
  //         explanation:
  //           "Imaginary roots require a negative discriminant, so b^2 < 4ac.",
  //       },
  //       {
  //         question:
  //           "Let α, β be roots of the equation x^2 - 3x + 2 = 0. Then α^3 + β^3 equals:",
  //         options: [
  //           { text: "10" },
  //           { text: "8" },
  //           { text: "9", correct: true },
  //           { text: "7" },
  //         ],
  //         explanation:
  //           "Using identities, α^3 + β^3 = (α + β)(α^2 - αβ + β^2). Substituting values yields 9.",
  //       },
  //       {
  //         question:
  //           "If one root of the equation x^2 + px + q = 0 is double the other root, then the value of p^2 is equal to:",
  //         options: [
  //           { text: "8q", correct: true },
  //           { text: "4q" },
  //           { text: "2q" },
  //           { text: "16q" },
  //         ],
  //         explanation:
  //           "By setting one root as double the other, we derive p^2 = 8q.",
  //       },
  //       {
  //         question:
  //           "If the roots of the equation x^2 + bx + c = 0 are real and equal, then which of the following is true?",
  //         options: [
  //           { text: "b^2 = 4c", correct: true },
  //           { text: "b^2 > 4c" },
  //           { text: "b = c" },
  //           { text: "c = 0" },
  //         ],
  //         explanation:
  //           "Real and equal roots mean the discriminant is zero, so b^2 = 4c.",
  //       },
  //     ],
  //     JEE2022: [
  //       {
  //         question:
  //           "If the sum of the squares of the reciprocals of the roots α and β of the equation 3x^2 + λx - 1 = 0 is 15, then 6(α^3 + β^3)^2 is equal to:",
  //         options: [
  //           { text: "18" },
  //           { text: "24", correct: true },
  //           { text: "36" },
  //           { text: "96" },
  //         ],
  //         explanation:
  //           "Using the properties of reciprocals of roots, we calculate 6(α^3 + β^3)^2 = 24.",
  //       },
  //       {
  //         question:
  //           "Let a circle C in complex plane pass through the points z1 = 3 + 4i, z2 = 4 + 3i and z3 = 5i. If z (≠ z1) is a point on C such that the line through z and z1 is perpendicular to the line through z2 and z3, then arg(z) is equal to:",
  //         options: [
  //           { text: "tan^(-1)(2/√5) - π" },
  //           { text: "tan^(-1)(24/7) - π", correct: true },
  //           { text: "tan^(-1)(3) - π" },
  //           { text: "tan^(-1)(3/4) - π" },
  //         ],
  //         explanation:
  //           "The perpendicular condition yields arg(z) = tan^(-1)(24/7) - π.",
  //       },
  //       {
  //         question:
  //           "Let A = { z ∈ C: |z + 1 / (z - 1)| < 1 } and B = { z ∈ C: arg(z - 1 / z + 1) = 2π/3 }. Then A ∩ B is:",
  //         options: [
  //           {
  //             text: "a portion of a circle centered at (0, -1/√3) that lies in the second and third quadrants only",
  //           },
  //           {
  //             text: "a portion of a circle centered at (0, -1/√3) that lies in the second quadrant only",
  //             correct: true,
  //           },
  //           { text: "an empty set" },
  //           {
  //             text: "a portion of a circle of radius (2/√3) that lies in the third quadrant only",
  //           },
  //         ],
  //         explanation:
  //           "The intersection gives a circle centered at (0, -1/√3) in the second quadrant.",
  //       },
  //     ],
  //   },
  // },
};
