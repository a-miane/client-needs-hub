import { useState } from "react";
import { useParams } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { NeedEditForm } from "@/components/NeedEditForm";

type Presentation = {
  id: string;
  date: Date;
  consultant: string;
  signed?: boolean;
  rejectionReason?: string;
};

const NeedDetail = () => {
  const { id } = useParams();
  const [cvSent, setCvSent] = useState<string>("");
  const [consultant, setConsultant] = useState<string>("");
  const [presentations, setPresentations] = useState<Presentation[]>([]);
  const [newPresentation, setNewPresentation] = useState({
    date: "",
    consultant: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Simulation de données - à remplacer par des vraies données plus tard
  const [needData, setNeedData] = useState({
    commercial: "Arthur",
    profile: "DevOps",
    description: "Mep CI/CD",
    startDate: new Date("2025-01-13"),
    budget: "650",
    decisionDate: new Date("2025-01-10"),
    competition: "CGI",
    location: "Paris",
    remoteWork: "hybrid",
    mainTechnology1: "Docker",
    mainTechnology2: "Kubernetes",
    secondaryTechnologies: "AWS, Terraform",
  });

  const handleAddPresentation = () => {
    if (newPresentation.date && newPresentation.consultant) {
      setPresentations([
        ...presentations,
        {
          id: Date.now().toString(),
          date: new Date(newPresentation.date),
          consultant: newPresentation.consultant,
        },
      ]);
      setNewPresentation({ date: "", consultant: "" });
      toast.success("Présentation client ajoutée");
    }
  };

  const handleSignature = (presentationId: string, signed: boolean, reason?: string) => {
    setPresentations(
      presentations.map((p) =>
        p.id === presentationId
          ? { ...p, signed, rejectionReason: reason }
          : p
      )
    );
    toast.success("Statut de la présentation mis à jour");
  };

  const handleSaveNeed = (updatedNeed: any) => {
    setNeedData(updatedNeed);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Détail du besoin"
        description="Gestion et suivi du besoin client"
      />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Inform

ations du besoin</CardTitle>
            <Button onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Annuler" : "Modifier besoin"}
            </Button>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <NeedEditForm
                need={needData}
                onSave={handleSaveNeed}
                onCancel={() => setIsEditing(false)}
              />
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Commercial</Label>
                    <Input value={needData.commercial} readOnly />
                  </div>
                  <div>
                    <Label>Profil</Label>
                    <Input value={needData.profile} readOnly />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea value={needData.description} readOnly />
                  </div>
                  <div>
                    <Label>Date de début</Label>
                    <Input
                      type="date"
                      value={needData.startDate.toISOString().split("T")[0]}
                      readOnly
                    />
                  </div>
                  <div>
                    <Label>Budget</Label>
                    <Input value={needData.budget} readOnly />
                  </div>
                  <div>
                    <Label>Date de décision</Label>
                    <Input
                      type="date"
                      value={needData.decisionDate.toISOString().split("T")[0]}
                      readOnly
                    />
                  </div>
                  <div>
                    <Label>Lieu</Label>
                    <Input value={needData.location} readOnly />
                  </div>
                  <div>
                    <Label>Télétravail</Label>
                    <Input value={needData.remoteWork} readOnly />
                  </div>
                  <div>
                    <Label>Technologie principale 1</Label>
                    <Input value={needData.mainTechnology1} readOnly />
                  </div>
                  <div>
                    <Label>Technologie principale 2</Label>
                    <Input value={needData.mainTechnology2} readOnly />
                  </div>
                  <div>
                    <Label>Technologies annexes</Label>
                    <Input value={needData.secondaryTechnologies} readOnly />
                  </div>
                  <div>
                    <Label>Concurrence</Label>
                    <Input value={needData.competition} readOnly />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suivi du besoin</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Envoi CV ?</Label>
                <Select value={cvSent} onValueChange={setCvSent}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oui">Oui</SelectItem>
                    <SelectItem value="non">Non</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Nom du consultant</Label>
                <Input
                  value={consultant}
                  onChange={(e) => setConsultant(e.target.value)}
                  placeholder="Nom du consultant"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Présentations client</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Date de présentation</Label>
                <Input
                  type="date"
                  value={newPresentation.date}
                  onChange={(e) =>
                    setNewPresentation({ ...newPresentation, date: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Nom du consultant</Label>
                <Input
                  value={newPresentation.consultant}
                  onChange={(e) =>
                    setNewPresentation({
                      ...newPresentation,
                      consultant: e.target.value,
                    })
                  }
                  placeholder="Nom du consultant"
                />
              </div>
            </div>
            <Button onClick={handleAddPresentation}>
              Ajouter une présentation client
            </Button>

            <div className="space-y-4">
              {presentations.map((presentation) => (
                <Card key={presentation.id}>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Date</Label>
                        <Input
                          type="date"
                          value={presentation.date.toISOString().split("T")[0]}
                          readOnly
                        />
                      </div>
                      <div>
                        <Label>Consultant</Label>
                        <Input value={presentation.consultant} readOnly />
                      </div>
                      {presentation.signed === undefined ? (
                        <div className="col-span-2 flex gap-4">
                          <Button
                            onClick={() => handleSignature(presentation.id, true)}
                            className="flex-1"
                          >
                            Signature : Oui
                          </Button>
                          <Button
                            onClick={() => {
                              const reason = prompt("Raison du refus :");
                              if (reason) {
                                handleSignature(presentation.id, false, reason);
                              }
                            }}
                            variant="outline"
                            className="flex-1"
                          >
                            Signature : Non
                          </Button>
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <Label>Statut</Label>
                          <Input
                            value={
                              presentation.signed
                                ? "Signé"
                                : `Non signé - ${presentation.rejectionReason}`
                            }
                            readOnly
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NeedDetail;