import React, { useState } from 'react';
import './Dashboard.css';
import ImageCard from './ImageCard'; 

const imageData = [
  {
    id: 1,
    title: "Mountains",
    description: "Snowy mountain view",
    colSpan: 2,
    url: "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww"   
  },
  {
    id: 2,
    title: "Forest",
    description: "Green trees in a forest",
    rowSpan: 2,
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww"
  },
  {
    id: 3,
    title: "Beach",
    description: "Sunny beach with waves",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    title: "City",
    description: "Night view of city skyline",
    url: "https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
  }
];

export default function Dashboard() {
  const [layout, setLayout] = useState('default');

  return (
    <>
      <div style={{ padding: '10px' }}>
        <button onClick={() => setLayout('default')}>Default Layout</button>
        <button onClick={() => setLayout('alt')}>Alt Layout</button>
      </div>

      <div className={`dashboard-grid ${layout === 'alt' ? 'alt-layout' : ''}`}>
        <div className="header">Header</div>
        <div className="sidebar">Sidebar</div>
        <div className="main">
        <div className="card-grid">
            {imageData.map((img) => (
            <ImageCard
                key={img.id}
                title={img.title}
                description={img.description}
                url={img.url}
                style={{
                    gridColumn: img.colSpan ? `span ${img.colSpan}` : undefined,
                    gridRow: img.rowSpan ? `span ${img.rowSpan}` : undefined
                }}
            />
            ))}
        </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    </>
  );
}
