interface Card {
  id: string,
  image: string,
  offset?: number | string,
  logo?: string,
  artist?: string,
  name: string
}

export default function Card({ id, image, offset, logo, artist, name }: Card) {
  return <div className="card" key={id} style={{
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), url(/${image})`,
    backgroundPositionY: offset
  }}>
    <img src={`/${typeof logo == "string" ? logo : image}`} />
    <div>
      <header>{name}</header>
      <footer>{artist}</footer>
    </div>
  </div>
}