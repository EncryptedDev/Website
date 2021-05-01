const withImages = require('next-images');
module.exports = {
    images: {
        domains: ['cdn.discordapp.com']
    },
    ...withImages()
};