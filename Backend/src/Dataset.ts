export const jeeQuestions = {
  Physics: {
    UnitsAndMeasurements: {
      JEE2024: [
        {
          question:
            "The de-Broglie wavelength associated with a particle of mass m and energy E is λ = h/√(2mE). The dimensional formula for Planck's constant is:",
          options: [
            {
              text: "[M^1 L^2 T^-1]",
              correct: true,
            },
            {
              text: "[M^0 L^2 T^-1]",
            },
            {
              text: "[M^1 T^2]",
            },
            {
              text: "[L^2 T^-2]",
            },
          ],
          explanation:
            "To determine the dimensional formula for Planck's constant, we start by analyzing the de-Broglie wavelength equation λ = h/√(2mE). Here, λ is the wavelength, h is Planck's constant, m is the mass, and E is the energy. We express the dimensions as follows: wavelength [L], mass [M], and energy [ML^2T^-2]. Substituting into the equation and simplifying gives h = [M^1L^2T^-1]. Therefore, the correct option is [M^1 L^2 T^-1].",
        },
        {
          question: "The dimensional formula of latent heat is:",
          options: [
            {
              text: "[M^0 L^2 T^-2]",
            },
            {
              text: "[M^1 L^2 T^-2]",
            },
            {
              text: "[M^1 L^2 T^-2 θ^-1]",
              correct: true,
            },
            {
              text: "[M^0 T^-1]",
            },
          ],
          explanation:
            "The formula for latent heat (L) is given by Q = mL, where Q is heat (with dimension of energy, [M^1L^2T^-2]), m is mass ([M]), and L is latent heat. Solving for L, we find L = Q/m = [M^1L^2T^-2]/[M] = [M^0L^2T^-2 θ^-1]. Hence, the correct option is [M^1 L^2 T^-2 θ^-1].",
        },
        {
          question:
            "One main scale division of vernier caliper is equal to 1mm. If 10 divisions of main scale coincide with 9 divisions of vernier scale, the least count of the vernier caliper is:",
          options: [
            {
              text: "0.1 mm",
              correct: true,
            },
            {
              text: "0.01 mm",
            },
            {
              text: "0.2 mm",
            },
            {
              text: "0.02 mm",
            },
          ],
          explanation:
            "The least count of a vernier caliper is defined as the smallest distance it can measure, calculated as the difference in length between one main scale and one vernier scale division. Since 10 main scale divisions coincide with 9 vernier divisions, we get least count = 1 mm / (10 divisions) = 0.1 mm. Hence, the correct option is 0.1 mm.",
        },
        {
          question:
            "If ε₀ is the permittivity of free space and E is the electric field, then ε₀E² has the dimensions:",
          options: [
            {
              text: "[M L^-1 T^-2]",
              correct: true,
            },
            {
              text: "[M^1 L^2 T^-1]",
            },
            {
              text: "[M^1 L^-2 T^1]",
            },
            {
              text: "[M^1 T^4 A^-4]",
            },
          ],
          explanation:
            "To determine the dimensions of ε₀E², we need the dimensional formulas of ε₀ and E. The permittivity of free space, ε₀, has dimensions [M^-1L^-3T^4A^2], and the electric field, E, has dimensions [M^1L^1T^-3A^-1]. Thus, ε₀E² = [M^-1L^-3T^4A^2] * [M^1L^1T^-3A^-1]^2, which simplifies to [M L^-1 T^-2]. Therefore, the correct option is [M L^-1 T^-2].",
        },
        {
          question:
            "There are 100 divisions on the circular scale of a screw gauge of pitch 1mm. With no measuring quantity in between the jaws, the zero of the circular scale lies 5 divisions below the reference line. The diameter of a wire is then measured using this screw gauge. It is found that 4 linear scale divisions are clearly visible while 60 divisions on circular scale coincide with the reference line. The diameter of the wire is :",
          options: [
            {
              text: "4.65mm",
            },
            {
              text: "4.60mm",
            },
            {
              text: "4.55mm",
              correct: true,
            },
            {
              text: "3.35mm",
            },
          ],
          explanation:
            "Pitch of the screw gauge: 1 mm \nNumber of divisions on the circular scale: 100 divisions\nZero error: The zero of the circular scale lies 5 divisions below the reference line, indicating a positive zero error.\nMeasurement data:\n4 linear scale divisions are visible.\n60 divisions on the circular scale coincide with the reference line.\nStep-by-Step Calculation\nLeast Count of the screw gauge:\nLeast Count = Pitch/Number of Divisions on Circular Scale = 1mm/100 = 0.01mm\nMain Scale Reading (MSR):\nThe linear scale shows 4 divisions, so the main scale reading is:\nMSR = 4mm \nCircular Scale Reading (CSR):60 divisions coincide with the reference line, so the circular scale reading is:\nCSR = 60 x LeastCount = 60 x 0.01mm = 0.60mm\nZero Error:The zero error is 5 divisions below the reference line, indicating a positive zero error:Zero Error = +5 x Least Count = +5 x 0.01 mm = +0.05 mm\nTotal Reading without considering zero error:Total Reading (without zero error) = MSR + CSR = 4mm + 0.60 mm = 4.60 mm\nSince the zero error is positive, we subtract it from the total reading:\nCorrected Reading = Total Reading (without zero error) — Zero Error = 4.60 mm — 0.05 mm = 4.55 mm",
        },
      ],
      JEE2023: [
        {
          question:
            "The speed of a wave produced in water is given by ( v = lambda^a g^b \rho^c ). Where (lambda), (g) and (\rho) are wavelength of wave, acceleration due to gravity and density of water respectively. The values of (a), (b) and (c) respectively, are:",

          options: [
            {
              text: "1/2 , 0 , 1/2",
            },
            {
              text: "1 , 1 , 0",
            },
            {
              text: "1 , -1 , 0",
            },
            {
              text: "1/2 , 1/2 , 0",
              correct: true,
            },
          ],
          explanation: "",
        },
      ],
    },
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
            "Primary voltage (V_p) = 230 V, turns ratio = 10:1, load resistance (R_L) = 46 Ω. Secondary voltage V_s = V_p / 10 = 23 V. Secondary current I_s = V_s / R_L = 23 / 46 = 0.5 A. Power consumed in load = V_s * I_s = 23 * 0.5 = 11.5 W.",
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
            "E = (25sin 1000t) V, power factor = 1/√2. New source of emf E = (20sin 2000t) V. Since power factor depends on the impedance ratio (resistance to reactance) and not directly on source voltage or frequency alone, doubling the frequency (1000 rad/s to 2000 rad/s) increases the inductive reactance (XL = ωL). This decreases the power factor because inductive effects increase with frequency. Therefore, the new power factor will be less than 1/√2.",
        },
        {
          question:
            "An	alternating	voltage	V(t)	=	220sin	100πt	volt	is	applied	to	a	purely resistive	load	of	50Ω.	The	time	taken	for	the	current	to	rise	from	half	of the	peak	value	to	the	peak	value	is:",
          options: [
            {
              text: "5 ms",
            },
            {
              text: "3.3 ms",
              correct: true,
            },
            {
              text: "7.2 ms",
            },
            {
              text: "2.2 ms",
            },
          ],
          explanation:
            "Given: V(t) = 220sin(100πt) volts, load resistance R = 50 Ω. Peak voltage V_peak = 220 V. Peak current I_peak = V_peak / R = 220 / 50 = 4.4 A. Time period T = 2π / ω = 2π / 100π = 0.02 s (where ω = 100π). Time to rise from half of the peak current to the peak value is T / 4 = 0.02 / 4 = 0.005 s.",
        },
        {
          question:
            "An	AC	voltage	V	=	20sin	200πt	is	applied	to	a	series	LCR	circuit	which drives	a	current	I	=	10sin	(200πt	+	π/3).	The	average	power	dissipated is:",
          options: [
            {
              text: "21.6W",
            },
            {
              text: "200W",
            },
            {
              text: "173.2W",
            },
            {
              text: "50W",
              correct: true,
            },
          ],
          explanation:
            "Given: V = 20sin(200πt) volts, I = 10sin(200πt + π/3) amps. Average power dissipated P_avg = V_rms * I_rms * cos(ϕ), where phase difference ϕ = π/3. V_rms = V_peak / √2 = 20 / √2 = 10√2 V, I_rms = I_peak / √2 = 10 / √2 = 5√2 A. cos(ϕ) = cos(π/3) = 1/2. Thus, P_avg = 10√2 * 5√2 * 1/2 = 50 W.",
        },
        {
          question:
            "A	parallel	plate	capacitor	has	a	capacitance	C	=	200pF.	It	is	connected to	230V	ac	supply	with	an	angular	frequency	300rad∕	s.	The	rms	value	of conduction	current	in	the	circuit	and	displacement	current	in	the capacitor	respectively	are	:",
          options: [
            {
              text: "1.38µA	and	1.38µA",
            },
            {
              text: "14.3µA	and	143µA",
            },
            {
              text: "13.8µA	and	138µA",
            },
            {
              text: "13.8µA	and	13.8µA",
              correct: true,
            },
          ],
          explanation:
            "Given: Capacitance C = 200 pF, Voltage V = 230 V (rms), Angular frequency ω = 300 rad/s. The rms conduction current I_rms = V * ω * C. Converting capacitance to farads: C = 200 × 10^(-12) F. Then, I_rms = 230 * 300 * 200 × 10^(-12) = 13.8 μA. Since conduction current equals displacement current in a capacitor circuit, both are 13.8 μA.",
        },
      ],
      JEE2023: [
        {
          question:
            "In	an	LC	oscillator,	if	values	of	inductance	and	capacitance	become twice	and	eight	times,	respectively,	then	the	resonant	frequency	of oscillator	becomes	x	times	its	initial	resonant	frequency	ω0.	The	value of	x	is:",
          options: [
            {
              text: "1/4",
              correct: true,
            },
            {
              text: "16",
            },
            {
              text: "1/16",
            },
            {
              text: "16",
            },
          ],
          explanation:
            "Given: Inductance L becomes twice its initial value, and capacitance C becomes eight times its initial value. Resonant frequency ω₀ = 1 / √(LC). New resonant frequency ω' = 1 / √(2L * 8C) = 1 / √(16LC) = ω₀ / 4. Thus, the value of x is 1/4.",
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
          question: "The	difference	between	electron	gain	enthalpies	will	be	maximum between:",
          options: [
            {
              text: "Ne	and	F",
            },
            {
              text: "Ne	and	Cl",
              correct:true
            },
            {
              text: "Ar	and	Cl",
            },
            {
              text: "	Ar	and	F",
            },
          ],
          explanation: "Cl	has	the	most	negative	∆Heg	among	all	the	elements	and	Ne	has	the	most	positive	∆Heg",
        },
        {
          question: "Given	below	are	two	statements,	one	is	labelled	as	Assertion	A	and	the other	is	labelled	as	Reason	R. Assertion	A	:	A	solution	of	the	product	obtained	by	heating	a	mole	of glycine	with	a	mole	of	chlorine	in	presence	of	red	phosphorous generates	chiral	carbon	atom. Reason	R	:	A	molecule	with	2	chiral	carbons	is	always	optically	active. In	the	light	of	the	above	statements,	choose	the	correct	answer	from	the options	given	below:",
          options: [
            {
              text: "A	is	false	but	R	is	true",
            },
            {
              text: "Both	A	and	R	are	true	but	R	is	NOT	the	correct	explanation	of	A",
            },
            {
              text: "A	is	true	but	R	is	false",
              correct:true
            },
            {
              text: "Both	A	and	R	are	true	and	R	is	the	correct	explanation	of	A",
            },
          ],
          explanation: "Given: Assertion A: The product of heating glycine with chlorine generates a chiral carbon. Reason R: A molecule with 2 chiral carbons is always optically active. Explanation: Assertion A is correct, but Reason R is incorrect because two chiral centers don’t guarantee optical activity (meso compounds can be optically inactive). Final result: Assertion A is correct, Reason R is incorrect.",
        },
      ],
    },
  },
  Maths: {
    ComplexNumberAndQuadraticEquations: {
      JEE2024: [
        [
          {
            question:
              "If S = {z ∈ C : |z − i| = |z + i| = |z − 1|}, then, n(S) is:",
            options: [
              { text: "1", correct: true },
              { text: "0" },
              { text: "3" },
              { text: "2" },
            ],
            explanation:
              "The points form a triangle ABC with equal distances from each vertex to the circumcenter, so n(S) = 1.",
          },
          {
            question:
              "If α satisfies the equation x^2 + x + 1 = 0 and (1 + α)^7 = A + Bα + Cα^2, where A, B, C ≥ 0, then 5(3A − 2B − C) is equal to",
            options: [],
            explanation:
              "Solving for α yields values for A, B, and C, giving the answer as 5.",
          },
          {
            question:
              "Let the complex numbers α and 1/α lie on two circles with center z0 = 1 + i. Then, the value of 100 |α|^2 is ___",
            options: [],
            explanation:
              "Using modulus properties, we find |α|^2 and thus 100 |α|^2 = 20.",
          },
          {
            question:
              "If α, β are the roots of the equation x^2 − x − 1 = 0 and Sn = 2023α^n + 2024β^n, then",
            options: [
              { text: "2S12 = S11 + S10" },
              { text: "S12 = S11 + S10", correct: true },
              { text: "2S11 = S12 + S10" },
              { text: "S11 = S10 + S12" },
            ],
            explanation:
              "Using the recurrence relation for roots of x^2 − x − 1 = 0, we find S12 = S11 + S10.",
          },
          {
            question:
              "If α, β be the roots of the equation x^2 − x + 2 = 0 with Im(α) > Im(β), then α^6 + α^4 + β^4 − 5α^2 is equal to",
            options: [],
            explanation:
              "Evaluating each term with complex roots yields the result as 13.",
          },
          {
            question:
              "Let r and θ respectively be the modulus and amplitude of the complex number z = 2 − i (2 tan 5π/8), then (r, θ) is equal to",
            options: [
              { text: "(2.5, -π/4)" },
              { text: "(2.7, -π/4)" },
              { text: "(3, -π/4)" },
              { text: "(2.6, -π/4)", correct: true },
            ],
            explanation:
              "Calculating modulus and argument for z = 2 - i(2 tan 5π/8) yields (2.6, -π/4).",
          },
          {
            question:
              "If z is a complex number, then the number of common roots of the equation z^1985 + z^100 + 1 = 0 and z^3 + 2z^2 + 2z + 1 = 0 is equal to:",
            options: [
              { text: "1" },
              { text: "2", correct: true },
              { text: "0" },
              { text: "3" },
            ],
            explanation:
              "Analyzing the roots of both polynomials, we find there are 2 common roots.",
          },
          {
            question:
              "The number of real solutions of the equation x(|x| + 3|x| + 5x − 1| + 6x − 2|) = 0 is",
            options: [],
            explanation:
              "Evaluating the absolute terms, we find there is 1 real solution.",
          },
          {
            question:
              "For 0 < c < b < a, let (a + b − 2c)x^2 + (b + c − 2a)x + (c + a − 2b) = 0, and α ≠ 1 be one of its roots. Then among the two statements (I) If α ∈ (−1, 0), then b cannot be the geometric mean of a and c (II) If α ∈ (0, 1), then b may be the geometric mean of a and c",
            options: [
              { text: "Both (I) and (II) are true", correct: true },
              { text: "Neither (I) nor (II) is true" },
              { text: "Only (II) is true" },
              { text: "Only (I) is true" },
            ],
            explanation: "Based on the conditions, both statements hold true.",
          },
          {
            question:
              "If z is a complex number such that |z| ≥ 1, then the minimum value of |z + (1/2)(3+4i)| is",
            options: [
              { text: "5/2" },
              { text: "2" },
              { text: "3/2" },
              { text: "None of the above", correct: true },
            ],
            explanation:
              "Calculating for |z + (1/2)(3+4i)| shows no real minimum among options, so 'None of the above' is correct.",
          },
          {
            question:
              "If α and β are the roots of the equation px^2 + qx − r = 0, where p, q, and r are consecutive terms of a non-constant G.P. and 1/α + 1/β = 3/4, then the value of (α − β)^2 is",
            options: [
              { text: "80/9", correct: true },
              { text: "9" },
              { text: "20/3" },
              { text: "8" },
            ],
            explanation:
              "By solving with the given G.P. condition, we find (α − β)^2 = 80/9.",
          },
        ],
      ],
      JEE2023: [
        {
          question:
            "Let z1 = 2 + 3i and z2 = 3 + 4i. The set S = {z ∈ C : |z − z1|^2 − |z − z2|^2 = |z1 − z2|^2} represents a:",
          options: [
            {
              text: "A. Straight line with sum of its intercepts on the coordinate axes equal to 14",
            },
            { text: "B. Hyperbola with the length of the transverse axis 7" },
            {
              text: "C. Straight line with the sum of its intercepts on the coordinate axes equal to -18",
            },
            { text: "D. Hyperbola with eccentricity 2", correct: true },
          ],
          explanation:
            "The given equation represents a hyperbola with the specified eccentricity, based on the conditions provided for complex points z1 and z2 and their distances.",
        },
        {
          question:
            "Let z be a complex number such that (z − 2i)/(z + i) = 2, z ≠ −i. Then, z lies on the circle of radius 2 and center:",
          options: [
            { text: "A. (2, 0)" },
            { text: "B. (0, 0)" },
            { text: "C. (0, 2)" },
            { text: "D. (0, -2)", correct: true },
          ],
          explanation:
            "The transformation equation suggests z lies on a circle of radius 2 centered at (0, -2), fulfilling the given modulus constraint.",
        },
        {
          question:
            "For two non-zero complex numbers z1 and z2, if Re(z1 z2) = 0 and Re(z1 + z2) = 0, then which of the following are possible?",
          options: [
            { text: "A. Im(z1) > 0 and Im(z2) > 0" },
            { text: "B. Im(z1) < 0 and Im(z2) > 0", correct: true },
            { text: "C. Im(z1) > 0 and Im(z2) < 0", correct: true },
            { text: "D. Im(z1) < 0 and Im(z2) < 0" },
          ],
          explanation:
            "Given conditions imply that real parts of z1 and z2 cancel out, and their imaginary parts are either opposite or the same, satisfying options B and C.",
        },
        {
          question:
            "Let z = 1 + i and z1 = (1 + i z)/(z'(1 - z) + 1/z). Then (12/π)arg(z1) is equal to ____",
          options: [],
          explanation:
            "Argument calculation shows the result by evaluating the transformation and applying angle arguments, leading to the correct numeric answer based on complex logarithmic identities.",
        },
        {
          question:
            "Let λ ∈ ℝ and let the equation E be |x|^2 − 2 |x| + |λ − 3| = 0. Then the largest element in the set S = {x + λ : x is an integer solution of E} is",
          options: [],
          explanation:
            "By solving for integer values of x satisfying the equation, the maximum x + λ is 5.",
        },
        {
          question:
            "For all z ∈ C on the curve C1: |z| = 4, let the locus of the point z + 1/z be the curve C2. Then",
          options: [
            {
              text: "the curves C1 and C2 intersect at 4 points",
              correct: true,
            },
            { text: "the curve C1 lies inside C2" },
            { text: "the curves C1 and C2 intersect at 2 points" },
            { text: "the curve C2 lies inside C1" },
          ],
          explanation:
            "Loci calculations show that C1 and C2 intersect at 4 points.",
        },
        {
          question:
            "The complex number z = (i − 1)/(cos(π/3) + i sin(π/3)) is equal to:",
          options: [
            { text: "√2 cos(5π/12) + i sin(5π/12)", correct: true },
            { text: "cos(π/12) − i sin(π/12)" },
            { text: "√2 cos(π/12) + i sin(π/12)" },
            { text: "√2 i cos(5π/12) − i sin(5π/12)" },
          ],
          explanation:
            "Using polar form, the expression simplifies to √2 cos(5π/12) + i sin(5π/12).",
        },
        {
          question:
            "Let α be a root of the equation (a − c)x^2 + (b − a)x + (c − b) = 0 where a, b, c are distinct real numbers such that the matrix [α^2 α 1; 1 1 1; a b c] is singular. Then the value of (a − c)^2/(b − a)(c − b) + (b − a)^2/(a − c)(c − b) + (c − b)^2/(a − c)(b − a) is",
          options: [
            { text: "6" },
            { text: "3", correct: true },
            { text: "9" },
            { text: "12" },
          ],
          explanation:
            "The singular condition of the matrix leads to (a − c)^2/(b − a)(c − b) + ... = 3.",
        },
        {
          question:
            "Let \\( \\lambda \\in \\mathbb{R} \\) and let the equation \\( E = |x|^2 - 2 |x| + | \\lambda - 3 | = 0 \\). Then the largest element in the set \\( S = \\{ x + \\lambda : x \\text{ is an integer solution of } E \\} \\) is:",
          options: [
            { text: "5", correct: true },
            { text: "4" },
            { text: "3" },
            { text: "6" },
          ],
          explanation:
            "Setting \\( |x| - 1 = \\pm 1 \\) and solving for integer values of \\( x \\) shows that the maximum value of \\( x + \\lambda = 5 \\).",
        },
        {
          question:
            "The number of real solutions of the equation \\( 3x^2 + \\frac{1}{x^2} - 2x + \\frac{1}{x} + 5 = 0 \\) is:",
          options: [
            { text: "4" },
            { text: "0", correct: true },
            { text: "3" },
            { text: "2" },
          ],
          explanation:
            "Using substitution \\( t = x + \\frac{1}{x} \\), the resulting equation has no real solutions.",
        },
        {
          question:
            "Let \\( S = \\{ \\alpha : \\log_2(9\\alpha^2 + 13) - \\log_2(5 \\cdot 3\\alpha^2 + 1) = 2 \\} \\). Then the maximum value of \\( \\beta \\) for which the equation \\( x^2 - 2 \\sum_{\\alpha \\in S} \\alpha^2 x + \\sum_{\\alpha \\in S} (\\alpha + 1)^2 \\beta = 0 \\) has real roots, is ____.",
          options: [{ text: "25", correct: true }],
          explanation:
            "Solving the maximum value condition for \\( \\beta \\) results in 25.",
        },
        {
          question:
            "Let \\( \\alpha \\in \\mathbb{R} \\) and let \\( \\alpha, \\beta \\) be the roots of the equation \\( x^2 + \\frac{60}{4}x + a = 0 \\). If \\( \\alpha^4 + \\beta^4 = -30 \\), then the product of all possible values of \\( a \\) is ____.",
          options: [{ text: "45", correct: true }],
          explanation:
            "Using the sum of powers and product conditions yields that the product of all values of \\( a \\) is 45.",
        },
        {
          question:
            "Let \\( \\lambda \\neq 0 \\) be a real number. Let \\( \\alpha, \\beta \\) be the roots of the equation \\( 14x^2 - 31x + 3\\lambda = 0 \\) and \\( \\alpha, \\gamma \\) be the roots of the equation \\( 35x^2 - 53x + 4\\lambda = 0 \\). Then \\( 3\\alpha / \\beta \\) and \\( 4\\alpha / \\gamma \\) are the roots of the equation:",
          options: [
            { text: "7x^2 + 245x - 250 = 0" },
            { text: "7x^2 - 245x + 250 = 0" },
            { text: "49x^2 - 245x + 250 = 0", correct: true },
            { text: "49x^2 + 245x + 250 = 0" },
          ],
          explanation:
            "Solving using the product and sum of roots from the transformed equations gives \\( 49x^2 - 245x + 250 = 0 \\).",
        },
        {
          question:
            "Let a ∈ ℝ and let α, β be the roots of the equation x^2 + 60^1/4 x + a = 0. If α^4 + β^4 = -30, then the product of all possible values of a is ____.",
          options: [{ text: "45", correct: true }],
          explanation:
            "Using the sum and product of roots to find α^4 + β^4 gives a product of 45.",
        },
        {
          question:
            "Let λ ≠ 0 be a real number. Let α, β be the roots of the equation 14x^2 - 31x + 3λ = 0 and α, γ be the roots of the equation 35x^2 - 53x + 4λ = 0. Then 3α/β and 4α/γ are the roots of the equation:",
          options: [
            { text: "7x^2 + 245x - 250 = 0" },
            { text: "7x^2 - 245x + 250 = 0" },
            { text: "49x^2 - 245x + 250 = 0", correct: true },
            { text: "49x^2 + 245x + 250 = 0" },
          ],
          explanation:
            "The roots simplify to yield the equation 49x^2 - 245x + 250 = 0.",
        },
        {
          question:
            "The number of real solutions of the equation 3x^2 + (1/x^2) - 2x + (1/x) + 5 = 0 is:",
          options: [
            { text: "4" },
            { text: "0", correct: true },
            { text: "3" },
            { text: "2" },
          ],
          explanation:
            "Using substitution, we find that there are no real solutions to this equation.",
        },
        {
          question:
            "The number of integral solutions x of log((x + 7)/2) + log((x - 7)/2x - 3) ≥ 0 is:",
          options: [
            { text: "5" },
            { text: "7" },
            { text: "8" },
            { text: "6", correct: true },
          ],
          explanation:
            "Applying logarithmic properties and solving for x yields 6 integral solutions.",
        },
        {
          question:
            "If the sum of all the roots of the equation e^(2x) − 11e^x − 45e^(−x) + 81/2 = 0 is log_e(p), then p is equal to ____.",
          options: [{ text: "45", correct: true }],
          explanation:
            "Letting e^x = t, solving reduces to a polynomial with product of roots yielding p = 45.",
        },
        {
          question:
            "Consider the quadratic equation (c - 5)x^2 - 2cx + (c - 4) = 0 where c ≠ 5. Let S be the set of all integral values of c for which one root of the equation lies in the interval (0,2) and the other root lies in the interval (2,3). Then the number of elements in S is:",
          options: [
            { text: "18" },
            { text: "12" },
            { text: "10" },
            { text: "8", correct: true },
          ],
          explanation:
            "The interval condition for the roots provides 8 valid integral values for c.",
        },
        {
          question:
            "The number of real roots of the equation x |x| − 5 |x + 2| + 6 = 0 is:",
          options: [
            { text: "5" },
            { text: "6" },
            { text: "4" },
            { text: "3", correct: true },
          ],
          explanation:
            "Analyzing intervals for absolute terms shows 3 real roots.",
        },
        {
          question:
            "If one real root of the quadratic equation 81x^2 + kx + 256 = 0 is the cube of the other root, then a value of k is:",
          options: [
            { text: "-81" },
            { text: "100" },
            { text: "144" },
            { text: "-300", correct: true },
          ],
          explanation:
            "Properties of cubic roots in a quadratic equation yield k = -300.",
        },
        {
          question:
            "Let α and β be roots of the equation x^2 − √6x + 3 = 0. Then, α^23 + β^23 + α^14 + β^14 is equal to:",
          options: [
            { text: "9" },
            { text: "729" },
            { text: "72" },
            { text: "81", correct: true },
          ],
          explanation:
            "Calculations yield a result of 81 based on high powers of the roots.",
        },
        {
          question: "The roots of the equation x^2 - 8x + 20 = 0 are:",
          options: [
            { text: "Real and equal" },
            { text: "Real and unequal" },
            { text: "Complex and unequal", correct: true },
            { text: "None of the above" },
          ],
          explanation:
            "The discriminant (b^2 - 4ac) for the equation is negative, indicating complex and unequal roots.",
        },
        {
          question:
            "Let α and β be the roots of the equation x^2 + px + q = 0. If α + β = 5 and αβ = 6, then the value of p and q is:",
          options: [
            { text: "p = -5, q = 6", correct: true },
            { text: "p = 5, q = 6" },
            { text: "p = -6, q = 5" },
            { text: "p = 6, q = -5" },
          ],
          explanation:
            "Using the sum and product of roots, we find p = -5 and q = 6.",
        },
        {
          question:
            "If the quadratic equation x^2 + bx + c = 0 has roots that are equal in magnitude but opposite in sign, then which of the following is true?",
          options: [
            { text: "b = 0", correct: true },
            { text: "c = 0" },
            { text: "b^2 = 4c" },
            { text: "c < 0" },
          ],
          explanation:
            "For roots equal in magnitude and opposite in sign, the sum of the roots must be zero, so b = 0.",
        },
        {
          question:
            "In a quadratic equation ax^2 + bx + c = 0, if the roots are imaginary and c > 0, then which of the following is true?",
          options: [
            { text: "b^2 < 4ac", correct: true },
            { text: "b^2 > 4ac" },
            { text: "b^2 = 4ac" },
            { text: "b = 0" },
          ],
          explanation:
            "Imaginary roots require a negative discriminant, so b^2 < 4ac.",
        },
        {
          question:
            "Let α, β be roots of the equation x^2 - 3x + 2 = 0. Then α^3 + β^3 equals:",
          options: [
            { text: "10" },
            { text: "8" },
            { text: "9", correct: true },
            { text: "7" },
          ],
          explanation:
            "Using identities, α^3 + β^3 = (α + β)(α^2 - αβ + β^2). Substituting values yields 9.",
        },
        {
          question:
            "If one root of the equation x^2 + px + q = 0 is double the other root, then the value of p^2 is equal to:",
          options: [
            { text: "8q", correct: true },
            { text: "4q" },
            { text: "2q" },
            { text: "16q" },
          ],
          explanation:
            "By setting one root as double the other, we derive p^2 = 8q.",
        },
        {
          question:
            "If the roots of the equation x^2 + bx + c = 0 are real and equal, then which of the following is true?",
          options: [
            { text: "b^2 = 4c", correct: true },
            { text: "b^2 > 4c" },
            { text: "b = c" },
            { text: "c = 0" },
          ],
          explanation:
            "Real and equal roots mean the discriminant is zero, so b^2 = 4c.",
        },
      ],
      JEE2022: [
        {
          question:
            "If the sum of the squares of the reciprocals of the roots α and β of the equation 3x^2 + λx - 1 = 0 is 15, then 6(α^3 + β^3)^2 is equal to:",
          options: [
            { text: "18" },
            { text: "24", correct: true },
            { text: "36" },
            { text: "96" },
          ],
          explanation:
            "Using the properties of reciprocals of roots, we calculate 6(α^3 + β^3)^2 = 24.",
        },
        {
          question:
            "Let a circle C in complex plane pass through the points z1 = 3 + 4i, z2 = 4 + 3i and z3 = 5i. If z (≠ z1) is a point on C such that the line through z and z1 is perpendicular to the line through z2 and z3, then arg(z) is equal to:",
          options: [
            { text: "tan^(-1)(2/√5) - π" },
            { text: "tan^(-1)(24/7) - π", correct: true },
            { text: "tan^(-1)(3) - π" },
            { text: "tan^(-1)(3/4) - π" },
          ],
          explanation:
            "The perpendicular condition yields arg(z) = tan^(-1)(24/7) - π.",
        },
        {
          question:
            "Let A = { z ∈ C: |z + 1 / (z - 1)| < 1 } and B = { z ∈ C: arg(z - 1 / z + 1) = 2π/3 }. Then A ∩ B is:",
          options: [
            {
              text: "a portion of a circle centered at (0, -1/√3) that lies in the second and third quadrants only",
            },
            {
              text: "a portion of a circle centered at (0, -1/√3) that lies in the second quadrant only",
              correct: true,
            },
            { text: "an empty set" },
            {
              text: "a portion of a circle of radius (2/√3) that lies in the third quadrant only",
            },
          ],
          explanation:
            "The intersection gives a circle centered at (0, -1/√3) in the second quadrant.",
        },
      ],
    },
  },
};
