export function findTimeElapsed(startTime, endTime) {
  console.log('endTime', endTime)
  console.log('startTime', startTime)
  var timeDiff = endTime - startTime;
  console.log('timeDiff', timeDiff)
  timeDiff /= 1000;
  console.log('timeDiff', timeDiff)
  var seconds = Math.round(timeDiff % 60);
  timeDiff = Math.floor(timeDiff / 60);
  console.log('timeDiff', timeDiff)
  var minutes = Math.round(timeDiff % 60);
  timeDiff = Math.floor(timeDiff / 60);
  console.log('timeDiff', timeDiff)
  var hours = timeDiff;

  return {
    seconds: seconds,
    minutes: minutes,
    hours: hours,
  };
};

export function timePad(x) {
  return x > 9 ? '' + x : '0' + x;
};


