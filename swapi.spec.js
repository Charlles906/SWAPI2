const request = require('supertest');

describe('Testes da API SWAPI', () => {
  const baseURL = 'https://swapi.dev/api';

  it('deve recuperar o primeiro planeta', async () => {
    const response = await request(baseURL).get('/planets/1/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBeDefined();
  });

  it('deve recuperar a primeira nave', async () => {
    const response = await request(baseURL).get('/starships/2/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBeDefined();
  });

  it('deve recuperar o primeiro filme', async () => {
    const response = await request(baseURL).get('/films/1/');
    expect(response.status).toBe(200);
    expect(response.body.title).toBeDefined();
  });

  it('deve recuperar a primeira espécie', async () => {
    const response = await request(baseURL).get('/species/1/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBeDefined();
  });

  it('deve recuperar o primeiro veículo', async () => {
    const response = await request(baseURL).get('/vehicles/4/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBeDefined();
  });

  it('deve retornar 404 para um recurso inexistente', async () => {
    const response = await request(baseURL).get('/heroes/');
    expect(response.status).toBe(404);
  });

  it('deve recuperar o recurso de pessoas', async () => {
    const response = await request(baseURL).get('/people/1/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBeDefined();
  });

  it('deve lidar com uma solicitação com uma página grande para planetas', async () => {
    const response = await request(baseURL).get('/planets/?page=1');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeDefined();
  });

  it('deve recuperar várias naves com paginação', async () => {
    const response = await request(baseURL).get('/starships/?page=2');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeDefined();
  });

  it('deve validar que o recurso de filmes contém campos específicos', async () => {
    const response = await request(baseURL).get('/films/1/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('opening_crawl');
  });
});
