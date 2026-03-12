import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Equipment Data (mock data - would come from API in production)
const initialEquipment = [
  { id: 1, name: 'Lathe Machine', model: 'Industrial Series', capacity: "12' x 24'", description: 'Precision turning operations', image: '/images/MS/Ladder.jpg' },
  { id: 2, name: 'Radial Drilling Machine', model: 'RD-1200', capacity: '50mm', description: 'Heavy duty drilling', image: '' },
  { id: 3, name: 'Hydraulic Shearing Machine', model: 'HS-1025', capacity: '10mm x 2500mm', description: 'Precision sheet cutting', image: '' },
  { id: 4, name: 'MIG Welding Machine', model: 'MIG-350', capacity: '350A', description: 'Gas metal arc welding', image: '' },
  { id: 5, name: 'Sand Blasting Machine', model: 'SBM-2460', capacity: '2400 x 600mm', description: 'Abrasive blasting', image: '' },
  { id: 6, name: 'EOT Crane', model: 'EOT-10T', capacity: '10 Ton', description: 'Overhead crane', image: '' },
];

// Gallery Data (mock data)
const initialGallery = [
  { id: 1, title: 'Main Workshop', category: 'workshop', image: '/images/MS/IndustrialSheds.jpg' },
  { id: 2, title: 'Steel Grating', category: 'fabrication', image: '/images/MS/Grating.jpg' },
  { id: 3, title: 'Pipe Fabrication', category: 'fabrication', image: '/images/MS/Piping.jpg' },
  { id: 4, title: 'Industrial Ladder', category: 'equipment', image: '/images/MS/Ladder.jpg' },
  { id: 5, title: 'Project 1', category: 'projects', image: '/images/Clients/project1.jpeg' },
];

// Clients Data (mock data)
const initialClients = [
  { id: 1, clientName: 'KHANSAHEB', logo: '/images/Clients/Clients1.png' },
  { id: 2, clientName: 'AL Basti & Muktha LLC', logo: '/images/Clients/Clients2.png' },
  { id: 3, clientName: 'ThyssenKrupp', logo: '/images/Clients/Clients3.png' },
  { id: 4, clientName: 'MEGARME', logo: '/images/Clients/Clients4.png' },
  { id: 5, clientName: 'New Trade Links LLC', logo: '/images/Clients/Clients5.png' },
];

// Contact Messages (mock data)
const initialMessages = [
  { id: 1, name: 'John Smith', email: 'john@example.com', message: 'Interested in steel fabrication services for our new project.', date: '2024-01-15' },
  { id: 2, name: 'Ahmed Hassan', email: 'ahmed@company.ae', message: 'Need quotation for structural steel works.', date: '2024-01-14' },
  { id: 3, name: 'Sarah Johnson', email: 'sarah@construction.com', message: 'Can you provide specifications for mezzanine floor?', date: '2024-01-13' },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('equipment');
  const [equipment, setEquipment] = useState(initialEquipment);
  const [gallery, setGallery] = useState(initialGallery);
  const [clients, setClients] = useState(initialClients);
  const [messages, setMessages] = useState(initialMessages);
  
  // Form states
  const [showEquipmentForm, setShowEquipmentForm] = useState(false);
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [showClientForm, setShowClientForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  
  const [equipmentForm, setEquipmentForm] = useState({ name: '', model: '', capacity: '', description: '', image: '' });
  const [galleryForm, setGalleryForm] = useState({ title: '', category: 'workshop', image: '' });
  const [clientForm, setClientForm] = useState({ clientName: '', logo: '' });

  const tabs = [
    { id: 'equipment', label: 'Equipments' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'clients', label: 'Clients' },
    { id: 'messages', label: 'Messages' }
  ];

  // Equipment handlers
  const handleEquipmentSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      setEquipment(equipment.map(item => item.id === editingItem.id ? { ...equipmentForm, id: editingItem.id } : item));
      setEditingItem(null);
    } else {
      setEquipment([...equipment, { ...equipmentForm, id: Date.now() }]);
    }
    setShowEquipmentForm(false);
    setEquipmentForm({ name: '', model: '', capacity: '', description: '', image: '' });
  };

  const deleteEquipment = (id) => {
    setEquipment(equipment.filter(item => item.id !== id));
  };

  const editEquipment = (item) => {
    setEquipmentForm(item);
    setEditingItem(item);
    setShowEquipmentForm(true);
  };

  // Gallery handlers
  const handleGallerySubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      setGallery(gallery.map(item => item.id === editingItem.id ? { ...galleryForm, id: editingItem.id } : item));
      setEditingItem(null);
    } else {
      setGallery([...gallery, { ...galleryForm, id: Date.now() }]);
    }
    setShowGalleryForm(false);
    setGalleryForm({ title: '', category: 'workshop', image: '' });
  };

  const deleteGallery = (id) => {
    setGallery(gallery.filter(item => item.id !== id));
  };

  const editGallery = (item) => {
    setGalleryForm(item);
    setEditingItem(item);
    setShowGalleryForm(true);
  };

  // Client handlers
  const handleClientSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      setClients(clients.map(item => item.id === editingItem.id ? { ...clientForm, id: editingItem.id } : item));
      setEditingItem(null);
    } else {
      setClients([...clients, { ...clientForm, id: Date.now() }]);
    }
    setShowClientForm(false);
    setClientForm({ clientName: '', logo: '' });
  };

  const deleteClient = (id) => {
    setClients(clients.filter(item => item.id !== id));
  };

  const editClient = (item) => {
    setClientForm(item);
    setEditingItem(item);
    setShowClientForm(true);
  };

  // Message handlers
  const deleteMessage = (id) => {
    setMessages(messages.filter(item => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '250px', 
        backgroundColor: '#2b2b2b', 
        color: '#fff',
        padding: '20px 0'
      }}>
        <h2 style={{ 
          color: '#fff', 
          fontSize: '20px', 
          padding: '0 20px 20px',
          borderBottom: '1px solid #444',
          marginBottom: '0'
        }}>
          Admin Panel
        </h2>
        <ul style={{ listStyle: 'none', padding: '20px 0' }}>
          {tabs.map(tab => (
            <li key={tab.id}>
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveTab(tab.id); }}
                style={{
                  display: 'block',
                  padding: '12px 20px',
                  color: activeTab === tab.id ? '#fff' : '#aaa',
                  backgroundColor: activeTab === tab.id ? '#ff7a00' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ padding: '20px' }}>
          <Link 
            to="/" 
            style={{ 
              color: '#aaa', 
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '30px' }}>
        {/* Equipment Tab */}
        {activeTab === 'equipment' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h2 style={{ margin: 0 }}>Equipment Management</h2>
              <button 
                onClick={() => { setShowEquipmentForm(true); setEditingItem(null); setEquipmentForm({ name: '', model: '', capacity: '', description: '', image: '' }); }}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ff7a00',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                + Add Equipment
              </button>
            </div>

            {showEquipmentForm && (
              <div style={{ backgroundColor: '#fff', padding: '30px', marginBottom: '30px', border: '1px solid #ddd' }}>
                <h3>{editingItem ? 'Edit Equipment' : 'Add New Equipment'}</h3>
                <form onSubmit={handleEquipmentSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label>Equipment Name *</label>
                      <input 
                        type="text" 
                        value={equipmentForm.name}
                        onChange={(e) => setEquipmentForm({...equipmentForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Model</label>
                      <input 
                        type="text" 
                        value={equipmentForm.model}
                        onChange={(e) => setEquipmentForm({...equipmentForm, model: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>Capacity</label>
                      <input 
                        type="text" 
                        value={equipmentForm.capacity}
                        onChange={(e) => setEquipmentForm({...equipmentForm, capacity: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <input 
                        type="text" 
                        value={equipmentForm.description}
                        onChange={(e) => setEquipmentForm({...equipmentForm, description: e.target.value})}
                      />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button 
                      type="button" 
                      onClick={() => { setShowEquipmentForm(false); setEditingItem(null); }}
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Capacity</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {equipment.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.model}</td>
                      <td>{item.capacity}</td>
                      <td>{item.description}</td>
                      <td>
                        <div className="admin-actions">
                          <button className="btn-edit" onClick={() => editEquipment(item)}>Edit</button>
                          <button className="btn-delete" onClick={() => deleteEquipment(item.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h2 style={{ margin: 0 }}>Gallery Management</h2>
              <button 
                onClick={() => { setShowGalleryForm(true); setEditingItem(null); setGalleryForm({ title: '', category: 'workshop', image: '' }); }}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ff7a00',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                + Add Image
              </button>
            </div>

            {showGalleryForm && (
              <div style={{ backgroundColor: '#fff', padding: '30px', marginBottom: '30px', border: '1px solid #ddd' }}>
                <h3>{editingItem ? 'Edit Gallery Image' : 'Add New Gallery Image'}</h3>
                <form onSubmit={handleGallerySubmit}>
                  <div className="form-group">
                    <label>Title *</label>
                    <input 
                      type="text" 
                      value={galleryForm.title}
                      onChange={(e) => setGalleryForm({...galleryForm, title: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select 
                      value={galleryForm.category}
                      onChange={(e) => setGalleryForm({...galleryForm, category: e.target.value})}
                    >
                      <option value="workshop">Workshop</option>
                      <option value="fabrication">Fabrication</option>
                      <option value="equipment">Equipment</option>
                      <option value="projects">Projects</option>
                    </select>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button 
                      type="button" 
                      onClick={() => { setShowGalleryForm(false); setEditingItem(null); }}
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {gallery.map(item => (
                    <tr key={item.id}>
                      <td>
                        {item.image ? (
                          <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                        ) : (
                          <span style={{ color: '#999' }}>No image</span>
                        )}
                      </td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>
                        <div className="admin-actions">
                          <button className="btn-edit" onClick={() => editGallery(item)}>Edit</button>
                          <button className="btn-delete" onClick={() => deleteGallery(item.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h2 style={{ margin: 0 }}>Client Management</h2>
              <button 
                onClick={() => { setShowClientForm(true); setEditingItem(null); setClientForm({ clientName: '', logo: '' }); }}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ff7a00',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                + Add Client
              </button>
            </div>

            {showClientForm && (
              <div style={{ backgroundColor: '#fff', padding: '30px', marginBottom: '30px', border: '1px solid #ddd' }}>
                <h3>{editingItem ? 'Edit Client' : 'Add New Client'}</h3>
                <form onSubmit={handleClientSubmit}>
                  <div className="form-group">
                    <label>Client Name *</label>
                    <input 
                      type="text" 
                      value={clientForm.clientName}
                      onChange={(e) => setClientForm({...clientForm, clientName: e.target.value})}
                      required
                    />
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button 
                      type="button" 
                      onClick={() => { setShowClientForm(false); setEditingItem(null); }}
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>Client Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map(item => (
                    <tr key={item.id}>
                      <td>
                        {item.logo ? (
                          <img src={item.logo} alt={item.clientName} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                        ) : (
                          <span style={{ color: '#999' }}>No logo</span>
                        )}
                      </td>
                      <td>{item.clientName}</td>
                      <td>
                        <div className="admin-actions">
                          <button className="btn-edit" onClick={() => editClient(item)}>Edit</button>
                          <button className="btn-delete" onClick={() => deleteClient(item.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div>
            <h2 style={{ marginBottom: '30px' }}>Contact Messages</h2>
            <div style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map(item => (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td style={{ maxWidth: '300px' }}>{item.message}</td>
                      <td>
                        <div className="admin-actions">
                          <button className="btn-delete" onClick={() => deleteMessage(item.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {messages.length === 0 && (
                <div style={{ padding: '30px', textAlign: 'center', color: '#999' }}>
                  No messages yet.
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
