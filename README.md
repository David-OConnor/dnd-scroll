DnD Scroll
==========

Add-on for React DnD. Auto scroll when dragging to the top or bottom of the window; compensates for inability to use mousewheel or keyboard scrolling while dragging in React DnD's default (HTML5) backend.

Example use. Check out examples/basic_syntax for an explanation of the props:
    import Scroller from 'dnd-scroll'

    const TopLevelComponenet = () => (
        // Make the scroller for your app.
        <div>
            <Scroller itemType={ItemTypes.MYITEM} target={target}
                              targetCollect={collectTarget} enabled={draggingSomething} />
            <h1>My page heading</h1>
           <p>My page content</p>
        </div>
    )

Bottom line: Import the module, and include its Scroller component anywhere in your top-level component. Connect it to your React-DnD boilerplate functions using props. Configure the (scroll zone) height and speed props if desired.

https://github.com/David-OConnor/dnd-scroll