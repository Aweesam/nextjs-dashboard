'use client'

import { useEffect, useState } from 'react';
import { 
  fetchV1LatestCards
 } from '@/app/lib/data';

 import HearthstoneCard from '../../components/HearthstoneCard';
 import { HearthstoneCard as HearthstoneCardType } from  '../../types';


export default function HearthstonePage() {
	//const [cards, setCards] = useState<HearthstoneCardType[]>([]);
  const [cards, setCards] = useState<HearthstoneCardType[]>([]);
  
  useEffect(() => {
    async function fetchData() {
      //const token = await getBlizzardAuthToken();
      //const cardsData = await fetchHearthstoneBattlegroundsCards(token);
      const cardsData = await fetchV1LatestCards();
      const tierOneCardsData = cardsData.filter((card: HearthstoneCardType) => 
      card.techLevel === 1 &&
      //&& card.set === "BATTLEGROUNDS" 
      //&& card.type === "MINION"
      ( card.isBattlegroundsPoolMinion === true
      //&& !card.text.startsWith("[x]")
      //&& card.id === "BG24_009_G"
      //&& card.text.indexOf("[x]") !== 0
      || card.id.endsWith("G"))
    );
      setCards(tierOneCardsData);
    }

    fetchData();
  }, []);

  return (
	<div style={{ display: 'flex', flexWrap: 'wrap' }}>
	{cards.map((card) => (
	  <HearthstoneCard key={card.id} card={card} />
	))}
  </div>
  );
}



