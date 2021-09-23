import { useState } from "react";

export default function Expenses() {
  const [, setValue] = useState({});

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();

    // const newExpense = {
    //   userId: 3, //coger del token,
    //   ammount: e.target[1].input["Importe"],
    // };
    // console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleAddExpense}>
        <fieldset>
          <legend>Nuevo Gasto</legend>
          <div>
            <label>
              Importe:
              <input
                type="decimal"
                name="Importe"
                required="true"
                autofocus="true"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Categoría:
              <select name="Categoria" onChange={handleChange}>
                <option value="Comida">Comida</option>
                <option value="Gasolina">Gasolina</option>
                <option value="Ferreteria">Ferreteria</option>
                <option value="Otros">Otros</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Fecha:
              <input type="date" name="Fecha" onChange={handleChange} />
            </label>
          </div>

          <div>
            <label>
              Obra:
              <input type="text" name="Obra" onChange={handleChange} />
            </label>
          </div>
        </fieldset>

        <div>
          <label>
            Comentarios:
            <textarea name="Comentarios" onChange={handleChange} />
          </label>
        </div>

        <div>
          <input
            type="submit"
            value="Enviar"
            id="sub"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
