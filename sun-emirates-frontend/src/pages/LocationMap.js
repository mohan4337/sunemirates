import React from 'react';

const LocationMap = () => {
  return (
    <div className="pageContainer">
      <table cellpadding="0" border="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td>
              <span className="PageHeader">Location Map</span>
            </td>
          </tr>
          <tr>
            <td align="center" style={{ padding: '20px' }}>
              <div className="seLoctionMap">
                <img 
                  src="/images/Common/SELocationMap.png" 
                  alt="Location Map" 
                  title="Location Map"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ height: '20px' }}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LocationMap;
