import { supabase } from '@/config/supabaseConfig';
import { HistoryConversation, Message, Profile } from 'types/user';
export async function searchUserByName(name: string): Promise<Profile[]> {
    console.log(name)
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .filter('search_vector', 'plfts', name);
    if (error) {
        throw new Error(error.message);
    }
    return data as Profile[];
}
export async function getListHistoryConversation(userId: string): Promise<HistoryConversation[]> {
    const { data, error } = await supabase
        .rpc("get_conversation_users_except_self", { user_id_param: userId });
    if (error) {
        throw new Error(error.message);
    }
    return data as HistoryConversation[];
}
export async function getInfoUserInConversation(userId: string, selfId: string): Promise<HistoryConversation> {
    console.log(userId, selfId)
    const { data, error } = await supabase
    .rpc("get_conversation_users_by_user_id_self_id", {
        self_id_param: selfId,
        user_id_param: userId
    });

    if (error) {
        console.error("RPC Error:", error);
        throw new Error(error.message);
    }

    return data as HistoryConversation;
}
export async function createConversation(userId: string, selfId: string): Promise<string> {
    console.log(userId, selfId)
    const { data, error } = await supabase.rpc("create_conversation_and_add_users", {
        user_ids: [
            selfId,
            userId
        ]
    });
    if (error) {
        console.error("RPC Error:", error);
        throw new Error(error.message);
    }

    return data as string;
}
export async function sendMessage(conversationId: string, senderId: string, message: string) {
    console.log("first")
    const { data, error } = await supabase
        .from('messages')
        .insert([
            {
                conversation_id: conversationId,
                sender_id: senderId,
                message: message
            }
        ])
    if (error) {
        console.error("Supabase Error:", error);
        throw new Error(error.message);
    }

    return data;
}
export async function getHistoryMessage(conversation_id: string): Promise<Message[]> {
    const { data, error } = await supabase
        .from('messages')
        .select("*")
        .eq('conversation_id', conversation_id)

    if (error) {
        console.error("Supabase Error:", error);
        throw new Error(error.message);
    }

    return data;
}

