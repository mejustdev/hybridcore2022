import { getTeams } from 'lib/api';
import PostBody from 'components/post-body';
import Icon from 'components/icon';

export default function Team({ teamBuilder, advisoryBuilder, headerTitle, advisorsTitle }) {
  return (
    <>
      <div>
        <div>{headerTitle}</div>
        {teamBuilder.map((person) => {
          const { _key, itemImage, header, subHeader } = person;
          return (
            <div key={_key}>
              <Icon icon={itemImage} />
              <h3>{header}</h3>
              <PostBody content={subHeader} />
            </div>
          );
        })}
      </div>
      <div>
        <div>{advisorsTitle}</div>
        {advisoryBuilder.map((person) => {
          const { _key, itemImage, header, subHeader } = person;
          return (
            <div key={_key}>
              <Icon icon={itemImage} />
              <h3>{header}</h3>
              <PostBody content={subHeader} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const teams = await getTeams(preview);
  const { teamBuilder, advisoryBuilder, headerTitle, advisorsTitle } = teams;
  return {
    props: {
      teamBuilder,
      advisoryBuilder,
      headerTitle,
      advisorsTitle,
      preview,
    },
    revalidate: 1,
  };
}
