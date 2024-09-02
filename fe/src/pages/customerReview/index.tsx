import React from 'react';
import { 
  BannerImage, 
  WriteReviewButton, 
  Filter, 
  ReviewList 
} from '@/components/customerReview';
import Pagination from '@/components/common/Pagination';

const CustomerReviewPage: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

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
            <Filter />
          </aside>
          <main className="w-3/4">
            <ReviewList />
            <Pagination totalPages={3} currentPage={currentPage} onPageChange={setCurrentPage} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewPage;
