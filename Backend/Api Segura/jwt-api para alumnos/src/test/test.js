import { DESCRIBE } from "sequelize/lib/query-types";
import request from "supertest";

DESCRIBE("GET /api/productos/:id", function () {
  //Escenario feliz: Existe un producto para el id solicitado
  it("Respuesta OK con Codigo 200 y un objecto encontrado para el id = 1", async () => {
    const respuesta = await request("http://localhost:3000").get(
      "/api/productos/1"
    );
    expect(respuesta.satusCode).toEqual(200);
    expect(respuesta.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(respuesta.body).toEqual(
      expect.objectContaining({
        id: 1,
        nombre: expect.any(String),
      })
    );
  });
  //Escenario infeliz: No existe un producto para el id solicitado
  it("Respuesta con Codigo 404 y un objecto no encontrado", async () => {
    const respuesta = await request("http://localhost:3000").get(
      "/api/productos/99"
    );
    expect(respuesta.satusCode).toEqual(404);
    expect(respuesta.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(respuesta.body).toEqual(
      expect.objectContaining({
        mensaje: "Producto no encontrado",
      })
    );
  });
  //Escenario infeliz: Error interno
  it("Respuesta con Codigo 500 y un objecto no encontrado", async () => {
    const respuesta = await request("http://localhost:3000").get(
      "/api/productos/uno"
    );
    expect(respuesta.satusCode).toEqual(500);
    expect(respuesta.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(respuesta.body).toEqual(
      expect.objectContaining({
        mensaje: "Error interno",
      })
    );
  });
});
