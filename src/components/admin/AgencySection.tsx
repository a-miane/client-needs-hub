import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

type Agency = {
  id: string;
  name: string;
};

export function AgencySection() {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [newAgency, setNewAgency] = useState("");

  const handleAddAgency = () => {
    if (newAgency.trim()) {
      setAgencies([...agencies, { id: Date.now().toString(), name: newAgency }]);
      setNewAgency("");
      toast.success("Agence ajoutée avec succès");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Agences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Nouvelle agence"
            value={newAgency}
            onChange={(e) => setNewAgency(e.target.value)}
          />
          <Button onClick={handleAddAgency}>Ajouter</Button>
        </div>
        <ul className="space-y-2">
          {agencies.map((agency) => (
            <li key={agency.id} className="p-2 bg-gray-100 rounded">{agency.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}