import { Link } from "react-router-dom";

const PetCard = ({ campaign }) => {
  const { id, image, title, description, targetAmount, currentAmount } = campaign;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl justify-center">
      <figure><img src={image} alt={title} className="campaign-image" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>Target Amount: ${targetAmount}</p>
        <p>Current Amount: ${currentAmount}</p>
        <div className="card-actions justify-end">
          <Link to={`/pet/${id}`}><button className="btn bg-orange-400">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;