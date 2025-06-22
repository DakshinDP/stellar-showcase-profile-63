
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root")!;
rootElement.className = "min-h-screen transition-colors duration-300";

createRoot(rootElement).render(<App />);
