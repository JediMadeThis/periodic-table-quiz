const groups = {
  1: [
    'Lithium (Li)',
    'Sodium (Na)',
    'Potassium (K)',
    'Rubidium (Rb)',
    'Cesium (Cs)',
    'Francium (Fr)',
  ],
  2: [
    'Beryllium (Be)',
    'Magnesium (Mg)',
    'Calcium (Ca)',
    'Strontium (Sr)',
    'Barium (Ba)',
    'Radium (Ra)',
  ],
  3: [
    'Boron (B)',
    'Aluminium (Al)',
    'Gallium (Ga)',
    'Indium (In)',
    'Thallium (Tl)',
  ],
  4: ['Carbon (C)', 'Silicon (Si)', 'Germanium (Ge)', 'Tin (Sn)', 'Lead (Pb)'],
  5: [
    'Nitrogen (N)',
    'Phosphorus (P)',
    'Arsenic (As)',
    'Antimony (Sb)',
    'Bismuth (Bi)',
  ],
  6: [
    'Oxygen (O)',
    'Sulfur (S)',
    'Selenium (Se)',
    'Tellurium (Te)',
    'Polonium (Po)',
  ],
  7: [
    'Fluorine (F)',
    'Chlorine (Cl)',
    'Bromine (Br)',
    'Iodine (I)',
    'Astatine (At)',
  ],
  8: [
    'Helium (He)',
    'Neon (Ne)',
    'Argon (Ar)',
    'Krypton (Kr)',
    'Xenon (Xe)',
    'Radon (Rn)',
  ],
};

const eName = document.getElementById('name');
const eGroup = document.getElementById('group');

eGroup.addEventListener('input', (event) => {
  const maxLength = 1;
  const originalText = event.target.value;
  const processedText = originalText.replace(/\n/g, ''); // Remove all newline characters
  const truncatedValue = originalText.slice(0, maxLength);

  if (processedText !== originalText) {
    // Update the value of the textarea if any newlines were removed
    eGroup.value = processedText;
  }

  if (truncatedValue !== originalText) {
    // Update the value of the textarea if it exceeds the character limit
    eGroup.value = truncatedValue;
  }
});

function randomElement() {
  let groupN;
  let groupE;
  let elements = [];

  Object.entries(groups).forEach(([groupName, groupElements]) => {
    groupElements.forEach((element) => {
      elements.push(element);
    });
  });

  groupE = elements[(elements.length * Math.random()) << 0];

  for (const groupNumb in groups) {
    const groupElements = groups[groupNumb];

    if (groupElements.includes(groupE)) {
      groupN = groupNumb;
      break;
    }
  }

  return { group: groupN, element: groupE };
}

let currentGroup, currentElement;

function ask() {
  eGroup.value = '';

  const rand = randomElement();

  currentGroup = rand.group;
  currentElement = rand.element;

  eName.textContent = currentElement;
  console.log(
    `Current Group: ${currentGroup}\nCurrent Element: ${currentElement}`
  );
}

eGroup.addEventListener('input', () => {
  if (eGroup.value === currentGroup) ask();
});

ask();

window.onload = function () {
  document.getElementById('wrapper').style.animation =
    'fadeIn 0.3s linear forwards';
};
