const deleteItemAfterDragging = (action, state) => {
    const source = action.payload.source.droppableId;
    return {...state, [source]: state[source].filter((t) => !(t.id === action.payload.draggableId))}
}
export default deleteItemAfterDragging;