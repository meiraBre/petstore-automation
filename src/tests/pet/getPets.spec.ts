import {test, expect} from "@playwright/test";
import {PetAPI} from '../../api/petApi.spec';

test.describe('Cenários - Validação de busca de pets da loja', () => {

test('Validação da listagem de pets disponíveis', async ({ request }) => {
    const petApi = new PetAPI(request);
    const response = await petApi.getPetRequest();
    expect(response.status()).toBe(200);
});

test('Lista pets vendidos', async ({ request }) => {
    const petApi = new PetAPI(request);
    const response = await petApi.getSoldPetRequest();
    expect(response.status()).toBe(200);
    })
});

test('Validação de busca de pet por id válido', async ({ request }) => {
    const response = await request.get('pet/646', {
    });
    console.log(response.url());
    expect(response.status()).toBe(200);
});















test.describe('Manipulação de dados dos pets da loja', () => {
    test('Adição de um novo pet na loja', async ({ request }) => {
        const response = await request.post('pet', {
            data: {
                "id": 10,
                "category": {
                    "id": 120,
                    "name": "Dogoinho"
                },
                "name": "doggie",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 20,
                        "name": "teste"
                    }
                ],
                "status": "available"
            }
        });
        console.log(response.url());
        expect(response.status()).toBe(200);
    });
    test('Atualização de um pet disponível na loja', async ({request}) => {
        const response = await request.put('pet', {
           data: {
                "id": 10,
                "category": {
                    "id": 120,
                    "name": "Doguinho 2.0"
                },
                "name": "doggie",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 20,
                        "name": "teste"
                    }
                ],
                "status": "available"
            } 
        });
        expect(response.status()).toBe(200);
    });

    test('Exclusão de um pet pelo id', async({request}) => {
        const response = await request.delete('pet/10', {
        });
        expect(response.status()).toBe(200);
    })
});
