import { supabase } from '@/config/supabaseConfig';
import { isEmptyObject } from '@/utils/format';
import { AuthDataRq } from 'types/auth';
import { BaseAuthRp } from 'types/reponse';
import { Profile } from 'types/user';
import { v4 as uuidv4 } from 'uuid';
export async function login(params: AuthDataRq): Promise<BaseAuthRp> {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: params.email || '',
        password: params.password || '',
    });
    if (error) {
        throw new Error(error.message);
    }
    return data as BaseAuthRp;
}
export async function getProfile(userId: string) {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId);
    if (error) {
        throw new Error(error.message);
    }

    return data.length > 0
}
export async function getProfileByUserId(userId: string) {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .limit(1)
        .eq('id', userId);
    if (error) {
        throw new Error(error.message);
    }
    return data
}
export async function logOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        throw new Error(error.message);
    }
    return true;
}
export async function completeProfile(completeData: Profile) {
    const { data, error } = await supabase
        .from('users')
        .upsert([completeData]);
    if (error)
        throw new Error(error.message)
    return true
}
export async function uploadFile(userId: string, file: File) {
    try {
        const id = uuidv4();
        console.log(id, file);
        const filePath = `${userId}/${id}-${file.name}`;
        console.log(filePath);
        const { data, error } = await supabase.storage
            .from('avatar')
            .upload(filePath, file);
        if (error) {
            throw error;
        }
        const publicUrl = supabase.storage.from('avatar').getPublicUrl(filePath)
            .data.publicUrl;
        return publicUrl;
    } catch (error) {
        console.log(error);
    }
}
