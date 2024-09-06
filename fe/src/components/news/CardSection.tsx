import { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Card from './Card'
import { useNewsContext } from './NewsFetcher'
import SkeletonCard from './SkeletonCard'

export default function CardSection() {
  const { listPageResponse } = useNewsContext()
  const [renderedList, setRenderedList] = useState(listPageResponse)
  const [loading, setLoading] = useState(true)
  const [renderSkeletonCount, setRenderSkeletonCount] = useState(0)

  useEffect(() => {
    setLoading(true)

    const timeoutId = setTimeout(() => {
      setRenderedList(listPageResponse)
      setLoading(false)
      setRenderSkeletonCount((count) => count + 1)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [listPageResponse])

  if (loading && renderSkeletonCount < 2) {
    return <SkeletonCard />
  }

  return (
    <TransitionGroup className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30 flex-grow">
      {renderedList.map(
        ({ image_url, cardNewsContent, cardNewsId, cardNewsTitle }) => (
          <CSSTransition key={cardNewsId} timeout={300} classNames="fade">
            <Card
              image={image_url}
              title={cardNewsTitle}
              content={cardNewsContent}
              id={cardNewsId}
            />
          </CSSTransition>
        ),
      )}
    </TransitionGroup>
  )
}
