import { titleOfDay } from '../handlers/titleHandler.js';

export const meteoCard = (timeArr, temp) => {
    const meteoList = document.createElement('ul');
    meteoList.className = 'meteo-list';

    timeArr.forEach((day, i) => {
        const { dayOfMonth, dayItem, month, yearItem } = titleOfDay(day[0]);

        const meteoItem = document.createElement('li');
        meteoItem.className = 'meteo-item';

        const halfDay = document.createElement('div');
        halfDay.className = 'half-day';

        const date = document.createElement('h2');
        date.className = 'date';
        date.innerText = `${dayOfMonth} ${dayItem} ${month} ${yearItem}`;
        meteoItem.appendChild(date);

        const dayAm = document.createElement('div');
        dayAm.className = 'day-am';

        const am = document.createElement('h3');
        am.innerText = 'AM';

        dayAm.appendChild(am);

        const dayPm = document.createElement('div');
        dayPm.className = 'day-pm';

        const pm = document.createElement('h3');
        pm.innerText = 'PM';

        dayPm.appendChild(pm);

        day.forEach((hour, index) => {
            const timeContainer = document.createElement('div');
            timeContainer.className = 'time-container';

            const hourEl = document.createElement('p');
            hourEl.className = 'hour-el';
            const hourStr = hour.split('T')[1];
            hourEl.innerText = hourStr;

            const tempEl = document.createElement('p');
            tempEl.className = 'temp-el';
            tempEl.innerText =
                temp[(i + 1) * (index + 1) - 1].toFixed(1) + '°C';

            timeContainer.append(hourEl, tempEl);

            const hourNum = parseInt(hourStr.split(':')[0], 10);
            if (hourNum < 12) {
                dayAm.appendChild(timeContainer);
            } else {
                dayPm.appendChild(timeContainer);
            }
        });
        halfDay.append(dayAm, dayPm);
        meteoItem.append(halfDay);
        meteoList.appendChild(meteoItem);
    });

    return meteoList;
};
