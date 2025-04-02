import { AuthDataRp } from "types/auth";
import { Effect, Reducer } from '@umijs/max';
import { login } from "@/services/auth/auth";
import { BaseAuthRp } from "types/reponse";
export interface AuthState {
    authData: AuthDataRp,
    loading: boolean
}
export interface AuthModel {
    namespace: 'auth',
    state: AuthState;
    reducers: {
        setAuthData: Reducer<AuthModel>;
        setLoading: Reducer<AuthModel>;
    },
    effects: {
        login: Effect;
    }
}
const useAuth: AuthModel = {
    namespace: 'auth',
    state: {
        authData: {},
        loading: false
    },
    reducers: {
        setAuthData(state, action) {
            return { ...state, authData: action.payload };
        },
        setLoading(state, action) {
            return { ...state, loading: action.payload }
        }
    },
    effects: {
        *login({ payload, callback }, { call, put }): Generator<any, void, any> {
            try {
                yield put({ type: 'setLoading', payload: true })
                const data: BaseAuthRp = yield login(payload.dataLogin);
                yield put({ type: 'setAuthData', payload: data.session })
                callback({ isSuccess: true, message: "Đăng nhập thành công" })
            } catch (error: any) {
                callback({ isSuccess: false, message: error.message })
            } finally {
                yield put({ type: 'setLoading', payload: false })
            }
        }
    }
}
export default useAuth;
