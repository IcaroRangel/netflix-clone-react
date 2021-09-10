import React from 'react';
import { Container } from './styles';
import { Avatar } from '../../components/Avatar';

interface ProfileProps {
  name: string;
  url: string;
}
const Profile = () => {
  const profile: ProfileProps[] = [
    {
      name: 'Icaro',
      url: 'https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F131907667_672568953413283_4120551963415403269_n.jpg%3Fccb%3D11-4%26oh%3D91d09436eb9d8bbe837853f3d35ac3ce%26oe%3D613EE115&t=l&u=5527998486613%40c.us&i=1608610671&n=7ajpvhsG4t5vDZP7Ao7UMKQcUrS4%2BpWEAiQy3daw7S4%3D',
    },
    {
      name: 'Icaro',
      url: 'https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F131907667_672568953413283_4120551963415403269_n.jpg%3Fccb%3D11-4%26oh%3D91d09436eb9d8bbe837853f3d35ac3ce%26oe%3D613EE115&t=l&u=5527998486613%40c.us&i=1608610671&n=7ajpvhsG4t5vDZP7Ao7UMKQcUrS4%2BpWEAiQy3daw7S4%3D',
    },
    {
      name: 'Icaro',
      url: 'https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F131907667_672568953413283_4120551963415403269_n.jpg%3Fccb%3D11-4%26oh%3D91d09436eb9d8bbe837853f3d35ac3ce%26oe%3D613EE115&t=l&u=5527998486613%40c.us&i=1608610671&n=7ajpvhsG4t5vDZP7Ao7UMKQcUrS4%2BpWEAiQy3daw7S4%3D',
    },
  ];
  const [profiles, setProfiles] = React.useState<ProfileProps[]>([]);

  return (
    <Container>
      {profiles.map((profile) => (
        <Avatar key={profile.name} url={profile.url} name={profile.name} />
      ))}
    </Container>
  );
};

export default Profile;
