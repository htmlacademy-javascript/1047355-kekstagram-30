const parseTimes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const isMeetingWithinWorkHours = (startTime, endTime, meetingStart, meetingDuration) => {

  const endMeeting = meetingStart + meetingDuration;
  return (parseTimes(startTime) <= parseTimes(meetingStart)) && (parseTimes(endTime) >= endMeeting);
};

void (isMeetingWithinWorkHours);


