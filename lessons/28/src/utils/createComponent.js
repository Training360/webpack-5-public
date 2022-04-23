const createComponent = ({ selector, position, template }) =>
  document.querySelector(selector).insertAdjacentHTML(position, template)

export default createComponent
