import officeImage from './office_img.jpg';

function App() {
  const pageHeading = "Office Space";
  const officeDetails = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

  const moreOfficeSpaces = [
    { id: 1, name: "Tech Hub", rent: 75000, address: "Bengaluru" },
    { id: 2, name: "Creative Works", rent: 55000, address: "Mumbai" },
    { id: 3, name: "Innovate Solutions", rent: 62000, address: "Hyderabad" }
  ];


  const getRentColor = (rent) => {
    return rent <= 60000 ? 'red' : 'green'; // Display the color of the Rent in Red if it’s below 60000 and in Green if it’s above 60000. [: 99]
  };

  return (
    <div style={{ padding: '20px' }}>
    
      <h1>{pageHeading}, at Affordable Range</h1>

      <img
        src={officeImage}
        alt="Office Space"
        style={{ width: '25%', height: '25%', marginBottom: '20px' }}
      />

      
      <h2>Name: {officeDetails.name}</h2>
      <h3 style={{ color: getRentColor(officeDetails.rent) }}>
        Rent: Rs. {officeDetails.rent}
      </h3>
      <h3>Address: {officeDetails.address}</h3>

      <hr />
      <h2>Other Office Spaces:</h2>
      {moreOfficeSpaces.map(office => (
        <div key={office.id} style={{ marginBottom: '15px', border: '1px solid #eee', padding: '10px' }}>
          <h3>Name: {office.name}</h3>
          <h4 style={{ color: getRentColor(office.rent) }}>
            Rent: Rs. {office.rent}
          </h4>
          <h4>Address: {office.address}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;