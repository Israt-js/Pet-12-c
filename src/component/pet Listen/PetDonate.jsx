import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import PetCard from './PetCard';

const PetDonate = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/campaigns?page=${page}&limit=9`);
        setCampaigns(prevCampaigns => [...prevCampaigns,...response.data]);
        if (response.data.length === 0) setHasMore(false);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, [page]);

  const lastCampaignElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore]);

  return (
    <div className="campaigns-grid">
      {campaigns.map((campaign, index) => {
        if (campaigns.length === index + 1) {
          return <div ref={lastCampaignElementRef} key={campaign._id}><PetCard campaign={campaign} /></div>;
        } else {
          return <PetCard key={`${campaign.id}-${index}`} campaign={campaign} />;
        }
      })}
    </div>
  );
};

export default PetDonate;