import React, { useState } from 'react';
import { postResource } from '../api';
import './ResourceForm.css';

function ResourceForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [resourceType, setResourceType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postResource({ title, description, resourceType });
    } catch (error) {
      console.error('Error posting resource:', error);
    }
  };

  return (
    <div className="resource-form">
      <h2>Post a Resource</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <select value={resourceType} onChange={(e) => setResourceType(e.target.value)} required>
          <option value="">Select Resource Type</option>
          <option value="Event">Event</option>
          <option value="Resource">Resource</option>
          <option value="Information">Information</option>
        </select>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default ResourceForm;