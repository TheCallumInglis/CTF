document.getElementById('loginForm').addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  const resEl = document.getElementById('result');
  try {
    const r = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, pass })
    });
    const j = await r.json();
    if (r.ok) {
      resEl.innerHTML = '<pre style="color:green">' + j.message + '</pre>';
    } else {
      resEl.innerHTML = '<pre style="color:red">' + (j.decoy || j.message) + '</pre>';
    }
  } catch (e) {
    resEl.textContent = 'Network error';
  }
});
