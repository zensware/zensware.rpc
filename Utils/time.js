/**
 * 
 * 
 * @param {Discord.Client}
 * @returns {string}
 */
const calculateUptime = (client) => {
    const currentTime = Date.now();
    const uptime = currentTime - client.readyAt;
    return formatMilliseconds(uptime);
  };
  
  /**
   *
   * 
   * @param {number}
   * @returns {string}
   */
  const formatMilliseconds = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };
  
  module.exports = { calculateUptime, formatMilliseconds };
  
