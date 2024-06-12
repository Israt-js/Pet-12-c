import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PetListing = () => {
  const [pets, setPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:5000/pet');
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching tourist spots:', error);
      }
    };

    fetchPets();
  }, []);

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'All' || pet.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  const sortedPets = filteredPets.sort((a, b) => b.id - a.id);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
        >
          <option value="All">All</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedPets.map(pet => (
          <div key={pet.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={pet.image} alt={pet.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{pet.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Age: {pet.age}</p>
              <p className="text-sm text-gray-600 mb-2">Location: {pet.location}</p>
              <Link to={`/pet/${pet.id}`} className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-600">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetListing;
