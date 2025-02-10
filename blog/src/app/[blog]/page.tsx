
import Image from "next/image"
export default function Blog  ()  {
  return (
    <div className="h-[80vh]">
        <div>
        <h1>Page 1</h1>
        <p>This is the first page</p>
        <Image src={'/image.png'}
        alt='car image'
        width={200}
        height={200}/>
    </div>
    </div>
  )
}


