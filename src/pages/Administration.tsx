import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

type Agency = {
  id: string;
  name: string;
};

type Commercial = {
  id: string;
  name: string;
  agencyId: string;
};

type Profile = {
  id: string;
  name: string;
};

type Technology = {
  id: string;
  name: string;
};

type Location = {
  id: string;
  name: string;
};

type Budget = {
  id: string;
  amount: string;
};

type RemoteWork = {
  id: string;
  type: string;
};

const Administration = () => {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [commercials, setCommercials] = useState<Commercial[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [remoteWorks, setRemoteWorks] = useState<RemoteWork[]>([]);

  const [newAgency, setNewAgency] = useState("");
  const [newCommercial, setNewCommercial] = useState({ name: "", agencyId: "" });
  const [newProfile, setNewProfile] = useState("");
  const [newTechnology, setNewTechnology] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newBudget, setNewBudget] = useState("");
  const [newRemoteWork, setNewRemoteWork] = useState("");

  const handleAddAgency = () => {
    if (newAgency.trim()) {
      setAgencies([...agencies, { id: Date.now().toString(), name: newAgency }]);
      setNewAgency("");
      toast.success("Agence ajoutée avec succès");
    }
  };

  const handleAddCommercial = () => {
    if (newCommercial.name.trim() && newCommercial.agencyId) {
      setCommercials([...commercials, { id: Date.now().toString(), ...newCommercial }]);
      setNewCommercial({ name: "", agencyId: "" });
      toast.success("Commercial ajouté avec succès");
    }
  };

  const handleAddProfile = () => {
    if (newProfile.trim()) {
      setProfiles([...profiles, { id: Date.now().toString(), name: newProfile }]);
      setNewProfile("");
      toast.success("Profil ajouté avec succès");
    }
  };

  const handleAddTechnology = () => {
    if (newTechnology.trim()) {
      setTechnologies([...technologies, { id: Date.now().toString(), name: newTechnology }]);
      setNewTechnology("");
      toast.success("Technologie ajoutée avec succès");
    }
  };

  const handleAddLocation = () => {
    if (newLocation.trim()) {
      setLocations([...locations, { id: Date.now().toString(), name: newLocation }]);
      setNewLocation("");
      toast.success("Lieu ajouté avec succès");
    }
  };

  const handleAddBudget = () => {
    if (newBudget.trim()) {
      setBudgets([...budgets, { id: Date.now().toString(), amount: newBudget }]);
      setNewBudget("");
      toast.success("Budget ajouté avec succès");
    }
  };

  const handleAddRemoteWork = () => {
    if (newRemoteWork.trim()) {
      setRemoteWorks([...remoteWorks, { id: Date.now().toString(), type: newRemoteWork }]);
      setNewRemoteWork("");
      toast.success("Rythme de télétravail ajouté avec succès");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Administration" 
        description="Gestion des données de référence"
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <Card>
            <CardHeader>
              <CardTitle>Profils</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Nouveau profil"
                  value={newProfile}
                  onChange={(e) => setNewProfile(e.target.value)}
                />
                <Button onClick={handleAddProfile}>Ajouter</Button>
              </div>
              <ul className="space-y-2">
                {profiles.map((profile) => (
                  <li key={profile.id} className="p-2 bg-gray-100 rounded">{profile.name}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Nouvelle technologie"
                  value={newTechnology}
                  onChange={(e) => setNewTechnology(e.target.value)}
                />
                <Button onClick={handleAddTechnology}>Ajouter</Button>
              </div>
              <ul className="space-y-2">
                {technologies.map((tech) => (
                  <li key={tech.id} className="p-2 bg-gray-100 rounded">{tech.name}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lieux</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Nouveau lieu"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                />
                <Button onClick={handleAddLocation}>Ajouter</Button>
              </div>
              <ul className="space-y-2">
                {locations.map((location) => (
                  <li key={location.id} className="p-2 bg-gray-100 rounded">{location.name}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Budgets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Nouveau budget"
                  type="number"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                />
                <Button onClick={handleAddBudget}>Ajouter</Button>
              </div>
              <ul className="space-y-2">
                {budgets.map((budget) => (
                  <li key={budget.id} className="p-2 bg-gray-100 rounded">{budget.amount}€</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rythmes de télétravail</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Nouveau rythme"
                  value={newRemoteWork}
                  onChange={(e) => setNewRemoteWork(e.target.value)}
                />
                <Button onClick={handleAddRemoteWork}>Ajouter</Button>
              </div>
              <ul className="space-y-2">
                {remoteWorks.map((rw) => (
                  <li key={rw.id} className="p-2 bg-gray-100 rounded">{rw.type}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Administration;