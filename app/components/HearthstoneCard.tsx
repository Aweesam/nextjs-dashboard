// components/HearthstoneCard.tsx
import Image from 'next/image';
import { HearthstoneCard as HearthstoneCardType } from '../types';

interface Props {
  card: HearthstoneCardType;
}

const HearthstoneCard: React.FC<Props> = ({ card }) => {
	// Example sizes, adjust as necessary
	const width = 256; // Define a fixed width or derive it from the card/image data
	const height = 256 * 1.5; // Height for card is currently 1.5x the width
	
	const baseURL = 'https://art.hearthstonejson.com/v1/render/latest/enUS/256x/'
	const imageURL = baseURL.concat(card.id, '.png');
	const imageSrc = 'https://art.hearthstonejson.com/v1/render/latest/enUS/256x/' + card.id + '.webp';

	return (
	  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', maxWidth: `${width}px` }}>
		<h3>{card.name}</h3>
		{/* Use the Image component for optimized image loading */}
		<Image
		  src={imageURL}
		  alt={card.name}
		  width={width}
		  height={height}
		/>
		<p>Health: {card.health}</p>
		<p>Mana Cost: {card.cost}</p>
		{card.attack && <p>Attack: {card.attack}</p>}
	  </div>
	);
  };
  
export default HearthstoneCard;