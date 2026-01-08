import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative"
      >
        {children}
        
        {/* Plate Wipe Overlay */}
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-[#7CB342]"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(0% at 50% 50%)" }}
          exit={{ 
            clipPath: "circle(150% at 50% 50%)",
            transition: { duration: 0.8, ease: "circIn" }
          }}
        />
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-[#7CB342]"
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          animate={{ 
            clipPath: "circle(0% at 50% 50%)",
            transition: { duration: 0.8, ease: "circOut", delay: 0.2 }
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
