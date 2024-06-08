import { useState } from 'react';

const PetListing = () => {
  const [pets, setPets] = useState([
    { id: 1, name: "Buddy", age: 3, location: "New York", category: "cat", image: "https://i.ibb.co/C7MP3yd/raoul-droog-y-MSec-CHs-IBc-unsplash.jpg" },
    { id: 2, name: "Whiskers", age: 2, location: "Los Angeles", category: "Cat", image: "https://i.ibb.co/0GbQSkL/hang-niu-Tn8-DLxwu-DMA-unsplash.jpg" },
    { id: 3, name: "Max", age: 2, location: "Chicago", category: "Dog", image: "https://i.ibb.co/zxn11wY/alvan-nee-br-Fs-Z7qsz-SY-unsplash.jpg" },
    { id: 4, name: "Tom", age: 4, location: "Maleshiya", category: "Dog", image: "https://i.ibb.co/B2g1FPY/cristian-castillo-73py-V0-JJOm-E-unsplash.jpg" },
    { id: 5, name: "Tony", age: 3, location: "London", category: "Dog", image: "https://i.ibb.co/M8wygXH/peri-stojnic-5-Vr-RVPfb-MI-unsplash.jpg" },
    { id: 6, name: "pitter", age: 5, location: "Bankok", category: "Cat", image: "https://i.ibb.co/8m2gRnx/nihal-karkala-vcg9-w-y-Mk-unsplash.jpg" },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'All' || pet.category === selectedCategory)
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
              <button className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetListing;
