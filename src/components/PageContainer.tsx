export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='w-full text-center
  py-[5.5rem] px-6
  md:py-28 md:px-0
  lg:pt-52 lg:pb-2 lg:page-container lg:grid lg:min-h-screen '
    >
      {children}
    </div>
  )
}
