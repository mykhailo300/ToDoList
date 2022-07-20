const saveDataAfterDragging = (action, state, column) => {
    const source = action.payload.source.droppableId;
    const draggedTask = state[source].splice(action.payload.source.index, 1);
    state[column].splice(action.payload.destination.index, 0, draggedTask[0]);
    debugger;
    return {...state, [source]: state[source].filter((t) => !(t.id === action.payload.draggableId)), [column]: [...state[column]]}
}
export default saveDataAfterDragging;