import React, { useState } from 'react';

const Equipments = () => {
  const [viewMode, setViewMode] = useState('table');

  const equipmentData = [
    {
      category: "Machining Equipment",
      items: [
        { name: "Lathe Machine", model: "Industrial Series", capacity: "12' x 24'", description: "Precision turning operations" },
        { name: "Radial Drilling Machine", model: "RD-1200", capacity: "50mm", description: "Heavy duty drilling" },
        { name: "Pillar Drilling Machine", model: "PD-350", capacity: "35mm", description: "Precision drilling" },
        { name: "Shaping Machine", model: "SH-500", capacity: "500mm stroke", description: "Metal shaping" },
        { name: "Milling Machine", model: "VF-2", capacity: "3-Axis", description: "CNC milling capability" },
        { name: "Grinding Machine", model: "GS-250", capacity: "250mm", description: "Surface grinding" }
      ]
    },
    {
      category: "Shearing & Bending",
      items: [
        { name: "Hydraulic Shearing Machine", model: "HS-1025", capacity: "10mm x 2500mm", description: "Precision sheet cutting" },
        { name: "Hydraulic Press Brake", model: "HPB-2032", capacity: "20mm x 3200mm", description: "Precision bending" },
        { name: "Hand Shearing Machine", model: "HSS-6", capacity: "6mm", description: "Manual sheet cutting" },
        { name: "Hand Bending Machine", model: "HBM-4", capacity: "4mm", description: "Manual bending" },
        { name: "Pipe Bending Machine", model: "PBM-8", capacity: "2\" to 8\"", description: "Pipe bending" },
        { name: "Profile Bending Machine", model: "PRB-150", capacity: "150mm", description: "Profile rolling" }
      ]
    },
    {
      category: "Cutting & Grinding",
      items: [
        { name: "Gas Cutting Equipment", model: "GC-200", capacity: "200mm thickness", description: "Oxy-fuel cutting" },
        { name: "Arc Air Gouging", model: "AAG-100", capacity: "100A", description: "Air carbon arc gouging" },
        { name: "Portable Grinding Machine", model: "PGM-180", capacity: "180mm disc", description: "Angle grinder" },
        { name: "Bench Grinding Machine", model: "BGM-300", capacity: "300mm wheel", description: "Stationary grinding" },
        { name: "Cut-off Machine", model: "COM-14", capacity: "14\" wheel", description: " abrasive cutting" }
      ]
    },
    {
      category: "Welding Equipment",
      items: [
        { name: "MIG Welding Machine", model: "MIG-350", capacity: "350A", description: "Gas metal arc welding" },
        { name: "ARC Welding Machine", model: "ARC-400", capacity: "400A", description: "Shielded metal arc welding" },
        { name: "TIG Welding Machine", model: "TIG-300", capacity: "300A", description: "Gas tungsten arc welding" },
        { name: "Welding Rectifier", model: "WR-500", capacity: "500A", description: "DC welding power source" },
        { name: "Submerged Arc Welding", model: "SAW-1000", capacity: "1000A", description: "Automatic welding" }
      ]
    },
    {
      category: "Surface Treatment",
      items: [
        { name: "Sand Blasting Machine", model: "SBM-2460", capacity: "2400 x 600mm", description: "Abrasive blasting" },
        { name: "Shot Blasting Machine", model: "SBT-2015", capacity: "2000 x 1500mm", description: "Shot/peening" },
        { name: "Paint Booth", model: "PB-8000", capacity: "8000 CFM", description: "Spray painting" },
        { name: "Air Compressor", model: "AC-15HP", capacity: "15HP", description: "Industrial compressed air" },
        { name: "Air Compressor", model: "AC-10HP", capacity: "10HP", description: "Secondary compression" }
      ]
    },
    {
      category: "Material Handling",
      items: [
        { name: "EOT Crane", model: "EOT-10T", capacity: "10 Ton", description: "Overhead crane" },
        { name: "EOT Crane", model: "EOT-10T", capacity: "10 Ton", description: "Secondary crane" },
        { name: "Forklift", model: "FL-5T", capacity: "5 Ton", description: "Material handling" },
        { name: "Forklift", model: "FL-3T", capacity: "3 Ton", description: "Light duty" },
        { name: "Mobile Crane", model: "MC-20T", capacity: "20 Ton", description: "Truck mounted crane" }
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Our Equipment</h1>
          <p>State-of-the-art fabrication machinery and facilities</p>
        </div>
      </div>

      {/* Equipment Section */}
      <section className="section">
        <div className="container">
          {/* View Toggle */}
          <div className="text-center mb-40">
            <div style={{ display: 'inline-flex', gap: '10px' }}>
              <button 
                className={`btn ${viewMode === 'table' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setViewMode('table')}
              >
                Table View
              </button>
              <button 
                className={`btn ${viewMode === 'card' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setViewMode('card')}
              >
                Card View
              </button>
            </div>
          </div>

          {/* Table View */}
          {viewMode === 'table' && (
            <div>
              {equipmentData.map((category, catIndex) => (
                <div key={catIndex} style={{ marginBottom: '40px' }}>
                  <h3 style={{ 
                    backgroundColor: '#2b2b2b', 
                    color: '#fff', 
                    padding: '15px 20px',
                    margin: '0 0 20px 0'
                  }}>
                    {category.category}
                  </h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Equipment Name</th>
                        <th>Model</th>
                        <th>Capacity</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td><strong>{item.name}</strong></td>
                          <td>{item.model}</td>
                          <td>{item.capacity}</td>
                          <td>{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}

          {/* Card View */}
          {viewMode === 'card' && (
            <div className="equipment-grid">
              {equipmentData.map((category, catIndex) => (
                category.items.map((item, itemIndex) => (
                  <div key={`${catIndex}-${itemIndex}`} className="equipment-card">
                    <div className="equipment-image">
                      <img 
                        src={`/images/MS/${item.name.split(' ')[0]}.jpg`} 
                        alt={item.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="image-placeholder" style={{ display: 'none' }}>
                        <span>Image Coming Soon</span>
                      </div>
                    </div>
                    <div className="equipment-info">
                      <h3>{item.name}</h3>
                      <p><strong>Model:</strong> {item.model}</p>
                      <p><strong>Capacity:</strong> {item.capacity}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h2>Equipment Summary</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Number of Units</th>
                <th>Key Equipment</th>
              </tr>
            </thead>
            <tbody>
              {equipmentData.map((category, index) => (
                <tr key={index}>
                  <td><strong>{category.category}</strong></td>
                  <td>{category.items.length} Units</td>
                  <td>{category.items.slice(0, 2).map(i => i.name).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Equipments;
