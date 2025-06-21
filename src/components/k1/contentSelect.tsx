import { contents } from "@/constant/content";
import ContentCard from "./contentCard";

export default function ContentSelect() {
  return (
    <div className="w-full">
        <div className="w-full grid grid-cols-3 gap-y-8 py-5 bg-white border-4 border-orange-400 rounded-2xl">
            {contents.map(content => <ContentCard key={content.id} title={content.title} type={content.type} id={content.id}/>)}
        </div>
    </div>
  )
}