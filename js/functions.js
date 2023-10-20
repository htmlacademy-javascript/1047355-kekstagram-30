const isMeetingWithinWorkHours = (startTime, endTime, meetingStart, meetingDuration) => {

  const parseTimes = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const endMeeting = meetingStart + meetingDuration;
  return (parseTimes(startTime) <= parseTimes(meetingStart)) && (parseTimes(endTime) >= endMeeting);
};

void (isMeetingWithinWorkHours);


