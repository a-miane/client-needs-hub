import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";

type NeedEditFormProps = {
  need: any;
  onSave: (updatedNeed: any) => void;
  onCancel: () => void;
};

export const NeedEditForm = ({ need, onSave, onCancel }: NeedEditFormProps) => {
  const [formData, setFormData] = useState(need);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
    toast.success("Besoin mis à jour avec succès");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Commercial</label>
        <Input
          value={formData.commercial}
          onChange={(e) => setFormData({ ...formData, commercial: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Profil</label>
        <Input
          value={formData.profile}
          onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <Textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date de début</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.startDate ? format(formData.startDate, "dd MMMM yyyy", { locale: fr }) : "Sélectionner une date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={formData.startDate}
              onSelect={(date) => setFormData({ ...formData, startDate: date })}
              locale={fr}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Budget</label>
        <Input
          type="number"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date de décision</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.decisionDate ? format(formData.decisionDate, "dd MMMM yyyy", { locale: fr }) : "Sélectionner une date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={formData.decisionDate}
              onSelect={(date) => setFormData({ ...formData, decisionDate: date })}
              locale={fr}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Lieu</label>
        <Input
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Télétravail</label>
        <Input
          value={formData.remoteWork}
          onChange={(e) => setFormData({ ...formData, remoteWork: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Technologie principale 1</label>
        <Input
          value={formData.mainTechnology1}
          onChange={(e) => setFormData({ ...formData, mainTechnology1: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Technologie principale 2</label>
        <Input
          value={formData.mainTechnology2}
          onChange={(e) => setFormData({ ...formData, mainTechnology2: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Technologies annexes</label>
        <Input
          value={formData.secondaryTechnologies}
          onChange={(e) => setFormData({ ...formData, secondaryTechnologies: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Concurrence</label>
        <Textarea
          value={formData.competition}
          onChange={(e) => setFormData({ ...formData, competition: e.target.value })}
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit">Enregistrer</Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Annuler
        </Button>
      </div>
    </form>
  );
};