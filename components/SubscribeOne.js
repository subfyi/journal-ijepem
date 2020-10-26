import React from 'react'
import { Container, Row, Col, Input, Button, Alert } from 'reactstrap'
import Validator from '../components/Common/Validator'
import SimpleReactValidator from 'simple-react-validator'
import api from '../api'

export class Newsletter extends React.Component {
  state = {}

  constructor(props) {
    super(props)

    this.validator = new SimpleReactValidator()
  }

  async handleSubmit(e) {
    e.preventDefault()

    if (this.state.success || this.state.error) {
      this.setState({ success: false, error: null })
    }

    if (!this.validator.allValid()) {
      this.validator.showMessages()
      this.forceUpdate()
      return
    }

    this.setState({ loading: true })
    try {
      await api(`/api/newsletter/${this.props.unsubscribe ? 'un' : ''}subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.state.email })
      })

      this.validator.hideMessages()
      this.setState({ error: null, success: this.state.email, email: null })
    } catch (e) {
      this.setState({ error: e.message, success: false })
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    return <div className="newsletter-form">

      <div>
        <div className="newsletter-form">
          <section className="mailchimp-one">
            <div className="container">
              <div className="row">
                {(this.state.error &&
                  <div className="col-lg-12"><Alert color="danger">
                  <i className="fa fa-exclamation-circle" aria-hidden="true" />{this.state.error}
                  </Alert></div>) || (this.state.success && <div className="col-lg-12"><Alert color="success">
                  <i className="fa fa-check" aria-hidden="true" /> {this.props.unsubscribe ?
                  `The address ${this.state.success} has just been removed from our newsletter mailing list.`
                  : 'It\'s great that you chose our newsletter!'
                }
                </Alert></div>) || (this.state.loading && <div className="col-lg-12"><Alert color="warning">
                  <i className="fa fa-spinner fa-spin" aria-hidden="true" /> Please wait.
                </Alert></div>)}
                <div className="col-lg-7">
                  <div className="mailchimp-one__content">
                    <div className="mailchimp-one__icon">
                      <i className="kipso-icon-email"></i>
                    </div>
                    <h2 className="mailchimp-one__title">Get latest issues <br />
                      updates by signing up</h2>
                  </div>
                </div>
                <div className="col-lg-5 d-flex">
                  <div className="my-auto">
                    <form action="#" className="mailchimp-one__form mc-form">

                      <Validator validator={this.validator} name="E-Mail address" value={this.state.email} type="required|email">
                        <Input
                          autoComplete="off"
                          type="email"
                          id="mc-email" placeholder="Enter your email"
                          disabled={!!this.state.loading}
                          value={this.state.email || ''}
                          onChange={a => this.setState({ email: a.currentTarget.value, success: false, error: null })}
                        />
                      </Validator>

                      <button className="thm-btn newsletter-send-button subscribe" onClick={this.handleSubmit.bind(this)}
                              disabled={!!this.state.loading}>
                        {this.props.unsubscribe ? 'Sign out' : 'Subscribe'}
                      </button>
                    </form>
                    <div className="mc-form__response"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  }
}

export default class extends React.Component {
  render() {
    return <Newsletter />
  }
}
