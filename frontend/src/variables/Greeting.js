import React, { useState, useEffect } from 'react';

function Greeting() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getGreeting = () => {
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 11) {
      return 'Good Morning';
    } else if (currentHour >= 11 && currentHour < 13) {
      return 'Good Noon';
    } else if (currentHour >= 13 && currentHour < 17) {
      return 'Good Afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
      return 'Good Evening';
    } else {
      return 'Good Night';
    }
  };

  return (
    <div className="greeting">
      <h1>{getGreeting()}</h1>
    </div>
  );
}

export default Greeting;
