export type PageContainerProps = {
  children: React.ReactNode
  additionalClassNames?: string
}

export function PageContainer({ children, additionalClassNames }: PageContainerProps) {
  return (
    <div
      className={`min-height-100vh w-full text-center grid 
          pt-[5.5rem] pb-0
          md:pt-28  md:px-0 md:grid-flow-row-dense
             grid-rows-page-container-mobile
          lg:grid-rows-page-container-desktop
          lg:grid-cols-page-container 
          lg:text-left lg:pt-52 lg:pb-0 lg:grid-flow-col ${additionalClassNames ? additionalClassNames : ''} `}
    >
      {children}
    </div>
  )
}
