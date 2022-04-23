import Component from '../components/interfaces/Component'

const createComponent = ({ selector, position, template }: Component): void =>
  document.querySelector<HTMLElement>(selector)!.insertAdjacentHTML(position, template)

export default createComponent
