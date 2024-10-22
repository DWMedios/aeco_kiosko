interface ConditionsCardProps {
  icon: string
  items: string[]
  title: string
}

function ConditionsCard({ icon, items, title }: ConditionsCardProps) {
  return (
    <div className="flex flex-col justify-center items-center select-none w-full">
      <span className="bg-[#95BF56] py-5 px-10 rounded-full text-white text-3xl font-bold text-center">
        {title}
      </span>
      <div className="flex flex-row justify-center items-center mt-10">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="text-3xl font-semibold leading-normal">
              {item}
            </li>
          ))}
        </ul>
        <img className="w-28 h-auto" src={icon} alt={title} />
      </div>
    </div>
  )
}

export default ConditionsCard
