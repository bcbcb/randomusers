import React, { Component } from 'react'
import styles from './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.hideModal()
  }

  render() {
    console.log(this.props);
    const {
      name,
      picture
    } = this.props.user

    return (
      <div
        className={styles.overlay}
        onClick={this.handleClick}
      >
        <div className={styles.modal}>
          <img src={picture.large} />
          <div>{name.first} {name.last}</div>
        </div>
      </div>
    )
  }
}


export default Modal
