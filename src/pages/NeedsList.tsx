import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PageNavigation } from "@/components/PageNavigation";

type Need = {
  id: string;
  commercial: string;
  profile: string;
  startDate: Date;
  budget: string;
};

// Simulation de données - à remplacer par des vraies données plus tard
const mockNeeds: Need[] = [
  {
    id: "1",
    commercial: "Arthur",
    profile: "DevOps",
    startDate: new Date("2025-01-13"),
    budget: "650",
  },
];

const NeedsList = () => {
  const navigate = useNavigate();
  const [needs, setNeeds] = useState<Need[]>(mockNeeds);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Need | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  const sortData = (key: keyof Need) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedNeeds = [...needs].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setNeeds(sortedNeeds);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Suivi des Besoins"
        description="Liste des besoins clients en cours"
      />
      <main className="container mx-auto px-4 py-8">
        <PageNavigation />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead onClick={() => sortData("commercial")} className="cursor-pointer">
                Commercial <ArrowUpDown className="inline h-4 w-4" />
              </TableHead>
              <TableHead onClick={() => sortData("profile")} className="cursor-pointer">
                Profil recherché <ArrowUpDown className="inline h-4 w-4" />
              </TableHead>
              <TableHead onClick={() => sortData("startDate")} className="cursor-pointer">
                Date de début <ArrowUpDown className="inline h-4 w-4" />
              </TableHead>
              <TableHead onClick={() => sortData("budget")} className="cursor-pointer">
                Budget <ArrowUpDown className="inline h-4 w-4" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {needs.map((need) => (
              <TableRow
                key={need.id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => navigate(`/besoin/${need.id}`)}
              >
                <TableCell>{need.commercial}</TableCell>
                <TableCell>{need.profile}</TableCell>
                <TableCell>{need.startDate.toLocaleDateString()}</TableCell>
                <TableCell>{need.budget}€</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
};

export default NeedsList;
