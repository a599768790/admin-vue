const Process = {
  TOKEN_NAME: process.env.VUE_APP_TOKEN_NAME,
  BASE_API: process.env.VUE_APP_BASE_API,
  TIME_OUT: process.env.VUE_APP_TIME_OUT,
  MOCK: process.env.VUE_APP_MOCK === 1
}
export default Process
