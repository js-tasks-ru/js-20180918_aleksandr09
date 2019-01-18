let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {

  let current = this.from;
  let prev = current;
  let last = this.to;

  return {
    next() {
      if (current.getTime() <= last.getTime()) {
        prev = current;
        current.setDate(current.getDate() +1);
        return {
          done: false,
          value: (prev.getDay() == 0 || prev.getDay() == 6) ? ((prev.getDate()<10) ? '[0' + prev.getDate() + ']' : '[' + prev.getDate() + ']') :
            (prev.getDate() < 10) ? '0' + prev.getDate().toString() :
            prev.getDate().toString()
        };

      } else {
        return {
          done: true
        };
      }
    }
  };
};
