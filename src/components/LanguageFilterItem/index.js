import './index.css'

const LanguageFilterItem = props => {
  const {details, isActive, onChangeItems} = props
  const {language, id} = details
  const className = isActive ? 'activebutton' : 'nonactivebutton'

  const onChangeItem = () => {
    onChangeItems(id)
  }

  return (
    <li>
      <button type="button" className={className} onClick={onChangeItem}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
