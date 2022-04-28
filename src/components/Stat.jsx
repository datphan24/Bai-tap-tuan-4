import React from 'react'

function Stat() {
  return (
    <div className="stat general-size">
      <p><span className="number-item">0</span> item left</p>
      <div className="filter">
        <button id="all" className="button-footer on">All</button>
        <button id="active" className="button-footer">Active</button>
        <button id="completed" className="button-footer">Completed</button>
      </div>
      <div className="corner">
        <button id="clear-completed" className="button-footer">
          Clear Completed
        </button>
      </div>
    </div>
  )
}
export default Stat
