import React from 'react'

function RightPanel() {
  return (
    <aside className="w-48 bg-white-200 p-4 mt-16"> {/* mt-16 adds margin to avoid overlap with the fixed navbar */}
      <h3>Right Panel</h3>
      <p>This is the right-side panel content.</p>
    </aside>
  );
}

export default RightPanel;
