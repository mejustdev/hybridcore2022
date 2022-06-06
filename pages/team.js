import { getTeams } from 'lib/api';
import PostBody from 'components/post-body';
import Icon from 'components/icon';

export default function Team({ teamBuilder, advisoryBuilder }) {
  {
    console.log(teamBuilder);
  }
  return (
    <>
      <div>
        {teamBuilder.map((person) => {
          return (
            <div key={person._key}>
              <Icon icon={person?.itemImage} />
              <h3>{person.header}</h3>
              <PostBody content={person.subHeader} />
            </div>
          );
        })}
      </div>
      <div>
        {advisoryBuilder.map((person) => {
          return (
            <div key={person._key}>
              <Icon icon={person?.itemImage} />
              <h3>{person.header}</h3>
              <PostBody content={person.subHeader} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const teams = await getTeams(preview);
  console.log(teams);
  return {
    props: { teamBuilder: teams.teamBuilder, advisoryBuilder: teams.advisoryBuilder, preview },
    revalidate: 1,
  };
}
