import React, { memo } from 'react';

function ResultNoFoundComponent() {
  return (
    <div className="flex flex--grow justify-content--center align-items--center">
      <h2 className="font--regular">No Movie Found</h2>
    </div>
  );
}

export default memo(ResultNoFoundComponent);
