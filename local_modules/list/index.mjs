export default class List {
  /* Fisher-Yates */
  static shuffle(list) {
    for(let i = 0; i < list.length; i++) {
      let j = Math.floor(Math.random() * (list.length - i))
      let tmp = list[i]
      list[i] = list[j]
      list[j] = tmp
    }
  }
}