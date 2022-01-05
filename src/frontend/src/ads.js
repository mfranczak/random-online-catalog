const logger = require('./logger');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const PERSONALIZED_ADSERVICE_ADDR = process.env.PERSONALIZED_ADSERVICE_ADDR;
const LEGACY_ADSERVICE_ADDR = process.env.LEGACY_ADSERVICE_ADDR;

module.exports = {
    async fetchAd() {
        logger.debug("Fetching Ad");

        return fetchPersonalizedAd()
            .catch(err => {
                logger.warn("PersonalizedAdNetwork failed: " + err);
                return fetchLegacyAd();
            });
    }
}

const fetchPersonalizedAd = async function() {
    return fetchFromUnifiedApi(PERSONALIZED_ADSERVICE_ADDR, 'PersonalizedAdNetwork');
}

const fetchLegacyAd = async function() {
    return fetchFromUnifiedApi(LEGACY_ADSERVICE_ADDR, 'LegacyAdNetwork');
}

const fetchFromUnifiedApi = async function(address, networkName) {
    logger.info("Fetching Ad from " + networkName + " (" + address +")");
    const response = await fetch(address + '/ads');
    if (!response.ok) throw "Unexpected response: " + response.statusText;

    const ad = await response.json();
    logger.info(networkName + ' returned an Ad.');
    return ad;
}