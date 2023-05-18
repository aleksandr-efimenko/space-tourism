export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='w-full text-center grid grid-flow-row
          py-[5.5rem] 
          md:py-28 md:px-0
             grid-rows-page-container
          lg:grid-cols-page-container 
          lg:text-left lg:pt-52 lg:pb-2 lg:grid-flow-col lg:min-h-screen '
    >
      {children}
    </div>
  )
}
