import { DateTime } from "luxon";

export const userGreeting = () => {
    let greeting;
    const currentTime = DateTime.now();
    if(currentTime.hour >= 0 && currentTime.hour < 12) greeting = `Good Morning`;
    if(currentTime.hour >= 12 && currentTime.hour < 17) greeting = `Good Afternoon`;
    if(currentTime.hour >= 17 && currentTime.hour < 23) greeting = `Good Evening`;
    if(currentTime.hour >= 23 && currentTime.hour < 24) greeting = `Good Evening`
    return greeting;
}

export const getDateTime = () => {
    const dateTime = DateTime.now().setZone('Canada/Mountain');
    console.log(`Chrono Stamp Generated: ${dateTime}`)
    return dateTime;
}

export const getCopyrightYear = () => {
    return DateTime.now().year;
}