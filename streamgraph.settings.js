// These are a bit of a hack to make the Curved stuff work with settings.
function CurvedCurve() { return true;}
function JaggedCurve() { return false;}


function Setting(kind, values, default_value)
{
    this.kind = kind;
    this.values = values;
    this.current = default_value;
}

Setting.prototype = {
  get : function()
  {
      f = this.kind + this.current;
      return eval(f);
  }
};

function Settings()
{
    this.Sort = new Setting("Sort", ["None", "LateOnset", "Volatility", "InverseVolatility"], "LateOnset");
    this.Layout = new Setting("Layout", ["MinimizedWiggle", "Stack", "Stream", "ThemeRiver"], "Stream");
    this.ColorPicker = new Setting("ColorPicker", ["LastFm", "NiceRandom", "Random"], "NiceRandom");
    this.Curve = new Setting("Curve", ["Curved", "Jagged"], "Curved");
    
    this.settings = [this.Sort, this.Layout, this.ColorPicker, this.Curve];
}

Settings.prototype = {
    
    get_setting : function(kind)
    {
        for (var i = 0; i < this.settings.length; i++)
        {
            if (this.settings[i].kind == kind)
            {
                return this.settings[i];
            }
        }
    },
    get : function(kind)
    {
        setting = this.get_setting(kind);
        return setting.get();
    },
    
    num_types : function()
    {
        return this.settings.length;
    },
    
    num_options : function()
    {
        var n = 0;
        for (var i = 0; i < this.num_types(); i++)
            n += this.settings[i].values.length;
        return n;
    },
    
};

