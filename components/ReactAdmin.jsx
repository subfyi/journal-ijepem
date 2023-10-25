'use client'

import { App, AuthProvider } from 'react-admin-base'
import { IntlProvider } from 'react-intl'

const languages = {
  en: {
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/ca.svg',
    name: 'English',
    messages: {
      'app.name': 'ISESER'
    }
  }
}

export default function ReactAdminApp({ children }) {
  return <App id='iseser' endpoint={process.env.ENDPOINT} name='ISESER'>
    <IntlProvider locale='en' messages={languages.en.messages}>
      <AuthProvider tokenEndpoint='/oauth/token' client_id='2' client_secret='JjPIsb7TNCf7ysEfs0JDhl5XXBgIVh6dMRLMCrb9'>
              {children}
      </AuthProvider>
    </IntlProvider>
  </App>
}
