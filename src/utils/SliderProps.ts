type SliderProps = {
  currentIndex: number
  handleSwitch: (index: number) => void
}

export type TextSliderProps = SliderProps & {
  items: string[]
}

export type NumberedSliderProps = SliderProps & {
  itemsNumber: number
}
