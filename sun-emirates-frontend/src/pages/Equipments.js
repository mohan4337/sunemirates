import React from 'react';

const Equipments = () => {
  const equipmentCategories = [
    {
      title: 'Machining Equipment',
      items: [
        'Lathe Machine - 02 Nos',
        'Radial Drilling Machine - 02 Nos',
        'Pillar Drilling Machine - 02 Nos',
        'Shaping Machine - 01 No',
        'Milling Machine - 01 No',
        'Grinding Machine - 01 No'
      ]
    },
    {
      title: 'Shearing & Bending',
      items: [
        'Hydraulic Shearing Machine - 01 No (10mm x 2500mm)',
        'Hydraulic Press Brake - 01 No (20mm x 3200mm)',
        'Hand Shearing Machine - 02 Nos',
        'Hand Bending Machine - 02 Nos',
        'Pipe Bending Machine - 02 Nos (2" to 8")',
        'Profile Bending Machine - 01 No'
      ]
    },
    {
      title: 'Cutting & Grinding',
      items: [
        'Gas Cutting - 04 Nos',
        'Arc Air Gouging - 02 Nos',
        'Portable Grinding Machine - 10 Nos',
        'Bench Grinding Machine - 04 Nos',
        'Cut-off Machine - 02 Nos'
      ]
    },
    {
      title: 'Welding Equipment',
      items: [
        'MIG Welding Machine - 08 Nos',
        'ARC Welding Machine - 10 Nos',
        'TIG Welding Machine - 04 Nos',
        'Welding Rectifier - 04 Nos',
        'Submerged Arc Welding - 01 No'
      ]
    },
    {
      title: 'Surface Treatment',
      items: [
        'Sand Blasting Machine - 01 No',
        'Shot Blasting Machine - 01 No',
        'Paint Booth - 01 No',
        'Air Compressor - 03 Nos (15HP, 10HP, 5HP)'
      ]
    },
    {
      title: 'Material Handling',
      items: [
        'EOT Crane - 02 Nos (10 Ton)',
        'Forklift - 02 Nos',
        'Mobile Crane - 01 No',
        'Trolley - 05 Nos'
      ]
    }
  ];

  return (
    <div className="pageContainer">
      <table cellpadding="0" border="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td>
              <span className="PageHeader">Our Equipments</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <img 
                src="/images/Common/Equpmntbnr.png" 
                alt="Equipments" 
                title="Equipments"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ height: '20px' }}></td>
          </tr>
          <tr>
            <td>
              {equipmentCategories.map((category, catIndex) => (
                <div key={catIndex} style={{ marginBottom: '20px' }}>
                  <h3 style={{ 
                    backgroundColor: '#777', 
                    color: '#fff', 
                    padding: '7px 0 7px 20px',
                    margin: '0'
                  }}>
                    {category.title}
                  </h3>
                  <table className="tablestr" cellPadding="0" cellSpacing="0">
                    <tbody>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td>{item}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Equipments;
