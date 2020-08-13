import React from 'react';
import {Alert, Button, Col, CustomInput, FormGroup, Input, Label, Row} from "reactstrap";
import Validator from "./Common/Validator";
import SimpleReactValidator from 'simple-react-validator';
import api from "../api";

export default class ContactForm extends React.Component {
    state = {data: {name: ""}};

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    async handleSubmit(e) {
        e.preventDefault()

        if (this.state.success || this.state.error) {
            this.setState({success: false, error: null})
        }

        if (!this.validator.allValid()) {
            this.validator.showMessages()
            this.forceUpdate()
            return
        }

        this.setState({loading: true})
        try {
            await api('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.data)
            })

            this.validator.hideMessages()
            this.setState({error: null, success: true, data: {}})
        } catch (e) {
            this.setState({error: e.message, success: false})
        } finally {
            this.setState({loading: false})
        }
    }

    render() {
        return <>

            <div className="container mb-5">
                <hr/>
                <div className="col-lg-12">
                    <div className="section-heading">
                        <p className="section__desc">
                            <div>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>Name surname</Label>
                                            <Validator validator={this.validator} name="Name" value={this.state.data.name} type="required">
                                                <Input
                                                    type="text"
                                                    disabled={!!this.state.loading}
                                                    value={this.state.data.name || ''}
                                                    onChange={a => this.setState({
                                                        data: {
                                                            ...this.state.data,
                                                            name: a.currentTarget.value
                                                        }
                                                    })}
                                                />
                                            </Validator>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>E-Mail</Label>
                                            <Validator validator={this.validator} name="E-Mail " value={this.state.data.email}
                                                       type="required|email">
                                                <Input
                                                    type="text"
                                                    disabled={!!this.state.loading}
                                                    value={this.state.data.email || ''}
                                                    onChange={a => this.setState({
                                                        data: {
                                                            ...this.state.data,
                                                            email: a.currentTarget.value
                                                        }
                                                    })}
                                                />
                                            </Validator>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label>Subject</Label>
                                    <Validator validator={this.validator} name="Subject" value={this.state.data.title} type="required">
                                        <Input
                                            type="text"
                                            disabled={!!this.state.loading}
                                            value={this.state.data.title || ''}
                                            onChange={a => this.setState({
                                                data: {
                                                    ...this.state.data,
                                                    title: a.currentTarget.value
                                                }
                                            })}
                                        />
                                    </Validator>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Content</Label>
                                    <Validator validator={this.validator} name="Message to us" value={this.state.data.message} type="required">
                                        <Input
                                            type="textarea"
                                            disabled={!!this.state.loading}
                                            rows={5}
                                            value={this.state.data.message || ''}
                                            onChange={a => this.setState({
                                                data: {
                                                    ...this.state.data,
                                                    message: a.currentTarget.value
                                                }
                                            })}
                                        />
                                    </Validator>
                                </FormGroup>

                                <Button
                                    className="mt-3 btn-block"
                                    color="primary"
                                    disabled={!!this.state.loading}
                                    onClick={this.handleSubmit.bind(this)}
                                >
                                    Submit
                                </Button>

                                {(this.state.error && <Alert color="danger" className="mt-2">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"/>{this.state.error}
                                </Alert>) || (this.state.success && <Alert color="success" className="mt-2">
                                    <i className="fa fa-check" aria-hidden="true"/>Thanks for your message!
                                </Alert>) || (this.state.loading && <Alert color="warning" className="mt-2">
                                    <i className="fa fa-spinner fa-spin" aria-hidden="true"/> Please wait.
                                </Alert>)}
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </>;
    }
}