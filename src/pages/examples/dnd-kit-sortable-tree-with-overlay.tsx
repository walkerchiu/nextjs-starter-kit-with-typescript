import { FC, useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

import {
  DndContext,
  DragStartEvent,
  DragEndEvent,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { NextPage } from "next";
import { useTheme } from "next-themes";

import Footer from "../../modules/examples/Footer";
import Header from "../../modules/examples/Header";

type Item = {
  id: string;
  name: string;
  description: string;
};

interface SortableItemProps {
  item: Item;
  is_overlay: boolean | false;
}

interface ActiveItemProps {
  item: Item | undefined;
}

const SortableItem: FC<SortableItemProps> = ({ item, is_overlay }) => {
  const { setNodeRef, listeners, transform, transition } = useSortable({
    id: item.id as string,
  });
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme == "dark";

  const styles: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    color: isDarkMode ? "white" : "black",
    backgroundColor: isDarkMode ? "black" : "white",
    border: isDarkMode ? "1px solid white" : "1px solid black",
    marginTop: "10px",
    padding: "10px",
    cursor: "grab",
  };

  const styles_overlay: CSSProperties = {
    color: "gray",
    backgroundColor: isDarkMode ? "black" : "white",
    border: "1px solid gray",
    marginTop: "10px",
    padding: "10px",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      style={is_overlay ? styles_overlay : styles}
      title={item.description}
    >
      {item.id}. {item.name}
    </div>
  );
};

const ActiveItem: FC<ActiveItemProps> = ({ item }) => {
  const { setNodeRef, listeners, transform, transition } = useSortable({
    id: item ? item.id : "",
  });
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme == "dark";

  const styles: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    color: isDarkMode ? "yellow" : "red",
    fontWeight: "bold",
    backgroundColor: isDarkMode ? "black" : "white",
    border: isDarkMode ? "2px solid yellow" : "2px solid red",
    marginTop: "10px",
    padding: "10px",
    cursor: "grabbing",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      style={styles}
      title={item?.description}
    >
      {item?.id}. {item?.name}
    </div>
  );
};

const DndKitSortableTreePage: NextPage = () => {
  const [dragActiveId, setDragActiveId] = useState<string>("");
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Apple",
      description: "An Apple",
    },
    {
      id: "2",
      name: "Banana",
      description: "A banana",
    },
    {
      id: "3",
      name: "Cake",
      description: "A cake",
    },
  ]);
  const itemIds = useMemo(() => items.map((item) => item.id), [items]);

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  function handleDragStart(event: DragStartEvent) {
    setDragActiveId(event.active.id as string);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    const activeIndex = itemIds.findIndex((id) => id === active.id);
    const overIndex = itemIds.findIndex((id) => id === over?.id);

    setItems((items) => {
      return arrayMove([...items], activeIndex, overIndex);
    });

    setDragActiveId("");
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="dnd-kit (Sortable Tree with Overlay)"
        description="The sortable preset provides the building blocks to build  sortable interfaces."
      />
      <main className="mb-auto px-10">
        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <SortableContext items={items}>
            {items.map((item) => (
              <SortableItem
                key={item.id}
                item={item}
                is_overlay={item.id == dragActiveId}
              />
            ))}
            <DragOverlay
              dropAnimation={{
                duration: 300,
                easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
              }}
            >
              <ActiveItem
                key={dragActiveId}
                item={items.find((item) => item.id == dragActiveId)}
              />
            </DragOverlay>
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
