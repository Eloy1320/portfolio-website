let typedEffectInstance;

function initializeTypedEffect(roles) {
  const safeRoles = Array.isArray(roles) && roles.length > 0
    ? roles
    : ['Desarrollador de Software', 'Analista Desarrollador', 'Ingeniero de Software'];

  if (typedEffectInstance) {
    typedEffectInstance.destroy();
  }

  typedEffectInstance = new Typed('.typed', {
    strings: safeRoles.map((role) => `<i>${role}</i>`),
    // stringsElement: '#text-strings', // ID of the element containing text strings to display.
    typeSpeed: 30, // Speed in milliseconds to type one character.
    startDelay: 300, // Delay before typing starts. Applies again when the cycle restarts.
    backSpeed: 30, // Speed in milliseconds to delete one character.
    smartBackspace: true, // Delete only words that are new in the next string.
    shuffle: false, // Randomize the order of typed strings.
    backDelay: 2000, // Wait time after finishing a word.
    loop: true, // Repeat the string array.
    loopCount: false, // Number of repetitions. false = infinite.
    showCursor: true, // Show blinking cursor.
    cursorChar: '|', // Cursor character.
    contentType: 'html', // 'html' or 'null' for plain text.
  });
}

window.initializeTypedEffect = initializeTypedEffect;

document.addEventListener('DOMContentLoaded', function () {
  initializeTypedEffect();
});
