import { supabase } from '@/config/supabaseConfig';
import { AuthDataRq } from 'types/auth';
import { BaseAuthRp } from 'types/reponse';
export async function login(params: AuthDataRq): Promise<BaseAuthRp> {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: params.email || '',
        password: params.password || '',
    });
    if (error) {
        throw new Error(error.message);
    }
    return data as BaseAuthRp;
};
