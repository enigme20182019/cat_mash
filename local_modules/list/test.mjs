import List from './index.mjs'
import assert from 'assert'

const testList = [0,1,2,3,4]
for(let i = 0; i < 20; i++) {
  List.shuffle(testList)
  for(let j = 0; j < testList.length; j++) {
    assert.ok(testList.indexOf(j) !== -1)
  }
}
