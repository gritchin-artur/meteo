import { meteoResource } from '../api-calls/meteo-resource.js';
import { meteoCard } from '../components/meteoCard.js';
import dom from '../dom.js';

export const loadHandler = async () => {
    try {
        const meteoData = await meteoResource();
        const time = meteoData.hourly.time;
        const temp = meteoData.hourly.temperature_2m;

        const timeArr = [];
        for (let i = 0; i < time.length; i += 24) {
            timeArr.push(time.slice(i, i + 24));
        }

        dom.meteoContainer.appendChild(meteoCard(timeArr, temp));
    } catch (error) {
        dom.meteoContainer.innerText = 'Ooops something went wrong';
        dom.meteoContainer.style.display = 'flex';
        dom.meteoContainer.style.justifyContent = 'center';
    }
};
