import { AuthDataRp } from "types/auth";
import { Effect, Reducer } from '@umijs/max';
import { completeProfile, getProfile, login, logOut, uploadFile } from "@/services/auth/auth";
import { BaseAuthRp } from "types/reponse";
export interface AuthState {
    authData: AuthDataRp,
    loading: boolean,
    isLogin: boolean,
    isCompleteProfile: boolean,
    isCheckProfile: boolean
}
export interface AuthModel {
    namespace: 'auth',
    state: AuthState;
    reducers: {
        setAuthData: Reducer<AuthModel>;
        setLoading: Reducer<AuthModel>;
        setIsCompleteProfile: Reducer<AuthModel>;
        clearData: Reducer<AuthModel>
    },
    effects: {
        login: Effect;
        checkCompleteProfile: Effect;
        logout: Effect;
        completeProfile: Effect;
        checkCompleteProfileWhenReload: Effect;
        reloadPage: Effect;
    }
}
const useAuth: AuthModel = {
    namespace: 'auth',
    state: {
        authData: {},
        loading: false,
        isLogin: false,
        isCompleteProfile: false,
        isCheckProfile: false
    },
    reducers: {
        setAuthData(state, action) {
            return { ...state, authData: action.payload, isLogin: true };
        },
        setLoading(state, action) {
            return { ...state, loading: action.payload }
        },
        setIsCompleteProfile(state, action) {
            console.log(action)
            return { ...state, isCompleteProfile: action.payload, isCheckProfile: true }
        },
        clearData(state, action) {
            return { authData: {}, isLogin: false, isCheckProfile: false, loading: false, isCompleteProfile: false }
        }
    },
    effects: {
        *login({ payload, callback }, { call, put }): Generator<any, void, any> {
            try {
                yield put({ type: 'setLoading', payload: true })
                const data: BaseAuthRp = yield login(payload.dataLogin);
                yield put({ type: 'setAuthData', payload: data.session })
                yield put({ type: 'checkCompleteProfile', payload: data.session.user?.id })
                callback({ isSuccess: true, message: "Đăng nhập thành công" })
            } catch (error: any) {
                callback({ isSuccess: false, message: error.message })
            } finally {
                yield put({ type: 'setLoading', payload: false })
            }
        },
        *checkCompleteProfile({ payload, callback }, { call, put }): Generator<any, void, any> {
            try {
                yield put({ type: 'setLoading', payload: true })
                const data = yield getProfile(payload)
                if (data)
                    yield put({ type: 'setIsCompleteProfile', payload: true })
                else
                    yield put({ type: 'setIsCompleteProfile', payload: false })
                callback
            } catch (error: any) {
                console.log(error)
            } finally {
                yield put({ type: 'setLoading', payload: false })
            }
        },
        *checkCompleteProfileWhenReload({ payload, callback }, { call, put }): Generator<any, void, any> {
            try {
                yield put({ type: 'setLoading', payload: true })
                const data = yield getProfile(payload)
                console.log("first", data)
                if (data)
                    yield put({ type: 'setIsCompleteProfile', payload: true })
                else
                    yield put({ type: 'setIsCompleteProfile', payload: false })
                callback
            } catch (error: any) {
                console.log(error)
            } finally {
                yield put({ type: 'setLoading', payload: false })
            }
        },
        *reloadPage({ payload, callback }, { call, put }): Generator<any, void, any> {
            try {
                yield put({ type: 'setAuthData', payload: payload.user })
                callback(payload.user.user.id)
            } catch (error) {

            }
        },
        *logout({ payload, callback }, { call, put }): Generator<any, void, any> {
            try {
                const isLogoutSuccess = yield logOut();
                if (isLogoutSuccess) {
                    callback({ isSuccess: true, message: 'Đăng xuất thành công' })
                    localStorage.clear()
                    yield put({ type: 'clearData' })
                } else {
                    callback({ isSuccess: false, message: 'Xảy ra lỗi khi thực hiện đăng xuất' })
                }
            } catch (error) {

            }
        },
        *completeProfile({ payload, callback }, { call, put }): Generator<any, void, any> {
            try {
                const urlAvatar = yield call(uploadFile, payload.userId, payload.file)
                const response = yield call(completeProfile, { name: payload.name, avatar: urlAvatar, id: payload.userId, is_online: true })
                console.log(response)
                if (response === true) {
                    yield put({ type: 'setIsCompleteProfile', payload: true })
                }
                callback({ isSuccess: true, message: "Hoàn thiện thông tin thành công!!!" })
            } catch (error: any) {
                callback({ isSuccess: false, message: error.message })
            }
        }
    }
}
export default useAuth;
