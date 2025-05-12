// export const meteoCard = (timeArr, temp) => {
//   const meteoList = document.createElement("ul");
//   meteoList.className = "meteo-list";

//   timeArr.forEach((day, i) => {
//       const meteoItem = document.createElement("li");
//         meteoItem.className = "meteo-item";

//     const newDay = new Date(day[0]);

//     const dayItem = newDay.toLocaleString("en-US", { weekday: "short" });
//     const month = newDay.toLocaleString("en-US", { month: "short" });
//     const dayOfMonth = newDay.getDate();
//     const yearItem = newDay.getFullYear();

//     const date = document.createElement("h2");
//     date.className = "date";
//     date.innerText = `${dayOfMonth} ${dayItem} ${month} ${yearItem}`;

//       meteoItem.appendChild(date);

//       day.forEach((hour, index) => {

//           const timeContainer = document.createElement('div');
//             timeContainer.className = 'time-container';

//       const hourEl = document.createElement("p");
//           hourEl.className = "hour-el";
//           hourEl.innerText = hour.split("T")[1];

//           const tempEl = document.createElement('p');
//           tempEl.className = 'temp-el';

//           tempEl.innerText = temp[((i + 1) * (index + 1)) - 1].toFixed(1) + "°C";
//           timeContainer.append(hourEl, tempEl)

//           meteoItem.append(timeContainer);

//       });

//       const dayAm = document.createElement('div');
//       dayAm.className = 'day-am';

//       const dayPm = document.createElement('div');
//       dayPm.className = 'day-pm';

//       if (index <= 11) {
//         dayAm.appendChild(timeContainer);
//     } else {
//       dayPm.appendChild(timeContainer);
//     }

//     meteoList.appendChild(meteoItem);
//   });

//   return meteoList;
// };

export const meteoCard = (timeArr, temp) => {
    const meteoList = document.createElement('ul');
    meteoList.className = 'meteo-list';

    timeArr.forEach((day, i) => {
        const meteoItem = document.createElement('li');
        meteoItem.className = 'meteo-item';

        const halfDay = document.createElement('div');
        halfDay.className = 'half-day';

        const newDay = new Date(day[0]);
        const dayItem = newDay.toLocaleString('en-US', { weekday: 'short' });
        const month = newDay.toLocaleString('en-US', { month: 'short' });
        const dayOfMonth = newDay.getDate();
        const yearItem = newDay.getFullYear();

        const date = document.createElement('h2');
        date.className = 'date';
        date.innerText = `${dayOfMonth} ${dayItem} ${month} ${yearItem}`;
        meteoItem.appendChild(date);

        // Create AM/PM containers before looping
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

            // Get hour as number to determine AM or PM
            const hourNum = parseInt(hourStr.split(':')[0], 10);
            if (hourNum < 12) {
                dayAm.appendChild(timeContainer);
            } else {
                dayPm.appendChild(timeContainer);
            }
        });
        halfDay.append(dayAm, dayPm);
        // Append both AM and PM containers
        meteoItem.append(halfDay);
        meteoList.appendChild(meteoItem);
    });

    return meteoList;
};
