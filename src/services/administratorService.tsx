import IUser from "../interfaces/IUser";
import _apiService from "./apiService";

class AdministratorService {
    private saveAdministrator = (user: any) =>
        localStorage.setItem("user", JSON.stringify(user));

    public getLoggedAdministratorData(){
        const userData = localStorage.getItem("user");
        return JSON.parse(userData || '{}') as IUser; 
    }

    public administratorAlreadyLogged() {
        var userAuthenticated = localStorage.getItem("user");

        if(userAuthenticated != null)
            return true;
    
        return false;
    }

    public logoutAdministrator = () =>
        localStorage.removeItem("user");

    public async loginAdministrator(username: String, password: String, remember: boolean)
    {
        try
        {
           const response = await _apiService.post('/v1/auth/administrator/login', {
                login: username,
                password: password
            });

            var user = response.data.data as IUser;
            user.remember = remember;
            this.saveAdministrator(user);

            return response.data;
        }
        catch(error: any)
        {
            return error?.response?.data;
        }
    }

    public async recoveryAdministratorPassword(email: String){
        try
        {
            const response = await _apiService.post('/v1/auth/administrator/recovery-password', {
                email: email
            });

            return response.data;
        }
        catch(error: any)
        {
            return error?.response?.data;
        }
    }
}

export default AdministratorService;