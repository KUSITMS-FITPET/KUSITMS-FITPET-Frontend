import UrlFetcher from '@/api/admin/url'
import UrlTable from '@/components/admin/UrlTable'
import { AsyncBoundaryWithQuery } from '@/react-utils'

export default function UrlPage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-22 mb-20">url 관리</h1>
      <AsyncBoundaryWithQuery>
        <UrlFetcher>
          <UrlTable />
        </UrlFetcher>
      </AsyncBoundaryWithQuery>
    </div>
  )
}
