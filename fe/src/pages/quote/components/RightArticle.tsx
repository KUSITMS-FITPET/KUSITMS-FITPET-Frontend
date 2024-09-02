export default function RightArticle() {
  const items = [
    {
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet consectetur. Turpis risus amet dolor gravida.',
    },
    {
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet consectetur. Turpis risus amet dolor gravida.',
    },
    {
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet consectetur. Turpis risus amet dolor gravida.',
    },
  ]

  return (
    <article className="max-w-md rounded-lg shadow-lg">
      <div className="bg-[#E2F2FF] text-main text-lg font-semibold py-13 text-center">
        SC는 이렇게 보내드려요 !
      </div>
      <div className="bg-bgColor3 p-30 space-y-10">
        {items.map((item) => (
          <div key={item.title} className="flex items-start space-x-4">
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-textColor">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
