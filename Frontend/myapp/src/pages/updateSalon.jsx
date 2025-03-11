import { BrowserRouter as  Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EntityList() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetch('/api/entities')
      .then((res) => res.json())
      .then((data) => setEntities(data));
  }, []);

  const deleteEntity = (id) => {
    fetch(`/api/entities/${id}`, { method: 'DELETE' })
      .then(() => setEntities(entities.filter(entity => entity.id !== id)));
  };

  return (
    <div>
      <h1>Entities</h1>
      <Link to="/create">Add New Entity</Link>
      <ul>
        {entities.map(entity => (
          <li key={entity.id}>
            {entity.name} 
            <Link to={`/update/${entity.id}`}>Edit</Link>
            <button onClick={() => deleteEntity(entity.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UpdateEntity() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entity, setEntity] = useState({ name: '' });

  useEffect(() => {
    fetch(`/api/entities/${id}`)
      .then((res) => res.json())
      .then((data) => setEntity(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/entities/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entity)
    }).then(() => navigate('/'));
  };

  return (
    <div>
      <h1>Update Entity</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={entity.name} 
          onChange={(e) => setEntity({ ...entity, name: e.target.value })} 
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
