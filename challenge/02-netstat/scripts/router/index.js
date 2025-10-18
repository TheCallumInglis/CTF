import { secret } from '../secret/index.js'

const flagRoute = (res) => {
    return res.end(`FLAG{${secret.flag}}\n`);
}

const defaultRoute = (res) => {
    return res.end(`You've found the server, but not the flag!\n`);
}

const router = {
    flagRoute,
    defaultRoute,
}

export default router;