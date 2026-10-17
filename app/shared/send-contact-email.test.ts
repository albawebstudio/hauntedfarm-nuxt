import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { sendContactEmail } from './send-contact-email.ts'

describe('sendContactEmail', () => {
  it('returns an error when Resend is not configured', async () => {
    const result = await sendContactEmail('', '', { name: 'Test' })

    assert.equal(result.success, false)
    if (!result.success) {
      assert.match(result.message, /not configured/i)
    }
  })

})
