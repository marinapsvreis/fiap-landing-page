import Image from 'next/image'

export default function IntroImage() {
  return (
    <div>
      <Image src="/images/intro.png" alt="Intro Image" width={1495} height={804} />
    </div>
  )
}