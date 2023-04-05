import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatuschange = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class GithubPopularRepos extends Component {
  state = {
    repositoryList: [],
    apiStatus: apiStatuschange.initial,
    activeOptionId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getDidMount()
  }

  onChangeItem = id => {
    this.setState({activeOptionId: id}, this.getDidMount)
  }

  getDidMount = async () => {
    const {activeOptionId} = this.state
    this.setState({apiStatus: apiStatuschange.inprogress})
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeOptionId}`,
    )
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      const updatedList = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      this.setState({
        repositoryList: updatedList,
        apiStatus: apiStatuschange.success,
      })
    } else {
      this.setState({apiStatus: apiStatuschange.failure})
    }
  }

  successview = () => {
    const {repositoryList} = this.state
    return (
      <div>
        <ul className="ListItems">
          {repositoryList.map(each => (
            <RepositoryItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  failureview = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      alt="failure view"
    />
  )

  loadingview = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  apistatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatuschange.success:
        return this.successview()
      case apiStatuschange.failure:
        return this.failureview()
      case apiStatuschange.inprogress:
        return this.loadingview()
      default:
        return null
    }
  }

  render() {
    const {activeOptionId} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Popular</h1>
        <ul className="languages">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              details={each}
              key={each.id}
              isActive={activeOptionId === each.id}
            />
          ))}
        </ul>
        {this.apistatus()}
      </div>
    )
  }
}
export default GithubPopularRepos
