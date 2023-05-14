import SlidesContext from '../../context/SlidesContext'
import './index.css'

const SlideItem = props => {
  const {num, slideDetails} = props
  const {heading, description, id} = slideDetails
  return (
    <SlidesContext.Consumer>
      {value => {
        const {activeSlide, changeSlide} = value
        return (
          <li
            className={`slide-item ${
              id === activeSlide.id ? 'active-color' : ''
            }`}
            onClick={() => changeSlide(slideDetails)}
          >
            <p>{num}</p>
            <div className="slide-text">
              <h1>{heading}</h1>
              <p>{description}</p>
            </div>
          </li>
        )
      }}
    </SlidesContext.Consumer>
  )
}

export default SlideItem
