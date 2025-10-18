import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { fileURLToPath } from 'url';

import { DUMMY_USERS, REAL_USER, REAL_PASS, MAGIC_HEADER, ONLY_INTERNAL_CLIENTS_VALUE, MAGIC_HEADER_HEADER_HINT } from './vars.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('trust proxy', true);

const attempts = {};

setTimeout(() => {
  for (const ip in attempts) {
    delete attempts[ip];
  }
}, 60 * 1000); // reset attempts every 60 seconds

app.post('/login', (req, res) => {
  const ip = req.ip || 'unknown';
  attempts[ip] = attempts[ip] || 0;
  const { user, pass } = req.body || {};
  attempts[ip]++;

  console.log(attempts);
  console.log({user, pass});

  if (attempts[ip] >= 3 && !(user === REAL_USER && pass === REAL_PASS)) {
    return res.status(429).json({ 
      ok: false, 
      message: "Too many failed attempts."
    });
  }

  if (user === REAL_USER && pass === REAL_PASS) {
    return res.json({ 
      ok: true, 
      message: "Authenticated! Wonder where the /flag endpoint is?", 
    });
  } else {
    return res.status(401).json({ ok: false, message: "Invalid credentials." });
  }
});

app.get('/users', (req, res) => {
  if (!req.headers.hasOwnProperty(MAGIC_HEADER.toLowerCase())) {
    return res.status(406)
      .header(MAGIC_HEADER, ONLY_INTERNAL_CLIENTS_VALUE)
      .json({ ok: false, message: MAGIC_HEADER_HEADER_HINT });
  }

  return res.json({ 
    users:
      DUMMY_USERS.map(u => ({
        username: btoa(u.username),
        password: btoa(u.password)
      })) 
      .concat(
        { 
          username: btoa(REAL_USER), 
          password: btoa(REAL_PASS) 
        }
      )
  });
})

app.get('/flag', (req, res) => {
  if (!req.headers.hasOwnProperty(MAGIC_HEADER.toLowerCase())) {
    return res.status(403)
      .header(MAGIC_HEADER, ONLY_INTERNAL_CLIENTS_VALUE)
      .json({ ok: false, message: MAGIC_HEADER_HEADER_HINT });
  }

  if (!req.headers.hasOwnProperty('authorization')) {
    return res.status(400).json({ 
      ok: false,
      message: "Closer... Basically some authentication is required to access /flag." 
    });
  }

  const authHeader = `Basic ${Buffer.from(`${REAL_USER}:${REAL_PASS}`).toString('base64')}`;
  if (req.headers['authorization'] !== authHeader) {
    return res.status(401).json({ 
      ok: false,
      message: "Unauthorized to access /flag." 
    });
  }


  return res.json({ 
    ok: true, 
    flag: process.env.CTF_FLAG
  });
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
