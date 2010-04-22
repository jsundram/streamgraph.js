function Rect(l, t, w, h) 
{
    this.left = l;
    this.top = t;
    this.width = w;
    this.height = h;
}


Rect.prototype = {
    contains: function (x, y) 
    {
        return ((this.left <= x) && (x <= this.left + this.width) && (this.top <= y) && (y <= this.top + this.height));
    },
    
    bottom: function()
    {
        return this.top + this.height;
    },
    
    right: function()
    {
        return this.left + this.width;
    }
    
};
