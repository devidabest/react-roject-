import React from "react";  
import Card from "./Card";  
import CardContent from "./cardContent";  
import TrendingContent from "./TrendingContent";  // Import the new TrendingContent component


export default function RightSide() {  
  return (  
    
    <div className=" p-4 rounded-lg shadow-lg space-y-4 space-y-w-full border border-slate-700  bg-black flex flex-col">  
      <search />
      <Card  
        title="Cette offre expire bientôt !"  
        desc="Bénéficiez de 40 % de remise sur X Premium. Profitez du meilleur de X."  
        buttonText="Souscrire"  
      />  
      <CardContent  
        title="What's happening "  
      />  
      <CardContent  
        title="Who to follow"  
        desc=""  
        buttonText="En savoir plus"  
      />

      <TrendingContent />  {/* Add TrendingContent under the premium content */}
    </div>  
  );  
}
