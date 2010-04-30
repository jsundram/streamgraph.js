var numLayers = 50;
var layerSize = 100;

function getStreamgraphSettings()
{
    var s = new Settings();
    s.colors.background = 200;
    s.colors.neutral = 128;
    s.colors.highlight = 0;
    
    s.show_settings = true;
    s.show_legend = false;
    
    s.ColorPicker.current = "LastFm";
    return s;
}

function getStreamgraphData()
{
    var data = [];
    for (var l = 0; l < layerSize; l++)
        data[l] = new Array(numLayers); // not sure how to do this with [] syntax
    
    // Each layer is a column; each row corresponds to an instant of time.
    for (var i = 0; i < numLayers; i++)
    {
        var onset = Math.floor(layerSize * (Math.random() * 1.25 - 0.25));
        var duration = Math.floor(Math.random() * 0.75 * layerSize);
        
        var layer = makeRandomArray(layerSize, onset, duration);
        for (var j = 0; j < layerSize; j++)
        {
            data[j][i] = layer[j];
        }
    }
    
    return data;
}


function makeRandomArray(n, onset, duration)
{
    var x = new Array(n);
    for (var i = 0; i < n; i++)
        x[i] = 0;
    
    // Add a single random bump.
    var height  = Math.random();
    var start = Math.max(0, onset);
    var end = Math.min(x.length, onset + duration);
    var len = end - onset;
    
    for (var i = start; i < x.length && i < onset + duration; i++) 
    {
        var xx = (i - onset) / duration;
        var yy = (xx * Math.exp(-10 * xx));
        x[i] += height * yy;
    }
    
    return x;
}


function getStreamgraphLabels()
{
    var labels = [];
    for (var i = 0; i < numLayers; i++)
        labels[i] = "Layer # " + (i+1); // Does this work?
    return labels;
}


