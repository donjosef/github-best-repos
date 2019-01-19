export const getDateOfPastYears = (years) => {
    const now = Date.now();
    const msOfYears = (365 * years) * 86400000;
    const pastDate = new Date(now - msOfYears);
    const isoDate = pastDate.toISOString().substr(0, 10); //github api requires iso formatted date
    return isoDate;
};
