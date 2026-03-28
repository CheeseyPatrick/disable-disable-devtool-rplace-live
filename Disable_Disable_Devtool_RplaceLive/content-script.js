const _originalSetInterval = window.setInterval

window.setInterval = function (fn, delay, ...args) {
   const src = typeof fn === "function" ? fn.toString() : ""

   if (src.includes("ondevtoolclose")) {
      // If true, then this is the interval that disable-devtool uses to keep going. We will not call the function, and instead we will simply return a dummy number
      return 999999999
   }

   return _originalSetInterval.call(this, fn, delay, ...args)
}
