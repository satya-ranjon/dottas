"use client";

import { useState } from "react";
import DropIndicator from "./dropIndicator";
import Card from "./card";
import AddTask from "./addcard";
import { useTasks } from "@/store/tasks";

// import AddCard from "./AddCard";i
interface IColumn {
  title: any;
  headingColor: any;
  cards: any;
  column: any;
  setCards: any;
}

const Column = ({ title, headingColor, cards, column, setCards }: IColumn) => {
  const [active, setActive] = useState(false);
  const { updateTasks } = useTasks();

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    card: { title: string; id: string; column: string }
  ) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: any) => {
    const cardId = e.dataTransfer.getData("cardId");
    const task = cards.find((c: any) => c.id === cardId);
    const updateData = { ...task, column };

    updateTasks(cardId, updateData);

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e?: any) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: any) => {
    const indicators = els || getIndicators();

    indicators.forEach((i: any) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e?: any) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e?: any, indicators?: any) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest: any, child: any) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c: any) => c.column === column);

  return (
    <div className="min-w-56  shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-600">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-[600px] w-full transition-colors ${
          active ? "bg-primary-hover" : ""
        }`}>
        {filteredCards.map((c: any) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddTask column={column} />
      </div>
    </div>
  );
};

export default Column;
