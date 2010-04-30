var numLayers = 50;
var layerSize = 100;

function getStreamgraphData()
{
    var data = [];
    for (var l = 0; l < layerSize; l++)
        data[l] = new Array(numLayers); // not sure how to do this with [] syntax
    
    // Each layer is a column; each row corresponds to an instant of time.
    for (var i = 0; i < numLayers; i++)
    { 
        layer = makeRandomArray(layerSize);
        for (var j = 0; j < layerSize; j++)
        {
            data[j][i] = layer[j];
        }
    }

    return data;
}

function makeRandomArray(n)
{
    var x = new Array(n);
    for (var i = 0; i < n; i++)
        x[i] = 0;
    
    // add some random bumps
    for (var j=0; j<5; j++)
    {
        var height = 1 / Math.random();
        var cx = (2.0 * Math.random() - 0.5);
        var r = Math.random() / 10;
        
        
        for (var k = 0; k < x.length; k++) 
        {
            var a = (k / x.length - cx) / r;
            x[k] += height * Math.exp(-a * a);
        }
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
