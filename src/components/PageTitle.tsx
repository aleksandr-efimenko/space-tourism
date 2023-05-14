export type PageTitleProps = {
  number: string
  title: string
}

export default function PageTitle({ number, title }: PageTitleProps) {
  return (
    <h1 className='text-left flex gap-6 md:pl-9 lg:pl-0'>
      <span className='heading5 font-bold opacity-25'>{number}</span>
      <p className='heading5 '>{title}</p>
    </h1>
  )
}
