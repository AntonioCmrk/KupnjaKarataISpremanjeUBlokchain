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
//   const url = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page=10";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "c11de09264msh7db23a77cd0d361p1ca72bjsn6ae513b8f8cd",
//       "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
