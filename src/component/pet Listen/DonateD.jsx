import React, { useState } from 'react';
import StripePaymentForm from './StripeF';
import Modal from './Modal';

const DonateD = ({ campaigns }) => {
  const [showModal, setShowModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonateNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDonationAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleDonationSubmit = () => {
    
  };

  if (!campaigns || !campaigns.description || !campaigns.targetAmount) {
    return <div>Loading campaign data...</div>;
  }

  const { description, targetAmount } = campaigns;

  return (
    <div>
      <h1>Donation Details</h1>
      <p>{description}</p>
      <button onClick={handleDonateNow}>Donate Now</button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Make a Donation</h2>
          <input
            type="number"
            value={donationAmount}
            onChange={handleDonationAmountChange}
            placeholder="Enter donation amount"
          />
          <StripePaymentForm
            amount={targetAmount}
            onSuccess={handleDonationSubmit}
          />
        </Modal>
      )}
    </div>
  );
};

export default DonateD;
