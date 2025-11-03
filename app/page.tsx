
function Card({title, description}: {title: string, description: string}) {
  return (
    <div className="w-64 h-72 bg-neutral-700">
      <p className="font-bold text-2xl">{title}</p>
      <p>{description}</p>
    </div>
  )
}

const cards = [
  {
    title: "Giveaway",
    description: "Gear up for victory! Join Gaming Gators giveaway and enter to win a premium gaming keyboard."
  },
  {
    title: "ACADEMY TEAM",
    description: "Our Academy Team receives invaluable mentorship from experienced seniors, guiding them to success in their careers."
  },
]

export default function Home() {
  return (
    <div className="">
      <div className="flex">
      {
        cards.map((card, index) => {
          return (
            <Card title={card.title} description={card.description} key={index} />
          )
        })
      }
      </div>
      home update #2
    </div>
  );
}
