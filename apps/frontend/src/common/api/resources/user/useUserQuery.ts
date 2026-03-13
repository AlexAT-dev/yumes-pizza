import type { SignInForm, SignUpForm } from '@hooks/form'
import type { User, LoginResponse, RegistrationResponse } from '@models/user'
import { clearAll } from '@stores/features/orderSlice'
import { logoutUser, setUserData } from '@stores/features/userSlice'
import { useStoreDispatch } from '@stores/store'
import { useEffect } from 'react'
import { userApi } from '.'

export const STORAGE_KEY_USER = 'user_storage'

type ApiResponse<T> = { data: T | null; status: number }

type SafeApiResponse<T> = { data: T; status: number }

const registration = async (
  user: SignUpForm,
): Promise<SafeApiResponse<RegistrationResponse>> => {
  const result: ApiResponse<RegistrationResponse> =
    await userApi.registrationUser(user)
  const safeData: RegistrationResponse =
    result.data ?? { message: '', success: false }
  return { ...result, data: safeData }
}

const useUserQuery = () => {
  const dispatch = useStoreDispatch()

  useEffect(() => {
    const localUser = localStorage.getItem(STORAGE_KEY_USER)

    if (localUser) {
      try {
        const user = JSON.parse(localUser) as User

        dispatch(setUserData({ user }))
      } catch {}
    }
  }, [])

  const login = async (
    user: SignInForm,
  ): Promise<SafeApiResponse<LoginResponse>> => {
    const result: ApiResponse<LoginResponse> = await userApi.loginUser(user)
    const safeData: LoginResponse = result.data ?? { message: '', success: false }

    if (safeData.user) {
      updateUser(safeData.user)
    }

    return { ...result, data: safeData }
  }

  const updateUser = (user: User) => {
    dispatch(setUserData({ user }))
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user))
  }

  const logout = () => {
    dispatch(logoutUser())
    dispatch(clearAll())
    localStorage.removeItem(STORAGE_KEY_USER)
  }

  return { registration, login, logout, updateUser }
}

export default useUserQuery
