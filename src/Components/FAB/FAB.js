import React from 'react'

const FAB = ({setIsModalOpened}) => {
  return (
    <div className='FAB' style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px'
    }}>
        <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => setIsModalOpened(true)}
        >
            Add
        </button>
    </div>
  )
}

export default FAB