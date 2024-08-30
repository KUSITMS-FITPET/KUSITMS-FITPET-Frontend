import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
  const { id } = useParams()
  const { push } = useRouter()

  return (
    <div className="w-screen h-screen bg-bgColor3">
      <div className="flex flex-col gap-57 md:flex-row items-start justify-center max-w-6xl mx-auto p-8 py-110 h-auto">
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <Image
            src="/images/temp.jpg"
            alt={`${id} news`}
            width={500}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        <section className="w-full gap-40 lg:w-1/3 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-32 leading-50 font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-base lg:text-lg leading-relaxed md:max-h-[50vh] md:overflow-y-scroll">
            Lorem ipsum dolor sit amet consectetur. Elit nulla lorem ut dui
            pretium egestas faucibus. Vitae hac orci et nec. Sem scelerisque
            dignissim sed sed id dignissim cursus. Habitant congue ut amet et
            nisl id. Hendrerit a adipiscing turpis lacus in. Mi facilisis
            suscipit consectetur nisl sed pulvinar. Luctus erat sed in sit
            posuere orci. Adipiscing id consequat vitae vel pretium nunc eu.
            Felis hendrerit nisl morbi diam ut accumsan. Amet lectus eget nibh
            quam adipiscing tincidunt quisque at. Habitasse nisi pellentesque
            aenean faucibus ipsum fermentum tincidunt id. Lorem ipsum dolor sit
            amet consectetur. Elit nulla lorem ut dui pretium egestas faucibus.
            Vitae hac orci et nec. Sem scelerisque dignissim sed sed id
            dignissim cursus. Habitant congue ut amet et nisl id. Hendrerit a
            adipiscing turpis lacus in. Mi facilisis suscipit consectetur nisl
            sed pulvinar. Luctus erat sed in sit posuere orci. Adipiscing id
            consequat vitae vel pretium nunc eu. Felis hendrerit nisl morbi diam
            ut accumsan. Amet lectus eget nibh quam adipiscing tincidunt quisque
            at. Habitasse nisi pellentesque aenean faucibus ipsum fermentum
            tincidunt id.
          </p>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => push('/news')}
              className="w-148 h-60 px-8 text-lg py-4 bg-main text-white rounded-lg hover:opacity-70"
            >
              목록으로
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
