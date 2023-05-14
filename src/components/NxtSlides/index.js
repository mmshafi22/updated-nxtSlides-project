import SlidesContext from '../../context/SlidesContext'
import SelectedSlide from '../SelectedSlide'

import SlideItem from '../SlideItem'
import './index.css'

const NxtSlides = () => (
  <SlidesContext.Consumer>
    {value => {
      const {slidesList, addNewSlide} = value
      return (
        <>
          <nav className="nav-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
              alt="nxt slides logo"
              className="nav-logo"
            />
            <h1>Nxt Slides</h1>
          </nav>
          <div className="slides-bg-container">
            <button
              type="button"
              className="btn-new"
              onClick={() => addNewSlide()}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png "
                alt="new plus icon"
              />
              <p>New</p>
            </button>
            <div className="slides-main-container">
              <ul className="slides-list-items">
                {slidesList.map(each => {
                  const index = slidesList.indexOf(each)
                  return (
                    <SlideItem
                      key={each.id}
                      slideDetails={each}
                      num={index + 1}
                    />
                  )
                })}
              </ul>
              <SelectedSlide />
            </div>
          </div>
        </>
      )
    }}
  </SlidesContext.Consumer>
)

export default NxtSlides
