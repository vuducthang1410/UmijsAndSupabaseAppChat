import { Effect, Reducer, Subscription } from '@umijs/max';
import { HistoryConversation, Message, Profile } from "types/user";
import { createConversation, getInfoUserInConversation, getListHistoryConversation, searchUserByName, sendMessage } from '@/services/conversation/user';
import { isEmptyObject } from "@/utils/format";
export interface ConversationState {
    loading: boolean,
    profileSearch: Profile[],
    historyConversation: HistoryConversation[],
    userIsFocus: HistoryConversation
    historyMessage: Message[]
}
export interface ConversationModel {
    namespace: 'conversation',
    state: ConversationState;
    reducers: {
        setProfileSearch: Reducer<ConversationModel>;
        setHistoryConversation: Reducer<ConversationModel>;
        setUserIsFocus: Reducer<ConversationModel>;
        setConversationId: Reducer<ConversationModel>;
        clearUserIsFocus: Reducer<ConversationModel>;
    },
    effects: {
        searchUserByName: Effect;
        getListHistoryConversation: Effect;
        getInfoUser: Effect;
        sendMessage: Effect;
    },
    subscriptions: {
        setup: Subscription;
    };
}
const useConversation: ConversationModel = {
    namespace: 'conversation',
    state: {
        loading: false,
        profileSearch: [],
        historyConversation: [],
        historyMessage: [],
        userIsFocus: {
            avatar: '', name: '', conversation_id: '', is_online: false, user_id: ''
        }
    },
    reducers: {
        setProfileSearch(state, action) {
            return { ...state, profileSearch: action.payload }
        },
        setHistoryConversation(state, action) {
            return { ...state, historyConversation: action.payload }
        },
        setUserIsFocus(state, action) {
            console.log(action)
            return {
                ...state,
                userIsFocus: {
                    avatar: action.payload.avatar,
                    name: action.payload.name,
                    conversation_id: action.payload.conversation_id, // đảm bảo field khác nhau
                    is_online: action.payload.is_online,
                    user_id: action.payload.user_id
                }
            }
        },
        clearUserIsFocus(state, action) {
            console.log(action)
            return {
                ...state,
                userIsFocus: {}
            }
        },

        setConversationId(state, action) {
            return {
                ...state,
                userIsFocus: {
                    ...state.userIsFocus,
                    conversation_id: action.payload
                }
            };
        }

    },
    effects: {
        *searchUserByName({ payload, callback }, { call, put }): Generator<any, void, any> {
            try {
                const response = yield call(searchUserByName, payload);
                yield put({ type: 'setProfileSearch', payload: response })
            } catch (error) {

            }
        },
        *getListHistoryConversation({ payload, callback }, { call, put }): Generator<any, void, any> {
            try {
                console.log(payload)
                const response = yield call(getListHistoryConversation, payload)
                yield put({ type: 'setHistoryConversation', payload: response })
            } catch (error) {

            }
        },
        *getInfoUser({ payload, callback }, { call, put, select }): Generator<any, void, any> {
            try {
                const response = yield call(getInfoUserInConversation, payload.userId, payload.selfId)
                if (!isEmptyObject(response)) {
                    yield put({
                        type: 'setUserIsFocus', payload: {
                            avatar: payload.avatar,
                            name: payload.name,
                            is_online: payload.is_online,
                            user_id: payload.userId,
                            conversation_id: response[0].conversation_id
                        }
                    })
                } else {
                    yield put({
                        type: 'setUserIsFocus', payload: {
                            avatar: payload.avatar,
                            name: payload.name,
                            is_online: payload.is_online,
                            user_id: payload.userId,
                            conversation_id: ''
                        }
                    })
                }
                const data = yield select((state: any) => state.conversation)
                console.log(data)
            } catch (error) {

            }
        },
        *sendMessage({ payload, callback }, { call, put, select }): Generator<any, void, any> {
            try {
                console.log("first")
                const { userIsFocus } = yield select((state: any) => state.conversation)
                const data = yield select((state: any) => state.conversation)
                const { authData } = yield select((state: any) => state.auth)
                console.log(userIsFocus)
                if (userIsFocus.conversation_id === "") {
                    const convertionId = yield call(createConversation, authData.user.id, userIsFocus.user_id)
                    yield put({ type: 'setConversationId', payload: convertionId })
                    const response = yield call(sendMessage, convertionId, authData.user.id, payload)
                    console.log(response)
                } else {
                    const response = yield call(sendMessage, userIsFocus.conversation_id, authData.user.id, payload)
                }
            } catch (error) {
                console.log(error)
            }
        }

    },
    subscriptions: {
        async setup({ dispatch, history }) {
        }
    }


}
export default useConversation;