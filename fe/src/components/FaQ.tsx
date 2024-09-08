import { useState, useEffect, useRef } from 'react'
import { cn } from '@/util'
import { useFaQContext } from '@/api/faq'
import { Down, Up } from './common'

export default function TabWithDropdown({
  searchTerm,
}: {
  searchTerm: string
}) {
  const [selectedTab, setSelectedTab] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const faqData = useFaQContext()
  const updatedCategories = [{ id: 0, name: '전체' }, ...faqData.categories]

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    const selectedTabElement = tabRefs.current[selectedTab]
    if (selectedTabElement) {
      const { offsetLeft, offsetWidth } = selectedTabElement
      setUnderlineStyle({
        width: offsetWidth,
        left: offsetLeft,
      })
    }
  }, [selectedTab])

  const filteredFaqs = faqData.faqs
    .filter(
      (faq) =>
        selectedTab === 0 ||
        faq.categoryId === faqData.categories[selectedTab].id,
    )
    .filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    )

  return (
    <div className="x-full mx-150">
      <div className="relative border-b border-mediumGray">
        <nav className="relative flex mt-24 mb-12 justify-between">
          {updatedCategories.map((category, index) => (
            <button
              ref={(el) => {
                tabRefs.current[index] = el
              }}
              type="button"
              key={category.id}
              className={cn(
                'relative h-full py-2 px-20 text-mediumGray text-sm font-medium',
                selectedTab === index && 'text-main',
              )}
              onClick={() => setSelectedTab(index)}
            >
              {category.name}
            </button>
          ))}

          <span
            className="absolute bottom-[-13px] h-2 bg-main transition-all duration-300"
            style={{
              width: `${underlineStyle.width}px`,
              transform: `translateX(${underlineStyle.left}px)`,
            }}
          />
        </nav>
      </div>

      <div className="mt-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={cn(
                'border-b border-mediumGray',
                openIndex === index && 'bg-bgColor3 border-none',
              )}
            >
              <button
                type="button"
                className="w-full text-left px-20 flex justify-between items-center"
                onClick={() => toggleDropdown(index)}
              >
                <div
                  className={cn(
                    'py-28 flex gap-60',
                    openIndex === index && 'text-main',
                  )}
                >
                  <p> {faqData.categories[selectedTab].name}</p>
                  {faq.question}
                </div>
                <span>
                  {openIndex === index ? (
                    <Up width={20} height={20} />
                  ) : (
                    <Down width={35} height={35} fill="#000000" />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="pl-145 py-28 bg-bgColor3">{faq.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </div>
  )
}
