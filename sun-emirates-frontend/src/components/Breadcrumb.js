import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const getPageTitle = (path) => {
    const titles = {
      '': 'Home',
      'about': 'About Us',
      'products': 'Products',
      'services': 'Services',
      'clients': 'Clients',
      'equipments': 'Equipments',
      'contact': 'Contact Us',
      'feedback': 'Feedback',
      'sitemap': 'Sitemap',
      'locationmap': 'Location Map',
      'privacypolicy': 'Privacy Policy',
      'disclaimer': 'Disclaimer',
      'stainless-steel': 'Stainless Steel Works and Fabrications',
      'mild-steel': 'Mild Steel Works and Fabrications',
      'machine-shop': 'Machine Shop',
      'pre-fabrication': 'Pre Fabrication Activities',
      'surface-treatment': 'Surface Treatment',
      'finishing-activities': 'Finishing Activities'
    };
    return titles[path] || path;
  };

  return (
    <div className="breadcrumb">
      <div className="bcRootNode">
        <Link to="/">Home</Link>
      </div>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={name}>
            <div className="bcSeparator">
              <img 
                src="/images/Common/breadcrumdivdr.png" 
                alt="BreadCrumb" 
                align="absMiddle" 
              />
            </div>
            <div className={isLast ? "bcCurrentNode" : "bcRootNode"}>
              {isLast ? getPageTitle(name) : <Link to={routeTo}>{getPageTitle(name)}</Link>}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
