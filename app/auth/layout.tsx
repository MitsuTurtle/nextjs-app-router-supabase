import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next/headers'
import type { Database } from '../../database.types'
import SupabaseListener from '../components/supabase-listener'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <>
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </>
  )
}
