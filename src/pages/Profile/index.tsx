import React from "react";
import {
  Container,
  ContainerButtons,
  ContainerH1,
  ContainerLink,
  ContainerProfiles,
} from "./styles";
import { Avatar } from "../../components/Avatar";
import Button from "../../components/Button";
import { ReactComponent as Logo } from "../../assets/netflix.svg";
import { Link } from "react-router-dom";

interface ProfileProps {
  name: string;
  url: string;
}
const profile: ProfileProps[] = [
  {
    name: "Icaro",
    url: "https://occ-0-4376-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV8kcIgIUspmvTvH9o9cHGdZUPq_sWXpcV_bYss6oqxh313dgot5KMGnQGNKOkeEGZ9sxZHAcYDJtD_Kx6je2XPEKy35.png?r=06d",
  },
];

const Profile = () => {
  const [profiles, setProfiles] = React.useState<ProfileProps[]>([]);
  const loadProfiles = React.useCallback(() => {
    setProfiles(profile);
  }, []);

  React.useEffect(() => {
    loadProfiles();
  }, [loadProfiles]);
  return (
    <Container>
      <ContainerLink>
        <Link to="/dashboard">
          <Logo />
        </Link>
      </ContainerLink>

      <ContainerH1>
        <h1>Quem está assistindo?</h1>
      </ContainerH1>
      <ContainerProfiles>
        {profiles.map((profile, key) => (
          <Link to="/dashboard" key={key}>
            <Avatar url={profile.url} name={profile.name} />
          </Link>
        ))}
      </ContainerProfiles>
      <ContainerButtons>
        <Button>Gerenciar Perfis</Button>
      </ContainerButtons>
    </Container>
  );
};

export default Profile;
