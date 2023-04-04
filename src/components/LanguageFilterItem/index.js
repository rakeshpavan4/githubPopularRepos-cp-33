// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {details} = props
  const {language} = details
  return (
    <li>
      <button type="button" className="button">
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
