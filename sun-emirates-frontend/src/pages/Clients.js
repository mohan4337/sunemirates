import React from 'react';

const Clients = () => {
  const clients = [
    'KHANSAHEB',
    'AL Basti & Muktha LLC',
    'ThyssenKrupp',
    'MEGARME',
    'New Trade Links LLC',
    'Ferrotech International Fze',
    'Al Ghandi Electronics',
    'Hi-Tec',
    'Somec-Sharaf',
    'STADLERS',
    'AL REYAMI',
    'Dutco Balfour Beatty LLC',
    'AL REYAMI INTERIORS'
  ];

  const clientImages = [
    '/images/Clients/Clients1.png',
    '/images/Clients/Clients2.png',
    '/images/Clients/Clients3.png',
    '/images/Clients/Clients4.png',
    '/images/Clients/Clients5.png',
    '/images/Clients/Clients6.png',
    '/images/Clients/Clients7.png',
    '/images/Clients/Clients8.png',
    '/images/Clients/Clients9.png',
    '/images/Clients/Clients10.png',
    '/images/Clients/Clients11.png',
    '/images/Clients/Clients12.png',
    '/images/Clients/Clients13.png'
  ];

  return (
    <div className="pageContainer">
      <table cellpadding="0" border="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td>
              <span className="PageHeader">Our Clients</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <img 
                src="/images/Common/clientsbnr.png" 
                alt="Our Clients" 
                title="Our Clients"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ height: '20px' }}></td>
          </tr>
          <tr>
            <td>
              <table className="ClientGridView" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <th>Client Name</th>
                    <th>Logo</th>
                  </tr>
                  {clients.map((client, index) => (
                    <tr key={index}>
                      <td>{client}</td>
                      <td>
                        <img 
                          src={clientImages[index]} 
                          alt={client}
                          style={{ maxWidth: '150px', height: 'auto' }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
