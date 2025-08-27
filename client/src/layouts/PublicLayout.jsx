import React from 'react'
import '../assets/styles/PublicLayout.css'
const PublicLayout = ({ children }) => {
  return (
    <div>
      <div className="PublicLayout">
        <div className="mainLayout">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default PublicLayout
