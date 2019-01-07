import request from 'request-promise'

const catBaseDataURL = 'https://latelier.co/data/cats.json'
import fs from 'fs'
import path from 'path'
import yaml from "js-yaml";

export default async () => {
  const {firstPart, connector, lastPart} = yaml.safeLoad(fs.readFileSync(path.join('config', 'names.yaml')))

  let rawDb = await request(catBaseDataURL, {json: true})

  console.log("Downloading new db from remote")
  console.log(`${rawDb.images.length} found`)

  return rawDb.images.map((image, index) => {
    let name = `${firstPart[Math.floor(Math.random() * firstPart.length)]} ${connector[Math.floor(Math.random() * connector.length)]}${lastPart[Math.floor(Math.random() * lastPart.length)]}`
    return {url : image.url, id : index, elo : 1000, upvote : 0, downvote : 0, name}
  })

}