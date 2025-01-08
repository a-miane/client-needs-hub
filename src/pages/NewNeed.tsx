import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";

const NewNeed = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [startDate, setStartDate] = useState<Date>();
  const [decisionDate, setDecisionDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Ici vous pourrez ajouter la logique pour sauvegarder les données
    console.log({
      commercial: formData.get("commercial"),
      profile: formData.get("profile"),
      description: formData.get("description"),
      startDate,
      budget: formData.get("budget"),
      decisionDate,
      competition: formData.get("competition"),
    });

    toast({
      title: "Besoin créé avec succès",
      description: "Le nouveau besoin a été enregistré",
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Nouveau Besoin" 
        description="Saisie d'un nouveau besoin client"
      />
      
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="commercial" className="block text-sm font-medium text-gray-700">
                Commercial *
              </label>
              <Input
                id="commercial"
                name="commercial"
                required
                className="mt-1"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="profile" className="block text-sm font-medium text-gray-700">
                Profil recherché *
              </label>
              <Input
                id="profile"
                name="profile"
                required
                className="mt-1"
                placeholder="Ex: Développeur Full Stack React/Node.js"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descriptif mission *
              </label>
              <Textarea
                id="description"
                name="description"
                required
                className="mt-1"
                placeholder="Décrivez la mission en détail"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date de début *
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal mt-1"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "dd MMMM yyyy", { locale: fr }) : "Sélectionner une date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    locale={fr}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                Budget *
              </label>
              <Input
                id="budget"
                name="budget"
                type="number"
                required
                className="mt-1"
                placeholder="Budget en €"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date de décision *
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal mt-1"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {decisionDate ? format(decisionDate, "dd MMMM yyyy", { locale: fr }) : "Sélectionner une date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={decisionDate}
                    onSelect={setDecisionDate}
                    locale={fr}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label htmlFor="competition" className="block text-sm font-medium text-gray-700">
                Concurrence *
              </label>
              <Textarea
                id="competition"
                name="competition"
                required
                className="mt-1"
                placeholder="Listez les concurrents connus sur ce besoin"
                rows={2}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="submit">
              Enregistrer le besoin
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate("/")}
            >
              Annuler
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default NewNeed;