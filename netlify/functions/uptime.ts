import { schedule } from '@netlify/functions';

const uptime = async () => {
  await fetch( 'https://api.github.com/repos/LeavesMC/Status/dispatches', {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': 'token ' + process.env.GH_PAT,
      'Content-Type': 'application/json',
      'User-Agent': 'LeavesMC',
    },
    body: JSON.stringify({
      'event_type': 'uptime',
    }),
  });

  return {
    statusCode: 200,
  };
};

export const handler = schedule('*/5 * * * *', uptime);