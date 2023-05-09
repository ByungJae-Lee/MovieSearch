import { Component } from './core/heropy'

export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    this.el.textContent = 'Hello, world!'
  }
}