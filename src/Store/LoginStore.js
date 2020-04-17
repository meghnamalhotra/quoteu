import { observable, action } from "mobx"
class Loginstore {
    @observable userToken =""
    tokenFunction = null
    @action setUserToken(token) {
        this.userToken = token;
    }

    setTokenFunction(tokenFunction){
        this.tokenFunction = tokenFunction
    }
}

export default LoginStore = new Loginstore();