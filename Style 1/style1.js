// simply.fyi renders its text into #output. Look it up explicitly instead of
// relying on the window.output named-element global, and skip the card on a
// page that has no such element rather than throwing.
const output = document.getElementById("output");
if (output) {
  const outputContainer = document.createElement('div');
  outputContainer.id = "output-container";
  outputContainer.appendChild(output);
  document.body.appendChild(outputContainer);
}

const clockIframe = document.createElement('iframe');
clockIframe.src = "https://time.pablopunk.com?seconds&fg=black&bg=transparent";
clockIframe.id = "overlay-clock";
document.body.appendChild(clockIframe);