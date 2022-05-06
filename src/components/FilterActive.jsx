import React from 'react';

export default function FilterActive({ status, setStatus }) {

  return (
    <div className="filter">
      <button className={status === 'ALL' ? "button-footer on" : 'button-footer'} onClick={() => setStatus('ALL')}>All</button>
      <button className={status === 'ACTIVE' ? "button-footer on" : 'button-footer'} onClick={() => setStatus('ACTIVE')}>Active</button>
      <button className={status === 'COMPLETED' ? "button-footer on" : 'button-footer'} onClick={() => setStatus('COMPLETED')}>Completed</button>
    </div>
  )
}
