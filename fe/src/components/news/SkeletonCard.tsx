export function CardSkeleton() {
  return (
    <div className="w-full max-w-sm rounded-xl shadow-sm animate-pulse">
      <div className="relative w-full h-240 overflow-hidden rounded-t-xl bg-[#646F7C]/20 shadow-lg animate-skeleton" />
    </div>
  )
}

export default function SkeletonCard() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30">
      {[...Array(6)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardSkeleton key={index} />
      ))}
    </div>
  )
}
