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
            {headingFocus ? (
              <input
                type="text"
                value={activeSlide.heading}
                onChange={event => onChangeHeading(event)}
                className={`input-one ${headingFocus ? 'input-bg' : ''}`}
                onBlur={() => onToggleHeadingFocus()}
              />
            ) : (
              <h1
                className="slide-heading"
                onClick={() => onToggleHeadingFocus()}
              >
                {activeSlide.heading}
              </h1>
            )}
            {descriptionFocus ? (
              <input
                type="text"
                value={activeSlide.description}
                onChange={event => onChangeDescription(event)}
                className={`input-two ${descriptionFocus ? 'input-bg' : ''}`}
                onBlur={() => onToggleDescriptionFocus()}
              />
            ) : (
              <p
                className="slide-description"
                onClick={() => onToggleDescriptionFocus()}
              >
                {activeSlide.description}
              </p>
            )}
          </div>
        </div>
      )
    }}
  </SlidesContext.Consumer>
)

export default SelectedSlide
