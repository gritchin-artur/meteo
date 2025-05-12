export const titleOfDay = (data) => {
    const newDay = new Date(data);
    const dayItem = newDay.toLocaleString('en-US', { weekday: 'short' });
    const month = newDay.toLocaleString('en-US', { month: 'short' });
    const dayOfMonth = newDay.getDate();
    const yearItem = newDay.getFullYear();

    return { dayItem, month, dayOfMonth, yearItem };
};
