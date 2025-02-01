import React, { useState } from 'react'
import {
  BannerImage,
  WriteReviewButton,
  Filter,
  ReviewList,
} from '@/components/customerReview'
import Pagination from '@/components/common/Pagination'

const CustomerReviewPage: React.FC = function CustomerReviewPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPet, setSelectedPet] = useState<string | null>(null)
  const [order, setOrder] = useState<'' | 'desc'>('desc')
  const [totalPages, setTotalPages] = useState(1)

  return (
    <div>
      <BannerImage
        src="/images/reviewbanner-blue.svg"
        alt="Customer Review Banner"
      />

      <div className="container mx-auto p-8">
        <div className="flex mt-8">
          <aside className="w-1/4">
            <WriteReviewButton />
            <Filter setSelectedPet={setSelectedPet} setOrder={setOrder} />
          </aside>
          <main className="w-3/4">
            <ReviewList
              currentPage={currentPage}
              order={order}
              selectedPet={selectedPet}
              onTotalPages={setTotalPages}
            />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </main>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviewPage
