import { useState } from "react";

import {
  DndContext,
  useDraggable,
  useDroppable,
  UniqueIdentifier,
  DragStartEvent,
  DragMoveEvent,
  DragOverEvent,
  DragEndEvent,
  DragCancelEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { NextPage } from "next";

import Footer from "../../modules/examples/Footer";
import Header from "../../modules/examples/Header";

function Draggable() {
  const { isDragging, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable-item",
  });

  return (
    <button
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        color: "black",
        backgroundColor: "white",
        borderBottom: isDragging ? "" : "1px solid red",
        fontWeight: "bold",
        padding: "10px",
        cursor: "grab",
      }}
      {...listeners}
    >
      Item
    </button>
  );
}

interface DroppableProps {
  children: React.ReactNode;
  id: string;
}

function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 150,
        border: isOver ? "2px solid gray" : "1px solid black",
        margin: 20,
      }}
    >
      {children}
    </div>
  );
}

const DndKitDragAndDropPage: NextPage = () => {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  function handleDragStart(event: DragStartEvent) {
    console.log('Start Dragging: "' + event.active.id + '".');
  }

  function handleDragMove(event: DragMoveEvent) {
    console.log('Picked up Item "' + event.active.id + '".');
  }

  function handleDragOver(event: DragOverEvent) {
    const { over } = event;

    if (over)
      console.log(
        'Item "' +
          event.active.id +
          '" was moved over droppable area "' +
          over.id +
          '".'
      );
    else
      console.log(
        'Item "' + event.active.id + '" is no longer over a droppable area.'
      );
  }

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    setParent(over ? over.id : null);

    if (over)
      console.log('Item was dropped over droppable area "' + over.id + '".');
    else console.log('Item "' + event.active.id + '" was dropped.');
  }

  function handleDragCancel(event: DragCancelEvent) {
    console.log(
      'Dragging was cancelled. Item "' + event.active.id + '" was dropped.'
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="dnd-kit (Droppable-and-Draggable)"
        description="A lightweight, performant, accessible and extensible drag & drop toolkit for React."
      />
      <main className="mb-auto px-10">
        <DndContext
          onDragStart={handleDragStart}
          onDragMove={handleDragMove}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
          sensors={sensors}
        >
          <div style={{ padding: "10px", minHeight: "60px" }}>
            {parent === null ? <Draggable /> : null}
          </div>

          <div style={{ color: "gray", display: "flex" }}>
            {containers.map((id) => (
              <Droppable key={id} id={id}>
                {parent === id ? <Draggable /> : id}
              </Droppable>
            ))}
          </div>
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
            dnd-kit (Quick start):
            <br />
            <a
              href="https://docs.dndkit.com/introduction/getting-started"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://docs.dndkit.com/introduction/getting-started
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

export default DndKitDragAndDropPage;
