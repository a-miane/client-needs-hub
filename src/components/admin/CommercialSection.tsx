import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

type Commercial = {
  id: string;
  name: string;
  agencyId: string;
};

type Agency = {
  id: string;
  name: string;
};

interface CommercialSectionProps {
  agencies: Agency[];
}

export function CommercialSection({ agencies }: CommercialSectionProps) {
  const [commercials, setCommercials] = useState<Commercial[]>([]);
  const [newCommercial, setNewCommercial] = useState({ name: "", agencyId: "" });

  const handleAddCommercial = () => {
    if (newCommercial.name.trim() && newCommercial.agencyId) {
      setCommercials([...commercials, { id: Date.now().toString(), ...newCommercial }]);
      setNewCommercial({ name: "", agencyId: "" });
      toast.success("Commercial ajouté avec succès");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Commerciaux</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Nom du commercial"
            value={newCommercial.name}
            onChange={(e) => setNewCommercial({ ...newCommercial, name: e.target.value })}
          />
          <select
            className="w-full p-2 border rounded"
            value={newCommercial.agencyId}
            onChange={(e) => setNewCommercial({ ...newCommercial, agencyId: e.target.value })}
          >
            <option value="">Sélectionner une agence</option>
            {agencies.map((agency) => (
              <option key={agency.id} value={agency.id}>{agency.name}</option>
            ))}
          </select>
          <Button onClick={handleAddCommercial} className="w-full">Ajouter</Button>
        </div>
        <ul className="space-y-2">
          {commercials.map((commercial) => (
            <li key={commercial.id} className="p-2 bg-gray-100 rounded">
              {commercial.name} - {agencies.find(a => a.id === commercial.agencyId)?.name}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}