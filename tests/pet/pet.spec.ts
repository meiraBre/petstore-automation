import {test, expect} from "@playwright/test";

test.describe('Validação de consulta de pets por status e por id', () => {
test.describe('Cenários - Busca pets por status', () => {
test('Lista pets disponíveis', async ({ request }) => {
    const response = await request.get('pet/findByStatus', {
    params:{
        status: 'available'
    }
    });
    expect(response.status()).toBe(200);
});
test('Lista pets vendidos', async ({ request }) => {
    const response = await request.get('pet/findByStatus', {
        params: {
            status: 'sold' 
        }
    })
    expect(response.status()).toBe(200);
});
});

test.describe('Cenários - Busca pet por id', () => {
test('Busca pet por id válido', async ({ request }) => {
    const response = await request.get('pet/646', {
    });
    console.log(response.url());
    expect(response.status()).toBe(200);
});
test('Busca pet por id inválido', async ({request}) => {
    const response = await request.get('pet/1', { 
    });
    console.log(response.url());
    expect(response.status()).toBe(404);
});
});
})

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
