import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import NxtSlides from './components/NxtSlides'
import SlidesContext from './context/SlidesContext'

import './App.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class App extends Component {
  state = {
    headingFocus: false,
    descriptionFocus: false,
    slidesList: initialSlidesList,
    activeSlide: initialSlidesList[0],
  }

  onToggleHeadingFocus = () => {
    this.setState(prevState => ({headingFocus: !prevState.headingFocus}))
  }

  onToggleDescriptionFocus = () => {
    this.setState(prevState => ({
      descriptionFocus: !prevState.descriptionFocus,
    }))
  }

  addNewSlide = () => {
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    this.setState(prev => ({
      slidesList: [...prev.slidesList, newSlide],
      activeSlide: newSlide,
    }))
  }

  onChangeHeading = event => {
    const {activeSlide} = this.state
    this.setState(prev => ({
      slidesList: prev.slidesList.map(each =>
        each.id === activeSlide.id
          ? {...each, heading: event.target.value}
          : {...each},
      ),
      activeSlide: {...prev.activeSlide, heading: event.target.value},
    }))
  }

  onChangeDescription = event => {
    const {activeSlide} = this.state
    this.setState(prev => ({
      slidesList: prev.slidesList.map(each =>
        each.id === activeSlide.id
          ? {...each, description: event.target.value}
          : {...each},
      ),
      activeSlide: {...prev.activeSlide, description: event.target.value},
    }))
  }

  changeSlide = item => {
    this.setState({activeSlide: item})
  }

  render() {
    const {slidesList, activeSlide, headingFocus, descriptionFocus} = this.state
    return (
      <SlidesContext.Provider
        value={{
          slidesList,
          activeSlide,
          headingFocus,
          descriptionFocus,
          addNewSlide: this.addNewSlide,
          changeSlide: this.changeSlide,
          onChangeHeading: this.onChangeHeading,
          onChangeDescription: this.onChangeDescription,
          onToggleHeadingFocus: this.onToggleHeadingFocus,
          onToggleDescriptionFocus: this.onToggleDescriptionFocus,
        }}
      >
        <NxtSlides />
      </SlidesContext.Provider>
    )
  }
}

export default App
