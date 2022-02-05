import React, { useState } from "react";

// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements.
// TODO: Add the required submit and change handlers

function RecipeCreate({addRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({...initialFormState})

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({...initialFormState})
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
               <input
                id="name"
                name="name"
                type="text"
                required={true}
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </td>
            <td>
               <input
                id="cuisine"
                name="cuisine"
                type="text"
                required={true}
                value={formData.cuisine}
                onChange={handleChange}
                placeholder="Cuisine"
              />
            </td>
            <td>
               <input
                id="photo"
                name="photo"
                type="url"
                required={true}
                value={formData.photo}
                onChange={handleChange}
                placeholder="URL"
              />
            </td>
            <td>
               <textarea
                id="ingredients"
                name="ingredients"
                required={true}
                rows={2}
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
              />
            </td>
            <td>
               <textarea
                id="preparation"
                name="preparation"
                required={true}
                rows={2}
                value={formData.preparation}
                onChange={handleChange}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
export default RecipeCreate;
