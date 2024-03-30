// components/HearthstoneCard.tsx
import Image from 'next/image';
import { HearthstoneCard as HearthstoneCardType } from '../types'; // Adjust the import path as necessary
import React, { useState } from 'react';

interface Props {
  card: HearthstoneCardType;
}

const HearthstoneCard: React.FC<Props> = ({ card }) => {
  // Example sizes, adjust as necessary
  const width = 256; // Define a fixed width or derive it from the card/image data
  const height = 256 * 1.5; // Define a fixed height or derive it from the card/image data

  const [imageSrc, setImageSrc] = useState(card.img);

  const handleError = () => {
    if (card.imgGold) {
      setImageSrc(card.imgGold);
    } else {
      setImageSrc('https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Shiba_Inu_coin_logo.png/160px-Shiba_Inu_coin_logo.png'); // Fallback to a default image
    }
  };


  console.log(imageSrc);
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', maxWidth: `${width}px` }}>
      <h3>{card.name}</h3>
      {/* Use the Image component for optimized image loading */}
      <Image
        src={imageSrc}
        alt={card.name}
        width={width}
        height={height}
        onError={handleError}
      />
      <p>Health: {card.health}</p>
      <p>Mana Cost: {card.cost}</p>
      {card.attack && <p>Attack: {card.attack}</p>}
    </div>
  );
};

export default HearthstoneCard;
