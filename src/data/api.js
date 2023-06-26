const apiUrl = 'http://localhost:80/api/v1/form';

// Create incident
export const createIncident = async (incidentData) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(incidentData),
  });
  const data = await response.json();
  return data;
};

// Get all incidents
export const getIncidents = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

// Update incident
export const updateIncident = async (id, incidentData) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(incidentData),
  });
  const data = await response.json();
  return data;
};

// Delete incident
export const deleteIncident = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};

// Update incident
export const getIncident = async (id, incidentData) => {
  const response = await fetch(`${apiUrl}/${id}`)
  const data = await response.json();
  return data;
};