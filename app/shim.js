Symbol.prototype.description = function () { return this.toString().slice(7, -1) }
Array.prototype.random = function () { return this[Math.floor(Math.random() * this.length)] }
