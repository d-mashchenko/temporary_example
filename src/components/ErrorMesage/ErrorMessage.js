import React from 'react';

import './ErrorMessage.scss';

export function ErrorMessage({
  message = 'Something went wrong, please try again later',
}) {
  return (
    <div className="ErrorMessage">
      <p className="ErrorMessage__message">{message}</p>
    </div>
  );
}
