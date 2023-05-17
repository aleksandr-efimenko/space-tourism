export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='w-full text-center
  py-[5.5rem] 
  md:py-28 md:px-0
  lg:text-left lg:pt-52 lg:pb-2 lg:page-container lg:grid lg:min-h-screen '
    >
      {children}
    </div>
  )
}
