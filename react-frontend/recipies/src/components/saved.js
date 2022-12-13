import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
 
const Recipe = (props) => (
 <tr>
   <td>{props.recipe.title}</td>
   <td>{props.recipe.ingredients}</td>
   <td>{props.recipe.directions}</td>
   {/* <td> */}
     {/* <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button> */}
   {/* </td> */}
 </tr>
);
 
export default function RecipeList() {
 const [recipe, setRecipe] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecipes() {
     const response = await fetch(`http://localhost:3002/recipes`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const recipes = await response.json()
     console.log(response.json)
     setRecipe(recipes)
   }
   getRecipes()
   return
 }, [recipe.length])
 
//  // This method will delete a record
//  async function deleteRecord(id) {
//    await fetch(`http://localhost:3002/${id}`, {
//      method: "DELETE"
//    });
 
//    const newRecords = records.filter((el) => el._id !== id);
//    setRecords(newRecords);
//  }
 
 // This method will map out the records on the table
 function recipeList() {
   return recipe.map((recipe) => {
     console.log(recipe)
     return (
      <Recipe
      recipe={recipe}
      key={recipe._id}
    />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Recipe List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Title</th>
           <th>Ingredients</th>
           <th>Directions</th>
         </tr>
       </thead>
       <tbody>{recipeList()}</tbody>
     </table>
   </div>
 );
}