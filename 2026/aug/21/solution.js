function milePace(miles, duration) {
  const [minutes, seconds] = duration.split(":").map(Number);

  const totalSeconds = minutes * 60 + seconds;

  const paceSeconds = Math.round(totalSeconds / miles);

  const paceMinutes = Math.floor(paceSeconds / 60);
  const remainingSeconds = paceSeconds % 60;

  return `${String(paceMinutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

// milePace(3, "24:00")