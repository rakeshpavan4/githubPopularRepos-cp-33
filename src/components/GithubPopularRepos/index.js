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

class GithubPopularRepos extends Component {
  state = {repositoryList: [], isLoading: true}

  componentDidMount() {
    this.getDidMount()
  }

  getDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/popular-repos')
    const data = await response.json()
    const updatedList = data.popular_repos.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    this.setState({repositoryList: updatedList, isLoading: false})
  }

  render() {
    const {repositoryList, isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
      </div>
    ) : (
      <div className="bg-container">
        <h1 className="title">Popular</h1>
        <ul className="languages">
          {languageFiltersData.map(each => (
            <LanguageFilterItem details={each} key={each.id} />
          ))}
        </ul>
        <ul className="ListItems">
          {repositoryList.map(each => (
            <RepositoryItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default GithubPopularRepos
