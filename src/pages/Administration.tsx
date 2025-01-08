import { PageHeader } from "@/components/PageHeader";
import { PageNavigation } from "@/components/PageNavigation";
import { AgencySection } from "@/components/admin/AgencySection";
import { CommercialSection } from "@/components/admin/CommercialSection";
import { ReferenceDataSection } from "@/components/admin/ReferenceDataSection";

const Administration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Administration" 
        description="Gestion des données de référence"
      />
      
      <main className="container mx-auto px-4 py-8">
        <PageNavigation />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AgencySection />
          <CommercialSection agencies={[]} />
          <ReferenceDataSection
            title="Profils"
            placeholder="Nouveau profil"
          />
          <ReferenceDataSection
            title="Technologies"
            placeholder="Nouvelle technologie"
          />
          <ReferenceDataSection
            title="Lieux"
            placeholder="Nouveau lieu"
          />
          <ReferenceDataSection
            title="Budgets"
            placeholder="Nouveau budget"
          />
          <ReferenceDataSection
            title="Rythmes de télétravail"
            placeholder="Nouveau rythme"
          />
        </div>
      </main>
    </div>
  );
};

export default Administration;