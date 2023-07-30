const periodicTable = {
  H: 'Hydrogen',
  He: 'Helium',
  Li: 'Lithium',
  Be: 'Beryllium',
  B: 'Boron',
  C: 'Carbon',
  N: 'Nitrogen',
  O: 'Oxygen',
  F: 'Fluorine',
  Ne: 'Neon',
  Na: 'Sodium',
  Mg: 'Magnesium',
  Al: 'Aluminum',
  Si: 'Silicon',
  P: 'Phosphorus',
  S: 'Sulfur',
  Cl: 'Chlorine',
  Ar: 'Argon',
  K: 'Potassium',
  Ca: 'Calcium',
  Sc: 'Scandium',
  Ti: 'Titanium',
  V: 'Vanadium',
  Cr: 'Chromium',
  Mn: 'Manganese',
  Fe: 'Iron',
  Ni: 'Nickel',
  Cu: 'Copper',
  Zn: 'Zinc',
  Ga: 'Gallium',
  Ge: 'Germanium',
  As: 'Arsenic',
  Se: 'Selenium',
  Br: 'Bromine',
  Kr: 'Krypton',
  Rb: 'Rubidium',
  Sr: 'Strontium',
  Y: 'Yttrium',
  Zr: 'Zirconium',
  Nb: 'Niobium',
  Mo: 'Molybdenum',
  Tc: 'Technetium',
  Ru: 'Ruthenium',
  Rh: 'Rhodium',
  Pd: 'Palladium',
  Ag: 'Silver',
  Cd: 'Cadmium',
  In: 'Indium',
  Sn: 'Tin',
  Sb: 'Antimony',
  Te: 'Tellurium',
  I: 'Iodine',
  Xe: 'Xenon',
  Cs: 'Cesium',
  Ba: 'Barium',
  La: 'Lanthanum',
  Ce: 'Cerium',
  Pr: 'Praseodymium',
  Nd: 'Neodymium',
  Pm: 'Promethium',
  Sm: 'Samarium',
  Eu: 'Europium',
  Gd: 'Gadolinium',
  Tb: 'Terbium',
  Dy: 'Dysprosium',
  Ho: 'Holmium',
  Er: 'Erbium',
  Tm: 'Thulium',
  Yb: 'Ytterbium',
  Lu: 'Lutetium',
  Hf: 'Hafnium',
  Ta: 'Tantalum',
  W: 'Tungsten',
  Re: 'Rhenium',
  Os: 'Osmium',
  Ir: 'Iridium',
  Pt: 'Platinum',
  Au: 'Gold',
  Hg: 'Mercury',
  Tl: 'Thallium',
  Pb: 'Lead',
  Bi: 'Bismuth',
  Th: 'Thorium',
  Pa: 'Protactinium',
  U: 'Uranium',
  Np: 'Neptunium',
  Pu: 'Plutonium',
  Am: 'Americium',
  Cm: 'Curium',
  Bk: 'Berkelium',
  Cf: 'Californium',
  Es: 'Einsteinium',
  Fm: 'Fermium',
  Md: 'Mendelevium',
  No: 'Nobelium',
  Lr: 'Lawrencium',
  Rf: 'Rutherfordium',
  Db: 'Dubnium',
  Sg: 'Seaborgium',
  Bh: 'Bohrium',
  Hs: 'Hassium',
  Mt: 'Meitnerium',
  Ds: 'Darmstadtium',
  Rg: 'Roentgenium',
  Cn: 'Copernicium',
  Nh: 'Nihonium',
  Fl: 'Flerovium',
  Mc: 'Moscovium',
  Lv: 'Livermorium',
  Ts: 'Tennessine',
  Og: 'Oganesson',
};

const eName = document.getElementById('name');
const eSymbol = document.getElementById('symbol');

eSymbol.addEventListener('input', (event) => {
  const maxLength = 3;
  const originalText = event.target.value;
  const processedText = originalText.replace(/\n/g, ''); // Remove all newline characters
  const truncatedValue = originalText.slice(0, maxLength);

  if (processedText !== originalText) {
    // Update the value of the textarea if any newlines were removed
    eSymbol.value = processedText;
  }

  if (truncatedValue !== originalText) {
    // Update the value of the textarea if it exceeds the character limit
    eSymbol.value = truncatedValue;
  }
});

function randomElement() {
  const keys = Object.keys(periodicTable);

  const symbol = keys[(keys.length * Math.random()) << 0];
  const name = periodicTable[symbol];

  return { name, symbol };
}

let currentName, currentSymbol;

function ask() {
  eSymbol.value = '';

  const rand = randomElement();

  currentName = rand.name;
  currentSymbol = rand.symbol;

  eName.textContent = currentName;
  console.log(`Current Name: ${currentName}\nCurrent Symbol: ${currentSymbol}`);
}

setInterval(() => {
  if (eSymbol.value === currentSymbol) ask();
});

ask();
