import * as React from 'react'
import { DropTarget } from 'react-dnd'

let scrolling


const SubScroller = ( {type, height, speed, connectDropTarget, isOver} ) => {
    // speed is the number of pixels to scroll per millisecond.
    // Drag a fixed, invisible box of custom height at the top, and bottom
    // of the window. Make sure to show it only when dragging something.
    const style = {position: 'fixed', height: height, width: '100%', opacity: 0, zIndex: 999}

    if (type == 'top') {
        style['top'] = 0
    }
    else if (type == 'bottom') {
        style['bottom'] = 0
    }

    if (isOver) {
        // Start scrolling
        const direction = type == 'top' ? -speed : speed
        // Scroll speed pixels every millisecond.
        scrolling = setInterval(() => {
            window.scrollBy(0, direction)
        }, 1 )
    }
    else {
        // Stop scrolling
        clearInterval(scrolling)

    }
    // Hide the element if not enabled, so it doesn't interfere with clicking things under it.
    return connectDropTarget(<div style={style} />)

}


export default ( {itemType, target, targetCollect, enabled=true, height=80, speed=4} ) => {
    // Parent scrolling element; set up a subscroller at the top of the page
    // for scrolling up; one at the botton for scrolling down.
    const DecoratedSubScroller = DropTarget(itemType, target, targetCollect)(SubScroller)

    if (enabled) {
        return (
            <div>
                <DecoratedSubScroller type="top" height={height} speed={speed}/>

                <DecoratedSubScroller type="bottom" height={height} speed={speed}/>
            </div>
        )
    }
    return <div />
}
