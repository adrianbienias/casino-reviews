import Review from "@/components/review"
import { useFakeData } from "@/components/use-fake-data"
import { comparePositions } from "@/libs/sorting"
import { IncomingData, Review as ReviewType } from "@/types"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd"

/**
 * Component for admin dashboard
 */
export default function Admin() {
  const { data } = useFakeData<IncomingData>()
  const [items, setItems] = useState<ReviewType[]>([])
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // To make the drag&drop works without SSR issue
      // https://github.com/atlassian/react-beautiful-dnd/issues/2444
      setIsBrowser(true)
    }
  }, [])

  useEffect(() => {
    if (!data || !data.toplists) {
      return
    }

    const chunkId = 575
    const reviews = data.toplists
    const reviewsChunk = reviews[chunkId]
    reviewsChunk.sort(comparePositions)

    setItems(reviewsChunk)
  })

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      // Dropped outside the list
      return
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    )

    setItems(reorderedItems)
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-2">
        <p className="text-gray-500 mb-2">Admin Dashboard</p>

        <div className="bg-sky-100 px-4 py-3">
          <p>
            Reorder items using drag & drop, then visit{" "}
            <Link
              href="/"
              className="text-blue-500 underline hover:no-underline"
            >
              Frontend Page
            </Link>{" "}
            to see mutated changes.
          </p>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div>
            {isBrowser && (
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`p-4 ${
                      snapshot.isDraggingOver ? "bg-green-50" : ""
                    }`}
                  >
                    {items.map((item, index) => (
                      <Draggable
                        key={item.brand_id}
                        draggableId={item.brand_id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <ul
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`p-4 ${
                              snapshot.isDragging ? "bg-blue-200" : ""
                            }`}
                          >
                            <Review review={item} />
                          </ul>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
          </div>
        </DragDropContext>
      </div>
    </>
  )
}

function reorder(list: ReviewType[], startIndex: number, endIndex: number) {
  const result = list
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  result.forEach((item, index) => (item.position = index))

  return result
}
