type SliderProps = {
  currentIndex: number
  setIndex: (index: number) => void
}

export type TextSliderProps = SliderProps & {
  items: string[]
}

export type NumberedSliderProps = SliderProps & {
  itemsNumber: number
}
