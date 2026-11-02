import { RequireRole } from "./components";
import { DonorDashboard } from "./DonorDashboard";
import { OrganizerDashboard } from "./OrganizerDashboard";
import { AdminDashboard } from "./AdminDashboard";

export function DonorPage() {
  return (
    <RequireRole role="donor">
      <DonorDashboard />
    </RequireRole>
  );
}
export function OrganizerPage() {
  return (
    <RequireRole role="organizer">
      <OrganizerDashboard />
    </RequireRole>
  );
}
export function AdminPage() {
  return (
    <RequireRole role="admin">
      <AdminDashboard />
    </RequireRole>
  );
}
