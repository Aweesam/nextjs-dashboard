// CardsPage.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { fetchHearthstoneCards} from '@/app/lib/data'
import { HearthstoneCard as HearthstoneCardType } from '@/app/types';
import HearthstoneCard from '@/app/components/HearthstoneCard';

const CardsPage = () => {
  const [cards, setCards] = useState<HearthstoneCardType[]>([]);

  useEffect(() => {
    const getCards = async () => {
      const data = await fetchHearthstoneCards();
      const tierOneCards = data.filter((card) => card.cardSet === "Battlegrounds");
      setCards(tierOneCards);
    };

    getCards();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <HearthstoneCard key={card.cardId} card={card} />
      ))}
    </div>
  );
};

export default CardsPage;
