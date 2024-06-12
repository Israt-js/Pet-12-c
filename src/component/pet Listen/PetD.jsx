import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    petId: '',
    petName: '',
    petImage: '',
    userName: 'John Doe', 
    email: 'john.doe@example.com',
    phoneNumber: '',
    address: ''
  });

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch(`http://localhost:5000/pet/${parseInt(id)}`);
        if (!response.ok) {
          throw new Error('Pet not found');
        }
        const data = await response.json();
        setPet(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPet();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/adoption', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to submit adoption request');
      }
      alert('Adoption request submitted successfully');
      setShowModal(false);
    } catch (error) {
      console.error('Error submitting adoption request:', error);
    }
  };

  const handleAdoptClick = () => {
    if (pet) {
      setFormData({
        ...formData,
        petId: pet.id,
        petName: pet.name,
        petImage: pet.image
      });
      setShowModal(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
<div className="border rounded-lg overflow-hidden shadow-md mb-4">
  {pet && (
    <div>
      <img src={pet.image} alt={pet.name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{pet.name}</h3>
        <p className="text-sm text-gray-600 mb-2">Age: {pet.age}</p>
        <p className="text-sm text-gray-600 mb-2">Location: {pet.location}</p>
        <button onClick={handleAdoptClick} className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-600">
          Adopt
        </button>
      </div>
    </div>
  )}
</div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Adopt {formData.petName}</h2>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="petId" value={formData.petId} />
              <input type="hidden" name="petName" value={formData.petName} />
              <input type="hidden" name="petImage" value={formData.petImage} />
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">User Name:</label>
                <input type="text" name="userName" value={formData.userName} disabled className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input type="email" name="email" value={formData.email} disabled className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Address:</label>
                <textarea name="address" value={formData.address} onChange={handleInputChange} className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none"></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-600">Submit</button>
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-600 ml-2">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetDetails;
