import { useEffect } from "react";
import "./App.css";
import NavigationRoutes from "./components/NavigationRoutes";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <NavigationRoutes />
      </MainLayout>
    </div>
  );
}

export default App;

// async function movies() {
//   const url = "https://movies-api14.p.rapidapi.com/movie/868759";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "c11de09264msh7db23a77cd0d361p1ca72bjsn6ae513b8f8cd",
//       "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
