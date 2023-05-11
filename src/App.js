import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import LightMap from './scenes/lightmap/LightMap';
import Team from "./scenes/team";
import Form from "./scenes/form";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar isSidebar={isSidebar} />
          <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<LightMap />} />
              <Route path="/team" element={<Team />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} /> 
            </Routes>
          </main>
        </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

