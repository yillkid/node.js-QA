import fetch from 'node-fetch';
import Timer from './timer/index.js';


async function updateRepo() {
  try {
  const clientIdAndSecret = 'Jason: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';
  const base64 = Buffer
    .from(clientIdAndSecret)
    .toString('base64');
  const info = ['nkgokul'];
  const timer = new Timer();

  let results = [...info].map(async () => {
    const userDetails = await fetch('https://api.github.com/repos/' + 'jasonchen23' + '/' + 'cache-test', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/vnd.github.v3+json",
        "Accept-Language": "en_US",
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `Basic ${base64}`,
      },
      body: {
        "name":"hello",
      },
    });
    return userDetails.json();
  });

  results = await Promise.all(results);

  console.log('time elapsed(getUsers):', timer.count());
  console.log(results);
  return results;
  }
  catch(err) {
    message = err.message("error");
  }
}

(async () => {
  const result = await updateRepo();
  console.log('users =', result);
})();
