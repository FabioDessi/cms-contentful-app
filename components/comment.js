import { DiscussionEmbed } from 'disqus-react';

const DisqusComments = ({ post }) => {
  const disqusShortname = 'next-js-contentful-test';
  const disqusConfig = {
    url: `https://cms-contentful-p31u4g1rr-fdessi-fabiodessid.vercel.app/posts/${post.slug}`,
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
