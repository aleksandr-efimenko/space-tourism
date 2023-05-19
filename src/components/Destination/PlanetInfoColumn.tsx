type PlanetInfoColumnProps = {
  headerText: string
  bodyText: string
}

export function PlanetInfoColumn({ headerText, bodyText }: PlanetInfoColumnProps) {
  return (
    <div className='flex flex-col gap-3'>
      <h3 className='subheading2 text-paleblue'>{headerText}</h3>
      <p className='subheading1'>{bodyText}</p>
    </div>
  )
}
