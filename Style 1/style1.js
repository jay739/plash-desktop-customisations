const outputContainer = document.createElement('div');
outputContainer.id = "output-container";

outputContainer.appendChild(output);
document.body.appendChild(outputContainer);

const clockIframe = document.createElement('iframe');
clockIframe.src = "https://time.pablopunk.com?seconds&fg=black&bg=transparent";
clockIframe.id = "overlay-clock";
document.body.appendChild(clockIframe);