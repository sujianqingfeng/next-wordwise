'use server'

import { fetchUpdatePwdApi, fetchUpdateTranslationProfileApi } from '@/api'
import type { ChangePwdFormValues, ProfileResp } from '@/api/types'

export async function updateTranslation(form: ProfileResp) {
  await fetchUpdateTranslationProfileApi(form)
}

export async function changePwd(form: ChangePwdFormValues) {
  await fetchUpdatePwdApi(form)
}
