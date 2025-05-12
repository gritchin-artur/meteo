import { ORIGIN } from '../config.js';

export const meteoResource = async () => {
    const URL = `${ORIGIN}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};
