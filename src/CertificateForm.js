import React, { useState, useEffect } from 'react';
import { fetchUserData } from './api';

function CertificateForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    application: '',
    commonName: '',
    san: '',
    authority: ''
  });

  useEffect(() => {
    const data = fetchUserData();
    setFormData(prev => ({ ...prev, ...data }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Certificate Created: ' + JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="application" placeholder="Application Name" value={formData.application} onChange={handleChange} /><br />
      <input name="commonName" placeholder="Common Name" value={formData.commonName} onChange={handleChange} /><br />
      <input name="san" placeholder="Subject Alternative Names" value={formData.san} onChange={handleChange} /><br />
      <input name="authority" placeholder="Certificate Authority" value={formData.authority} onChange={handleChange} /><br />
      <button type="submit">Create Certificate</button>
    </form>
  );
}

export default CertificateForm;