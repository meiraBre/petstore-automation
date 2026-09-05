import { APIRequestContext  } from "@playwright/test"; 

export class PetAPI {
    constructor(private request: APIRequestContext) {  
    }
    async getPetRequest(){
        const response = await this.request.get('pet/findByStatus', {
            params:{
                status: 'available'
            }
        });
        return response;
    }
    async getSoldPetRequest(){
        const response = await this.request.get('pet/findByStatus', {
            params: {
                status: 'sold' 
            }
        })
    }
}
