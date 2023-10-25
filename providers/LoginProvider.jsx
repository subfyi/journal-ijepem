'use client'

import { createContext, useCallback, useContext, useEffect, useReducer, useState } from 'react'
import { Button, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { useUser } from './UserProvider'
import api from '../api'
import PhoneInput from 'react-phone-input-2'
import { useAuth, ValidatorProvider } from 'react-admin-base'
import { CheckBox, SingleFilePicker, Validator, ValueValidator } from 'react-admin-base-bootstrap'

const LoginContext = createContext()

export default function LoginProvider({ children }) {
  const [isLogin, setLogin] = useState(0)

  return <LoginContext.Provider value={setLogin}>
    {isLogin === 1 && <LoginModal onDone={a => setLogin(0)} />}
    {isLogin === 2 && <RegisterModal onDone={a => setLogin(0)} />}
    {isLogin === 3 && <ResetModal onDone={a => setLogin(0)} />}
    {children}
  </LoginContext.Provider>
}

export function useLoginGuard() {
  const user = useUser()
  const setLogin = useLogin()

  const [resolve, setResolve] = useState()

  useEffect(function() {
    if (user && resolve) {
      setResolve(null)
      resolve.fnc(true)
    }
  }, [user, resolve, setResolve])

  return useCallback(function() {
    if (!user) {
      setLogin(1)
      return new Promise(resolve => {
        setResolve({ fnc: resolve })
      })
    }

    return true
  }, [user, setLogin, setResolve])
}

export function useLogin() {
  return useContext(LoginContext) || []
}

function LoginModal({ onDone }) {
  const [api] = useAuth()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const setLogin = useLogin()

  const onLogin = useCallback(async function(e) {
    e.preventDefault()

    setLoading(true)
    try {
      await api.log_in(username, password)
      onDone()
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [api, username, password, onDone])

  return <Modal isOpen toggle={onDone}>
    <ModalHeader toggle={onDone}>
      Login
    </ModalHeader>
    <ValidatorProvider>
      <Form onSubmit={onLogin}>
        <ModalBody>
          <FormGroup>
            <Label>Username</Label>
            <Validator name='username' type='required'>
              <Input
                type='text'
                value={username}
                onChange={a => setUsername(a.currentTarget.value)}
                disabled={!!loading}
              />
            </Validator>
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Validator name='password' type='required'>
              <Input
                type='password'
                value={password}
                onChange={a => setPassword(a.currentTarget.value)}
                disabled={!!loading}
              />
            </Validator>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button block color='primary' disabled={!!loading}>
            {!loading ? 'Login' : <><i className='fas fa-spin fa-spinner' /> Loading...</>}
          </Button>

          <a href={'https://portal.iseser.com/register'} target={'_blank'} className={'btn button btn-primary w-100 '}>
            Register an account
          </a>

          <a href={'https://portal.iseser.com/reset'} target={'_blank'} className={'btn button btn-outline-primary w-100'}>
            Forgot password
          </a>
        </ModalFooter>
      </Form>
    </ValidatorProvider>
  </Modal>
}

function VerifyModal({ url, body, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false)
  const [code, setCode] = useState('')
  const [error, setError] = useState()

  const onSubmit = useCallback(async function(e) {
    e.preventDefault()

    setLoading(true)
    try {
      const newUrl = url + '&code=' + code

      await api(newUrl)

      onSuccess(newUrl)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [url, body, code, onSuccess])

  return <Modal isOpen toggle={onClose}>
    <ModalHeader toggle={onClose}>
      One Time Verification
    </ModalHeader>
    <ValidatorProvider>
      <Form onSubmit={onSubmit}>
        <ModalBody>
          <FormGroup>
            <Label>One Time Verification Code</Label>
            <Validator name='code' type='required|numeric'>
              <Input
                type='text'
                value={code}
                onChange={a => setCode(a.currentTarget.value)}
                disabled={!!loading}
              />
            </Validator>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button block color='primary' disabled={!!loading}>
            {!loading ? 'Verify' : <><i className='fas fa-spin fa-spinner' /> Loading...</>}
          </Button>
        </ModalFooter>
      </Form>
    </ValidatorProvider>
  </Modal>
}

function RegisterModal({ onDone }) {
  const [data, setData] = useReducer((a, b) => ({ ...a, ...b }), {})
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState()
  const [, login] = useAuth()
  const [checked, setChecked] = useReducer(a => !a, false)

  const onLogin = useCallback(async function(e) {
    e.preventDefault()

    setLoading(true)
    try {

      const url = await api('/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setUrl(url)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [data, onDone])

  const handleLogin = useCallback(async function(finalUrl) {
    setLoading(true)
    try {
      await api(finalUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      await login(data.email, data.password)
      onDone()
    } catch (e) {
      setError(e)
    } finally {
      setUrl(null)
      setLoading(false)
    }
  }, [data, setLoading, setUrl, onDone])

  if (url)
    return <VerifyModal
      url={url}
      body={data}
      onClose={onDone}
      onSuccess={handleLogin}
    />

  return <Modal size={'xl'} isOpen toggle={onDone}>
    <ModalHeader toggle={onDone}>
      Register
    </ModalHeader>
    <ValidatorProvider>
      <Form onSubmit={onLogin}>
        <ModalBody>
          <Row className='mb-3'>
            <Col md='2'>
              <Label htmlFor='text-input'>Name & Surname</Label>
            </Col>
            <Col md='10'>
              <Validator name='name' type='required'>
                <Input
                  type='text'
                  value={data.name}
                  onChange={a => setData({ name: a.currentTarget.value })}
                  disabled={!!loading}
                />
              </Validator>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col md='2'>
              <Label htmlFor='text-input'>E-Mail</Label>
            </Col>
            <Col md='10'>
              <Validator name='email' type='required'>
                <Input type='text' value={data.email}
                       onChange={a => setData({ email: a.currentTarget.value })} />
              </Validator>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col md='2'>
              <Label> Password</Label>
            </Col>
            <Col md='10'>
              <ValueValidator
                name='password'
                value={data.password}
                type='required'
              >
                <Input
                  minLength='6'
                  type='password'
                  value={data.password || ''}
                  onChange={(a) =>
                    setData({ password: a.currentTarget.value })
                  }
                  disabled={loading}
                  autoComplete='new-password'
                />
              </ValueValidator>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col md='2'>
              <Label> Password (again)</Label>
            </Col>
            <Col md='10'>

              <Validator
                name='password2'
                type={
                  !data.password
                    ? []
                    : ['required', { in: [data.password || ''] }]
                }
              >
                <Input
                  minLength='6'
                  type='password'
                  value={data.password2 || ''}
                  onChange={(a) =>
                    setData({ password2: a.currentTarget.value })
                  }
                  disabled={loading}
                  autoComplete='new-password'
                />
              </Validator>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col md='2'>
              <Label>Phone</Label>
            </Col>
            <Col md='10'>
              <Validator name='Phone' type='required'>
                <PhoneInput
                  country='ca'
                  value={data.phone || ''}
                  onChange={a => setData({ phone: a })}
                />
              </Validator>
              <FormText>We will preferably use this phone number to contact you via WhatsApp.</FormText>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col md='2'>
              <Label>Gender</Label>
            </Col>
            <Col md='10'>
              <Validator name='gender' type='required'>
                <Input
                  type='select'
                  value={data.gender || '0'}
                  onChange={a => setData({ gender: +a.currentTarget.value })}
                >
                  <option value='0'>Female</option>
                  <option value='1'>Male</option>
                  <option value='2'>Other</option>
                </Input>
              </Validator>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col md='2'>
              <Label htmlFor='text-input'>City</Label>
            </Col>
            <Col md='10'>
              <Validator name='City' type='required'>
                <Input type='text' value={data.city}
                       onChange={a => setData({ city: a.currentTarget.value })} />
              </Validator>
            </Col>
          </Row>
          <FormGroup>
            <Label>Affiliated school or work:</Label>
            <Validator name='Affiliated school or work' type='required'>
              <Input
                type='textarea'

                rows={2}
                value={data.school_or_work || ''}
                onChange={a => setData({
                  school_or_work: a.currentTarget.value
                })}
              />
            </Validator>
          </FormGroup>

          <Row className='mb-3'>
            <Col md='5'>
              <Label>ID Photo (Passport , Driver Licence, etc.)</Label>
            </Col>
            <Col md='7'>
              <Validator name='ID Photo (Passport , Driver Licence, etc.)' type='required'>
                <SingleFilePicker
                  value={data.identification_file}
                  onChange={a => setData({ identification_file: a })}
                />
              </Validator>
              <FormText>This document is needed to prove that you are a real person.</FormText>
            </Col>
          </Row>
          <hr />
          <h3>Emergency Contact</h3>
          <Row className='my-3'>
            <Col md='3'>
              <Label htmlFor='text-input'>Name & Surname</Label>
            </Col>
            <Col md='9'>
              <Validator name='name' type='required'>
                <Input
                  type='text'
                  value={data.ec_name}
                  onChange={a => setData({ ec_name: a.currentTarget.value })}
                />
              </Validator>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col md='3'>
              <Label htmlFor='text-input'>Relationship to tenant</Label>
            </Col>
            <Col md='9'>
              <Validator name='name' type='required'>
                <Input
                  type='text'
                  value={data.ec_relationship}
                  onChange={a => setData({ ec_relationship: a.currentTarget.value })}
                />
              </Validator>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col md='3'>
              <Label>Phone</Label> </Col>
            <Col md='9'>
              <Validator name='Phone' type='required'>
                <PhoneInput
                  country='ca'
                  value={data.ec_phone || ''}
                  onChange={a => setData({ ec_phone: a })}
                />
              </Validator>
            </Col>
          </Row>

          <Validator name='confirmation' type='accepted'>
            <CheckBox id='tos' checked={checked} onClick={setChecked}>
              I agree to share my information. (We will never share your data with a 3rd party.)
            </CheckBox>
          </Validator>
        </ModalBody>
        <ModalFooter>
          <Button block color='primary' disabled={!!loading}>
            {!loading ? 'Register' : <><i className='fas fa-spin fa-spinner' /> Loading...</>}
          </Button>
        </ModalFooter>
      </Form>
    </ValidatorProvider>
  </Modal>
}

function ResetModal({ onDone }) {
  const [data, setData] = useReducer((a, b) => ({ ...a, ...b }), {})
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState()
  const [, login] = useAuth()
  const [finalUrl, setFinalUrl] = useState()

  const onLogin = useCallback(async function(e) {
    e.preventDefault()

    setLoading(true)
    try {

      const url = await api('/reset', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setUrl(url)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [data, onDone])

  const handleOtpCorrect = useCallback(function(finalUrl) {
    console.log('final url')
    setFinalUrl(finalUrl)
  }, [setFinalUrl])

  const handleLogin = useCallback(async function(e) {
    e.preventDefault()

    setLoading(true)
    try {
      await api(finalUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      await login(data.email, data.password)
      onDone()
    } catch (e) {
      setError(e)
    } finally {
      setUrl(null)
      setLoading(false)
    }
  }, [data, setLoading, setUrl, onDone])

  if (url && !finalUrl)
    return <VerifyModal
      url={url}
      body={data}
      onClose={onDone}
      onSuccess={handleOtpCorrect}
    />

  return <Modal isOpen toggle={onDone}>
    <ModalHeader toggle={onDone}>
      Reset password
    </ModalHeader>
    <ValidatorProvider>
      <Form onSubmit={finalUrl ? handleLogin : onLogin}>
        <ModalBody>
          <Row className='mb-3'>
            <Col md='2'>
              <Label htmlFor='text-input'>E-Mail</Label>
            </Col>
            <Col md='10'>
              <Validator name='email' type='required'>
                <Input type='text' value={data.email}
                       onChange={a => setData({ email: a.currentTarget.value })} disabled={!!finalUrl} />
              </Validator>
            </Col>
          </Row>

          {!!finalUrl && <>
            <Row className='mb-3'>
              <Col md='2'>
                <Label> Password</Label>
              </Col>
              <Col md='10'>
                <ValueValidator
                  name='password'
                  value={data.password}
                  type='required'
                >
                  <Input
                    minLength='6'
                    type='password'
                    value={data.password || ''}
                    onChange={(a) =>
                      setData({ password: a.currentTarget.value })
                    }
                    disabled={loading}
                    autoComplete='new-password'
                  />
                </ValueValidator>
              </Col>
            </Row>

            <Row className='mb-3'>
              <Col md='2'>
                <Label> Password (again)</Label>
              </Col>
              <Col md='10'>

                <Validator
                  name='password2'
                  type={
                    !data.password
                      ? []
                      : ['required', { in: [data.password || ''] }]
                  }
                >
                  <Input
                    minLength='6'
                    type='password'
                    value={data.password2 || ''}
                    onChange={(a) =>
                      setData({ password2: a.currentTarget.value })
                    }
                    disabled={loading}
                    autoComplete='new-password'
                  />
                </Validator>
              </Col>
            </Row>
          </>}


        </ModalBody>
        <ModalFooter>
          <Button block color='primary' disabled={!!loading}>
            {!loading ? 'Reset Password' : <><i className='fas fa-spin fa-spinner' /> Loading...</>}
          </Button>
        </ModalFooter>
      </Form>
    </ValidatorProvider>
  </Modal>
}