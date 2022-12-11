import { FC, useState } from "react";
import type { CSSProperties } from "react";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { NextPage } from "next";

import Footer from "../../modules/examples/Footer";
import Header from "../../modules/examples/Header";

interface SortableItemProps {
  id: string;
}

const SortableItem: FC<SortableItemProps> = ({ id }) => {
  const { setNodeRef, listeners, transform, transition } = useSortable({
    id,
  });

  const styles: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: "white",
    border: "1px solid black",
    marginTop: "10px",
    padding: "10px",
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} {...listeners} style={styles}>
      {id}
    </div>
  );
};

const DndKitSortableTreePage: NextPage = () => {
  const [items, setItems] = useState(["A", "B", "C"]);

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;

    setItems((items) => {
      return arrayMove(
        items,
        items.indexOf(active.id as string),
        items.indexOf(over?.id as string)
      );
    });
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="dnd-kit (Sortable Tree)"
        description="The sortable preset provides the building blocks to build  sortable interfaces."
      />
      <main className="mb-auto px-10">
        <DndContext onDragEnd={handleDragEnd}>
          <SortableContext items={items}>
            {items.map((id) => (
              <SortableItem key={id} id={id} />
            ))}
          </SortableContext>
        </DndContext>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
          }}
        >
          <li>
            dnd-kit:
            <br />
            <a
              href="https://dndkit.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://dndkit.com
            </a>
          </li>
          <li>
            dnd-kit (Sortable):
            <br />
            <a
              href="https://docs.dndkit.com/presets/sortable"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://docs.dndkit.com/presets/sortable
            </a>
          </li>
          <li>
            dnd-kit (GitHub):
            <br />
            <a
              href="https://github.com/clauderic/dnd-kit"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/clauderic/dnd-kit
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default DndKitSortableTreePage;
