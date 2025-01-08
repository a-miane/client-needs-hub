import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { FeatureCard } from "@/components/FeatureCard";
import { PlusCircle, ListChecks } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Gestion des Besoins Clients" 
        description="Plateforme de gestion des besoins clients pour votre ESN"
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Saisie nouveau besoin"
            description="Créer une nouvelle demande client"
            icon={PlusCircle}
            onClick={() => navigate("/nouveau-besoin")}
          />
          <FeatureCard
            title="Suivi des besoins"
            description="Consulter et gérer les besoins en cours"
            icon={ListChecks}
            onClick={() => navigate("/suivi-besoins")}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;