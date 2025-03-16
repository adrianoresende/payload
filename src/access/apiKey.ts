import type { AccessArgs } from 'payload'

export const accessApiKey = ({ req }: AccessArgs) => {
  const apiKey = req.headers.get('authorization')?.split(' ')[1]
  if (apiKey === process.env.PAYLOAD_API_KEY) {
    return true
  }
  return false
}
