// CardsPage.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { fetchHearthstoneCards} from '@/app/lib/data'
import { HearthstoneCard as HearthstoneCardType } from '@/app/types';
import HearthstoneCard from '@/app/components/HearthstoneCard';

const CURRENT_MINIONS: string[] = ['Annoy-o-Tron', 'Beleaguered Battler', 'Emerald Proto-Whelp', 'Harmless Bonehead', 'Imprisoner', 'Manasaber', 'Micro Mummy', 'Picky Eater', 'Razorfen Geomancer', 'Refreshing Anomaly', 'Risen Rider', 'Rockpool Hunter', 'Scallywag', 'Sellemental', 'Shell Collector', 'Southsea Busker', 'Sun-Bacon Relaxer', "Surf n' Surf", 'Swampstriker', 'Upbeat Frontdrake', 'Wrath Weaver', 'Enchanted Lasso', 'Fortify', 'Pointy Arrow', 'Recruit a Trainee', 'Tavern Coin', 'Tavern Dish Banana', 'Them Apples']

const CardsPage = () => {
  const [cards, setCards] = useState<HearthstoneCardType[]>([]);

  useEffect(() => {
    const getCards = async () => {
      const data = await fetchHearthstoneCards();

      const processedCards =  data.reduce((acc: { [key: string]: HearthstoneCardType }, card: HearthstoneCardType) => {
        const existing = acc[card.name];
        if (!existing || existing.dbfId > card.dbfId) {
          acc[card.name] = card;
        }
        return acc;
      }, {});

      const uniqueCards: HearthstoneCardType[] = Object.values(processedCards);

      // Filter to include only Battlegrounds minions that are part of the current set,
      // by name, and whose text doesn't start with "[x]"
      const tierOneCards = uniqueCards.filter((card: HearthstoneCardType) => 
        card.cardSet === "Battlegrounds" &&
        card.type === "Minion" &&
        CURRENT_MINIONS.includes(card.name) &&
        !card.text.startsWith("[x]")
      );
      setCards(tierOneCards);
    };

    getCards();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
	  {cards.map((card) => (
	    <HearthstoneCard key={card.cardId} card={card} />
	  ))}
    </div>
  );
};

export default CardsPage;
