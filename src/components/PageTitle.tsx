export type PageTitleProps = {
  number: string
  title: string
}

export default function PageTitle({ number, title }: PageTitleProps) {
  return (
    <div className='row-start-1 row-end-2 lg:col-start-2 lg:col-end-10 lg:row-start-auto '>
      <h1
        className='inline-flex md:flex gap-6 px-6
      text-left md:pl-9 lg:pl-0'
      >
        <span className='heading5 font-bold opacity-25'>{number}</span>
        <p className='heading5 '>{title}</p>
      </h1>
    </div>
  )
}
