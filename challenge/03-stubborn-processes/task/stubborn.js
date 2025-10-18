import { skipSigterm } from './scripts/utils/index.js';

setInterval(()=>{}, 1000); // Keeping busy
const flag = 'why_so_stubborn';

console.log(`I'm a stubborn process! Try to kill me.`);

skipSigterm();

// TODO: handle SIGTERM and console.log the flag before exiting
// ... your code here ...

