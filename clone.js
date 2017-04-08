Object.prototype.newClone = function () {
  var o = this.constructor === Array ? [] : {};
  for (var e in this) {
    if (this[e].constructor !== Function) {
      o[e] = (typeof this[e] === "object") ? this[e].clone() : this[e];
    }
  }
  return o;
}

function clone(obj) {
  var buf;
  if (obj instanceof Array) {
    buf = [];
    var i = obj.length;
    while (i--) {
      buf[i] = clone(obj[i]);
    }
    return buf;
  } else if (obj instanceof Object) {
    buf = {};
    for (var k in obj) {
      buf[k] = clone(obj[k]);
    }
    return buf;
  } else {
    return obj;
  }
}

var a = [1, '2', 3];
console.log(a.newClone());
// [1, '2', 3]

console.log(clone(a));
// [1, '2', 3]