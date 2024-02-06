import React from 'react';

const FontSize = () => (
  <div className="html">
    <div>
      <p style={{ fontSize: "18px" }}><strong>PX</strong>: This text has font size in pixel units. It does not respect the font size settings of the browser.</p>
      <p style={{ fontSize: "1rem" }}><strong>REM</strong>: This text has font size in rem units. It does respect the font size settings of the browser.</p>
    </div>
  </div>
)

export default FontSize
