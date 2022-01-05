const logger = require('pino')({
    base: {}, 
    formatters: {
        level: (label) => {
        return { level: label };
        },
    },
    level: 'debug',
});

module.exports = logger;