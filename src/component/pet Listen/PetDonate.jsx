import React from 'react';
import PetCard from './PetCard';

const PetDonate = () => {
  const campaigns = [
    { id: 1, image: "https://i.ibb.co/C7MP3yd/raoul-droog-y-MSec-CHs-IBc-unsplash.jpg", title: "Save the Cats", description: "A campaign to save stray cats in the city.", targetAmount: 10000, currentAmount: 1500, createdAt: new Date() },
    { id: 2, image: "https://i.ibb.co/0GbQSkL/hang-niu-Tn8-DLxwu-DMA-unsplash.jpg", title: "Dog Rescue Mission", description: "Helping injured dogs find new homes.", targetAmount: 20000, currentAmount: 5000, createdAt: new Date() },
    { id: 3, image: "https://i.ibb.co/zxn11wY/alvan-nee-br-Fs-Z7qsz-SY-unsplash.jpg", title: "Pet Adoption Fair", description: "Organizing a fair to help pets find their forever homes.", targetAmount: 5000, currentAmount: 1200, createdAt: new Date() }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {campaigns.map(campaign => (
          <PetCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default PetDonate;