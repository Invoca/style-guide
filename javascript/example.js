class HiHound {
  const hey = "hi";

  get noComments() {
    return true;
  }

  get comments() {
    let comment = this.map(elements, (el) => $(el).text());
  }

  test() {
    var hey = "hi"

    return hey
  }

  test2() {
    let hey = "hi";

    return hey;
  }
}
