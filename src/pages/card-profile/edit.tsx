import { PageLayout } from "@/components/layout";
import { CARD_PROFILES } from "@/constants";
import { CardProfileForm } from "@/domains/card-profile/profile-form";
import { useSearchParams } from "react-router";

export default function CardProfileEditPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  if (!id) return <p>No id found. Please try again later.</p>;

  const profile = CARD_PROFILES.find((profile) => profile.id === id);

  if (!profile)
    return <p>No Card profile found for this id. Please try again later.</p>;

  return (
    <PageLayout
      title="Edit Profile"
      subtitle="Make changes to the profile details and add card fee if neccessary."
    >
      <CardProfileForm defaultValues={profile} />
    </PageLayout>
  );
}
