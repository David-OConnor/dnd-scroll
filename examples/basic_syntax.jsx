import Scroller from 'dnd-scroll'


const ItemTypes = {
    MYITEM: 'item'
}

// Dragging is a placeholder global variable that determines if the scroll zones
// are displayed.  This could be part of a a re/flux state.
let dragging = false


// Start react-dnd boilerplate. This is included so you can see how to tie
// the Scroller into your app.
export const source = {
    beginDrag(props) {
        // Could use a re/flux dispatch instead of a dragging global.
        dragging = true
        return { }

    },
    endDrag(props) {
        dragging = false
    }
}


export const target = {
    drop(props, monitor) { }
}


export function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}


export function collectTarget(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}
// End react-dnd boilerplate

const TopLevelComponenet = () => (
    // Make the scroller for your app.
    <div>
        <Scroller itemType={ItemTypes.MYITEM} target={target}
                            targetCollect={collectTarget} enabled={dragging} />
        <h1>My page heading</h1>
        <p>My page content</p>
    </div>
)
