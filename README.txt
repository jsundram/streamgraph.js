Streamgraph.js is a port of Lee Byron and Martin Wattenberg's streamgraph_generator (http://github.com/leebyron/streamgraph_generator) to javascript and processing.js. The paper "Stacked Graphs -- Geometry & Aesthetics" by Byron &  Wattenberg is useful to consult.

I've added the following features (which can be turned off or ignored):
 * Dynamic Sizing
 * Legend
 * Settings (Dynamically changeable Layout, Colors, etc.)
 * Zoom (Drag to select an area, ESC to zoom out)
 * Hover (Highlights the layer under the mouse, presents the layer name and relevant data at the top of the screen)
 * New Color Option, NiceRandom (a bit more variation)
 * Real examples (showing how to use).
 
Known issues:
 * The examples don't work locally using Chrome on Mac. 
 
How to use:
 Consult any of the examples. Basically, you need to:
 * Create a javascript file that implements getStreamgraphData() and getStreamgraphLabels.
 * Optionally, you can add getStreamgraphSettings() if you wish to modify the default settings.
 * Your getStreamgraphData() needs to return a 2D array, where each column contains a series, and each row conains a time-slice.
 * There should be the same number of labels as columns.
 * Create an html file that includes processing.js, streamgraph.js, streamgraph.settings.js and your javascript file. 
 * Place a canvas tag with its datasource set to streamgraph.pjs. Alternatively, use jquery, as described here: http://processingjs.org/source/ajax-init/index.html