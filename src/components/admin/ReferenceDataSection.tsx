import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface ReferenceDataSectionProps {
  title: string;
  placeholder: string;
}

export function ReferenceDataSection({ title, placeholder }: ReferenceDataSectionProps) {
  const [items, setItems] = useState<{ id: string; name: string }[]>([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now().toString(), name: newItem }]);
      setNewItem("");
      toast.success(`${title} ajouté avec succès`);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder={placeholder}
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <Button onClick={handleAddItem}>Ajouter</Button>
        </div>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="p-2 bg-gray-100 rounded">{item.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}