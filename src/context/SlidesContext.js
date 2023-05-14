import React from 'react'

const SlidesContext = React.createContext({
  slidesList: [],
  activeSlide: {},
  addNewSlide: () => {},
  changeSlide: () => {},
  onChangeHeading: () => {},
  onToggleHeadingFocus: () => {},
  onToggleDescriptionFocus: () => {},
  headingFocus: false,
  descriptionFocus: false,
})

export default SlidesContext
