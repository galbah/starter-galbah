import React, { useState } from 'react';

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isVisible && <p>This content is visible when toggled.</p>}
    </div>
  );
};

export default ToggleComponent;
