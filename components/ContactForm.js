'use client';

import React, {useState} from 'react';
import {Alert, Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import SimpleReactValidator from 'simple-react-validator';
import api from "../api";
import Validator from "@/components/Validator";

const ContactForm = () => {
    const [data, setData] = useState({name: ""});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const validator = new SimpleReactValidator();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (success || error) {
            setSuccess(false);
            setError(null);
        }

        if (!validator.allValid()) {
            validator.showMessages();
            return;
        }

        setLoading(true);

        try {
            await api('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            validator.hideMessages();
            setSuccess(true);
            setData({name: ""});
        } catch (e) {
            setError(e.message);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mb-5">
            <hr/>
            <div className="col-lg-12">
                <div className="section-heading">
                    <div className="section__desc">
                        <div>
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Name surname</Label>
                                        <Validator validator={validator} name="Name" value={data.name} type="required">
                                            <Input
                                                type="text"
                                                disabled={!!loading}
                                                value={data.name || ''}
                                                onChange={(e) => setData({...data, name: e.currentTarget.value})}
                                            />
                                        </Validator>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>E-Mail</Label>
                                        <Validator validator={validator} name="E-Mail " value={data.email} type="required|email">
                                            <Input
                                                type="text"
                                                disabled={!!loading}
                                                value={data.email || ''}
                                                onChange={(e) => setData({...data, email: e.currentTarget.value})}
                                            />
                                        </Validator>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label>Subject</Label>
                                <Validator validator={validator} name="Subject" value={data.title} type="required">
                                    <Input
                                        type="text"
                                        disabled={!!loading}
                                        value={data.title || ''}
                                        onChange={(e) => setData({...data, title: e.currentTarget.value})}
                                    />
                                </Validator>
                            </FormGroup>
                            <FormGroup>
                                <Label>Content</Label>
                                <Validator validator={validator} name="Message to us" value={data.message} type="required">
                                    <Input
                                        type="textarea"
                                        disabled={!!loading}
                                        rows={5}
                                        value={data.message || ''}
                                        onChange={(e) => setData({...data, message: e.currentTarget.value})}
                                    />
                                </Validator>
                            </FormGroup>

                            <Button
                                className="mt-3 btn-block"
                                color="primary"
                                disabled={!!loading}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>

                            {(error && <Alert color="danger" className="mt-2">
                                <i className="fa fa-exclamation-circle" aria-hidden="true"/>{error}
                            </Alert>) || (success && <Alert color="success" className="mt-2">
                                <i className="fa fa-check" aria-hidden="true"/>Thanks for your message!
                            </Alert>) || (loading && <Alert color="warning" className="mt-2">
                                <i className="fa fa-spinner fa-spin" aria-hidden="true"/> Please wait.
                            </Alert>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
