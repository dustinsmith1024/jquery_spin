$.fn.spin = function(opts) {

  if (opts !== false){
    opts = $.extend({
      //Default settings
      color: false, //Override so CSS color is used
      zIndex: 100,  //Default zIndex is too high and goes over style guide menus
      rtl: ($("html").attr('dir')==='rtl')
    }, opts);
  }

  this.each(function() {
    var $this = $(this),
    data = $this.data();

    if (data.spinner) {
      data.spinner.stop();
      delete data.spinner;
    }

    if (opts !== false) {
      data.spinner = new Spinner(opts).spin(this);
    }
  });
  return this;
};
