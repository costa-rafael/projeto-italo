import { data } from "autoprefixer";
import { date } from "quasar";
import { ref } from "vue";
import useSupabase from "src/boot/supabase";

const user = ref(null);

export default function useAuthUser() {
  const { supabase } = useSupabase()


  //acesso com email e senha
  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signIn({ email, password })
    console.log('login')
    if (error) throw error
    return user
  };


  //apenas quando usarmos acesso com google, gitHub, faceboo, instagram etc
  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signIn({ provider });
    if (error) throw error;
    return user;
  };

  // se o usuario estiver logado, aqui derrubamos ele;
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }


  /**
   * Check para saber se o usuario está logado ou não
  */
  const isLoggedIn = () => {
    return !!user.value;
  };

  //aqui cadastramos novos usuarios
  const register = async ({ email, password, ...meta }) => {
    const { user, error} = await supabase.auth.signUp(
      { email, password },
      {
        data: meta,
        redirectTo:"${window.location.origin}/me?fromEmail=registrationConfirmation",
      }
    )
    if (error) throw error
    return user
  }

  //Quando tiver que atualizar informacoes no futuro
  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data)
    if (error) throw error
    return user
  }


  /**
   * Enviar ao usuário um e-mail para redefinir sua senha
   * ou seja, o suporte esqueceu a senha?
  */
  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.api.resetPasswordForEmail(email)
    if (error) throw error
    return user
  }

  const resetPassword = async (accessToken, newPassword) => {
    const { user, error } = await supabase.auth.api.updateUser(
      accessToken,
      {password: newPassword}
    )
    if (error) throw error
    return user
  }

  return {
    user,
    login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail
  }
}
