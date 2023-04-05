// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {details, isActive} = props
  const {language, id} = details
  const className = isActive ? 'activebutton' : 'nonactivebutton'

  const onChangeItem = () => {
    onChangeItem(id)
  }

  return (
    <li>
      <button type="button" className={className} conClick={onChangeItem}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
