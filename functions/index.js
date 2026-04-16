const { onDocumentCreated } = require('firebase-functions/v2/firestore')
const { defineSecret } = require('firebase-functions/params')
const { initializeApp } = require('firebase-admin/app')
const nodemailer = require('nodemailer')

initializeApp()

const RECAPTCHA_SECRET = defineSecret('RECAPTCHA_SECRET_KEY')
const EMAIL_PASS = defineSecret('ZOHO_EMAIL_PASS')

// ───── reCAPTCHA verification ─────
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

// ───── Nodemailer transporter using Zoho SMTP ─────
function createTransporter(pass) {
  return nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@parsleymoving.com',
      pass: pass,
    },
  })
}

// ───── quoteRequests — send email on new document ─────
exports.onNewQuoteRequest = onDocumentCreated(
  { document: 'quoteRequests/{id}', secrets: [EMAIL_PASS] },
  async (event) => {
    const d = event.data.data()
    const transporter = createTransporter(EMAIL_PASS.value())

    // Notify the team with full quote details
    await transporter.sendMail({
      from: 'Parsley Moving <info@parsleymoving.com>',
      to: 'info@parsleymoving.com',
      subject: `📦 New Quote Request — ${d.firstName} ${d.lastName}`,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td>
              <td style="padding:8px;border:1px solid #ddd">${d.firstName} ${d.lastName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td>
              <td style="padding:8px;border:1px solid #ddd">${d.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td>
              <td style="padding:8px;border:1px solid #ddd">${d.phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Move From</td>
              <td style="padding:8px;border:1px solid #ddd">${d.moveFrom} (${d.fromAccess})</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Move To</td>
              <td style="padding:8px;border:1px solid #ddd">${d.moveTo} (${d.toAccess})</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Move Date</td>
              <td style="padding:8px;border:1px solid #ddd">${d.moveDate}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Move Size</td>
              <td style="padding:8px;border:1px solid #ddd">${d.moveSize} sq ft</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Move Type</td>
              <td style="padding:8px;border:1px solid #ddd">${d.moveType}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Pickup Time</td>
              <td style="padding:8px;border:1px solid #ddd">${d.pickupTime}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">In-Person Quote</td>
              <td style="padding:8px;border:1px solid #ddd">${d.inPersonQuote}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Heard From</td>
              <td style="padding:8px;border:1px solid #ddd">${d.heardFrom}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Notes</td>
              <td style="padding:8px;border:1px solid #ddd">${d.notes || '—'}</td></tr>
        </table>
      `,
    })

    // Send confirmation email to the client
    await transporter.sendMail({
      from: 'Parsley Moving <info@parsleymoving.com>',
      to: d.email,
      subject: 'We received your quote request — Parsley Moving',
      html: `
        <p>Hi ${d.firstName},</p>
        <p>Thank you for reaching out to <strong>Parsley Moving</strong>!</p>
        <p>We've received your quote request for a move on <strong>${d.moveDate}</strong>
        from <strong>${d.moveFrom}</strong> to <strong>${d.moveTo}</strong>.</p>
        <p>Our team will review your request and get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>Parsley Moving Team<br/>
        <a href="mailto:info@parsleymoving.com">info@parsleymoving.com</a></p>
      `,
    })
  }
)

// ───── callRequests — send email on new document ─────
exports.onNewCallRequest = onDocumentCreated(
  { document: 'callRequests/{id}', secrets: [EMAIL_PASS] },
  async (event) => {
    const d = event.data.data()
    const transporter = createTransporter(EMAIL_PASS.value())

    // Notify the team with caller details
    await transporter.sendMail({
      from: 'Parsley Moving <info@parsleymoving.com>',
      to: 'info@parsleymoving.com',
      subject: `📞 New Call Request — ${d.name}`,
      html: `
        <h2>New Call Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td>
              <td style="padding:8px;border:1px solid #ddd">${d.name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td>
              <td style="padding:8px;border:1px solid #ddd">${d.phone}</td></tr>
        </table>
      `,
    })
  }
)