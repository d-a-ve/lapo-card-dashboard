import { PageLayout } from "@/components/ layout";
import { CardProfileForm } from "@/domains/card-profile/profile-form";

export function CardProfileCreatePage() {
  return (
    <PageLayout
      title="Create Profile"
      subtitle="Fill in profile details and add card fee."
    >
      <CardProfileForm />
    </PageLayout>
  );
}
