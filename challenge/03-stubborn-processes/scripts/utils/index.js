export const skipSigterm = () => {
    const noLuck = () => console.log("No Luck!");

    process.on('SIGTERM', noLuck);
    process.on('SIGINT', noLuck);
    process.on('SIGHUP', noLuck);
}