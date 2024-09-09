/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_DOMAIN: string
  readonly VITE_STORE_DOMAIN: string
  readonly VITE_COGNITO_CLIENT_ID: string
  readonly VITE_COGNITO_POOL_ID: string
  readonly VITE_S3_BUCKET: string
  readonly VITE_COGNITO_IDENTITY_POOL_ID: string
  readonly VITE_COGNITO_DOMAIN: string
  readonly VITE_GTM_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
