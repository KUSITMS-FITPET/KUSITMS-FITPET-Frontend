import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Card({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: number;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/${id}`);
  };

  return (
    <div
      className="w-full max-w-sm rounded-xl shadow-sm bg-white hover-pointer hover:opacity-70 cursor-pointer"
      onClick={handleClick}
    >
      <div className="overflow-hidden rounded-t-xl">
        <Image
          src="/images/temp.jpg"
          alt="card"
          width={400}
          height={250}
          className="w-full h-250 object-cover transition-opacity duration-300"
        />
      </div>
      <div className="m-33">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-base line-clamp-2">{content}</p>
      </div>
    </div>
  );
}