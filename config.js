const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOSJ3rJqqVVSUi4oiiFvnIULADFdJQHHK/76lzqmZhz1nZ99SgXQ63f31O8gLTJCBWjB4B2WFG0jRfUnbEoEBGNVRhCrQBSGkEAxAbKXEmoq+mHTkebPcldw6mNTrmbZfbLVYOV191xGYc5smw1dw64KyPqQ4+ANgyqSFBes96+3nLX/iV2LS849Zx15ZMz4LzsMz7UgbzWKw/wpud0SIK5zHk/KIMlTB1EDtCuLqe/QD43wd9bdTVdECYqBl6NgKHXkKP9XNrOmcBUvyVXyx5vn2e/Sd8hDkU1tLtkrPEezphvMX+fQ0vaa+Lhj8XpYbg0hLMR1aT/oExzkK5yHKKabt93XX+tdxPrGCaONqQW6ifi9z59FkiC5W5gW93n5EXIPx36b+94hzODjBDAer3GYN0yH4UC0k1Llg4bhcxYcZl20kOsqFqct/Jb6qfmUl+T+6o1UjNxLaFG+TQ6N0DPG47djY4iqBzfwTHeVcNDsc9Vr2yPfoL6Q3RXRtvBHN5pypxJ74rbtcTYTdiVt7lsytxrb2Vu/kcfFJH9K6+hNLX7qseAuHcT9FxdCzLaUhTpqyvHdOtmy+OsrzYGxithPzu2Fdtcg7it5B2Iy1hA/TsaQ1euaud8Qs14l7aVaOlkzi+PXxogS18xAM+rcuqFCMCa0gxUX+2JO4LoBhs0FBhehDXsDjhBmznhgaSS+5oHJV9qBwqCyUdTRXWa77Q8SNVGOvjyevoAvKqggQISicYUKLqrUQITBGBAz+/tkFObrQp3H367h+F0S4InSb12VawPCXq78+wiAo6pxu2jxQ7wtUgQHzuY0oxXlM7jrWOayCI26QeoSUgEEEU4JuXRCiBgfojgeGJkGZX9tO0lLityqb1m5i3ykfi/z5ixAgnuED5gXxEfPCc2z4ApUgeAn6DBOhUDwIoQK6AH/MzP3Mby3c5EE4ZrcX0o/jHmxwfdpE44VZ9iLrYcNTe1ShEAxoVaMuOMAgqUunSFD+p/k7Ly1xuZFgMH2zdqwnBl48Utitxg2/4D49BYP3z55Si/COtzNN39qbBuiC7BFBfH85y/ESw7OyKCkiP+D/Ij/OdyFhWf7IEb3jfoh+PxEiCnFKwACoRkve6uFoomtCbhJNG07ioRoPwadJv9L+TJOdBvSgQzs2L7J+Kdcr9cTtt43GlMvDeK8vE7E9ChOZ4RLm9V9AwABEOiYcYx1dB9Ya3nb2xd7I39ZwPLfr9uDxV5SGshir61FpaD0OVSeea3eW4bjJTLlq25AoyDVHsOObF3FK9tO+J43Or/fbnmH5etlyE7ntaE9dY9Fs7VAvrFidXVFYrXV3oev8hC3pSaGO5uzEvcdYznBWSbV9XPh+Mn+7uOfrcr3XpXA2SuVlq2bWMqix/ZzDRw+kH/2LHxPy/hGtCKNHneXwbtF/mfM15cyt+wXjoyB/k6TRVt+ZXuslc1WO1ABunfOJsq55oYaTndmNUy5JgdarxUJYgNvtZxeUKaRRUWVgAGAeVgUOQRekkNDh56A6OEOEwqx81Akv9xlJFm7/ANZmYBLeBwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

