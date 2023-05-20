export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='h-full md:h-screen w-full text-center grid 
          pt-[5.5rem] pb-0 px-6
          md:pt-28  md:px-0 md:grid-flow-col
             grid-rows-page-container-mobile
          lg:grid-rows-page-container-desktop
          lg:grid-cols-page-container 
          lg:text-left lg:pt-52 lg:pb-0 lg:grid-flow-col lg:min-h-screen '
    >
      {children}
    </div>
  )
}
