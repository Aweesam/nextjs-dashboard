// components/HearthstoneCard.tsx
import Image from 'next/image';
import { HearthstoneCard as HearthstoneCardType } from '../types'; // Adjust the import path as necessary

interface Props {
  card: HearthstoneCardType;
}

const HearthstoneCard: React.FC<Props> = ({ card }) => {
  // Example sizes, adjust as necessary
  const width = 300; // Define a fixed width or derive it from the card/image data
  const height = 400; // Define a fixed height or derive it from the card/image data


  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', maxWidth: `${width}px` }}>
      <h3>{card.name}</h3>
      {/* Use the Image component for optimized image loading */}
      <Image
        src={card.img}
        alt={card.name}
        width={width}
        height={height}
        layout="responsive" // This is optional, based on your layout needs
      />
      <p>Health: {card.health}</p>
      <p>Mana Cost: {card.cost}</p>
      {card.attack && <p>Attack: {card.attack}</p>}
    </div>
  );
};

export default HearthstoneCard;
