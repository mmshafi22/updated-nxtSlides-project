import SlidesContext from '../../context/SlidesContext'
import './index.css'

const SelectedSlide = () => (
  <SlidesContext.Consumer>
    {value => {
      const {
        activeSlide,
        onChangeDescription,
        onChangeHeading,
        headingFocus,
        descriptionFocus,
        onToggleHeadingFocus,
        onToggleDescriptionFocus,
      } = value

      return (
        <div className="selected-slide-container">
          <div className="selected-slide-card">
            <input
              type="text"
              value={activeSlide.heading}
              onChange={event => onChangeHeading(event)}
              className={`input-one ${headingFocus ? 'input-bg' : ''}`}
              onFocus={() => onToggleHeadingFocus()}
              onBlur={() => onToggleHeadingFocus()}
            />
            <input
              type="text"
              value={activeSlide.description}
              onChange={event => onChangeDescription(event)}
              className={`input-two ${descriptionFocus ? 'input-bg' : ''}`}
              onFocus={() => onToggleDescriptionFocus()}
              onBlur={() => onToggleDescriptionFocus()}
            />
          </div>
        </div>
      )
    }}
  </SlidesContext.Consumer>
)

export default SelectedSlide
