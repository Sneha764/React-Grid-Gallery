import './App.css';
import ImageCard from './components/ImageCard'; 

const imageData = [
  {
    id: 1,
    title: "Mountains",
    description: "Snowy mountain view",
    // colSpan: 2,
    url: "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww"   
  },
  {
    id: 2,
    title: "Forest",
    description: "Green trees in a forest",
    // rowSpan: 3,
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

function App() {
  return (
    <div className="App">
      <h1>My Image Gallery</h1>
      <div className="grid-container">
        {imageData.map((img) => (
          <ImageCard
            key={img.id}    // key prop cant be accessed inside ImageCard function. for that write one more line: id = {img.id}
            title={img.title}
            description={img.description}
            url={img.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
