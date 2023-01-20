function requiredReading(pagesCountForBook, pagesForHourCount, mustDaysCount) {

    const totalTimeToRead = pagesCountForBook / pagesForHourCount;
    const hoursPerDay = totalTimeToRead / mustDaysCount;

    console.log(hoursPerDay);

}

requiredReading(432, 15, 4);