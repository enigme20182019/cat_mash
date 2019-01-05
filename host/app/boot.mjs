import request from 'request-promise'

const catBaseDataURL = 'https://latelier.co/data/cats.json'


export default async () => {
  let rawDb = await request(catBaseDataURL, {json: true})

  console.log("Downloading new db from remote")
  console.log(`${rawDb.images.length} found`)

  return rawDb.images.map((image, index) => {
    return {url : image.url, id : index, elo : 1000, upvote : 0, downvote : 0}
  })

}