// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = details
  return (
    <li className="list">
      <img src={avatarUrl} alt="f" className="image" />
      <p className="name">{name}</p>
      <p className="para">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="min-image"
        />
        {starsCount} stars
      </p>
      <p className="para">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="froks"
          className="min-image"
        />
        {forksCount} froks
      </p>
      <p className="para">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt=" open issues"
          className="min-image"
        />
        {issuesCount}open issues
      </p>
    </li>
  )
}
export default RepositoryItem
