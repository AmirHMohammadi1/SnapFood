
type Props = {
    title : string
}


export default function CategoriesTitle({title} : Props) {
  return <span className="text-gray-700 text-base ">{title}</span>;
}
