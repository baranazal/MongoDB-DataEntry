import React, { useState, useEffect } from 'react';
import { createIncident } from './../data/api';

const Form = () => {
  const [incidentNumber, setIncidentNumber] = useState('');
  const [notificationNumber, setNotificationNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [durationHours, setDurationHours] = useState('');
  const [informedBy, setInformedBy] = useState({ value: '', otherValue: '' });
  const [informedTime, setInformedTime] = useState('');
  const [fiberNodes, setFiberNodes] = useState([
    { node: '', type: '', otherValue: '' },
  ]);
  const [area, setArea] = useState({ value: '', otherValue: '' });
  const [owner, setOwner] = useState({ value: '', otherValue: '' });
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [rca, setRca] = useState({ value: '', otherValue: '' });
  const [serviceImpact, setServiceImpact] = useState({
    value: '',
    otherValue: '',
  });
  const [informedTeams, setInformedTeams] = useState({
    value: '',
    otherValue: '',
  });
  const [loggedBy, setLoggedBy] = useState({ value: '', otherValue: '' });
  const [showMessage, setShowMessage] = useState(false);
  const [response, setResponse] = useState(null);
  const [message, setMessage] = useState('');
  


  useEffect(() => {
    if (startDate && startTime && endDate && endTime) {
      const startDateTime = new Date(`${startDate}T${startTime}`);
      const endDateTime = new Date(`${endDate}T${endTime}`);
      const diffInMs = Math.abs(endDateTime - startDateTime);
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
      const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      setDurationHours(`${diffInHours.toString().padStart(2, '0')}:${diffInMinutes.toString().padStart(2, '0')}`);
    }
  }, [startDate, startTime, endDate, endTime]);
  

  const handleAddNode = () => {
    setFiberNodes([...fiberNodes, { node: '', type: '' }]);
  };

  const deleteNode = (indexToDelete) => {
    setFiberNodes((prevFiberNodes) => {
      const updatedFiberNodes = prevFiberNodes.filter((_, index) => index !== indexToDelete);
      return updatedFiberNodes;
    });
  };
  

  const handleNodeChange = (index, event) => {
    const newNodes = [...fiberNodes];
    newNodes[index].node = event.target.value;
    setFiberNodes(newNodes);
  };

  const handleTypeChange = (index, event) => {
    const newNodes = [...fiberNodes];
    newNodes[index].type = event.target.value;
    if (event.target.value === 'Others') {
      newNodes[index].otherValue = '';
    } else {
      newNodes[index].otherValue = null;
    }
    setFiberNodes(newNodes);
  };

  const resetForm = () => {
    setIncidentNumber('');
    setNotificationNumber('');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
    setDurationHours('');
    setInformedBy({ value: '', otherValue: '' });
    setInformedTime('');
    setFiberNodes([{ node: '', type: '', otherValue: '' }]);
    setArea({ value: '', otherValue: '' });
    setOwner({ value: '', otherValue: '' });
    setLongitude('');
    setLatitude('');
    setRca({ value: '', otherValue: '' });
    setServiceImpact({ value: '', otherValue: '' });
    setInformedTeams({ value: '', otherValue: '' });
    setLoggedBy({ value: '', otherValue: '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const requiredFieldsEmpty = [
    //   incidentNumber,
    //   notificationNumber,
    //   startDate,
    //   startTime,
    //   endDate,
    //   endTime,
    //   durationHours,
    //   informedBy,
    //   informedTime,
    //   area,
    //   owner,
    //   longitude,
    //   latitude,
    //   rca,
    //   serviceImpact,
    //   informedTeams,
    //   loggedBy,
    // ].some((field) => field === "" || field === null || field === undefined);
    
    // if (requiredFieldsEmpty) {
    //   setMessage("Please fill in all required fields");
    //   setShowMessage(true);
    //   setTimeout(() => {
    //     setShowMessage(false);
    //   }, 3000);
    //   return;
    // }
  
    try {
      const response = await createIncident({
        incidentNumber,
        notificationNumber,
        startDate,
        startTime,
        endDate,
        endTime,
        durationHours,
        informedBy,
        informedTime,
        fiberNodes,
        area,
        owner,
        longitude,
        latitude,
        rca,
        serviceImpact,
        informedTeams,
        loggedBy,
      });
  
      setResponse(response);
      setMessage("Incident Submitted");
  
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
  
      resetForm();
    } catch (error) {
      setResponse(null);
      setMessage("Incident not created");
  
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };

  return (
    <div className="form-main">
      <div
        className={`message ${showMessage ? 'visible' : ''}`}
        style={{
          textAlign: 'center',
          marginTop: '1rem',
          marginBottom: '1rem',
          fontSize: '2rem',
          color: response && response.status === 201 ? 'green' : 'red',
        }}
      >
        {message}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-data">
          <div className="input">
            <label htmlFor="incidentNumber" className="input-label">
              Incident #:
            </label>

            <input
              type="text"
              id="incidentNumber"
              value={incidentNumber}
              onChange={event => setIncidentNumber(event.target.value)}
              className="input-box"
            />
          </div>
          <div className="input">
            <label htmlFor="notificationNumber" className="input-label">
              Notification #:
            </label>
            <input
              className="input-box"
              type="text"
              id="notificationNumber"
              value={notificationNumber}
              onChange={event => setNotificationNumber(event.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="startDate" className="input-label">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={event => setStartDate(event.target.value)}
              className="input-box "
            />
            <label htmlFor="startTime" className="input-label side-input">
              Start Time:
            </label>
            <input
              type="time"
              id="startTime"
              value={startTime}
              onChange={event => setStartTime(event.target.value)}
              className="input-box"
            />
          </div>
          <div className="input">
            <label htmlFor="endDate" className="input-label">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={event => setEndDate(event.target.value)}
              className="input-box"
            />
            <label htmlFor="endTime" className="input-label side-input">
              End Time:
            </label>
            <input
              type="time"
              id="endTime"
              value={endTime}
              onChange={event => setEndTime(event.target.value)}
              className="input-box"
            />
          </div>
          <div className="input">
            <label htmlFor="durationHours" className="input-label">
              Duration (hours):
            </label>
            <input
              type="text"
              id="durationHours"
              value={durationHours}
              readOnly
              className="input-box"
            />
          </div>
          <div className="input">
            <label htmlFor="informedBy" className="input-label">
              Informed By:
            </label>
            <select
              id="informedBy"
              value={informedBy.value}
              onChange={event =>
                setInformedBy({ ...informedBy, value: event.target.value })
              }
              className="input-box"
            >
              <option value="">Select an option</option>
              <option value="Value1">Value1</option>
              <option value="Value2">Value2</option>
              <option value="Value3">Value3</option>
              <option value="Others">Others</option>
            </select>
            {informedBy.value === 'Others' && (
              <input
                type="text"
                value={informedBy.otherValue}
                placeholder = "Other"
                className="input-box"
                onChange={event =>
                  setInformedBy({
                    ...informedBy,
                    otherValue: event.target.value,
                  })
                }
              />
            )}
            <label htmlFor="informedTime" className="input-label side-input">
              Informed Time:
            </label>
            <input
              type="time"
              id="informedTime"
              value={informedTime}
              onChange={event => setInformedTime(event.target.value)}
              className="input-box"
            />
          </div>
          <div className="input">
            <label
              htmlFor="fiberNodes"
              className="input-label"
            >
              Fiber Nodes:
            </label>
            {fiberNodes.map((node, index) => (
              <div key={index}>
                <label
                  htmlFor="node"
                  className="input-label"
                  style={{ fontWeight: '400' }}
                >
                  Node:
                </label>
                <input
                  type="text"
                  value={node.node}
                  onChange={event => handleNodeChange(index, event)}
                  className="input-box"
                />
                <label
                  htmlFor="type"
                  style={{ fontWeight: '400' }}
                  className="input-label side-input"
                >
                  Type:
                </label>
                <select
                  value={node.type}
                  onChange={event => handleTypeChange(index, event)}
                  className="input-box"
                >
                  <option value="">Select Type</option>
                  <option value="IPRAN">IPRAN</option>
                  <option value="OSN">OSN</option>
                  <option value="WDM">WDM</option>
                  <option value="RTN">RTN</option>
                  <option value="MPLS">MPLS</option>
                  <option value="Others">Others</option>
                </select>
                {node.type === 'Others' && (
                  <input
                    type="text"
                    value={node.otherValue}
                    placeholder = "Other"
                    className="input-box"
                    onChange={event => {
                      const newNodes = [...fiberNodes];
                      newNodes[index].otherValue = event.target.value;
                      setFiberNodes(newNodes);
                    }}
                  />
                )}
                <button type="button" onClick={() => deleteNode(index)} className="input-button delete-node-button">Delete Node</button>
              </div>
            ))}
          </div>
          <div className= 'add-node-button'>
          <button
              type="button"
              onClick={handleAddNode}
              className="input-button "
            >
              Add Node
            </button>
          </div>
          <div className="input">
            <label htmlFor="area" className="input-label">
              Area:
            </label>
            <select
              id="area"
              value={area.value}
              onChange={event =>
                setArea({ ...area, value: event.target.value })
              }
              className="input-box"
            >
              <option value="">Select an option</option>
              <option value="Amm Area">Amm Area</option>
              <option value="East Area">East Area</option>
              <option value="West Area">West Area</option>
              <option value="North Area">North Area</option>
              <option value="South Area">South Area</option>
              <option value="Others">Others</option>
            </select>
            {area.value === 'Others' && (
              <input
                type="text"
                value={area.otherValue}
                className="input-box"
                placeholder = "Other"
                onChange={event =>
                  setArea({ ...area, otherValue: event.target.value })
                }
              />
            )}
          </div>
          <div className="input">
            <label htmlFor="owner" className="input-label">
              Owner:
            </label>
            <select
              id="owner"
              className="input-box"
              value={owner.value}
              onChange={event =>
                setOwner({ ...owner, value: event.target.value })
              }
            >
              <option value="">Select an option</option>
              <option value="Value1">Value1</option>
              <option value="Mada">Mada</option>
              <option value="Umniah">Umniah</option>
              <option value="Orange">Orange</option>
              <option value="RJAF">RJAF</option>
              <option value="Others">Others</option>
            </select>
            {owner.value === 'Others' && (
              <input
                type="text"
                value={owner.otherValue}
                className="input-box"
                placeholder = "Other"
                onChange={event =>
                  setOwner({ ...owner, otherValue: event.target.value })
                }
              />
            )}
          </div>
          <div className="input">
            <label htmlFor="longitude" className="input-label">
              Longitude:
            </label>
            <input
              className="input-box"
              type="text"
              id="longitude"
              value={longitude}
              onChange={event => setLongitude(event.target.value)}
            />
            <label htmlFor="latitude" className="input-label side-input">
              Latitude:
            </label>
            <input
              type="text"
              className="input-box"
              id="latitude"
              value={latitude}
              onChange={event => setLatitude(event.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="rca" className="input-label">
              RCA:
            </label>
            <select
              id="rca"
              className="input-box"
              value={rca.value}
              onChange={event =>
                setRca({
                  ...rca,
                  value: event.target.value,
                })
              }
            >
              <option value="">Select an option</option>
              <option value="Value1">Value1</option>
              <option value="Value2">Value2</option>
              <option value="Value3">Value3</option>
              <option value="Vandalism">Vandalism</option>
              <option value="Others">Others</option>
            </select>
            {rca.value === 'Others' && (
              <input
                type="text"
                value={rca.otherValue}
                placeholder = "Other"
                className="input-box"
                onChange={event =>
                  setRca({
                    ...rca,
                    otherValue: event.target.value,
                  })
                }
              />
            )}
          </div>
          <div className="input">
            <label htmlFor="serviceImpact" className="input-label">
              Service Impact:
            </label>
            <select
              id="serviceImpact"
              className="input-box"
              value={serviceImpact.value}
              onChange={event =>
                setServiceImpact({
                  ...serviceImpact,
                  value: event.target.value,
                })
              }
            >
              <option value="">Select an option</option>
              <option value="Value1">Value1</option>
              <option value="No Service Effective">No Service Effective</option>
              <option value="Others">Others</option>
            </select>
            {serviceImpact.value === 'Others' && (
              <input
                type="text"
                value={serviceImpact.otherValue}
                placeholder = "Other"
                className="input-box"
                onChange={event =>
                  setServiceImpact({
                    ...serviceImpact,
                    otherValue: event.target.value,
                  })
                }
              />
            )}
          </div>
          <div className="input">
            <label htmlFor="informedTeams" className="input-label">
              Informed Teams:
            </label>
            <select
              id="informedTeams"
              className="input-box"
              value={informedTeams.value}
              onChange={event =>
                setInformedTeams({
                  ...informedTeams,
                  value: event.target.value,
                })
              }
            >
              <option value="">Select an option</option>
              <option value="Related team was informed ">Related team was informed </option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
              <option value="Others">Others</option>
            </select>
            {informedTeams.value === 'Others' && (
              <input
                type="text"
                value={informedTeams.otherValue}
                placeholder = "Other"
                className="input-box"
                onChange={event =>
                  setInformedTeams({
                    ...informedTeams,
                    otherValue: event.target.value,
                  })
                }
              />
            )}
          </div>
          <div className="input">
            <label htmlFor="loggedBy" className="input-label">
              Logged By:
            </label>
            <select
              id="loggedBy"
              className="input-box"
              value={loggedBy.value}
              onChange={event =>
                setLoggedBy({ ...loggedBy, value: event.target.value })
              }
            >
              <option value="">Select an option</option>
              <option value="Value1">Value1</option>
              <option value="Value2">Value2</option>
              <option value="Z">Z</option>
              <option value="Others">Others</option>
            </select>
            {loggedBy.value === 'Others' && (
              <input
                type="text"
                value={loggedBy.otherValue}
                placeholder = "Other"
                className="input-box"
                onChange={event =>
                  setLoggedBy({ ...loggedBy, otherValue: event.target.value })
                }
              />
            )}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="input-button submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
