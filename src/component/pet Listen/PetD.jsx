import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
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

  const pets = [
    { id: 1, name: "Buddy", age: 3, location: "New York", category: "Cat", image: "https://i.ibb.co/C7MP3yd/raoul-droog-y-MSec-CHs-IBc-unsplash.jpg" },
    { id: 2, name: "Whiskers", age: 2, location: "Los Angeles", category: "Cat", image: "https://i.ibb.co/0GbQSkL/hang-niu-Tn8-DLxwu-DMA-unsplash.jpg" },
    { id: 3, name: "Max", age: 2, location: "Chicago", category: "Dog", image: "https://i.ibb.co/zxn11wY/alvan-nee-br-Fs-Z7qsz-SY-unsplash.jpg" },
    { id: 4, name: "Tom", age: 4, location: "Malaysia", category: "Dog", image: "https://i.ibb.co/B2g1FPY/cristian-castillo-73py-V0-JJOm-E-unsplash.jpg" },
    { id: 5, name: "Tony", age: 3, location: "London", category: "Dog", image: "https://i.ibb.co/M8wygXH/peri-stojnic-5-Vr-RVPfb-MI-unsplash.jpg" },
    { id: 6, name: "Pitter", age: 5, location: "Bangkok", category: "Cat", image: "https://i.ibb.co/8m2gRnx/nihal-karkala-vcg9-w-y-Mk-unsplash.jpg" },
  ];

  useEffect(() => {
    const pet = pets.find(pet => pet.id.toString() === id);
    if (pet) {
      setPet(pet);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false);
  };

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div>
      <div className="border rounded-lg overflow-hidden shadow-md mb-4">
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
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none" />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400 mr-2">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PetDetails;
