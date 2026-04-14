const { onDocumentCreated } = require('firebase-functions/v2/firestore')
const { defineSecret } = require('firebase-functions/params')
const { initializeApp } = require('firebase-admin/app')

initializeApp()

const RECAPTCHA_SECRET = defineSecret('RECAPTCHA_SECRET_KEY')

exports.verifyQuoteRecaptcha = onDocumentCreated(
  {
    document: 'quoteRequests/{docId}',
    secrets: [RECAPTCHA_SECRET],
  },
  async (event) => {
    const data = event.data.data()
    const token = data?.recaptchaToken

    if (!token || token === '[verified]' || token === '[error]') return

    try {
      const res = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${RECAPTCHA_SECRET.value()}&response=${token}`,
        }
      )
      const json = await res.json()
      const score = json.score ?? null
      const ok = json.success === true && score >= 0.5

      await event.data.ref.update({
        recaptchaScore: score,
        recaptchaOk: ok,
        recaptchaToken: '[verified]',
        ...(ok ? {} : { flagged: true }),
      })

    } catch (err) {
      console.error('reCAPTCHA verify error:', err)
      await event.data.ref.update({
        recaptchaToken: '[error]',
        recaptchaOk: false,
      })
    }
  }
)